// first thinh is, React (same as JS) views everything as an object
const reactElement = {

    // creating an object for react element
    type: 'a',
    props: {
        href: 'https://google.co.in',
        target: '_blank'
    },
    children: 'Click me to Visit Google'
}

const mainContainer = document.querySelector('#root'); // defining location of main container

function customRender(reactElement, container){
    /*
    // -> This is not Optimised, so we'll code better one

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    console.log(domElement);

    container.appendChild(domElement);
    */

    // Optimised one
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    // let's make a loop, so any number of props (properties)
    // can be passed to the domElement
    // and then finally we can render it

    for (const prop in reactElement.props) {
        if(prop === 'children') continue; // skip children, as we're making our own rules
        // and according to that, children is NOT inside the props
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    console.log('Optimised dom element appended in the container');

    container.appendChild(domElement);

    // it works well 😎
    // Now, let's try it with vite
}

customRender(reactElement, mainContainer);