# Tasks

1. Initilize project ---> npm init --y 
2. Install initial dependencies ---> / nodemon, express, express-handlebars / 
3. Add resourses
4. Express Config
    * body parser ---> express.urlencoded({extended: false})
    * static path --- > express.static('public')
5. Express handlebars --->  app.engine('hbs', hbs.engine({extname: 'hbs'})); 
                            app.set('view engine', 'hbs');
                            Views -> layouts -> main.hbs
6. Add router
7. Add home controller
8. Add layout
9. add home view/template
10. Fix static assets and paths (css)
11. Add navigation