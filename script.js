// Define the lioness object
const lioness = {
	name: '',
	gender: '',
	color: '',
	age: 0,
};

// Define the life events array
const lifeEvents = [
	{ description: 'Hunted a gazelle and fed the pride.' },
	{ description: 'Found a comfortable spot to nap in the shade.' },
	{ description: 'Explored a new part of the savannah.' },
	{ description: 'Took down a wildebeest with the pride.' },
	{ description: 'Got into a fight with a rival lioness and won.' },
	{ description: 'Assisted in raising new cubs in the pride.' },
];

// Get the form and input elements
const lionForm = document.querySelector('#lion-form');
const nameInput = document.querySelector('#name-input');
const genderSelect = document.querySelector('#gender-select');
const colorInput = document.querySelector('#color-input');
const submitBtn = document.querySelector('#submit-btn');

// Get the events list and "Advance" button
const eventsList = document.querySelector('#events-list');
const advanceBtn = document.querySelector('#advance-btn');

// Add an event listener to the form submit button
submitBtn.addEventListener('click', (event) => {
	// Prevent the form from submitting
	event.preventDefault();

	// Set the lioness object properties
	lioness.name = nameInput.value;
	lioness.gender = genderSelect.value;
	lioness.color = colorInput.value;

	// Hide the form and show the events list
	lionForm.style.display = 'none';
	eventsList.style.display = 'block';
});

// Add an event listener to the "Advance" button
advanceBtn.addEventListener('click', () => {
	advanceMonth();
});

// Define the advanceMonth function
function advanceMonth() {
	// Increase the lioness age by 1 month
	lioness.age++;

	// Generate a random life event
	const randomIndex = Math.floor(Math.random() * lifeEvents.length);
	const randomEvent = lifeEvents[randomIndex];

	// Display the event in the events list
	const eventLi = document.createElement('li');
	eventLi.innerHTML = `<strong>${formatAge()}</strong>: ${randomEvent.description}`;
	eventsList.appendChild(eventLi);

	// Scroll to the bottom of the events list
	eventsList.scrollTop = eventsList.scrollHeight;
}

// Define the formatAge helper function
function formatAge() {
	const years = Math.floor(lioness.age / 12);
	const months = lioness.age % 12;
	if (years === 0) {
		return `${months} months`;
	} else if (months === 0) {
		return `${years} years`;
	} else {
		return `${years} years, ${months} months`;
	}
}
