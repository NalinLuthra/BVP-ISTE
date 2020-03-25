// Library required
const express = require('express');
const path = require('path');
const mongo = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'upload')
//   },

//   filename: (req, file, callback) => {
//     callback(null, `Profile_${file.originalname}`)
//   }
// })

const upload = multer({dest: 'upload/'})

var db = mongo.connect("mongodb://localhost:27017/iste",(err, response) => {
    if(err){
        console.log( "Error ",err);
    }
    else{
        console.log("Connected to " , db, response);
    }
})

// console.log(db)

const app = express();



// Body Parser
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


var Schema = mongo.Schema;

var TeamUser = new Schema ({
    name: {type: String},
    email: {type: String},
    quote: {type: String},
    position: {type: String},
    dob: {type: String},
    phone: {type: String},
    rollNumber: {type: String},
    facebookId: {type: String},
    instagramId: {type: String},
    linkedinId: {type: String},
    twitterId: {type: String},
    memberImageD: {type: String}
    })

// var User = new Schema({
//   id: {type: number},
//   username: {type: string},
//   password: {type: string},
//   firstname: {type: string},
//   lastname: {type: string},
//   token: {type: string}
// })

var model = mongo.model('team', TeamUser, 'team');
// var User_model = mongo.model('user', User);

module.exports.register = (req,res,next) => {
  var user = new User();
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.id = req.body.id;
  user.password = req.body.password;
  user.username = req.body.username;

  user.save((err,doc) => {
    if(!err)
      res.send(doc);
    else {
      console.log(err);
    }
  })
}

app.post("/addTeam",function(req,res){
    console.log(req);
    // const file = req.file;
    // console.log(file.filename)
    var mod = new model({
    _id : new mongo.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    quote: req.body.quote,
    position: req.body.position,
    dob: req.body.dob,
    phone: req.body.phone,
    rollNumber:  req.body.rollNumber,
    facebookId: req.body.facebookId,
    instagramId: req.body.instagramId,
    linkedinId: req.body.linkedinId,
    twitterId: req.body.twitterId,
    memberImageD: req.body.memberImage
  });
        mod.save(function(err,data){
            console.log(data)
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Record has been Inserted..!!"});
            }
        });
    })

app.post("/imageUpload",upload.single('memberImage'),function(req,res){
  const file = req.file;
  console.log(file.filename);

  res.send(file);

})


app.get("/getTeam",function(req,res){
    model.find({},function(err,data){
                if(err){
                    res.send(err);
                }
                else{
                    res.send(data);
                    }
            });
    })
// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/yearbook'));
app.use(express.static(__dirname + '/'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/'));
});


// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080, );

app.listen(8080, function(){
    console.log('Server is listening on port 8080')
});
