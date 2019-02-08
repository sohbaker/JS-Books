# Books  
The completed application has been deployed to: https://modern-library-2801.herokuapp.com/

## Task  
Create an application that allows a user to search for books using the Google Books API.  

## Code  
This application is written in JavaScript ES6 and also uses Node-js.
[Link](https://github.com/pelensky/JavaScriptStarterKit) to skeleton file setup with node and webpack  
(Note: earlier commit history [here](https://github.com/sohbaker/Books-old) Subfolder was split out into this repository on 22nd January 2019.)  

## To get started  
1. Clone this repository to your local machine as explained [here](https://help.github.com/articles/cloning-a-repository/)  
2. Install NPM packages needed to run the files by typing `$ npm install` in terminal ([Documentation](https://docs.npmjs.com/cli/install))   
3. Visit [Google Books API](https://developers.google.com/books/docs/v1/using) and scroll to _"Acquiring and using an API key"_ for instructions on how to generate your own API Key.  
4. Create a `.env` file locally and store your API key here, i.e `API_KEY=placeKeyHere`.  Make sure to check that .env is listed in your `.gitignore` file so that your key doesn't get pushed to GitHub.  
    _This key is what gets plugged in to_`process.env.API_KEY` _in api_request.js__  
5. In a separate terminal window, use Webpack to watch your files with `$ npm run watch`. This will build each time you make a change and note any issues in red.  
6. Once built, you can open a browser window showing the app with `$ open dist/index.html`. Make sure to do this in a different terminal window to your npm run watch.  
7. Each time you make a change, you'll need to refresh the browser window to view it. You won't need to do anything else in the terminal. Once you're happy with the changes, push to GitHub as usual.  

## Testing  
Run your tests using the command `$ npm run test`  
Tests are run in [JEST](https://www.npmjs.com/package/jest) and are found in the `__tests__/` folder.  

## Linting  
Lint is a style guide for how to neatly display JavaScript code. You can lint your code with `$ npm run lint`  
This setup uses [AirBnB's defaults](https://github.com/airbnb/javascript). Feel free to change to another lint default by amending the `.eslintrc.js` file  

## Browser  
The app entry point is [`dist/index.html`](dist/index.html). Here you can write HTML directly.  
The JavaScript entry point is [`src/index.js`](src/index.js). Here you can tell your app what to do and how to change.  
The _actual_ JavaScript that the browser reads is automatically generated, and is in `dist/main.js`. Don't make changes to this directly, you can just change the JavaScript in your `src/` folder!  

--------
### Things I'd like to work on:
- Continuing with mock tests for search result class. Understanding how to mock behaviours successfully - created mock file and began to think about what behaviours to test
- Continuing to work with book_object and implementing Object Oriented Ruby principles - initial thoughts attempted but results we inaccessible to front-end so wouldn't display
- Add pagination and extend API call to return more than 10 results
- Explore Atomic Design further
