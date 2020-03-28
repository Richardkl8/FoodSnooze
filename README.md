# FoodSnooze
In this this readme will be explained:
* How to run the project
* Architectural design choices
* How to become production ready

 
## How to run the project

#### Install dependencies
First step is to install the dependencies. 
Move into the root of the project folder and run the installation command: 
```
npm install
```

#### Run the project
To run the application locally using the API provided in the documentation of the assignment:
```
npm run dev
```

#### Run with mocked API
Sometimes you want to locally test the application without having to use the real API. For this project [Mocky](https://www.mocky.io/) is being used the mock the API responses. 
```
npm run mock
```

### Run the unit tests
To run all the unit tests:
```
npm run test:unit
```

#### Compiles and minifies for production
Creates a folder which you can host on your server
```
npm run build
```

#### Lints and fixes files
Automatically fixes code styling based on the Airbnb config
```
npm run lint
```

