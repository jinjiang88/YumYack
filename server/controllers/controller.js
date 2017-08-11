var mongoose = require('mongoose');
var Users = mongoose.model("Users");
var Posts = mongoose.model("Posts");
var Images = mongoose.model("Images");
mongoose.promise = Promise

module.exports =  {

    getAllUsers: function(req, res) {
        Users.find({}, (err, users)=>{
            if(err){
                return res.status(500).send(err);
            }else{
                return res.json(users);
            }
        })
    },

    getAllPosts: (req, res) => {
        Posts.find({}, (err, posts)=>{
            if(err){
                return res.status(500).send(err);
            }else{
                return res.json(posts)
            }
        })
    },

    getAllImages: (req, res)=>{
        Images.find({}, (err, images)=>{
            if(err){
                return res.status(500).send(err);
            }else{
                return res.json(images);
            }
        })
    },


	login: (req, res) => {
        console.log(req.body.email,req.body.password)
        Users.findOne({email: req.body.email, password: req.body.password}, (err, user)=>{
            if(err){
                res.status(500).send(err);
            }else{
                //check what user shows
                console.log(user);
                if(user){
                      req.session.user=user;
                    console.log("user was found");
                    res.json({user: "found"});


                   
                }else{
                    console.log("user was not found");
                    res.sendStatus(500);
                }
            }
        })
    },
    
 register: (request, response)=>{
       Users.findOne({email:request.body.email}, (err, user)=>{
         if(err){
           console.log('**********************')
           return response.json(err)
         }else{
           console.log('_______________________')
           if(user){
             console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^')
             return response.json('this email has been used')
           }else{
             var newuser = new Users();
             newuser.fname =request.body.fname;
             newuser.lname = request.body.lname;
             newuser.email = request.body.email;
             newuser.password = request.body.password;
             newuser.username = request.body.username;
             console.log('asdfasdfasdfasdfsfd')
             newuser.save(function(err,saveduser){
               if(err){
                 console.log('something went wrong saving new user')
                 response.status(500).send(err);
               }else{
                 console.log('everything went right')
                 request.session.user= saveduser;
                 response.json(saveduser)
               }
             })
           }
         }
      })
     },

   createPost: (req, res) => {
       console.log(req.session.filename);
       console.log(req.body.name,req.body.description,req.body.origin,req.session.user);
        let newPost = new Posts();
        newPost.filename = req.session.filename;
        newPost.user = req.session.user._id;
        newPost.name = req.body.name;
        newPost.description = req.body.description;
        newPost.origin = req.body.origin;
        newPost.save((err, savedPost)=>{
            if(err){
                let errors = '';
                for(let i in err.errors){
                    errors += err.errors[i].message + ","
                }
                return res.status(500).send(errors="something went wrong");
            }else{
                console.log("this is the saved newPost", savedPost);
                return res.json(savedPost);
            }
        })
   },

   getAllFriends: (req,res)=> {
        Users.find({_id: req.session.user._id}).populate('friends').exec( (err, user)=>{
            if(err){
                console.log("************this is the error***************",err, "**********************************")
                res.status(500).send(err);
            }else{
                console.log(user);
                return res.json(user);
            }
        })


   },





}