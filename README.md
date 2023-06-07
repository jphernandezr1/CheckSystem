# CheckSystem

For practical purposes the services are published in cloud solution, for the fron in react is located in firebase at: https://split-my-bill-app.web.app and for the back is running in GAE(Google App Engine) at: https://split-my-bill-389102.uc.r.appspot.com/.

Finally I created a video to show the product I created https://www.loom.com/share/16134564121b40c093d10c64a1700fdf.

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

For testing the app from the source code you have to run npm run test and the test will run automatically.
To see the coverage of the test  npm test -- --coverage --watchAll or if you want to see the created report you should run open coverage/lcov-report/index.html if you are in windows just replace the open for start.

## Back in django

For the back, you must be sure of having installed Python 3.5 or later, and then you will execute the following commands:
In the command prompt execute pip install django, then you will navigate to the source folder CHECKSYSTEM and run the following commands in the command prompt or terminal:
cd check_system_back
pip install -r requirements.txt
Python manage.py runserver

That way, the back server will be running by default at the address localhost:8080.

To run and try the test, you must run from the source folder:
python manage.py test
or if you want to see the coverga results use the following commando from the source folder:
open htmlcov/index.html if you are in windows just replace the open for start.

For testing with postman and the real database, you must make the petitions in Postman. You can use the Postman collection which is located in the same folder called Check-System-Collection.postman_collection.json, you have to create the request for the GET and DELETE with the body indicating the Begin_date and Finish_date, as is indicated in the postman, the delete will only delete the non active tables.


