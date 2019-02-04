# Books  

## Task  
Create an application that allows you to use the Google Books API to search for books.  

This application allows you to:  
- [x] Type in a query
- [x] Displays a list of books matching that query.  
- [x] Each item includes the book's author, title, and publishing company, as well as a picture of the book  
- [x] From each list item, you can navigate to more information about the book  

## Code  
This project is written in JavaScript ES6 (Vanilla) and also uses Node-js.
[Project setup](https://github.com/pelensky/JavaScriptStarterKit)  
(Note: original GitHub [repository](https://github.com/sohbaker/Books-old) Subfolder was split out into this repository on 22nd January 2019.)  

## To get started  
- Clone the files for this repository to your local machine as explained [here](https://help.github.com/articles/cloning-a-repository/)  
- Install NPM packages needed to run the app locally with `$ npm install`- [Documentation](https://docs.npmjs.com/cli/install)   
- Visit [Google Books API](https://developers.google.com/books/docs/v1/using) and scroll to _"Acquiring and using an API key"_ for instructions on how to generate your own API Key.  
- Create a `.env` file locally and store your API key here.  Make sure to check that .env is listed in your `.gitignore` file so that your key doesn't get pushed to GitHub.  
    _This key is what gets processed by the_`process.env.API_KEY` _in api_request.js__  
- In a separate terminal window, use Webpack to watch your files for changes with `$ npm run watch`. This will build each time you make a change and note any issues in red.  
- Once the application has been built, in another terminal window open your app using the command `$ open dist/index.html` - this will open a browser window showing the app  
- Each time you make a change, you'll need to refresh the browser window, but you don't need to do anything else in the terminal.  

## Testing  
Run your tests using the command `$ npm run test`  
Tests are run in [JEST](https://www.npmjs.com/package/jest) and are found in the `__tests__/` folder.  

## Linting   
You can lint your code with `$ npm run lint`  
This uses AirBnB's defaults. Feel free to change this in the `.eslintrc.js` file  

## Browser  
The app entry point is [`dist/index.html`](dist/index.html). Here you can write HTML directly.  
The JavaScript entry point is [`src/index.js`](src/index.js). Here you can tell your app what to do and how to change.  
The _actual_ JavaScript that the browser reads is automatically generated, and is in `dist/main.js`. Don't make changes to this directly, you can just change the JavaScript in your `src/` folder!  

# Completed Application  
The application has been deployed to: https://modern-library-2801.herokuapp.com/  
