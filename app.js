const express = require('express'),
    app = express(),
    ejs = require('ejs'),
    port = process.env.PORT || 3000,
    c = console.log;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// index route (when a user login - get their info from the db for display)
app.get('/',(req,res)=>{
    let user = {
        name: 'Sabelo',
        img: 'https://t4.ftcdn.net/jpg/01/50/44/75/500_F_150447578_wEWVGCNzLoz1Dnxhs1bXuNmAy8XPsgcf.jpg'
    }
    res.render('index',{user: user})

}); //localhost:3000/

app.listen(port,(err)=>{
    if(!err){
        c('listening on port',port)
    }else{
        c(err);
    }
})