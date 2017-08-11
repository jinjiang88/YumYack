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
        Posts.find({user: req.session.user._id}, (err, posts)=>{
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

  //  grossest:(request, response)=>{
  //   //  ProjectModel.find({projectName: 'name'}).sort({viewCount: -1}).limit(5).exec(
  //   // function(err, projects) {
  //   //     ...
  //   },

  //   Posts.find({}).sort(average({average:-1}).limit(6).exec(
  //     function(err, posts){
  //       if(err){
  //         console.log(err);
  //         response.json(err);
  //       }else{
  //         console.log("something didnt go wrong");
  //         response.json(posts);
  //       }
  //     }
  //   )
  // )
  // },
//   averaging: (request,response)=>{
//     Posts.find({}, (err,posts)=>{
//         if(err){
//           response.json(err)
//         }else{
//           console.log(posts)
//           // var sum=0;
//           // for(var i=0; i>posts.length; i++){
//           //   for(var x=0; x>posts.score.length;x++){
//           //     posts[i].score[x]
//           //   }
//           // }
//         }
//     })
  
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
        // Users.findOne({_id: req.session.user._id},(err, user)=>{ 
        //       if(err){
        //         console.log(err);
        //         return res.sendStatus(500);
        //       }else{
        //         user.posts++
        //         user.save((err, savedPosts)=>{
        //               if(err){
        //                 console.log(err);
        //                 return;
        //               }
        //               return res.json(savedPosts);
        //         })
        //       }
        //     })
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



}