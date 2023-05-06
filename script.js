// Get the DOM elements
const lionessNameInput = document.getElementById('lioness-name');
const lionessColorInput = document.getElementById('lioness-color');
const lionessAgeInput = document.getElementById('lioness-age');
const eventsList = document.getElementById('events-list');
const advanceBtn = document.getElementById('advance-btn');

// Create a lioness object with default values
let lioness = {
	name: 'Nala',
	color: 'golden',
	age: 0
};

// Update the lioness object with user input
lionessNameInput.addEventListener('input', () => {
	lioness.name = lionessNameInput.value;
});

lionessColorInput.addEventListener('input', () => {
	lioness.color = lionessColorInput.value;
});

lionessAgeInput.addEventListener('input', () => {
	lioness.age = Number(lionessAgeInput.value);
});

// Define the lioness life events
const lifeEvents = [
	{name: 'Born', description: 'You were born into a loving pride.'},
	{name: 'First Hunt', description: 'You caught your first prey and brought it back to the pride.'},
	{name: 'Injured', description: 'You were injured while
