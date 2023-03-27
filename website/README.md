# Assignment Solution

### Five significant features of React

- Declarative: React uses a declarative programming approach, which means that developers only need to describe what they want the UI to look like, and React takes care of the underlying updates and optimizations. This makes it easier to reason about and maintain code, as well as improve performance.

- Component-Based Architecture: React has a component-based architecture, which allows developers to break down the UI into reusable and self-contained components. Each component manages its own state and can be composed together to create complex user interfaces.

- Virtual DOM: React uses a virtual DOM, which is an in-memory representation of the actual DOM. This allows React to make efficient updates to the UI by only updating the parts of the DOM that have changed, rather than re-rendering the entire UI.

- JSX: React uses JSX, which is a syntax extension that allows developers to write HTML-like code within their JavaScript code. This makes it easier to create and manage complex user interfaces, and helps to improve the readability and maintainability of code.

- One-Way Data Binding: React uses one-way data binding, which means that data flows in one direction—from parent components to child components. This helps to prevent unexpected side effects and makes it easier to reason about the flow of data within the application.

### Five major advantages of React

- Increased productivity and efficiency: React's component-based architecture, one-way data binding, and virtual DOM help to increase productivity and efficiency when building user interfaces. Developers can reuse components, reduce boilerplate code, and minimize the amount of manual DOM manipulation required.

- Improved performance: React's virtual DOM and efficient rendering algorithms help to improve the performance of web applications by reducing the number of DOM updates required. This results in faster rendering times and better overall performance.

- Large and active community: React has a large and active community of developers, which means that there are many resources and tools available for developers to use. This includes libraries, frameworks, and plugins, as well as a wealth of documentation and tutorials.

- Easier to learn: React's syntax and structure are relatively easy to learn and understand, especially for developers who are familiar with JavaScript. This means that developers can start building applications quickly without having to learn a completely new programming language or syntax.

- Cross-platform compatibility: React can be used to build user interfaces for a variety of platforms, including web, mobile, and desktop applications. This makes it a versatile and flexible tool that can be used in a wide range of development projects.

### What is the name of the Software Engineer that created React? Also, which company owns React?

React was created by Jordan Walke, a software engineer at Facebook. React is an open-source library, and while it was created by Facebook, it is not owned by any particular company. Instead, it is maintained and developed by a community of developers and companies, including Facebook.

### What are the notable differences between HTML & JSX? Give at least 3 of them

- Syntax and Structure: HTML and JSX have different syntax and structure. HTML is a markup language that uses tags to define elements, while JSX uses a syntax that allows developers to write HTML-like code within their JavaScript code.

- Attributes and Properties: HTML and JSX use different attribute and property names for some elements. For example, in HTML, the class attribute is used to specify a CSS class for an element, while in JSX, the className property is used for the same purpose. Similarly, the for attribute in HTML is used to associate a label with a form control, while in JSX, the htmlFor property is used for the same purpose.

- Data Binding: JSX provides more advanced data binding capabilities than HTML. With JSX, developers can use JavaScript expressions and variables to dynamically generate content and properties, which can be updated in real time.

### Why can’t browsers read JSX?

Browsers can't read JSX because it is not valid JavaScript code that can be interpreted directly by the browser. Instead, JSX is a syntax extension that allows developers to write HTML-like code within their JavaScript code.

To be understood by the browser, JSX needs to be transpiled (or compiled) into standard JavaScript code. This process converts the JSX syntax into valid JavaScript code that the browser can understand.

React includes a tool called "Babel" that can be used to transpile JSX code into standard JavaScript code. Babel can be configured to work with various build tools, such as webpack or gulp, to automate the transpiling process and generate the necessary JavaScript files that can be loaded by the browser.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
