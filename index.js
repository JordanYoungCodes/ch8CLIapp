const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib');

const shapeChoice = (shape) => {
    let lChoice;
    if(shape === "Circle") {
        lChoice = new Circle();
    } else if (shape === "Square") {
        lChoice = new Square();
    } else if (shape === "Triangle"){
        lChoice = new Triangle();
    }
    return lChoice;
}

inquirer
.prompt([
    {
        type: 'input',
        message: 'what text would you like to use? Limit of three Letters',
        name: 'ltext'
    },
    {
        type: 'input',
        message: 'What color would you like to use for the text? You can enter hex or keyword.',
        name: 'ltextcolor'
    },
    {
        type: 'list',
        message: 'what shape would you like to use',
        name: 'lshape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        message: 'What color would you like to use for the shape? You can enter hex or keyword.',
        name: 'color',
    },
])
.then((data) => {
    console.log(data);
    const chosenShape = shapeChoice(data.lshape)
    chosenShape.setColor(data.color)
    // create the shape that was picked
    // set color of the shape
    // add the text to the middle of the shape
   const svg = `<svg version="1.1" width="300" height="200" 
xmlns="http://www.w3.org/2000/svg">
<!-- this is the background of the image -->
${chosenShape.render()}

<text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.ltextcolor}">${data.ltext}</text>
</svg>`;
// write to file
fs.writeFile('log.svg', svg, (err) =>
    err ? console.error(err) : console.log('Commit logged!'))
})

