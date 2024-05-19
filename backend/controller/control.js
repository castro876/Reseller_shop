const Mod = require('../Models/db_schema')
const Usrmod = require('../Models/db_user_schema')
const OrderMod = require('../Models/db_order_schema')
const paypal = require('paypal-rest-sdk')
const bcrypt = require('bcrypt')
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
  const userforgetPass = (req, res) => {
    res.render('forgot_password')
    }


     //Get request user page endpoint => //forgot_password
  const userforgetPost = async (req, res) => {
    
    const usrExist = await Usrmod.findOne({ email: req.body.email });

    const usrEmail = sanitizeHtml(req.body.email)
    let errorMessage = '';
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const regexSymbol = /<|>|\s/g;
    
    
    if(usrExist) {
      
            const secretKey = process.env.JWT_Secret
            
            const options = {
                expiresIn: '5m' 
          }

          const payload = {
            id: usrExist._id,
            email: usrExist.email
          }

          // Generate & send JWT token
          const token = jwt.sign(payload, secretKey, options)
          const link = `http://localhost:4001/reset_password/${usrExist._id}/${token}`


          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'caribwebcare@gmail.com',
              pass: 'dwnemjmlmxwojlui'
            }
          });
          
          var mailOptions = {
            from: 'caribwebcare@gmail.com',
            to: usrExist.email,
            subject: 'Reply: Password-Reset Link',
            text: `Please click the link to reset your password: ${link}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          res.render('forgot_password',{ err: "Reset link sent to your email: expires in 5 minutes" })

   } else{
     res.render('forgot_password',{ err: "User doesn't exist" })
 }

    }


  //Get request user page endpoint => //forgot_password
   const userresetGet = async (req, res) => {
  const {id, token} = req.params
  const usrExist = await Usrmod.findOne({ id: req.body.id });
  if(usrExist) {
    const msg = ''
    const secretKey = process.env.JWT_Secret
       try {
          const verify = jwt.verify(token, secretKey)
          res.render('reset_password',{ err: msg })
        } catch (error) {
        res.send('<h1>OPPS! 404 Page Cannot Be Found <a>Link expired</h1>')
       }
  }
    
   }

 
  //Get request user page endpoint => //forgot_password
  const userresetPost = async (req, res) => {
    const regexPass = /^[a-zA-Z0-9]+$/;
    const {id, token} = req.params
    const confirmpassword = sanitizeHtml(req.body.confirmpassword)
    const password = sanitizeHtml(req.body.password)
    const usrExist = await Usrmod.findOne({ id: req.body.id });

    if (password !== confirmpassword) {
      errorMsg = "Password doesn't match";
         res.render('reset_password',{err: errorMsg})
  }
  
  else if (!password.match(regexPass)) {
    errorMsg = "Password must be at least 8 alphanumeric characters";
     res.render('reset_password',{ err: errorMsg });
}
     
else if (!confirmpassword || !password) {
  errorMsg = "Password field cannot be empty";
   res.render('reset_password',{ err: errorMsg });
}

    if(usrExist) {
      const errorMsg = ''
         try {
               //create hash password before it's edited
         const salt = await bcrypt.genSalt() 
         const hash = await bcrypt.hash(req.body.password, salt)

        const usrData = await Usrmod.findByIdAndUpdate(usrExist._id, {
            password: hash
        })
           const successMsg = "Password updated successfully";
           res.render('reset_password',{ err: successMsg });
             
          } catch (error) {
          console.log(error)
         }
    }
      
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


module.exports = {createUserPage, createUser, allProduct, singleUser, checoutkUser, logUser, regUser, regPostUser, logPostUser, userProfile, userProfilePost, userforgetPass, userforgetPost, userresetGet, userresetPost, orderGet, orderPost}      
