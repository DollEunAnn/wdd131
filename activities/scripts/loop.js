const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


console.log('for');
for(let i = 0; i < studentReport.length; i++)
{
    if(studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

console.log('forEach');
studentReport.forEach(function(list) {

    if(list < LIMIT) {
        console.log(list);
    }
    
});

console.log('while');
i = 0;
while(studentReport.length > i) {
    
    if(studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }

    i++;
}

console.log('for...in');
for(let key in studentReport) {

    // console.log(key);

    if(studentReport[key] < LIMIT) {

        console.log(studentReport[key]);
    }

}


// Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.

console.log('days');
const today = new Date();

const options = { weekday: 'long'}; // vs. short, etc.

for(let i = 1; i <= DAYS; i++)
{
    let futureDate = new Date();

    futureDate.setDate(today.getDate() +i);
    let nextDay = new Intl.DateTimeFormat('en-US', options).format(futureDate);

    console.log(nextDay);
    
}

