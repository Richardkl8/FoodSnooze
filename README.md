# FoodSnooze
In this readme the following be explained:
* How to run the project
* Architectural choices
* How to become production ready

If there any more questions, I will be more then happy to answer them.

 
## How to run the project

### Install dependencies
First step is to install the dependencies. 
Move into the root of the project folder and run the installation command: 
```
npm install
```

### Run the project
To run the application locally using the API provided in the documentation of the assignment:
```
npm run dev
```

### Run with mocked API
Sometimes you want to locally test the application without having to use the real API. For this project [Mocky](https://www.mocky.io/) is being used the mock the API responses. 
```
npm run mock
```

### Run the unit tests
To run all the unit tests:
```
npm run test:unit
```

### Compiles and minifies for production
Creates a folder which you can host on your server
```
npm run build
```

### Lints and fixes files
Automatically fixes code styling based on the Airbnb config
```
npm run lint
```

## Architectural choices
### Frameworks / Dependencies
* **VueJS**: Since the project at ABN will be writen in VueJS, it's only logical to use it for this assignment. 
Apart from that, it's a light and intuitive framework with a fast growing community.
* **VueCLI**: This is used to create the project and to install some basic dependencies. 
This makes creating a project easier, faster and less prone to errors.
* **Bootstrap(css)**:  Only the grid from Bootstrap is used in this application to speed up the process.
The rest of styling is done manually to show an understanding of CSS (SCSS).


