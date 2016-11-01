// Our server will need two main things to get started: a connection to our database, and a listen function that gets our server up and running and listening on a localhost port.

// //================= CONNECTING TO A DATABASE =================
// const mongoose = require('mongoose');
// //Whatever you put after 'localhost/' will automatically be the name of your database. In this case, the database will be named 'test'. You should name your databases based on the project you're working on
// mongoose.connect('mongodb://localhost/test');


// //================= GETTING STARTED WITH EXPRESS =================
// const express = require('express');
// //Initialize our express app and save it as `app` variable
// const app = express();

// app.listen(4444, () => {
//   console.log('App listening on port 4444');
// });


//================= PUTTING DB AND SERVER TOGETHER =================
// We will need to make sure our database has connected before we start our server. There are multiple ways to do this, but one simple way is to use an on listener method to start the server in a callback after the database connection is open.

// It's important to note that we'll eventually need to require in our Mongoose models here BEFORE we create our express server, in order for our database to run correctly:

const express = require('express'); // Getting started with Express
const app = express(); //Initialize express app & save it as `app` variable
const mongoose = require('mongoose'); // Connecting to a database

// (simply running posts-model.js; not importing/exporting)
const postModel = require("./posts/posts-model.js"); 
// require("./posts/posts-model.js"); 
const Post = mongoose.model("Post"); // create and save the Post model


//Connect to database and start server:
//(whatever we put after 'localhost/' will automatically be the name of database. You should name your databases based on the project you're working on)
mongoose.connect('mongodb://localhost/blog-app');

//Store connection as variable
const db = mongoose.connection;

// Basic route testing:
app.get('/', (req,res) => {
	res.send("app.get:/: res.send: Welcome To Our Blog");
})

// app.get('/posts', (req,res) => {
// 	res.send("app.get:/posts: This is a posts");
// })

//Creating a test post everytime the server refreshes
Post.create(
	{title: "test post 1"},
	(err, data) => {
		if (err) console.log('Error with database!');
		else console.log('Post created!');
	}
)

// Find all posts and log to console
Post.find( {}, (err, data) => {
	console.log('Database data found!', data);
})

//Find all posts that match specific title
Post.find({title: 'find this title'}, (err, data) => {
  console.log('Database data found!', data);
})

app.get('/posts', (req,res) => {
	Post.find( {}, (err, data) => {
		res.send(data);
	})	
})


//Start the server after successful database connection:
db.on('open', () => {
	console.log('db connection opened!');
  
  app.listen(4444, () => {
    console.log('App listening on port 4444');

  });

});

db.on("error", () => {
	console.log('error in db connection!');
})