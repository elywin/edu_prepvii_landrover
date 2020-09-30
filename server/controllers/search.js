const Posts = require("../models/schema/posts");

module.exports.search = async (req, res) => {
    await Posts.createIndexes();
    const search_term = req.body.search;
    const results = await Posts.find({$text: {$search: search_term}},
        {score: {$meta: "textScore"}}
        ).sort({score: {$meta: "textScore"}});
    if(results.length<1) {return res.json({message:'No results found'});}
    else{
        res.json({results}); 
    }
}