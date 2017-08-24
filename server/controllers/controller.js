var mongoose = require('mongoose');
var Users = mongoose.model("Users");
var Posts = mongoose.model("Posts");
var Images = mongoose.model("Images");
var Notifys = mongoose.model("Notifys");
mongoose.promise = Promise
var yelp = require('yelp-fusion');
// var oauthSignature = require('oauth-signature');
// var n = require('nonce')();
// var request = require('request');




var salt = bcrypt.genSaltSync(10);





const clientId="";
const clientSecret='';



module.exports = {
//1
    getAllUsers: function(req, res) {
        Users.find({}, (err, users)=>{
            if(err){
                return res.status(500).send(err);
            }else{
                return res.json(users);
            }
        })
    },
//2
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

    yelpsearch:(request,response)=>{
        var keyword= request.body.posttitle.name;
        console.log("here is the resquest.body",request.body.posttitle.name, "###############################")
        const searchRequest={
            term:keyword,
            location:'los angeles',
        }
        yelp.accessToken(clientId, clientSecret)
        .then(data=>{
            const client = yelp.client(data.jsonBody.access_token);
            // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
            client.search(searchRequest).then(data=>{
                console.log(data.jsonBody)
                if(data.jsonBody.businesses){
                    return response.json(data.jsonBody.businesses)
                }else{
                    return response.json("no businesses near you")
                }
            })
            .catch(e=>{
                console.log(e)
            })
        })
      },

	login: (req, res) => {
        console.log(req.body.email,req.body.password)
        Users.findOne({email: req.body.email}, (err, user)=>{
            if(err){
                res.status(500).send(err);
            }else{
                //check what user shows
                console.log(user);
                if(user){
                    if(user.password == req.body.password){
                        req.session.user=user
                        return res.json(user)
                    }else{
                        var err=[]
                        return res.json({error:true,message:"password is incorrect"})
                    }
                }else{
                    var err=[]
                    return res.json({error:true, message:"email not found"})
                }
            }
        })
    },
    //4
 register: (request, response)=>{
       Users.findOne({email:request.body.email}, (err, user)=>{
         if(err){
           console.log('**********************')
           return response.status(500).send(err)
         }else{
           console.log('_______________________')
           if(user){
             console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^')
             return response.json({error:true, message:'this email has been used'})
           }else{
               Users.findOne({username:request.body.username},(err,thisuser)=>{
                   if(err){
                       return response.status(500).send(err)
                   }else{
                       if(thisuser){
                           return response.json({error:true, message:"this username has been used"})
                       }else{
                        var newuser = new Users();
                        console.log(request.body)
                        newuser.fname =request.body.fname;
                        newuser.lname = request.body.lname;
                        newuser.email = request.body.email;
                        newuser.password = request.body.password;
                        newuser.username = request.body.username;
                        newuser.city = request.body.city;
                        newuser.state = request.body.state;
                        console.log('asdfasdfasdfasdfsfd')
                        newuser.save(function(err,saveduser){
                          if(err){
                            console.log('something went wrong saving new user')
                            console.log(err,'&&&&&&&&&&&&&&&&&&')
                            return response.status(500).send(err);
                          }else{
                            console.log('everything went right')
                            request.session.user= saveduser;
                            response.json(saveduser)
                       }
                   })
               }

               }
             })
           }
        }

      })
     },
//5
   createPost: (req, res) => {
       console.log(req.session.filename);
       console.log(req.body.name,req.body.description,req.body.origin,req.session.user);
        let newPost = new Posts();
        if(req.session.filename){
            newPost.filename = req.session.filename;
        }
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
                req.session.filename=null;
                return res.json(savedPost);
            }
        })
<<<<<<< HEAD
    },

    //6
    current: (req, res) => {
        if(!req.session.user){
          return res.json({login:false})
        }else{
          return res.json({login:true,user:req.session.user});
        }
      },
    //7
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/')
    },
=======
   },

   //6
  current: (req, res) => {
    if(!req.session.user){
      return res.json({login:false})
    }else{
      return res.json({login:true,user:req.session.user});
    }
  },
//7
  logout: (req, res)=> {
    req.session.destroy();
    res.redirect('/')
  },
>>>>>>> 5425cc4677a6de7efa19f619f7c7956a5a96ae99

//8
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


//9
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
//10
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
//11
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
                         Users.findOne({_id:req.body.id}, (err,user)=>{
                          if(err){
                            res.status(500).send(err);
                          }else{
                          user.notification.push(req.session.user.username+" has subscribed to you.")
                          user.save();
                          var newnotify = new Notifys();
                          newnotify.notification = req.session.user.username+" has subscribed to you.";
                          newnotify.user = user;
                          newnotify.url = "view/"+req.session.user._id;
                          newnotify.postedUser = req.session.user;
                          newnotify.save();
                          res.json(savedUser);
                      }
                    })
                    }
                  })
              }
          }
      })
  },

//12
//gets the current user with populated friends
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
//13
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



    //14
    rate: (req, res) => {
        console.log(req.body.id, req.body.users_id)
        Posts.findOne({
            _id: req.body.id
        }, (err, post) => {
            if (err) {
                console.log("there was an error in rating")
                res.sendStatus(500);
            } else {
                console.log("found the post")
                let index;
                let total = 0;
                let average = 0;
                let alreadyRated = false;
                for (let x = 0; x < post.userScores.length; x++) {
                    if (post.userScores[x] == req.session.user._id) {
                        alreadyRated = true;
                        index = x;
                    }
                }
                if (alreadyRated == false) {
                    console.log("it has not been rated by the current user yet")
                    post.userScores.push(req.session.user._id);
                    post.score.push(req.body.rate)

                    console.log("going to the loop now")
                    for (let i = 0; i < post.score.length; i++) {
                        total += post.score[i];
                    }
                    console.log(total)
                    console.log(post.score.length)
                    console.log(total / post.score.length)
                    if (!post.score.length) {
                        post.average = total / 1;
                    } else {
                        post.average = total / post.score.length;
                    }
                    post.save((err, savedPost) => {
                        if (err) {
                            console.log("something wrong with saving");
                            console.log(err);
                            res.sendStatus(500);
                        } else {
                            Users.findOne({_id: req.body.users_id}, (err,foundUser)=>{
                                if(err){
                                    console.log("There has been an error");
                                    res.sendStatus(500);
                                }else{
                                    foundUser.notification.push(req.session.user.username, "has rated your post of", savedPost.name, "with", req.body.rate )
                                    console.log("it successfully saved");
                                    console.log(savedPost);
                                    res.json(savedPost);
                                }
                            })

                          
                        }
                    })
                } else {
                    console.log("it has been rated")
                    //------------------need to learn to update in an array----------------                
                    Posts.update({
                        _id: req.body.id
                    }, {
                        $inc: {
                            'score.$index': req.body.rate
                        }
                    });
                    console.log("everything should be copacetic")
                    res.json(post);

                }
            }

        })
    },
<<<<<<< HEAD
=======

//15
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


>>>>>>> 5425cc4677a6de7efa19f619f7c7956a5a96ae99
    //16
    topPost: (req, res) => {

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
                        Users.findOne({_id:savedPost.user}, (err,user)=>{
                              if(err){
                                res.status(500).send(err);
                              }else{
                              user.notification.push(req.session.user.username+" has rated your post.")
                              user.save();
                              var newnotify = new Notifys();
                              newnotify.notification = req.session.user.username+" has rated your post.";
                              newnotify.user = user;
                              newnotify.url = "postview/"+post._id;
                              newnotify.postedUser = req.session.user;
                              newnotify.save();
                              console.log(newnotify +"-----------------");
                          }
                        })
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


        

          },
      
//15
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
//16

      getNumberOfStars: (req, res)=>{
          console.log("you just got in getNumberOfStars. No query yet")
          Posts.find({user: req.session.user._id}, (err, posts)=>{
              if(err){
                  console.log("theres been an error for the query of posts in getNumberOf Stars", err);
                  res.status(500).send(err)
              }else{
                  if(posts){
                      console.log("here are the posts for the stars")
                      console.log(posts)
                    if(posts[0]){
                        let five = 0;
                        let four = 0;
                        let three = 0;
                        let two = 0;
                        let one = 0;
                        let total = 0;
                      
                        // for(let i = 0; i<posts.score.length; i++){
                        //     switch(posts.score[i]) {
                        //         case 1: one++; total+=1;
                        //         break;
                        //         case 2: two++; total+=2;
                        //         break;
                        //         case 3: three++; total+=3;
                        //         break;
                        //         case 4: four++; total+=4;
                        //         break;
                        //         case five: five++; total+=5;
                        //         break;
                        //     }
                        for(let x = 0; x<posts.length; x++){
                              for(let i = 0; i<posts[x].score.length; i++){
                                switch(posts[x].score[i]) {
                                    case .5: console.log("someone put .5 on picture");
                                    break;
                                    case 1: one++; total++;
                                    break;
                                    case 1.5: one++; total++;
                                    break;
                                    case 2: two++; total++;
                                    break;
                                    case 2.5: two++; total++;
                                    break;
                                    case 3: three++; total++;
                                    break;
                                    case 3.5: three++; total++;
                                    break;
                                    case 4: four++; total++;
                                    break;
                                    case 4.5: four++; total++;
                                    break;
                                    case 5: five++; total++;
                                    break;
                                }
                        }
                        }
                        console.log("here are your number of stars");
                        console.log(five,four,three,two,one + " total:", total);
                        res.json({"one":one, "two":two, "three":three, "four": four, "five":five, "total":total})




                    }else{
                        console.log("there was no posts[0].score")
                        res.status(500).send("there are no posts yet")
                    }



                  }
              }
          })
        },


  findbyusername: (req, res) => {
        Users.findOne({username: req.body.username}, (err, someUser)=>{
            if(err){
                console.log("something is wrong in the controller with findbyuser")
                res.status(500).send(err);
            }else if(someUser){
                    res.json(someUser);
                   
                }
            else{
                console.log("user was not found");
                res.sendStatus(500);
                }
        })
    },
  getnameusers: (req, res) => {
        console.log("in the controller with getnameuser")
        Users.find({fname: req.body.fname, lname: req.body.lname}, (err, nameusers)=>{
            if(err){
                console.log("something is wrong in the controller with findbyuser")
                res.status(500).send(err);
            }else if(nameusers){
                    res.json(nameusers);
                   
                }
            else{
                console.log("No users were found.");
                res.sendStatus(500);
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
      },
    createProfilePic: (req, res) => {
       console.log(req.session.filename);
       console.log(req.session.user);
       Users.update({_id: req.session.user._id}, {filename: req.session.filename}, (err, data)=> {
      if(err){
        console.log(err);
        return res.sendStatus(500)
      }else{
        console.log(data);
        return res.json(data); 
      }
    })  
  },

  topcontrib:(request,response)=>{
      Users.find({}).sort({yumyackscore:-1}).limit(6)
      .exec(function(err,users){
          if(err){
              console.log(err)
              return response.json(err);
          }else{
              console.log("something didnt go wrong")
              return response.json(users)
          }
      })
  },
<<<<<<< HEAD
  getuserfriends:(request,response)=>{
    Users.findOne({id:request.body._id}).populate('friends').exec((err,usersfriends)=>{
        if(err){
            return response.json({error:true});
        }else{
            console.log(usersfriends,"KKKKKKKKKKKKKKKKKKKKKKKKK")
            return response.json(usersfriends);
        }
    })
=======
  getNotifications: (req, res)=> {
    Notifys.find({user:req.session.user}).populate('postedUser').exec( function(err, notifys)
    {
      if (err){
            console.log("there has been an error in top posts");
            console.log(err);
            res.status(500).send(err);
        }else{
          res.json(notifys);
        }
      })
>>>>>>> 5425cc4677a6de7efa19f619f7c7956a5a96ae99
  },
}
///check yourself before you reck yourself
