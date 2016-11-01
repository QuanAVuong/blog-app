// Mongoose Schema Docs Schemas are like blueprints for our documents. They show us exactly what type of data to expect. Here's an example of a simple blog post schema:

// What other information do we need in our blog posts? What about date? Author? Tags? Can you think of anything else? If so, you should add it to your schema from the start.
//BLOG POSTS:
//Title of blog posts
//Date posted
//Blog post text
//Categories/tags
//Images for post
//Comments on posts
//Author of blog posts
//archive: Boolean

//AUTHORS:
//name
//email
//password
//bio
//articles

//FOLLOWERS/READERS:
//Users
//name
//comments
//email
//password
//date joined
//age

const mongoose = require('mongoose');
const blogPostSchema = mongoose.Schema({
  title: {type: String, require: "true"},
  text: String
});


// //================= MODELS =================
// Mongoose Models Docs Models let us actually interact with our database. They basically take our schemas and register them with our Mongo database, which gives us functionality to use methods like find and create to search through and update our database.


// Attaching the blogPostSchema named "Post" to mongoose.model
// First argument: model's name
// Second argument: schema
// //Make sure you require in mongoose. You typically want to do this in the same file as your schema
mongoose.model("Post", blogPostSchema)