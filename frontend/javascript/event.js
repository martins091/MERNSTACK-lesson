// Events
// JavaScript allows you to create interactive web pages by responding to user actions.
// In JavaScript, events are actions or occurrences that happen in the browser window, which
//  the JavaScript code can respond to. Events are an essential part of web development, 
// allowing you to create interactive and dynamic user experiences.

{/* <button id="myButton">Click me!</button>

<script>
    document.getElementById("myButton").onclick = function() {
        alert("Button was clicked!");
    };
</script> */}

// Event Types: There are many types of events, such as:

// Mouse Events: These occur when the user interacts with the mouse (e.g., click, dblclick, mouseover, mouseout).
// Keyboard Events: These are triggered by keyboard actions (e.g., keydown, keyup, keypress).
// Form Events: These are related to form controls (e.g., submit, change, focus, blur).
// Window Events: These occur at the window level (e.g., load, resize, scroll).
// Event Listeners: To respond to events, you use event listeners, which are functions that wait for
//  an event to occur. When the event occurs, the listener executes a specific piece of code.


// Adding Event Listeners
// You can add event listeners using the addEventListener() method. This method allows you to specify 
// the type of event and the function to execute when that event occurs.
// Example of adding a click event listener
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("Button clicked!");
});

// Removing Event Listeners
// If you no longer want to respond to an event, you can remove the event listener using the 
// removeEventListener() method.
function handleClick() {
    alert("Button clicked!");
}

// Add event listener
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);


// Event Delegation
// Event delegation is a technique that allows you to attach a single event 
// listener to a parent element instead of multiple listeners to its child elements. 
// This is efficient for managing events in dynamic lists or menus.

{/* <ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
const list = document.getElementById("myList");

list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        alert("You clicked on: " + event.target.textContent);
    }
});
</script> */}
