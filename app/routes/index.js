/*
* GET home page.
*/
exports.index = function(req, res){
    res.render('layout', { title: 'Welcome to "Starter Pack"' });
};