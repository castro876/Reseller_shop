const Mod = require('../Models/db_schema')
const Usrmod = require('../Models/db_user_schema')
const OrderMod = require('../Models/db_order_schema')
const paypal = require('paypal-rest-sdk')
const bcrypt = require('bcrypt')
const crypto = require('crypto');
const jwt = require('jsonwebtoken')
const sanitizeHtml = require('sanitize-html') //used to saneitize the user input
nodemailer = require('nodemailer');

//Get request user page endpoint => /add_user
const createUserPage = (req, res) => {
    res.render('create')
}

//Post request user page endpoint => /add_user
const createUser = async (req, res) => {
    try {
        const usrData = await Mod.create(req.body)
        res.json(usrData)
       console.log('Added to database')
      return
   } catch (error) {
       console.log(error)
   }
  
}


//Get request all user endpoint => /all_user
const allProduct = async (req, res) => {
    try {
        const productInfo = await Mod.find({})
        res.status(200).json(productInfo)
    } catch (error) {
        console.log('no product found')
    }
       
}

//Get request single user endpoint => /all_user
const singleUser = async (req, res) => {
    const usr = await Mod.findById(req.body.id)
    res.json({data:usr})
   
}

//Post request single user endpoint => /all_user
const checoutkUser = async (req, res) => {
    
    const usrExist = await Usrmod.findOne({ email: req.body.email });

        const usrName = sanitizeHtml(req.body.username) //used to saneitize the user input
        const usrEmail = sanitizeHtml(req.body.email)
        const usrPassword = sanitizeHtml(req.body.password)
        let errorMessage = '';
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const regexSymbol = /<|>|\s/g;
        
        
  if(usrExist) {
       const validPass = await bcrypt.compare(req.body.password, usrExist.password);
            if(validPass) {

                const secretKey = process.env.JWT_Secret
                
                const options = {
                    expiresIn: '1h' 
              }

              const payload = {
                id: usrExist._id
              }

              // Generate & send JWT token
              const token = jwt.sign(payload, secretKey, options)
              
              res.cookie('shopCookie', token, { maxAge: 3600000, httpOnly: false });
              res.json({ result: true });
                 }

         if (!validPass) {
            res.json({ result: false, err: "Invalid Credential" })
         }

       } else{
        res.json({ result: false, err: "Invalid Credential" });
     }

      }
    
   //Get request user page endpoint => /add_user
  const logUser = (req, res) => {
    res.render('login')
    }

    //Get request user page endpoint => /add_user
  const regUser = (req, res) => {
    res.render('register')
    }

     //Post request login page endpoint => /register
  const regPostUser = async (req, res) => {
    
    const usrExist = await Usrmod.findOne({ email: req.body.email });

    const usrName = sanitizeHtml(req.body.username.toLowerCase());
    const usrEmail = sanitizeHtml(req.body.email);
    const usrPassword = sanitizeHtml(req.body.password.toLowerCase());
    const usrconfirmPassword = sanitizeHtml(req.body.confirmpassword);
    const usrPhone = sanitizeHtml(req.body.phone);

    let errorMessage = '';
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const regexSymbol = /^[a-zA-Z]+$/;
    const regexNumber = /^[0-9]+$/;
    const regexPass = /^[a-zA-Z0-9]+$/;
    
    
if(usrExist) {
            errorMessage = "User already exist";
          res.render('register',{ msg: errorMessage });
          
   } else{
   
      if (!usrEmail)  {
        errorMessage = "Email field cannot be empty";
         res.render('register',{ msg: errorMessage });
      } 
      
      else if (!usrEmail.match(regex)) {
        errorMessage = "Invalid email";
         res.render('register',{ msg: errorMessage });
    }

      else if (!usrName || usrName.length < 4) {
            errorMessage = "Password must be at least 4 characters";
             res.render('register',{ msg: errorMessage });
        }

        else if (!usrName.match(regexSymbol)) {
            errorMessage = "Only alphethical characters are allow for username";
             res.render('register',{ msg: errorMessage });
        }
        
        else if (!usrconfirmPassword) {
            errorMessage = "Password field cannot be empty";
             res.render('register',{ msg: errorMessage });
        } 

        else if (!usrPassword || usrPassword.length <= 8) {
            errorMessage = "Password must be at least 8 characters";
             res.render('register',{ msg: errorMessage });
        }

        else if (!usrPassword.match(regexPass)) {
            errorMessage = "Password must be at least 8 alphanumeric characters";
             res.render('register',{ msg: errorMessage });
        }

        else if (!usrPhone || !usrPhone.match(/^[0-9]+$/)) {
            errorMessage = "Please enter a valid phone number";
             res.render('register',{ msg: errorMessage });
        }
        
        else if (usrPassword !== usrconfirmPassword) {
            errorMessage = "Password doesn't match";
             res.render('register',{ msg: errorMessage });
        } else{
             
           try {
             if (!usrExist) {
                //create hash password and store it into db
             const salt = await  bcrypt.genSalt();
             const hash = await bcrypt.hash(req.body.password, salt);
              
             const user_record = await Usrmod.create({
              username: req.body.username,
              email: req.body.email,
              phone: req.body.phone,
              password: hash
             })
             res.json({ result: 'Welcome | Profile' })
             console.log('saved to database')
          } 

           } catch (error) {
              console.log(error)
           }
     }
 }

    }

   //Post request login page endpoint => /login
   const logPostUser = async (req, res) => {
       
    const usrExist = await Usrmod.findOne({ email: req.body.email });

    const usrName = sanitizeHtml(req.body.username) //used to saneitize the user input
    const usrEmail = sanitizeHtml(req.body.email)
    const usrPassword = sanitizeHtml(req.body.password)
    let errorMessage = '';
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const regexSymbol = /<|>|\s/g;
    
    
if(usrExist) {
   const validPass = await bcrypt.compare(req.body.password, usrExist.password);
        if(validPass) {

            const secretKey = process.env.JWT_Secret
            
            const options = {
                expiresIn: '1h' 
          }

          const payload = {
            id: usrExist._id
          }

          // Generate & send JWT token
          const token = jwt.sign(payload, secretKey, options)
          
          res.cookie('logCookie', token, { maxAge: 3600000, httpOnly: false });
          res.render('profile', {usr: usrExist.username});
             }

     if (!validPass) {
        res.render('login',{ err: "Invalid Credential" })
     }

   } else{
     res.render('login',{ err: "Invalid Credential" })
 }
   }

   //Get request user page endpoint => /add_user
  const userProfile = async (req, res) => {
    const bod = 'M6R5VZ5ZBTFD4'
   const usrExist = await OrderMod.findOne({merchant_id: bod})
   
   if (usrExist) {
    const o_date = usrExist.order_date
    console.log(usrExist.merchant_id)
    res.render('profile',{msg: 'casino'})
   } 

   else if (!usrExist) {
    console.log('No order')     
   }
    }

    
   //Get request user page endpoint => /add_user
  const userProfilePost = async (req, res) => {
   res.json({data: "test"})
     
}


    //Get request user page endpoint => //forgot_password
  const userForgetPass = (req, res) => {
    res.render('forgot_password')
    }

  
// POST request to handle forgot password form submission
const userForgetPost = async (req, res) => {
  try {
    const sanitizedEmail = sanitizeHtml(req.body.email);
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!regex.test(sanitizedEmail)) {
      return res.render('forgot_password', { err: 'Invalid email format' });
    }

    const usrExist = await Usrmod.findOne({ email: sanitizedEmail });
    if (!usrExist) {
      return res.render('forgot_password', { err: "User doesn't exist" });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour expiry

    usrExist.resetPasswordToken = resetToken;
    usrExist.resetPasswordExpiry = resetTokenExpiry;
    await usrExist.save();

    const resetLink = `http://localhost:4001/reset_password/${resetToken}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: usrExist.email,
      subject: 'Password Reset Link',
      text: `Please click the link to reset your password: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.render('forgot_password', { err: 'Error sending email. Please try again later.' });
      } else {
        console.log('Email sent:', info.response);
        return res.render('forgot_password', { err: 'Reset link sent to your email: expires in 1 hour' });
      }
    });
  } catch (error) {
    console.error('Error in userForgetPost:', error);
    return res.render('forgot_password', { err: 'An error occurred. Please try again later.' });
  }
};

const userResetGet = async (req, res) => {
  const { token } = req.params;
  try {
    const usrExist = await Usrmod.findOne({
      resetPasswordToken: token,
      resetPasswordExpiry: { $gt: Date.now() },
    });

    if (!usrExist) {
      console.log('Token validation failed:', { token, now: Date.now() });
      return res.send('<h1>OPPS! 404 Page Cannot Be Found <a>Link expired</a></h1>');
    }

    return res.render('reset_password', { token });
  } catch (error) {
    console.error('Error in userResetGet:', error);
    return res.send('<h1>OPPS! 404 Page Cannot Be Found <a>Link expired</a></h1>');
  }
};


const userResetPost = async (req, res) => {
  const { token } = req.params;
  const password = sanitizeHtml(req.body.password);
  const confirmpassword = sanitizeHtml(req.body.confirmpassword);
  const regexPass = /^[a-zA-Z0-9]{8,}$/;

  if (!password || !confirmpassword) {
    return res.render('reset_password', { token, err: 'Password field cannot be empty' });
  }

  if (password !== confirmpassword) {
    return res.render('reset_password', { token, err: "Passwords don't match" });
  }

  if (!regexPass.test(password)) {
    return res.render('reset_password', { token, err: 'Password must be at least 8 alphanumeric characters' });
  }

  try {
    const usrExist = await Usrmod.findOne({
      resetPasswordToken: token,
      resetPasswordExpiry: { $gt: Date.now() },
    });

    if (!usrExist) {
      console.log('Token validation failed:', { token, now: Date.now() });
      return res.render('reset_password', { token, err: 'Link expired or invalid' });
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    usrExist.password = hash;
    usrExist.resetPasswordToken = undefined;
    usrExist.resetPasswordExpiry = undefined;
    await usrExist.save();

    return res.render('reset_password', { token, err: 'Password updated successfully' });
  } catch (error) {
    console.error('Error in userResetPost:', error);
    return res.render('reset_password', { token, err: 'An error occurred. Please try again later.' });
  }
};

    

   //Post request endpoint => /Email
   const userEmail = async (req, res) => {
    const { email, message, dete, cost, place } = req.body;
    console.log(email)
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Set email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Order Placed',
    html: `Order Details<br><br>
          Your order for ${dete}... at ${cost} was sucessfully placed and will arrive within 2-3 days at your ${place} ${message} location. Please contact our despatcher at <span style="color:blue;">1 (876) 808-9990<span/> to keep track of your order.`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ret: 'Email sent:'});
  });

      
 }   

    /* --------------------------------------Addmin | Order------------------------------------- */ 

     //Get request user page endpoint => //forgot_password
  const orderGet = (req, res) => {
    res.render('order')
    }


  //Get request user page endpoint => //forgot_password
  const orderPost = async (req, res) => {
        const usrExist = await OrderMod.create(sanitizeHtml(req.body))
        res.send('saved successfuly')
    }


module.exports = {createUserPage, createUser, allProduct, singleUser, checoutkUser, logUser, regUser, regPostUser, logPostUser, userProfile, userProfilePost, userForgetPass, userForgetPost, userResetGet, userResetPost, orderGet, orderPost, userEmail}      
