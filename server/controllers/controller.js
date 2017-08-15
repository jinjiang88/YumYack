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
        Posts.find({},(err,posts)=>{
            if(err){
                console.log(err);
                res.Status(500).send(err);
            }else{
                console.log("heres all the posts");
                res.json(posts);
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
//   averaging: (request,response)=>{
//     Posts.find({}, (err,posts)=>{
//         if(err){
//           response.json(err)
//         }else{
//           console.log(posts)
//           response.json("poop")
          // var sum=0;
          // for(var i=0; i>posts.length; i++){
          //   for(var x=0; x>posts.score.length;x++){
          //     posts[i].score[x]
          //   }
          // }
//         }
//     })


// },
// grossest: (request,response)=>{
//  Posts.find({}).sort({average:-1}).limit(6).exec(
//    function(err, posts){
//      if(err){
//        console.log(err);
//        response.json(err);
//      }else{
//        console.log("something didnt go wrong");
//        response.json(posts);
//      }
//    }
//  )

// },



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
                return res.status(500).send(errors="something went wrong", errors);
            }else{
                console.log("this is the saved newPost", savedPost);
                return res.json(savedPost);
            }
        })
   },
  current: (req, res) => {
    if(!req.session.user){
      return res.status(401).send("Nice try")
    }else{
      return res.json(req.session.user);
    }
  },
  logout: (req, res)=> {
    req.session.destroy();
    res.redirect('/')
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




  getPosts: (req, res) => {
    Posts.find({}).populate('userscores').populate('user').exec( (err, posts)=>
    {
      if(err){
        console.log("something is up. im jin and its my fault")
        console.log(err);
        return res.sendStatus(500)
      }else{
        return res.json(posts);
      }
    })
  },

  getUser: (req, res)=>{
      Users.find({_id: req.body.id}).populate('friends').exec( (err, user)=>{
        if(err){
            res.status(500).send(err);
        }else{
            console.log(user);
            res.json(user);
        }
      })
  },

  addFriend: (req, res)=>{
      Users.findOne({_id:req.session.user._id}, (err,user)=>{
          if(err){
              res.status(500).send(err);
          }else{
              console.log(user);
              let check = false;
              for(let x=0;x<user.friends.length; x++){
                if(user.friends[x] == req.body.id){
                    check = true;
                }
              }
              if(check){
                  res.sendStatus(500);
              }else{
                  user.friends.push(req.body.id);
                  user.save((err, savedUser)=>{
                    if(err){
                        console.log(err);
                        res.sendStatus(500);
                    }else{
                        console.log(savedUser);
                        res.json(savedUser);
                    }
                  })
              }
          }
      })
  },


//gets the current user
  getCurrentUser: (req,res)=>{
        Users.findOne({_id:req.session.user._id}).populate('friends').exec( (err,user)=>{
            if(err){
                res.status(500).send("There was an error find user. User may not be logged in")
            }else{
                console.log("we got the current user")
                console.log(user)
                res.json(user);
            }
        })
  },

  //query to posts to find all of your friends posts
  getFriendsPosts: (req,res)=>{
    Posts.find({'user': {$in: req.session.user.friends}}).populate('user').exec((err,friendsPosts)=>{
        if(err){
            console.log("something went wrong with the query on getFriendsPosts controller")
            console.log(err);
            res.status(500).send(err);
        }else{
            console.log("this is all your friends posts")
            console.log(friendsPosts);
            res.json(friendsPosts);
        }
    })
  },



  rate: (req, res)=>{
      console.log("just got in rate")
    Posts.findOne({_id:req.body.id},(err,post)=>{
        if(err){
            console.log("there was an error in rating")
            res.sendStatus(500);
        }else{
            console.log("found the post")
            let index;
            let total=0;
            let average=0;
            let alreadyRated= false;
            for(let x=0;x<post.userScores.length;x++){
                if(post.userScores[x]==req.session.user._id){
                    alreadyRated = true;
                    index=x;
                }
            }
            if(alreadyRated==false){
                console.log("it has not been rated by the current user yet")
                post.userScores.push(req.session.user._id);
                post.score.push(req.body.rate)
            
                console.log("going to the loop now")
               for(let i=0;i<post.score.length;i++){
                    total+=post.score[i];
                }
                console.log(total)
                console.log(post.score.length)
                console.log(total/post.score.length)
                if(!post.score.length){
                    post.average=total/1;
                }else{
                    post.average=total/post.score.length;
                }
                post.save((err,savedPost)=>{
                    if(err){
                        console.log("something wrong with saving");
                        console.log(err);
                        res.sendStatus(500);
                    }else{
                        console.log("it successfully saved")
                        console.log(savedPost);
                        res.json(savedPost);
                    }
                })
                }else{
                console.log("it has been rated")
//------------------need to learn to update in an array----------------                
                Posts.update({_id:req.body.id}, {$inc:
                     { 
                     'score.$index': req.body.rate}});
                     console.log("everything should be copacetic")
                     res.json(post);
            }
        

          }
        })
      },















      loadPost: (req,res)=>{
          Posts.findOne({_id: req.body.id}).populate('user').exec( (err, posts)=>{
              if(err){
                  console.log("there has been an error in finding post", err);
                  res.status(500).send(err);
              }else{
                  console.log("posts has been successfully found", posts);
                  res.json(posts);
              }
          })
      },

      topPost:(req,res)=>{
      var mysort = { average: -1 };
      Posts.find({}).populate('user').sort(mysort).exec(function(err, result) {
          console.log("just before the erorr")
          
        if (err){
            console.log("there has been an error in top posts");
            console.log(err);
            res.status(500).send(err);
        } 
        console.log("this is your topposts")
        console.log(result);
        res.json(result);

      });
      }

}
//Instructions on how to find multiples id's in an array
// model.find({
//     '_id': { $in: [
//         mongoose.Types.ObjectId('4ed3ede8844f0f351100000c'),
//         mongoose.Types.ObjectId('4ed3f117a844e0471100000d'), 
//         mongoose.Types.ObjectId('4ed3f18132f50c491100000e')
//     ]}
// }, function(err, docs){
//      console.log(docs);
// });



