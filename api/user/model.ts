import { Schema, model } from 'mongoose'
import bcrypt from "bcrypt"

const UserSchema = new Schema ({
    first_name: {
        type : String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address.'],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["admin", "comprador", "vendedor"],
        default: "comprador"
    },
    avatar: {
        type: String,
        default: ""
    }
}, 

{
    versionKey: false
})
UserSchema.pre("save", async function (next){
    try{
        const hashedPassword = await bcrypt.hash(this.password??"", 10)
        this.password = hashedPassword
        next()
    }catch(error){
        console.log(error)
    }
})


const User = model('User', UserSchema)

export default User