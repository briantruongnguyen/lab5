var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name;
    var desc = req.query.description;
    var imgURL = 'http://lorempixel.com/400/400/people';
    friend = (
		{
			"name": name,
			"description": desc,
			"imageURL": imgURL			
		}
    );
    console.log(friend);
    data.friends.push(friend);
 }