# Books  

## Task
Create an application that allows you to use the Google Books API (https://bit.ly/2UeCn7B) to search for books, and deploy it somewhere that can be accessed through a web browser.  

This application allows you to:  
- [x] Type in a query and display a list of books matching that query.  
- [x] Each item in the list should include the book's author, title, and publishing company, as well as a picture of the book.  
- [x] From each list item, you should also be able to navigate to more information about the book, but this information does not necessarily need to appear on a page within your application. In other words, this could link out to an external site with more information about that particular book.

## Code
This project is written in JavaScript ES6 (Vanilla) and also uses Node-js.
(Note: original GitHub repository: https://github.com/sohbaker/Books-old. Due to issue with folder organisation, subfolder was split out into this repository on 22nd January 2019.)

## Testing
Run your tests using `$ npm run test`
Tests are run in JEST and are found in the `__tests__/` folder.

## Linting
You can lint your code with `$ npm run lint`
This uses AirBnB's defaults. Feel free to change this in the `.eslintrc.js` file

## Browser
The app entry point is [`dist/index.html`](dist/index.html). Here you can write HTML directly.
The JavaScript entry point is [`src/index.js`](src/index.js). Here you can tell your app what to do and how to change.
The _actual_ JavaScript that the brower reads is automatically generated, and is in `dist/main.js`. Don't make changes to this directly, you can just change the JavaScript in your `src/` folder!

## To get started
- Install NPM packages with `$ npm install`
- In your terminal window, get Webpack to watch your files for changes with `$ npm run watch`
- In an other terminal window, open your app with `$ open dist/index.html` - this will open a browser
- Each time you make a change, you'll need to refresh the browser window, but you don't need to do anything else in the terminal

# Completed Application
The application is accessible at: https://modern-library-2801.herokuapp.com/
