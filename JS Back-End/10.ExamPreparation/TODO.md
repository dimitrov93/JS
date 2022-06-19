# Tasks


## Initial setup
1. Initilize project ---> npm init --y 
2. Install initial dependencies ---> / nodemon, express, express-handlebars, bcrypt, jsonwebtoken, mongoose, cookie-parser / 
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


## Database setup
1. install mongoose
2. configure mongoose
3. create User Model

## Authentication
1. Add auth controller
    * add controller to routes
2. Add login and register pages
    * modify hrefs in navigations
    * modify names in forms
3. Add post login and register actions
4. Create user with register
5. Hash password
6. Login action
7. Login service method / find user, validate password / 
8. Generate gwt token
    * add secret to env
9. LogOut

## Notifications
1. Add notification element to layout

## Error handling
1. Add error mapper

## Others
1. Auth middleware
    * use httpOnlyCookie
2. Navigation links
3. Route guards
4. 404 page
5. user validation
6. global error handling
    * multiline errorrs