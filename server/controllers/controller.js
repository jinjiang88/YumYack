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
        Users.findOne({email: req.body.email}, (err, user)=>{
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


   register: (request, response)=>{
       Users.findOne({email:request.body.email}, (err, user)=>{
         if(err){
           console.log("**********************")
           return response.json(err)
         }else{
           console.log("_______________________")
           if(user){
             console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^")
             return response.json("this email has been used")
           }else{
             var newuser = new Users();
             newuser.fname =request.body.fname;
             newuser.lname = request.body.lname;
             newuser.email = request.body.email;
             newuser.password = request.body.password;
             newuser.username = request.body.username;
             console.log("asdfasdfasdfasdfsfd")
             newuser.save(function(err,saveduser){
               if(err){
                 console.log("something went wrong saving new user")
                 response.status(500).send(err);
               }else{
                 console.log("something didnt go wrong")
                 request.session.user= saveduser;
                 response.json(saveduser)
               }
             })
           }
         }
       })

    
   register: (req, res)=>{
       console.log(req.body.email, req.body.username, req.body.password);
        Users.find({email: req.body.email, username:req.body.username, password: req.body.password}, (err, user)=>{
            if(err){
                console.log('*********************************************', user)
                res.status(500).send(err);
            }else{
                console.log(user);
                if(user.username==undefined){
                    console.log('=======================================', user)
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
   grossest:(request, response)=>{
    //  ProjectModel.find({projectName: 'name'}).sort({viewCount: -1}).limit(5).exec(
    // function(err, projects) {
    //     ...
    // }

    Posts.find({}).sort(average({average:-1}).limit(6).exec(
      function(err, posts){
        if(err){
          console.log(err);
          response.json(err);
        }else{
          console.log("something didnt go wrong");
          response.json(posts);
        }
      }
    )
  )
  },
  averaging: (request,response)=>{
    Posts.find({}, (err,posts)=>{
        if(err){
          response.json(err)
        }else{
          console.log(posts)
          // var sum=0;
          // for(var i=0; i>posts.length; i++){
          //   for(var x=0; x>posts.score.length;x++){
          //     posts[i].score[x]
          //   }
          // }
        }
    })
  }


}

   ratePost: (req, res)=>{
       console.log(req.body._id, req.body.rating);
       Posts.find()
   }




}

