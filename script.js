const events = [
  "You played with your littermates",
  "An outside lion argued with your father",
  "You are wiser. Now you have 1 year old",
  // Add more events here
];

let lion = {
  name: "Simba",
  gender: "Male",
  appearance: "Golden fur with a red mane",
  age: 0,
};

function generateEvent() {
  const randomEvent = events[Math.floor(Math.random() * events.length)];
  const eventElement = document.createElement("p");
  eventElement.textContent = randomEvent;
  document.getElementById("events").appendChild(eventElement);
  lion.age++;
  document.getElementById("age").textContent = lion.age;
  localStorage.setItem("lion", JSON.stringify(lion));
}

const savedLion = JSON.parse(localStorage.getItem("lion"));
if (savedLion) {
  lion = savedLion;
}

document.getElementById("name").textContent = lion.name;
document.getElementById("gender").textContent = lion.gender;
document.getElementById("appearance").textContent = lion.appearance;
document.getElementById("age").textContent = lion.age;
