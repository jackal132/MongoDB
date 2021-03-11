const mongoose = require('mongoose');

// mongodbtest 라는 db와 연결해줌 없으면 생성함
mongoose.connect('mongodb://localhost/mongodbtest', {
    useNewUrlParser : true,
    useCreateIndex : true
})
.then(() => {
    console.log('connected to mongodb');
})
.catch((e) => {
    console.log(e);
});

const UserSchema = new mongoose.Schema({
    name : String,
    age : Number,
    saveDate : {
        type: Date,
        default: Date.now
    }
});

const User =  mongoose.model("User", UserSchema);

const me = new User({
    name: 'Mike',
    age: 27
});

me.save()
.then(() => {
    console.log(me);
})
.catch((e) => {
    console.log(e);
})