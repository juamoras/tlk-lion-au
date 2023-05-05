const events = [
  "You played with your littermates",
  "An outside lion argued with your father",
  "You made a new friend",
  "You turned 1 year old",
  // Add more events here
];

const lion = {
  genders: ['male', 'female'],
  appearances: ['golden', 'sandy', 'dark', 'light', 'spotted', 'striped', 'solid'],
  maleNames: ['Simba', 'Mufasa', 'Scar', 'Kovu', 'Timon', 'Pumbaa', 'Rafiki', 'Banzai', 'Ed', 'Nuka'],
  femaleNames: ['Nala', 'Sarabi', 'Kiara', 'Zira', 'Shenzi', 'Vitani'],
  create() {
    const gender = this.genders[Math.floor(Math.random() * this.genders.length)];
    const appearance = this.appearances[Math.floor(Math.random() * this.appearances.length)];
    const age = 0;
    const name = (gender === 'male') ? this.maleNames[Math.floor(Math.random() * this.maleNames.length)] : this.femaleNames[Math.floor(Math.random() * this.femaleNames.length)];
    return { gender, appearance, age, name };
  }
};

const lionElement = document.getElementById("lion");
const nameElement = document.getElementById("name");
const genderElement = document.getElementById("gender");
const appearanceElement = document.getElementById("appearance");
const ageElement = document.getElementById("age");
const eventsElement = document.getElementById("events");

function updateLionUI(lion) {
  nameElement.textContent = lion.name;
  genderElement.textContent = lion.gender;
  appearanceElement.textContent = lion.appearance;
  ageElement.textContent = lion.age;
}

function generateNewLion() {
  const newLion = lion.create();
  localStorage.setItem("lion", JSON.stringify(newLion));
  updateLionUI(newLion);
  eventsElement.innerHTML = "";
}

function generateRandomEvent() {
  const randomEvent = events[Math.floor(Math.random() * events.length)];
  const eventElement = document.createElement("p");
  eventElement.textContent = randomEvent;
  eventsElement.appendChild(eventElement);
  const savedLion = JSON.parse(localStorage.getItem("lion"));
  if (savedLion) {
    savedLion.age++;
    savedLion.gender = lion.genders[Math.floor(Math.random() * lion.genders.length)];
    savedLion.appearance = lion.appearances[Math.floor(Math.random() * lion.appearances.length)];
    localStorage.setItem("lion", JSON.stringify(savedLion));
    updateLionUI(savedLion);
  }
}

const savedLion = JSON.parse(localStorage.getItem("lion"));
if (savedLion) {
  updateLionUI(savedLion);
} else {
  generateNewLion();
}

document.getElementById("generate-button").addEventListener("click", generateNewLion);
document.getElementById("event-button").addEventListener("click", generateRandomEvent);
