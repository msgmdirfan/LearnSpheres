const lectures = [
    {
      "id": "1",
      "summary": "HTML",
      "url": "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      "topics": [
        {
          "title": "Introduction to HTML",
          "videoUrl": "https://youtu.be/LGQuIIv2RVA?si=TlX0_CJ-mwxTrXaR",
          "quiz": [
            { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "Home Tool Markup Language"], correctAnswer: "Hyper Text Markup Language" },
            { question: "Which tag defines an HTML document?", options: ["<html>", "<body>", "<head>", "<div>"], correctAnswer: "<html>" },
            { question: "What is the purpose of the <title> tag?", options: ["Sets the page title", "Creates a heading", "Defines a paragraph", "Links a stylesheet"], correctAnswer: "Sets the page title" },
            { question: "Which tag is used for a line break?", options: ["<br>", "<hr>", "<p>", "<break>"], correctAnswer: "<br>" },
            { question: "What is the correct HTML for an image?", options: ["<img src='url'>", "<image src='url'>", "<img href='url'>", "<pic src='url'>"], correctAnswer: "<img src='url'>" }
          ],
          "referenceLink": { "title": "Introduction to HTML - W3Schools", "url": "https://www.w3schools.com/html/html_intro.asp" }
        },
        {
          "title": "HTML Elements and Attributes",
          "videoUrl": "https://youtu.be/XXrpsQqAlIQ?si=kQAJaeDOjkkU4_KE",
          "quiz": [
            { question: "What is an HTML element?", options: ["A CSS rule", "A tag and its content", "A JavaScript function", "A database entry"], correctAnswer: "A tag and its content" },
            { question: "Which attribute specifies a unique identifier?", options: ["class", "id", "name", "type"], correctAnswer: "id" },
            { question: "What does the 'alt' attribute do?", options: ["Sets image size", "Provides alternative text", "Links to another page", "Styles the element"], correctAnswer: "Provides alternative text" },
            { question: "Which tag uses the 'href' attribute?", options: ["<a>", "<img>", "<p>", "<div>"], correctAnswer: "<a>" },
            { question: "What is the purpose of the 'class' attribute?", options: ["Uniquely identifies an element", "Groups elements for styling", "Defines a hyperlink", "Sets the element’s position"], correctAnswer: "Groups elements for styling" }
          ],
          "referenceLink": { "title": "HTML Elements - MDN", "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" }
        },
        {
          "title": "Forms and Input Fields",
          "videoUrl": "https://youtu.be/2O8pkybH6po?si=-zoAUWB7r0WYsD6R",
          "quiz": [
            { question: "Which tag creates a form?", options: ["<form>", "<input>", "<button>", "<fieldset>"], correctAnswer: "<form>" },
            { question: "What attribute sends form data?", options: ["action", "method", "target", "submit"], correctAnswer: "action" },
            { question: "Which input type is used for passwords?", options: ["text", "password", "email", "number"], correctAnswer: "password" },
            { question: "What does the 'placeholder' attribute do?", options: ["Sets default value", "Shows hint text", "Validates input", "Hides the field"], correctAnswer: "Shows hint text" },
            { question: "Which element submits a form?", options: ["<input type='submit'>", "<button type='reset'>", "<input type='text'>", "<form>"], correctAnswer: "<input type='submit'>" }
          ],
          "referenceLink": { "title": "HTML Forms - W3Schools", "url": "https://www.w3schools.com/html/html_forms.asp" }
        }
      ],
      "additionalTopics": [
        {
          "title": "HTML5 Semantic Elements",
          "videoUrl": "https://youtu.be/kX3TfdUqpuU?si=F_aUXMvDAmXxX3-Q",
          "quiz": [
            { question: "Which is a semantic element?", options: ["<div>", "<section>", "<span>", "<b>"], correctAnswer: "<section>" },
            { question: "What does <header> define?", options: ["Page footer", "Introductory content", "Main content", "A sidebar"], correctAnswer: "Introductory content" },
            { question: "Which tag is used for navigation?", options: ["<nav>", "<menu>", "<aside>", "<footer>"], correctAnswer: "<nav>" },
            { question: "What is the purpose of <article>?", options: ["Defines a sidebar", "Independent content", "A heading", "A list"], correctAnswer: "Independent content" },
            { question: "Which element is for page footer?", options: ["<footer>", "<bottom>", "<end>", "<section>"], correctAnswer: "<footer>" }
          ],
          "referenceLink": { "title": "HTML5 Semantic Elements - MDN", "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#semantic_elements" }
        },
        {
          "title": "Tables and Lists",
          "videoUrl": "https://youtu.be/7dmzYVBu1GI?si=HBUL1EyvEo69bBcd",
          "quiz": [
            { question: "Which tag creates a table?", options: ["<table>", "<list>", "<grid>", "<tab>"], correctAnswer: "<table>" },
            { question: "What does <tr> stand for?", options: ["Table Row", "Table Record", "Table Reference", "Table Range"], correctAnswer: "Table Row" },
            { question: "Which tag defines an unordered list?", options: ["<ul>", "<ol>", "<li>", "<dl>"], correctAnswer: "<ul>" },
            { question: "What is <th> used for?", options: ["Table header", "Table data", "Table footer", "Table caption"], correctAnswer: "Table header" },
            { question: "Which tag is for list items?", options: ["<li>", "<item>", "<list>", "<entry>"], correctAnswer: "<li>" }
          ],
          "referenceLink": { "title": "HTML Tables - W3Schools", "url": "https://www.w3schools.com/html/html_tables.asp" }
        }
      ],
      "totalDuration": "9hrs:15min",
      "originalCost": "$99",
      "discountCost": "$79",
      "instructor": "John Smith"
    },
    {
      "id": "3",
      "summary": "CSS",
      "url": "https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000",
      "topics": [
        {
          "title": "Selectors and Specificity",
          "videoUrl": "https://youtu.be/Oh0TplG4nYw?si=l6EDm8NHfn962Zme",
          "quiz": [
            { question: "What is a CSS selector?", options: ["A styling rule", "A way to target elements", "A JavaScript function", "A HTML tag"], correctAnswer: "A way to target elements" },
            { question: "Which selector has the highest specificity?", options: ["class", "id", "tag", "universal"], correctAnswer: "id" },
            { question: "What does the '*' selector do?", options: ["Targets all elements", "Targets first child", "Targets last child", "Targets specific class"], correctAnswer: "Targets all elements" },
            { question: "Which symbol denotes a class selector?", options: [".", "#", ":", "*"], correctAnswer: "." },
            { question: "How is specificity calculated?", options: ["By tag count", "By weighted values", "By line number", "By color"], correctAnswer: "By weighted values" }
          ],
          "referenceLink": { "title": "CSS Selectors - MDN", "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" }
        },
        {
          "title": "Flexbox and Grid",
          "videoUrl": "https://youtu.be/41ZBkZUVApc?si=5-L2gAuv9I_G2Rkp",
          "quiz": [
            { question: "What is Flexbox used for?", options: ["2D layouts", "1D layouts", "3D layouts", "Text formatting"], correctAnswer: "1D layouts" },
            { question: "Which property aligns items in Flexbox?", options: ["align-items", "justify-content", "display", "flex-wrap"], correctAnswer: "align-items" },
            { question: "What does CSS Grid define?", options: ["Rows and columns", "Single row", "Single column", "Text flow"], correctAnswer: "Rows and columns" },
            { question: "Which property sets Grid columns?", options: ["grid-template-columns", "grid-rows", "flex-direction", "column-count"], correctAnswer: "grid-template-columns" },
            { question: "What is a key difference between Flexbox and Grid?", options: ["Flexbox is 2D", "Grid is 1D", "Grid is 2D", "No difference"], correctAnswer: "Grid is 2D" }
          ],
          "referenceLink": { "title": "CSS Flexbox - W3Schools", "url": "https://www.w3schools.com/css/css3_flexbox.asp" }
        },
        {
          "title": "CSS Transitions and Animations",
          "videoUrl": "https://youtu.be/Nloq6uzF8RQ?si=G18oM79aGEcLF34n",
          "quiz": [
            { question: "What does a CSS transition do?", options: ["Changes properties smoothly", "Creates keyframes", "Sets static styles", "Hides elements"], correctAnswer: "Changes properties smoothly" },
            { question: "Which property defines transition duration?", options: ["transition-duration", "transition-delay", "animation-time", "speed"], correctAnswer: "transition-duration" },
            { question: "What is required for an animation?", options: ["@keyframes", "@transition", "@media", "@style"], correctAnswer: "@keyframes" },
            { question: "Which property repeats an animation?", options: ["animation-iteration-count", "transition-repeat", "loop", "animation-cycle"], correctAnswer: "animation-iteration-count" },
            { question: "What does 'ease' do in transitions?", options: ["Speeds up", "Slows down", "Smooths timing", "Stops animation"], correctAnswer: "Smooths timing" }
          ],
          "referenceLink": { "title": "CSS Animations - MDN", "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations" }
        }
      ],
      "additionalTopics": [
        {
          "title": "Responsive Design (Media Queries)",
          "videoUrl": "https://youtu.be/K24lUqcT0Ms?si=VsmvefA2ro_MlbJG",
          "quiz": [
            { question: "What are media queries used for?", options: ["Animation", "Responsive design", "Static styling", "Scripting"], correctAnswer: "Responsive design" },
            { question: "Which keyword starts a media query?", options: ["@media", "@query", "@responsive", "@screen"], correctAnswer: "@media" },
            { question: "What does 'max-width' target?", options: ["Screens wider than value", "Screens narrower than value", "Exact width", "Height"], correctAnswer: "Screens narrower than value" },
            { question: "Which unit is relative to viewport?", options: ["px", "em", "vw", "pt"], correctAnswer: "vw" },
            { question: "What is a breakpoint?", options: ["Error point", "Style change point", "Script trigger", "Animation stop"], correctAnswer: "Style change point" }
          ],
          "referenceLink": { "title": "CSS Media Queries - W3Schools", "url": "https://www.w3schools.com/css/css3_mediaqueries.asp" }
        },
        {
          "title": "CSS Preprocessors (SASS, LESS)",
          "videoUrl": "https://youtu.be/5hNDzcpWwFM?si=kFtilvqNCJaBDRMb",
          "quiz": [
            { question: "What is a CSS preprocessor?", options: ["A styling tool", "A scripting language", "A compiler for CSS", "A browser plugin"], correctAnswer: "A compiler for CSS" },
            { question: "Which is a popular preprocessor?", options: ["SASS", "HTML", "JavaScript", "PHP"], correctAnswer: "SASS" },
            { question: "What does nesting do in SASS?", options: ["Groups styles", "Repeats code", "Hides elements", "Adds comments"], correctAnswer: "Groups styles" },
            { question: "What is a variable in SASS?", options: ["$variable", "#variable", "@variable", "&variable"], correctAnswer: "$variable" },
            { question: "What does LESS compile to?", options: ["JavaScript", "CSS", "HTML", "JSON"], correctAnswer: "CSS" }
          ],
          "referenceLink": { "title": "SASS Basics - Official Site", "url": "https://sass-lang.com/guide" }
        }
      ],
      "totalDuration": "9hrs:55min",
      "originalCost": "$119",
      "discountCost": "$95",
      "instructor": "Babar Ali"
    },
    {
      "id": "4",
      "summary": "JavaScript",
      "url": "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      "topics": [
        {
          "title": "JavaScript Basics",
          "videoUrl": "https://youtu.be/lkIFF4maKMU?si=LkyHa1STczQ-9HRw",
          "quiz": [
            { question: "What is JavaScript?", options: ["A styling language", "A programming language", "A markup language", "A database"], correctAnswer: "A programming language" },
            { question: "How do you declare a variable?", options: ["var", "let", "const", "All of the above"], correctAnswer: "All of the above" },
            { question: "What does 'console.log()' do?", options: ["Prints to screen", "Logs to console", "Saves to file", "Alerts user"], correctAnswer: "Logs to console" },
            { question: "Which is a falsy value?", options: ["0", "1", "'hello'", "true"], correctAnswer: "0" },
            { question: "What symbol denotes a comment?", options: ["//", "/*", "#", "Both // and /*"], correctAnswer: "Both // and /*" }
          ],
          "referenceLink": { "title": "JavaScript Basics - MDN", "url": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" }
        },
        {
          "title": "Asynchronous JavaScript",
          "videoUrl": "https://youtu.be/Coyy79wRz_s?si=UVXR04olP1NGbE8z",
          "quiz": [
            { question: "What is asynchronous code?", options: ["Runs immediately", "Runs after delay", "Runs in sequence", "Runs in parallel"], correctAnswer: "Runs after delay" },
            { question: "What does 'setTimeout' do?", options: ["Delays execution", "Loops code", "Stops execution", "Calls a function"], correctAnswer: "Delays execution" },
            { question: "What is a Promise?", options: ["A guaranteed result", "An async operation result", "A loop", "A condition"], correctAnswer: "An async operation result" },
            { question: "Which keyword handles Promises?", options: ["async/await", "try/catch", "if/else", "for/while"], correctAnswer: "async/await" },
            { question: "What does 'fetch' do?", options: ["Fetches local data", "Fetches network resources", "Fetches DOM elements", "Fetches styles"], correctAnswer: "Fetches network resources" }
          ],
          "referenceLink": { "title": "Async JavaScript - MDN", "url": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" }
        },
        {
          "title": "ES6+ Features",
          "videoUrl": "https://youtu.be/fl-_6d18DN0?si=mvCoM-pV2xfMfs0m",
          "quiz": [
            { question: "What does 'let' do differently than 'var'?", options: ["Block scope", "Global scope", "No scope", "Function scope"], correctAnswer: "Block scope" },
            { question: "What is an arrow function?", options: ["=> syntax", "function keyword", "async function", "generator"], correctAnswer: "=> syntax" },
            { question: "What does 'const' prevent?", options: ["Reassignment", "Mutation", "Declaration", "Scope change"], correctAnswer: "Reassignment" },
            { question: "What is destructuring?", options: ["Breaking objects", "Extracting values", "Combining arrays", "Looping"], correctAnswer: "Extracting values" },
            { question: "What does '...' operator do?", options: ["Spread/rest", "Multiply", "Divide", "Comment"], correctAnswer: "Spread/rest" }
          ],
          "referenceLink": { "title": "ES6 Features - MDN", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference ECMAScript 6" }
        }
      ],
      "additionalTopics": [
        {
          "title": "DOM Manipulation",
          "videoUrl": "https://youtu.be/y17RuWkWdn8?si=9MaSeZAA_uGrbd6d",
          "quiz": [
            { question: "What is the DOM?", options: ["Document Object Model", "Data Object Model", "Design Object Model", "Dynamic Object Model"], correctAnswer: "Document Object Model" },
            { question: "How do you select an element by ID?", options: ["getElementById", "querySelector", "getElementsByClass", "selectID"], correctAnswer: "getElementById" },
            { question: "What does 'innerHTML' do?", options: ["Sets styles", "Sets content", "Sets attributes", "Sets events"], correctAnswer: "Sets content" },
            { question: "Which method adds a new element?", options: ["appendChild", "removeChild", "replaceChild", "insertBefore"], correctAnswer: "appendChild" },
            { question: "What does 'querySelectorAll' return?", options: ["Single element", "NodeList", "Array", "Object"], correctAnswer: "NodeList" }
          ],
          "referenceLink": { "title": "DOM Manipulation - MDN", "url": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" }
        },
        {
          "title": "Event Handling in JavaScript",
          "videoUrl": "https://youtu.be/YiOlaiscqDY?si=cuDVfZt-SgTdm5CC",
          "quiz": [
            { question: "What is an event in JavaScript?", options: ["User interaction", "A style change", "A variable", "A loop"], correctAnswer: "User interaction" },
            { question: "Which method adds an event listener?", options: ["addEventListener", "onClick", "attachEvent", "listen"], correctAnswer: "addEventListener" },
            { question: "What does 'event.preventDefault()' do?", options: ["Stops propagation", "Prevents default action", "Removes event", "Logs event"], correctAnswer: "Prevents default action" },
            { question: "Which event fires on a click?", options: ["click", "mouseover", "submit", "change"], correctAnswer: "click" },
            { question: "What is event bubbling?", options: ["Events move up DOM", "Events move down DOM", "Events stop", "Events repeat"], correctAnswer: "Events move up DOM" }
          ],
          "referenceLink": { "title": "Event Handling - MDN", "url": "https://developer.mozilla.org/en-US/docs/Web/Events" }
        }
      ],
      "totalDuration": "10hrs:20min",
      "originalCost": "$129",
      "discountCost": "$99",
      "instructor": "Thomas Babington"
    },
    {
      "id": "6",
      "summary": "React",
      "url": "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
      "topics": [
        {
          "title": "Components and Props",
          "videoUrl": "https://youtu.be/UAssn1S0UkU?si=6n5o2-c8HUP8QCqG",
          "quiz": [
            { question: "What is a React component?", options: ["Reusable UI piece", "A style rule", "A database query", "A script"], correctAnswer: "Reusable UI piece" },
            { question: "How are props passed?", options: ["As attributes", "As variables", "As events", "As styles"], correctAnswer: "As attributes" },
            { question: "Can props be modified in a component?", options: ["Yes", "No", "Sometimes", "Only strings"], correctAnswer: "No" },
            { question: "What syntax defines a functional component?", options: ["function", "class", "const", "let"], correctAnswer: "function" },
            { question: "What does JSX stand for?", options: ["JavaScript XML", "JavaScript Extension", "Java Syntax", "JSON XML"], correctAnswer: "JavaScript XML" }
          ],
          "referenceLink": { "title": "React Components - Official Docs", "url": "https://reactjs.org/docs/components-and-props.html" }
        },
        {
          "title": "React Hooks",
          "videoUrl": "https://youtu.be/LOH1l-MP_9k?si=UPyt8GwHQhU9g4qM",
          "quiz": [
            { question: "What are React Hooks?", options: ["State management tools", "Event listeners", "Style helpers", "Prop passers"], correctAnswer: "State management tools" },
            { question: "Which hook manages state?", options: ["useState", "useEffect", "useContext", "useReducer"], correctAnswer: "useState" },
            { question: "What does 'useEffect' do?", options: ["Handles side effects", "Sets props", "Renders components", "Loops data"], correctAnswer: "Handles side effects" },
            { question: "Can hooks be used in class components?", options: ["Yes", "No", "Sometimes", "Only useState"], correctAnswer: "No" },
            { question: "What is the purpose of 'useContext'?", options: ["Global state", "Local state", "Event handling", "Routing"], correctAnswer: "Global state" }
          ],
          "referenceLink": { "title": "React Hooks - Official Docs", "url": "https://reactjs.org/docs/hooks-intro.html" }
        },
        {
          "title": "State Management with Redux",
          "videoUrl": "https://youtu.be/_shA5Xwe8_4?si=HOwcdJy5omxDXTrO",
          "quiz": [
            { question: "What is Redux?", options: ["A state management library", "A routing library", "A styling tool", "A database"], correctAnswer: "A state management library" },
            { question: "What is a Redux store?", options: ["Global state container", "Local state", "Event store", "Style store"], correctAnswer: "Global state container" },
            { question: "What does 'dispatch' do?", options: ["Triggers actions", "Renders UI", "Sets props", "Fetches data"], correctAnswer: "Triggers actions" },
            { question: "What is a reducer?", options: ["State updater", "Event handler", "Prop passer", "Style rule"], correctAnswer: "State updater" },
            { question: "Which library connects Redux to React?", options: ["react-redux", "redux-react", "react-store", "redux-ui"], correctAnswer: "react-redux" }
          ],
          "referenceLink": { "title": "Redux Official Docs", "url": "https://redux.js.org/introduction/getting-started" }
        }
      ],
      "additionalTopics": [
        {
          "title": "React Router for Navigation",
          "videoUrl": "https://youtu.be/oTIJunBa6MA?si=vJji0xkUA5nVLuRD",
          "quiz": [
            { question: "What does React Router do?", options: ["Manages navigation", "Styles components", "Handles state", "Fetches data"], correctAnswer: "Manages navigation" },
            { question: "Which component defines a route?", options: ["<Route>", "<Link>", "<Nav>", "<Path>"], correctAnswer: "<Route>" },
            { question: "What does '<Link>' do?", options: ["Creates navigation links", "Renders routes", "Sets state", "Styles pages"], correctAnswer: "Creates navigation links" },
            { question: "How do you access URL parameters?", options: ["useParams", "useState", "useEffect", "useRoute"], correctAnswer: "useParams" },
            { question: "What is a 'Switch' component?", options: ["Matches one route", "Matches all routes", "Switches styles", "Switches state"], correctAnswer: "Matches one route" }
          ],
          "referenceLink": { "title": "React Router - Official Docs", "url": "https://reactrouter.com/en/main" }
        },
        {
          "title": "Performance Optimization in React",
          "videoUrl": "https://youtu.be/laf64Ms0yV4?si=Cp6rHdIFb42QxIrs",
          "quiz": [
            { question: "Why optimize React performance?", options: ["Faster rendering", "Better styling", "More features", "Easier coding"], correctAnswer: "Faster rendering" },
            { question: "What does 'React.memo' do?", options: ["Memoizes components", "Sets state", "Handles events", "Renders routes"], correctAnswer: "Memoizes components" },
            { question: "What is lazy loading?", options: ["Loads components on demand", "Loads all at once", "Delays styles", "Stops rendering"], correctAnswer: "Loads components on demand" },
            { question: "Which hook prevents re-renders?", options: ["useCallback", "useState", "useEffect", "useContext"], correctAnswer: "useCallback" },
            { question: "What is code splitting?", options: ["Divides code into chunks", "Combines code", "Styles code", "Comments code"], correctAnswer: "Divides code into chunks" }
          ],
          "referenceLink": { "title": "React Performance - Official Docs", "url": "https://reactjs.org/docs/optimizing-performance.html" }
        }
      ],
      "totalDuration": "10hrs:25min",
      "originalCost": "$139",
      "discountCost": "$109",
      "instructor": "Edward Teach"
    },
    {
      "id": "9",
      "summary": "MongoDB",
      "url": "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      "topics": [
        {
          "title": "CRUD Operations",
          "videoUrl": "https://youtu.be/ByuhQncSuAQ?si=Xxh-vjk6Lqbdv1fS",
          "quiz": [
            { question: "What does CRUD stand for?", options: ["Create, Read, Update, Delete", "Code, Run, Update, Deploy", "Create, Render, Use, Delete", "Check, Read, Use, Drop"], correctAnswer: "Create, Read, Update, Delete" },
            { question: "Which command inserts data?", options: ["insert", "update", "find", "remove"], correctAnswer: "insert" },
            { question: "How do you retrieve all documents?", options: ["find()", "getAll()", "select()", "fetch()"], correctAnswer: "find()" },
            { question: "Which operation modifies data?", options: ["update", "insert", "delete", "read"], correctAnswer: "update" },
            { question: "What removes a document?", options: ["deleteOne", "drop", "removeAll", "erase"], correctAnswer: "deleteOne" }
          ],
          "referenceLink": { "title": "MongoDB CRUD - Official Docs", "url": "https://www.mongodb.com/docs/manual/crud/" }
        },
        {
          "title": "Indexing & Performance Optimization",
          "videoUrl": "https://youtu.be/D14wWW9EEx8?si=BMoPwWjrxdxXHKY2",
          "quiz": [
            { question: "What is an index in MongoDB?", options: ["Data structure for queries", "A collection", "A document", "A style"], correctAnswer: "Data structure for queries" },
            { question: "Which command creates an index?", options: ["createIndex", "addIndex", "index", "setIndex"], correctAnswer: "createIndex" },
            { question: "Why use indexes?", options: ["Faster queries", "Slower queries", "More data", "Less storage"], correctAnswer: "Faster queries" },
            { question: "What is a compound index?", options: ["Multiple fields", "Single field", "No fields", "Temporary index"], correctAnswer: "Multiple fields" },
            { question: "What does 'explain()' do?", options: ["Explains query plan", "Deletes data", "Inserts data", "Styles output"], correctAnswer: "Explains query plan" }
          ],
          "referenceLink": { "title": "MongoDB Indexing - Official Docs", "url": "https://www.mongodb.com/docs/manual/indexes/" }
        },
        {
          "title": "Aggregation Framework",
          "videoUrl": "https://youtu.be/SUZKhBvxW5c?si=XGpt-ThvjVN3BMEv",
          "quiz": [
            { question: "What is aggregation in MongoDB?", options: ["Data processing pipeline", "Data deletion", "Data insertion", "Data styling"], correctAnswer: "Data processing pipeline" },
            { question: "Which operator groups data?", options: ["$group", "$match", "$sort", "$project"], correctAnswer: "$group" },
            { question: "What does '$match' do?", options: ["Filters documents", "Groups documents", "Sorts documents", "Projects fields"], correctAnswer: "Filters documents" },
            { question: "Which stage sorts data?", options: ["$sort", "$limit", "$skip", "$unwind"], correctAnswer: "$sort" },
            { question: "What is '$project' used for?", options: ["Reshapes documents", "Deletes documents", "Inserts documents", "Indexes documents"], correctAnswer: "Reshapes documents" }
          ],
          "referenceLink": { "title": "MongoDB Aggregation - Official Docs", "url": "https://www.mongodb.com/docs/manual/aggregation/" }
        }
      ],
      "additionalTopics": [
        {
          "title": "Security & Authentication in MongoDB",
          "videoUrl": "https://youtu.be/lRPCgog3kmQ?si=r5Zm7fYPAv2OdauC",
          "quiz": [
            { question: "Why secure MongoDB?", options: ["Protect data", "Improve speed", "Add features", "Change format"], correctAnswer: "Protect data" },
            { question: "Which command enables authentication?", options: ["--auth", "--secure", "--login", "--protect"], correctAnswer: "--auth" },
            { question: "What is a role in MongoDB?", options: ["User permission set", "Database type", "Collection name", "Index type"], correctAnswer: "User permission set" },
            { question: "How do you create a user?", options: ["createUser", "addUser", "insertUser", "newUser"], correctAnswer: "createUser" },
            { question: "What does SSL/TLS provide?", options: ["Encryption", "Speed", "Storage", "Indexing"], correctAnswer: "Encryption" }
          ],
          "referenceLink": { "title": "MongoDB Security - Official Docs", "url": "https://www.mongodb.com/docs/manual/security/" }
        },
        {
          "title": "Integrating MongoDB with Node.js",
          "videoUrl": "https://youtu.be/ACUXjXtG8J4?si=kkFMaYJs2ICzI4ao",
          "quiz": [
            { question: "Why integrate MongoDB with Node.js?", options: ["Server-side data", "Client-side styling", "Faster rendering", "Better UI"], correctAnswer: "Server-side data" },
            { question: "Which library connects Node.js to MongoDB?", options: ["mongodb", "mongoose", "node-mongo", "Both mongodb and mongoose"], correctAnswer: "Both mongodb and mongoose" },
            { question: "What is Mongoose?", options: ["ODM for MongoDB", "A database", "A styling tool", "A router"], correctAnswer: "ODM for MongoDB" },
            { question: "How do you connect to MongoDB?", options: ["MongoClient", "connectDB", "openMongo", "linkMongo"], correctAnswer: "MongoClient" },
            { question: "What does a schema define in Mongoose?", options: ["Data structure", "Query speed", "Style rules", "Event handlers"], correctAnswer: "Data structure" }
          ],
          "referenceLink": { "title": "MongoDB Node.js Driver - Official Docs", "url": "https://www.mongodb.com/docs/drivers/node/current/" }
        }
      ],
      "totalDuration": "10hrs:10min",
      "originalCost": "$119",
      "discountCost": "$89",
      "instructor": "Sophia Lee"
    },
    {
      "id": "7",
      "summary": "Java",
      "url": "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
      "topics": [
        {
          "title": "OOP Concepts in Java",
          "videoUrl": "https://youtu.be/pTB0EiLXUC8?si=gEyVUichjDf6T54R",
          "quiz": [
            { question: "What does OOP stand for?", options: ["Object-Oriented Programming", "Operational Object Processing", "Oriented Object Protocol", "Object-Only Programming"], correctAnswer: "Object-Oriented Programming" },
            { question: "Which is an OOP principle?", options: ["Inheritance", "Looping", "Conditionals", "Variables"], correctAnswer: "Inheritance" },
            { question: "What is encapsulation?", options: ["Hiding data", "Exposing data", "Looping data", "Sorting data"], correctAnswer: "Hiding data" },
            { question: "What does 'extends' do?", options: ["Inherits a class", "Creates a class", "Deletes a class", "Styles a class"], correctAnswer: "Inherits a class" },
            { question: "What is polymorphism?", options: ["Multiple forms", "Single form", "No form", "Static form"], correctAnswer: "Multiple forms" }
          ],
          "referenceLink": { "title": "Java OOP - Oracle Docs", "url": "https://docs.oracle.com/javase/tutorial/java/concepts/" }
        },
        {
          "title": "Multithreading & Concurrency",
          "videoUrl": "https://youtu.be/r_MbozD32eo?si=MNAMVbzacKtiuYgR",
          "quiz": [
            { question: "What is multithreading?", options: ["Multiple threads", "Single thread", "No threads", "Static threads"], correctAnswer: "Multiple threads" },
            { question: "Which class creates a thread?", options: ["Thread", "Runnable", "Task", "Both Thread and Runnable"], correctAnswer: "Both Thread and Runnable" },
            { question: "What does 'synchronized' do?", options: ["Locks access", "Speeds up", "Deletes thread", "Creates thread"], correctAnswer: "Locks access" },
            { question: "What is a race condition?", options: ["Concurrent data issue", "Speed contest", "Thread deletion", "Style conflict"], correctAnswer: "Concurrent data issue" },
            { question: "Which method starts a thread?", options: ["start()", "run()", "begin()", "execute()"], correctAnswer: "start()" }
          ],
          "referenceLink": { "title": "Java Concurrency - Oracle Docs", "url": "https://docs.oracle.com/javase/tutorial/essential/concurrency/" }
        },
        {
          "title": "Java Collections Framework",
          "videoUrl": "https://youtu.be/viTHc_4XfCA?si=DMsMORskNTQ1vjCx",
          "quiz": [
            { question: "What is the Collections Framework?", options: ["Data structure library", "Style library", "Event library", "Routing library"], correctAnswer: "Data structure library" },
            { question: "Which is a List implementation?", options: ["ArrayList", "HashMap", "HashSet", "TreeMap"], correctAnswer: "ArrayList" },
            { question: "What does a Set prevent?", options: ["Duplicates", "Null values", "Sorting", "Access"], correctAnswer: "Duplicates" },
            { question: "Which is a key-value collection?", options: ["Map", "List", "Set", "Queue"], correctAnswer: "Map" },
            { question: "What does 'Iterator' do?", options: ["Traverses collection", "Deletes collection", "Styles collection", "Creates collection"], correctAnswer: "Traverses collection" }
          ],
          "referenceLink": { "title": "Java Collections - Oracle Docs", "url": "https://docs.oracle.com/javase/tutorial/collections/" }
        }
      ],
      "additionalTopics": [
        {
          "title": "Exception Handling in Java",
          "videoUrl": "https://youtu.be/1XAfapkBQjk?si=B34rDHLxaF7r2CUc",
          "quiz": [
            { question: "What is an exception?", options: ["Runtime error", "Syntax error", "Style error", "Link error"], correctAnswer: "Runtime error" },
            { question: "Which keyword catches exceptions?", options: ["catch", "try", "throw", "finally"], correctAnswer: "catch" },
            { question: "What does 'throw' do?", options: ["Throws exception", "Catches exception", "Ignores exception", "Styles exception"], correctAnswer: "Throws exception" },
            { question: "What is 'finally' block for?", options: ["Always executes", "Catches errors", "Throws errors", "Skips errors"], correctAnswer: "Always executes" },
            { question: "Which is a checked exception?", options: ["IOException", "NullPointerException", "ArrayIndexOutOfBounds", "IllegalArgument"], correctAnswer: "IOException" }
          ],
          "referenceLink": { "title": "Java Exceptions - Oracle Docs", "url": "https://docs.oracle.com/javase/tutorial/essential/exceptions/" }
        },
        {
          "title": "Lambda Expressions & Streams",
          "videoUrl": "https://youtu.be/tj5sLSFjVj4?si=D_GbnXKgtOn-YeSJ",
          "quiz": [
            { question: "What is a lambda expression?", options: ["Anonymous function", "Named function", "Class method", "Style rule"], correctAnswer: "Anonymous function" },
            { question: "What syntax defines a lambda?", options: ["(args) -> body", "function(args)", "lambda(args)", "{args: body}"], correctAnswer: "(args) -> body" },
            { question: "What are Streams in Java?", options: ["Data processing", "File reading", "Thread management", "Style application"], correctAnswer: "Data processing" },
            { question: "Which method filters a stream?", options: ["filter()", "map()", "reduce()", "collect()"], correctAnswer: "filter()" },
            { question: "What does 'collect()' do?", options: ["Gathers stream results", "Filters stream", "Maps stream", "Sorts stream"], correctAnswer: "Gathers stream results" }
          ],
          "referenceLink": { "title": "Java Lambda - Oracle Docs", "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html" }
        }
      ],
      "totalDuration": "10hrs:25min",
      "originalCost": "$149",
      "discountCost": "$119",
      "instructor": "Chris Taylor"
    },
    {
      "id": "8",
      "summary": "Node.js",
      "url": "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
      "topics": [
        {
          "title": "Node.js Basics",
          "videoUrl": "https://youtu.be/ENrzD9HAZK4?si=PI_x4uUe9DfiCTIF",
          "quiz": [
            { question: "What is Node.js?", options: ["JavaScript runtime", "Browser engine", "Styling tool", "Database"], correctAnswer: "JavaScript runtime" },
            { question: "What does 'npm' stand for?", options: ["Node Package Manager", "New Project Maker", "Node Process Manager", "Node Program Module"], correctAnswer: "Node Package Manager" },
            { question: "Which command runs a Node script?", options: ["node", "npm", "run", "start"], correctAnswer: "node" },
            { question: "What is 'require' used for?", options: ["Imports modules", "Exports modules", "Runs scripts", "Styles code"], correctAnswer: "Imports modules" },
            { question: "What is Node.js built on?", options: ["V8 Engine", "Chrome", "Firefox", "Safari"], correctAnswer: "V8 Engine" }
          ],
          "referenceLink": { "title": "Node.js Basics - Official Docs", "url": "https://nodejs.org/en/docs/guides/getting-started-guide/" }
        },
        {
          "title": "Express.js Framework",
          "videoUrl": "https://youtu.be/SccSCuHhOw0?si=VnesF1l3jIPJ6qIb",
          "quiz": [
            { question: "What is Express.js?", options: ["Web framework", "Database", "Styling tool", "Browser"], correctAnswer: "Web framework" },
            { question: "Which method defines a route?", options: ["app.get()", "app.route()", "app.path()", "app.set()"], correctAnswer: "app.get()" },
            { question: "What does 'res.send()' do?", options: ["Sends response", "Sends request", "Sends style", "Sends error"], correctAnswer: "Sends response" },
            { question: "What is middleware in Express?", options: ["Functions between req/res", "Database queries", "Style rules", "Event handlers"], correctAnswer: "Functions between req/res" },
            { question: "How do you install Express?", options: ["npm install express", "node install express", "npm add express", "express install"], correctAnswer: "npm install express" }
          ],
          "referenceLink": { "title": "Express.js - Official Docs", "url": "https://expressjs.com/en/starter/installing.html" }
        },
        {
          "title": "REST API Development with Node.js",
          "videoUrl": "https://youtu.be/l8WPWK9mS5M?si=OAt3ijIHHmdRZ8tW",
          "quiz": [
            { question: "What does REST stand for?", options: ["Representational State Transfer", "Remote Execution Style Transfer", "Responsive Entity State Tool", "Restful Entity System Test"], correctAnswer: "Representational State Transfer" },
            { question: "Which HTTP method creates data?", options: ["POST", "GET", "PUT", "DELETE"], correctAnswer: "POST" },
            { question: "What does 'GET' retrieve?", options: ["Resources", "Styles", "Errors", "Events"], correctAnswer: "Resources" },
            { question: "Which status code means success?", options: ["200", "404", "500", "301"], correctAnswer: "200" },
            { question: "What is JSON commonly used for?", options: ["API data format", "Style format", "Script format", "Database format"], correctAnswer: "API data format" }
          ],
          "referenceLink": { "title": "REST API with Node.js - MDN", "url": "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" }
        }
      ],
      "additionalTopics": [
        {
          "title": "Middleware in Express.js",
          "videoUrl": "https://youtu.be/lY6icfhap2o?si=b34INb5bTmP4VgrY",
          "quiz": [
            { question: "What is middleware?", options: ["Request/response processor", "Database connector", "Style applicator", "Event trigger"], correctAnswer: "Request/response processor" },
            { question: "How do you use middleware?", options: ["app.use()", "app.get()", "app.post()", "app.set()"], correctAnswer: "app.use()" },
            { question: "What does 'next()' do?", options: ["Calls next middleware", "Stops middleware", "Sends response", "Logs request"], correctAnswer: "Calls next middleware" },
            { question: "Which is a built-in middleware?", options: ["express.json()", "express.custom()", "express.route()", "express.log()"], correctAnswer: "express.json()" },
            { question: "Can middleware handle errors?", options: ["Yes", "No", "Sometimes", "Only logging"], correctAnswer: "Yes" }
          ],
          "referenceLink": { "title": "Express Middleware - Official Docs", "url": "https://expressjs.com/en/guide/using-middleware.html" }
        },
        {
          "title": "Authentication & JWT in Node.js",
          "videoUrl": "https://youtu.be/mbsmsi7l3r4?si=s1vRszKYBX1TGsvz",
          "quiz": [
            { question: "What is JWT?", options: ["JSON Web Token", "Java Web Tool", "JSON Wide Token", "JavaScript Web Token"], correctAnswer: "JSON Web Token" },
            { question: "What does authentication verify?", options: ["User identity", "User style", "User data", "User speed"], correctAnswer: "User identity" },
            { question: "Which part of JWT holds data?", options: ["Payload", "Header", "Signature", "Footer"], correctAnswer: "Payload" },
            { question: "How is JWT secured?", options: ["Signed with secret", "Encrypted fully", "Hashed only", "Not secured"], correctAnswer: "Signed with secret" },
            { question: "Which library helps with JWT?", options: ["jsonwebtoken", "jwt-tool", "auth-jwt", "secure-jwt"], correctAnswer: "jsonwebtoken" }
          ],
          "referenceLink": { "title": "JWT - Official Site", "url": "https://jwt.io/introduction" }
        }
      ],
      "totalDuration": "10hrs:25min",
      "originalCost": "$139",
      "discountCost": "$109",
      "instructor": "Emily Davis"
    },
    {
      "id": "5",
      "summary": "Bootstrap",
      "url": "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",
      "topics": [
        {
          "title": "Bootstrap Grid System",
          "videoUrl": "https://youtu.be/Wqu-d_b3K-0?si=HwulyifrlB86_oEX",
          "quiz": [
            { question: "What is the Bootstrap grid based on?", options: ["12 columns", "10 columns", "8 columns", "6 columns"], correctAnswer: "12 columns" },
            { question: "Which class defines a row?", options: [".row", ".col", ".container", ".grid"], correctAnswer: ".row" },
            { question: "What does 'col-md-6' mean?", options: ["6 columns on medium", "6 rows on medium", "6 pixels on medium", "6 units on medium"], correctAnswer: "6 columns on medium" },
            { question: "What is a breakpoint in Bootstrap?", options: ["Screen size threshold", "Column limit", "Row height", "Style change"], correctAnswer: "Screen size threshold" },
            { question: "Which class makes a container fluid?", options: [".container-fluid", ".container", ".fluid", ".full-width"], correctAnswer: ".container-fluid" }
          ],
          "referenceLink": { "title": "Bootstrap Grid - Official Docs", "url": "https://getbootstrap.com/docs/5.3/layout/grid/" }
        },
        {
          "title": "Bootstrap Components",
          "videoUrl": "https://youtu.be/IwlAhfeSnp8?si=79LRjkq4mpO4e3q5",
          "quiz": [
            { question: "What is a Bootstrap component?", options: ["Prebuilt UI element", "Custom style", "JavaScript plugin", "Database tool"], correctAnswer: "Prebuilt UI element" },
            { question: "Which class creates a button?", options: [".btn", ".button", ".click", ".action"], correctAnswer: ".btn" },
            { question: "What does 'navbar' do?", options: ["Creates navigation bar", "Creates footer", "Creates sidebar", "Creates form"], correctAnswer: "Creates navigation bar" },
            { question: "Which component shows alerts?", options: [".alert", ".notice", ".warning", ".message"], correctAnswer: ".alert" },
            { question: "What is a 'card' in Bootstrap?", options: ["Content container", "Button style", "Form input", "Grid row"], correctAnswer: "Content container" }
          ],
          "referenceLink": { "title": "Bootstrap Components - Official Docs", "url": "https://getbootstrap.com/docs/5.3/components/" }
        },
        {
          "title": "Bootstrap Utilities",
          "videoUrl": "https://youtu.be/nCeHeA7IsvU?si=BElkSkj6vrZc0UuU",
          "quiz": [
            { question: "What are Bootstrap utilities?", options: ["Helper classes", "Main components", "JavaScript tools", "Database helpers"], correctAnswer: "Helper classes" },
            { question: "Which class adds margin?", options: [".m-3", ".p-3", ".border-3", ".text-3"], correctAnswer: ".m-3" },
            { question: "What does '.d-none' do?", options: ["Hides element", "Shows element", "Styles element", "Moves element"], correctAnswer: "Hides element" },
            { question: "Which utility aligns text?", options: [".text-center", ".align-center", ".center-text", ".txt-align"], correctAnswer: ".text-center" },
            { question: "What does '.bg-primary' set?", options: ["Background color", "Text color", "Border color", "Padding"], correctAnswer: "Background color" }
          ],
          "referenceLink": { "title": "Bootstrap Utilities - Official Docs", "url": "https://getbootstrap.com/docs/5.3/utilities/" }
        }
      ],
      "additionalTopics": [
        {
          "title": "Bootstrap Forms & Validation",
          "videoUrl": "https://youtu.be/dKVX22GR7zQ?si=DTCcAvejDog3i2uI",
          "quiz": [
            { question: "Which class styles a form?", options: [".form-control", ".form-group", ".form-input", ".form-style"], correctAnswer: ".form-control" },
            { question: "What does 'needs-validation' do?", options: ["Enables validation", "Disables validation", "Styles form", "Hides form"], correctAnswer: "Enables validation" },
            { question: "Which class shows validation feedback?", options: [".invalid-feedback", ".error-msg", ".valid-text", ".form-error"], correctAnswer: ".invalid-feedback" },
            { question: "What attribute is required for validation?", options: ["required", "validate", "check", "must"], correctAnswer: "required" },
            { question: "Which class groups form elements?", options: [".form-group", ".form-row", ".form-col", ".form-set"], correctAnswer: ".form-group" }
          ],
          "referenceLink": { "title": "Bootstrap Forms - Official Docs", "url": "https://getbootstrap.com/docs/5.3/forms/overview/" }
        },
        {
          "title": "Bootstrap Themes & Customization",
          "videoUrl": "https://youtu.be/6Ovw43Dkp44?si=OOSP7_zksxbQFptA",
          "quiz": [
            { question: "What is a Bootstrap theme?", options: ["Custom style set", "Default style", "JavaScript plugin", "Database tool"], correctAnswer: "Custom style set" },
            { question: "How do you customize Bootstrap?", options: ["Sass variables", "CSS only", "JavaScript", "HTML tags"], correctAnswer: "Sass variables" },
            { question: "Which file holds Bootstrap variables?", options: ["_variables.scss", "_styles.css", "_custom.js", "_themes.scss"], correctAnswer: "_variables.scss" },
            { question: "What does 'npm install bootstrap' do?", options: ["Installs Bootstrap", "Runs Bootstrap", "Styles Bootstrap", "Deletes Bootstrap"], correctAnswer: "Installs Bootstrap" },
            { question: "Which tool compiles Sass?", options: ["Node-sass", "CSS compiler", "JS compiler", "HTML parser"], correctAnswer: "Node-sass" }
          ],
          "referenceLink": { "title": "Bootstrap Theming - Official Docs", "url": "https://getbootstrap.com/docs/5.3/customize/overview/" }
        }
      ],
      "totalDuration": "9hrs:55min",
      "originalCost": "$109",
      "discountCost": "$89",
      "instructor": "Michael Brown"
    },
    {
      "id": "2",
      "summary": "Python",
      "url": "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000",
      "topics": [
        {
          "title": "Introduction to Python",
          "videoUrl": "https://youtu.be/4EaYeZyzIB0?si=VbdbBe0RriqrHnKk",
          "quiz": [
            { question: "What is Python?", options: ["Programming language", "Styling language", "Markup language", "Database"], correctAnswer: "Programming language" },
            { question: "Which symbol denotes a comment?", options: ["#", "//", "/*", "<!--"], correctAnswer: "#" },
            { question: "How do you print in Python?", options: ["print()", "console.log()", "echo()", "write()"], correctAnswer: "print()" },
            { question: "What is Python known for?", options: ["Readability", "Complexity", "Speed", "Styling"], correctAnswer: "Readability" },
            { question: "Which is a Python data type?", options: ["list", "array", "set", "All of the above"], correctAnswer: "All of the above" }
          ],
          "referenceLink": { "title": "Python Basics - Official Docs", "url": "https://docs.python.org/3/tutorial/introduction.html" }
        },
        {
          "title": "Data Types and Variables",
          "videoUrl": "https://youtu.be/R83OfbQeB7M?si=bIZRCFLTOtKSzpMw",
          "quiz": [
            { question: "Which is a numeric type?", options: ["int", "str", "bool", "list"], correctAnswer: "int" },
            { question: "How do you declare a variable?", options: ["name = value", "var name = value", "let name = value", "const name = value"], correctAnswer: "name = value" },
            { question: "What is a string enclosed in?", options: ["Quotes", "Brackets", "Parentheses", "Braces"], correctAnswer: "Quotes" },
            { question: "Which type is True/False?", options: ["bool", "int", "str", "float"], correctAnswer: "bool" },
            { question: "What does 'list' store?", options: ["Ordered items", "Key-value pairs", "Single value", "Functions"], correctAnswer: "Ordered items" }
          ],
          "referenceLink": { "title": "Python Data Types - Official Docs", "url": "https://docs.python.org/3/library/stdtypes.html" }
        },
        {
          "title": "Control Flow and Loops",
          "videoUrl": "https://youtu.be/zgX2eza08I4?si=_NUGIn13IihZDmtr",
          "quiz": [
            { question: "Which keyword checks conditions?", options: ["if", "for", "while", "try"], correctAnswer: "if" },
            { question: "What does 'for' do?", options: ["Loops over items", "Checks condition", "Catches errors", "Defines function"], correctAnswer: "Loops over items" },
            { question: "Which loop runs until false?", options: ["while", "for", "do", "repeat"], correctAnswer: "while" },
            { question: "What does 'break' do?", options: ["Exits loop", "Skips iteration", "Restarts loop", "Pauses loop"], correctAnswer: "Exits loop" },
            { question: "What does 'elif' stand for?", options: ["Else if", "End if", "Extra loop if", "Error if"], correctAnswer: "Else if" }
          ],
          "referenceLink": { "title": "Python Control Flow - Official Docs", "url": "https://docs.python.org/3/tutorial/controlflow.html" }
        }
      ],
      "additionalTopics": [
        {
          "title": "Functions and Modules",
          "videoUrl": "https://youtu.be/fV7_VZtvTV4?si=5km2FWiQM1HiFS7Y",
          "quiz": [
            { question: "How do you define a function?", options: ["def name():", "function name():", "func name():", "define name():"], correctAnswer: "def name():" },
            { question: "What is a module?", options: ["Reusable code file", "Single function", "Style sheet", "Database"], correctAnswer: "Reusable code file" },
            { question: "How do you import a module?", options: ["import", "require", "include", "use"], correctAnswer: "import" },
            { question: "What does 'return' do?", options: ["Returns value", "Prints value", "Stores value", "Loops value"], correctAnswer: "Returns value" },
            { question: "What is a parameter?", options: ["Function input", "Function output", "Loop counter", "Style rule"], correctAnswer: "Function input" }
          ],
          "referenceLink": { "title": "Python Functions - Official Docs", "url": "https://docs.python.org/3/tutorial/controlflow.html#defining-functions" }
        },
        {
          "title": "File Handling in Python",
          "videoUrl": "https://youtu.be/aequTxAvQq4?si=QFYrbq3B0XT5XHK3",
          "quiz": [
            { question: "How do you open a file?", options: ["open()", "read()", "write()", "file()"], correctAnswer: "open()" },
            { question: "Which mode reads a file?", options: ["'r'", "'w'", "'a'", "'b'"], correctAnswer: "'r'" },
            { question: "What does 'write()' do?", options: ["Writes to file", "Reads from file", "Deletes file", "Closes file"], correctAnswer: "Writes to file" },
            { question: "Which method closes a file?", options: ["close()", "end()", "finish()", "stop()"], correctAnswer: "close()" },
            { question: "What does 'with' statement do?", options: ["Auto-closes file", "Opens file", "Deletes file", "Styles file"], correctAnswer: "Auto-closes file" }
          ],
          "referenceLink": { "title": "Python File Handling - Official Docs", "url": "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files" }
        }
      ],
      "totalDuration": "9hrs:35min",
      "originalCost": "$99",
      "discountCost": "$79",
      "instructor": "Jane Doe"
    }
  ];
  
  export default lectures;