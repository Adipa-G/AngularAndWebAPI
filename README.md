# Introduction
Set of seed applications using different SPA frameworks and Web Api. Each spa is designed to work with backend. 
Batch scripts are provided to build/unit test and start each combination.

SPA applications consists UI for,
* Signup
* Login
* User management (listing / deleting)
* Log viewer
* Request/Response viewer

Technical details,
* Authentication
* CSRF
* Logging
* UI unit tests
* Backend unit tests
* Integration tests for repositories, using SQLLite databases 

### ui/React
* React 16.0
* Bootstrap
* Sass
* Jest

### ui/Angular

* Angular 7.0 
* Angular cli
* Bootstrap for UI
* Sass
* Karma

### ui/AngularJs

* AngularJs 1.5 
* Angular cli
* Bootstrap for UI
* Sass
* Karma

### backend/netcore
* dotnetcore 2.1 used to implement API with built in DI
* IdentityServer 4 used to provide OAuth tokens
* NHibernate as ORM

### backend/owin
* .Net 4.5.1 
* Ninject as DI
* NHibernate as ORM
* OWin OAuth

### backend/owin-identityserver3
* .Net 4.5.1 
* Ninject as DI
* NHibernate as ORM
* IdentityServer3 Auth

### Running locally with batch file
* Checkout the project
* Update config (create database with scripts (backend/<project>/SQL) / Set Paths in .bat files where absolute paths are used)
* Run backend-<backend>-ui-<ui>.bat file
* Visit the url (http://localhost:5000/)
### Running locally in Docker (only with .netcore backend)
* Install docker and enable Kubernetes
* Checkout the project
* Build desired docker container
    * Angularjs - `docker build -f dockerfile-backend-netcore-ui-angularjs . --tag angularjs-app`
    * Angular - `docker build -f dockerfile-backend-netcore-ui-angular . --tag angular-app`
    * React - `docker build -f dockerfile-backend-netcore-ui-react . --tag react-app`
* Deploy the desired Kubernetes config
	* Set the `Database__ConnectionString` value of the file (make sure to use the correct ip address)
	* Deploy the file with `kubectl apply -f .\kubernetes-backend-netcore-ui-<app type>.yaml`
	* If you want to do a rolling update, use command ` kubectl --namespace=<app type> rolling-update <app type>-app-replication-set --image=<app type>-app:latest --i
mage-pull-policy=Never`
	* In above commands `<app type>` to be replaced with `react`,`angular` or `angularjs`	

### Screenshots (there are some differences in Angular2 application)
#### Home
![Alt text](readme_images/home.png?raw=true "Home")
#### Register
![Alt text](readme_images/register.png?raw=true "Register")
#### Login
![Alt text](readme_images/login.png?raw=true "Login")
#### Users
![Alt text](readme_images/users.png?raw=true "Users")
#### System Logs
![Alt text](readme_images/systemlog.png?raw=true "System Logs")
#### Http Logs
![Alt text](readme_images/httplog.png?raw=true "Http Logs")

### License
GNU GPL V3
