import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    role: {type:String, enum:["user","admin","therapist"], default:"user"}
    }, {timestamps:true});

    const User = mongoose.model("User", userSchema);
    export default User;
// In the above snippet, we have defined a user schema with the following fields:
// name, email, password, role. The role field is an enum field with three possible values: user, therapist, admin. The default value for the role field is user. We have also set the timestamps option to true, which will automatically add createdAt and updatedAt fields to the document.
// We have created a User model using the user schema and exported it as the default export.