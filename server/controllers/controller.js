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
        Users.find({email: req.body.email, password: req.body.password}, (err, user)=>{
            if(err){
                res.status(500).send(err);
            }else{
                //check what user shows
                console.log(user);
                if(user==null){
                    res.json({user: "empty"});
                }else{
                    res.json({user: "found"});
                }
            }
        })
    },
    
   register: (req, res)=>{
       console.log(req.body.email, req.body.username, req.body.password);
        Users.find({email: req.body.email, username:req.body.username, password: req.body.password}, (err, user)=>{
            if(err){
                console.log('*********************************************', user)
                res.status(500).send(err);
            }else{
                console.log(user);
                if(user.username==undefined){
                    console.log('=======================================')
                    let newuser = new Users();
                    newuser.email = req.body.email;
                    newuser.username = req.body.username;
                    newuser.password = req.body.password;
                    newuser.fname = req.body.fname;
                    newuser.lname = req.body.lname;
                    newuser.save((err, newerUser)=>{
                        if(err){
                            console.log(err);
                            return res.status(300).send(err);
                        }else{
                            console.log(newerUser);
                            return res.json(newerUser);
                        }
                    })
                }else{
                    return res.status(402).send("this user already exists");
                }
            }
        })
   },

}