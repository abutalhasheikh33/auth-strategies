const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    passwordConfirm:{
        type:String,
        
        validator:{
            validate:function(val){
                return this.password == val;
            },
            message:"Password and Password Confirm should match"
        }
    }

})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }

    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
    this.passwordConfirm=undefined;
    next();

})

const User = mongoose.model('User',userSchema);

module.exports = User;