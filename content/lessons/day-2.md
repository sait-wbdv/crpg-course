---
title: Javascript Basics
description: Today we'll cover the basics of javascript syntax. Over the next few days this content will serve as the backbone for our server side logic. You will also be introduced to a web framework called NuxtJS which can be used for client and server code.
---

## Homework

- Skim [What is Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- Watch [Learn JS with Mosh](https://www.youtube.com/watch?v=W6NZfCO5SIk) for a tutorial oriented dip into Javascript
- Read [A first splash into javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash) by the Mdn

<h2> 2. Demo: Using the Browser console</h2>

- [Finding Your Browser's Developer Console](https://balsamiq.com/support/faqs/browserconsole/)
- [Useful Devtools tips and tricks](https://www.smashingmagazine.com/2023/06/popular-devtools-tips/)

### Activity: Experiment with the browser console

- Try using [`console.log()`](https://www.geeksforgeeks.org/javascript-console-log-method/) to print out text
  - try using words inside and outside of quotations
  - try using numbers inside and outside of qutotations
  - **what are the differences**
- Create a variable (use the following syntax)
  - `const myName = "insert your name here"` (use any sentence and variable name u want)
- Log the variable that you created with `console.log(myName)` (use the varaible name that you created)

#### Debrief

- What errors did you run into?
  - How did you solve them?

---

## Declaring and assigning variables

[![Slides - declaring and assigning variables](/images/slides/cpnt-262/js-variables.png)](/slides/cpnt-262/js-variables)

**Materials**:

- [Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [Handling text — strings in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Key Takeaways (Variables)

- Declaration creates a variable in memory
- Assignment puts a value in a variable
- `const` variables can be reassigned
- `let` variables can be reassigned
- default to const
- use descriptive variable names with camelCase

---

## Programming Logic

### Conditionals

TODO: Add slides

### Functions

TODO: Add slides

---

## Functions

TODO: Add slides

- Make logic reusable

### Key Takeaways

- Functions make code re-usable and portable
- Functions make code safer
- Declare a function to make it invocable, invoke it to use it
- JS has traditional **and** fat-arrow syntax for functions
- Functions can take parameters as arguments
- Functions return values

### Activity: Convert Code into Functions

- Work and discuss in your scrum groups
- Review JS scripts written on days 2 and 3
- Pick 2-3 (everyone does this) and turn them into functions
  - try using arguments for variables
  - pass the values that you used on days 2 and 3 into the function as arguments
  - use a `return` statement to render the output

---

## Web Frameworks

- [Video: Quick into to Frameworks](https://youtu.be/VbvMJUpY0a4?si=PPIlssXYkXhoV3gA)
- After learning one, others become easier to also learn
- Reasons why we use them:
  - simplify complex rendering
  - more interactivity
  - easier code management
  - app development
- Important Concepts:
  - Components
  - Client Side vs Server Side
  - Shadow Dom vs Compilation (Currently Svelte is the only one really doing compilation)
  - Code Bundling (done automatically)
