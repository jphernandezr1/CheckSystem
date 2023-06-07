# CheckSystem

For practical purposes the services are published in cloud solution, for the fron in react is located in firebase at: https://split-my-bill-app.web.app and for the back is running in GAE(Google App Engine) at: 

## Front in React

At first, you must be sure to have node.js installed in your system and the npm package manager installed. Then, you have to navigate in a command prompt to your source folder called CHECKSYSTEM, and then you have to run to the following commands from the main folder:
cd check-system-front
npm install firebase
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@7 autoprefixer@9
npm install
npm run build
And finally, you will be able to deploy the React app with the following command:
npm start

You don't have to enable a backend because this app is connected to hasura.io, a graphQL application that allows you to transform, extract, and manage information in a database, in this case a database created in neon.tech, so you don't have to worry about other dependencies when running this web app.

For testing the app

## Back in django

For the back, you must be sure of having installed Python 3.5 or later, and then you will execute the following commands:
In pip install django, you will navigate to the source folder CHECKSYSTEM and run the following commands in the command prompt or terminal:
cd check_system_back
python manage.py migrate
Python manage.py runserver

That way, the back server will be running by default at the address localhost:8080.

To run and try the test, you must run

For testing with the real database, you must make the petitions in Postman. As the Postman collection is located in the same folder called postman.json, you have to create the request for the GET and DELETE with the body indicating the Begin_date and Finish_date.


