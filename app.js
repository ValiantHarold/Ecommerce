const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5000

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use((req, res, next) => {
    User.findById('6013336da2657f22f410543e')
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const corsOptions = {
    origin: "https://cse341ecommerce.herokuapp.com/",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://Samuel:Lt1YGw42ik6YTuhc@cluster0.epkze.mongodb.net/shop';


mongoose
    .connect(MONGODB_URL, options)
    .then(result => {
        User.findOne().then(user => {
            if(!user) {
                const user = new User({
                    name: 'Samuel',
                    email: 'fakeemail@real.com',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        });
        console.log('Connected to port 3000');
        app.listen(PORT);
    })
    .catch(err => console.log(err));


// pw:Lt1YGw42ik6YTuhc