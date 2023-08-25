const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');               //used to hide sensitive environment variables like passswords 
const jwt = require('jsonwebtoken');            //importing jsonwebtoken pkg which is used for securely communicating json files over the internet
const cors = require('cors')
const User = require('./models/User');          //importing user model 

dotenv.config();                                // loads .env variables into process.env
mongoose.connect(process.env.MONGO_URL);        // connects to mongodb database at the url specified
jwtSecret = process.env.JWT_SECRET;             // load the secret key used to sign json web tokens when creating or verifying them

const app = express();                          //create an express js object

app.use(express.json());
app.use(cors({
    credentials: true,                      
    origin: process.env.CLIENT_URL,             // cors is a security feature, its used to set the urls allowed to communicate with server
}));

app.get('/test', (req,res) =>{
    res.json('test ok');                        // test snippet, by going to a url with the path /test, the code will handle HTTP GET requests by sending a json response back to client with the message test ok
});                                             // http://localhost:4040/test use this url to verify (port may be diff)

app.post('/register', async (req,res)=>{        // create a route handler for HTTP post requests to the path /register
    const {username,password} = req.body;       // checks the request body and assigns the username and passowrd variables accordingly. the variable name matches the value of the html input element
    
    try{
        const createdUser = await User.create({username,password});         // creates new entry in the mongodb collection with the input username and password. await is used to wait for the operation to complete before proceeding
        jwt.sign({userId:createdUser._id}, jwtSecret, {}, (err,token) => {      
            if(err) throw err;                                          // sign a jsonwebtoken token, first parm is the payload which is the userid property with the value createdUser.id
            res.cookie('token', token).status(201).json({
                _id: createdUser._id,
            });                                                          // jwt secret is the secret key used to sign the token
        });                                                             // callback function, if an error occurs it throws it,  
                                                                        // if not, create a cookie with the name token to store the token, this essentially stores the token on the client side browser. status 201 is the http code indicating a new resourse has been created. .json is the response 
    } catch(err) {
        if (err) throw err;
    }
    
});                                                                 

app.listen(4040);               // start the express application and listen to requests on given port

//i5Oh9d38uGuY8Ykx
//issam1831