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
* **VueJS**: Since the project at ABN will be written in VueJS, it's only logical to use it for this assignment. 
Apart from that, it's a light and intuitive framework with a fast growing community.
* **VueCLI**: This is used to create the project and to install some basic dependencies. 
This makes creating the project easier, faster and less prone to errors.
* **Babel**: Converts new JS syntax and uses polyfills so your code can run on older browsers. 
* **ESlint**: Checks the code in your editor for any mistakes or improvements. 
The Airbnb config is used here because it's the most commonly used so other developer should have no problem reading your code.
* **Bootstrap(css)**:  Only the grid from Bootstrap is used in this application to speed up the process.
The rest of the styling is done manually to show an understanding of CSS (SCSS).
* **Axios**: HTTP client that is widely used for it's simplicity and options. It also automatically converts the response To JSON. 
* **Flush-promises**: This is used during unit testing. 
It *flushes* the resolved promise so you can test whatever should after after the resolved promise.

### Design
* **ApiService**: This is the service where all the API calls are made. It can be injected in every component where you need it.
Having all calls in one file gives a nice overview. In a bigger application you would probably use multiple services for all you API's.
* **Environments** There are currently 3 environment being used in the project. 
Dev is used for the real API, Mock is used for local development to quickly change the responses (also for faking failing calls) and test is used the unit tests.



