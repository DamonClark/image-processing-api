# image-processing-api

You can run `npm run test` to build and execute the unit tests for this project

`npm run start` will start the server


You can reach the localhost:3000/api/images end point from the browser after starting the server.


To get an image processed and resized to your specified height and width you first must add the image into `image-processing-api/assetts/full` directory.

Then you can pass the api/images endpoint to the browser with the following parameters:

http://localhost:3000/api/images?filename=encenadaport&width=200&height=200

Afterward you should see the resized image in the browser and a resized version of the image saved in `image-processing-api/assetts/thumb` directory
