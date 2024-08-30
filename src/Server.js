const express = require('express');
const mg = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/Demo');
const mySchema=new mg.Schema(
    {
    name:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,
    minlength:[3,"Min length must be 3"],
    maxlength:[7,"max length must be 7"],
    enum:["abc","xyz","def"]
    },
    }
    );
const User = new mongoose.model('User', mySchema);
app.post('/signup', async (req, res) => {
try {
const { username} = req.body;
const newUser = new User({ name});
await newUser.save();
res.send();
} catch (error) {
res.send(error);
}
});app.listen(3000);