let lioness = {
  name: "Nala",
  age: 3,
  color: "golden"
};

function generateEvent() {
  let events = [
    "Nala caught a gazelle!",
    "Nala is playing with her cubs.",
    "Nala is resting under a tree.",
    "Nala is grooming herself.",
    "Nala is hunting for food."
  ];
  let eventIndex = Math.floor(Math.random() * events.length);
  let event = events[eventIndex];
  document.getElementById("event").innerHTML = event;
}

function advanceMonth() {
  lioness.age += 1;
  generateEvent();
  updateDetails();
}

function updateDetails() {
  document.getElementById("name").innerHTML = lioness.name;
  document.getElementById("age").innerHTML = lioness.age;
  document.getElementById("color").innerHTML = lioness.color;
}

updateDetails();
