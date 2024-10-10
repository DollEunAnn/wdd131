const steps = ["one", "two", "three"];
const grades = ['A', 'B', 'C'];

function listTemplate(step) {
    return `<li>${step}</li>`;
}

function gpaPointConverter(grade) {

    let points = 0;

    if (grade == 'A') {
        points = 4;
    } else if (grade == 'B') {
        points = 3;
    }

    return points;
}

const gpaPoints = grades.map(gpaPointConverter);

const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;


const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
    return word.length < 6;
});

// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);


const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML