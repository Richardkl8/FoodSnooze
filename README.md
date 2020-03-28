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
### Editor
* **Webstorm 2019.2**: I use JetBrains Webstorm for all my frontend projects. 

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
* **Axios**: HTTP client that is widely used for it's simplicity and options. It also automatically converts the response to JSON. 
* **Flush-promises**: This is used during unit testing. 
It *flushes* the resolved promise so you can test whatever should happen after after the resolved promise.

### Architectural design
* **ApiService**: This is the service where all the API calls are made. It can be injected in every component where you need it.
Having all calls in one file gives a nice overview. In a bigger application you would probably use multiple services for all you API's.
* **Environments**: There are currently 3 environment being used in the project. 
Dev is used for the real API, Mock is used for local development to quickly change the responses (also for faking failing calls) and test is used for the unit tests.

### Component-reusability
* **RecipeCard**: An example of a reusable component is the RecipeCard which you can find in the components folder.
It uses props to inject data from the API which makes it dynamic so it can be used on multiple pages.

## How to become production ready
* **CICD**: Setting up a pipeline to make deployments to multiple environments and testing automatic.  
* **Sanitising input fields**: Escape the user input before sending the query to the API to prevent a XSS attack.
* **Using credentials for private API calls**: Currently there are no credentials for the communication with the Back-end.
The data we are now requesting is public, but you can imagine private request that should be handled with some sort of token (E.G. JWT).
* **Create integration tests**: Aside from the unit tests having 90%+ coverage, there must also be integration test.
This means interface/API testing as well as integration testing with back-end services.
* **User testing**: Have real users test the application, see where they get stuck and improve UX.
* **Design improvements**: Currently the design is quite basic and also the mobile responsiveness could be improved.
* **Lazy loading**: Lazy loading images to improve performance. 
* **Optional: Implement typeScript**: Typescript can help to build a more robust codebase. 


