/*
* GET users listing
*/
exports.info = function(req, res){
    res.render('layout', { title: 'Hello visitor!' });
};