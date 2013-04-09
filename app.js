var
// load module dependencies
      express     = require('express')
    , routes    = require('./routes')
    , user      = require('./routes/user')
    , content   = require('./routes/content')
    , path      = require('path')

// assign variables
    , app = express()
;

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
};

// routes
app.get('/', routes.index);
app.get('/user', user.info);
app.get('/page/about', content.about);

// application start
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
