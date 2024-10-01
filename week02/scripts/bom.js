const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createAttribute('button');

// display the value from the input
li.textContent = input.value;

button.textContent = '❌';

li.append(deleteButton);
list.append(li);