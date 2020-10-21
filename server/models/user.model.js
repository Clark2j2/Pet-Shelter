const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {type: String,
		required: [true, "Name is required"],
		minlength: [3, "More than 3 characters needed"]
	},
	type: {type: String,
		required: [true, "Type is required"],
		minlength: [3, "More than 3 characters needed"]
	},
	description: {type: String,
		required: [true, "Description is required"],
		minlength: [3, "More than 3 characters needed"]
	},
	skill1: String,
	skill2: String,
	skill3: String,
}, {timestamps:true});

const User = mongoose.model("User", UserSchema);

module.exports = User;