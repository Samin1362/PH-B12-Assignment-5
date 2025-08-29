# JavaScript DOM and Events Q&A

## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer:**

getElementById("id") is a function that can select an element by a given
ID. It returns a single element or null.

getElementByClassName("class"). This function selects all the elements
with the same class names, and it returns an array-like object, which is
a collection of classes.

querySelector("selector") returns the first element that matches the CSS
selector.

querySelectorAll("selector") returns all the matching CSS selectors.

## How do you create and insert a new element into the DOM?

**Answer:**

To create a new element, we can use a document function called
createElement(""), where we can pass any HTML tag, which will be
created, for example p tag. Then we can add any type of content there
after that, use the appendChild("") function to add.

**For example:**

``` javascript
const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph.";
document.body.appendChild(newPara);
```

## What is Event Bubbling and how does it work?

**Answer:**\
Event Bubbling is a concept in the DOM where the bubbling/propagating
starts in the target element, which then reaches the document.

For example, if a button is clicked that is inside a div, that button
click bubbles up to the div, then finally to the parent, which is the
document.

## What is Event Delegation in JavaScript? Why is it useful?

**Answer:**

Event Delegation is a process where an eventListener() is added to the
parent instead of using it for every child. Mainly, it saves time
because fewer event listeners are used in the code. It is dynamic, and
the code will be easy to manage.

## What is the difference between preventDefault() and stopPropagation() methods?

**Answer:**

The preventDefault() function stops the browser's default action. On the
other hand, stopPropagation() function stops event bubbling to the
parent element, what means the event happened in the child element will
not trigger the parent div.
