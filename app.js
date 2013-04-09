var
// load module dependencies
      express     = require('express')
    , routes    = require('./routes')
    , user      = require('./routes/user')
    , content   = require('./routes/content')
    , error    = require('./error')
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

// muscle middleware
app.use(error.err404);
app.use(error.err500);

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
};

// routes
app.get('/', routes.index);
app.get('/user', user.info);
app.get('/page/about', content.about);

app.get('/403', error.test403);
app.get('/404', error.test404);
app.get('/500', error.test500);

// application start
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
