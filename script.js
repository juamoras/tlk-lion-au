const events = [
  "You played with your littermates",
  "An outside lion argued with your father",
  "You got a best friend",
  "You are wiser. Now you have 1 year old",
  // Add more events here
];

let lioness = {
  gender: "female",
  appearance: ["golden", "sandy", "dark", "light", "spotted", "striped", "solid"],
  age: 0,
  name: "",
  pride: {
    name: "Pridelands",
    members: 20
  }
};

document.getElementById("start-button").addEventListener("click", function() {
  // Generate lioness
  lioness = createLioness();
  document.getElementById("gender").textContent = lioness.gender;
  document.getElementById("appearance").textContent = lioness.appearance;
  document.getElementById("age").textContent = lioness.age;
  document.getElementById("pride-name").textContent = lioness.pride.name;
  document.getElementById("pride-members").textContent = lioness.pride.members;
  document.querySelector(".start-screen").style.display = "none";
  document.querySelector(".game").style.display = "grid";
});

document.getElementById("next-button").addEventListener("click", function() {
  const eventIndex = Math.floor(Math.random() * events.length);
  const event = events[eventIndex];
  document.getElementById("event").textContent = event;
  lioness.age += 1;
  document.getElementById("age").textContent = lioness.age;
});

function createLioness() {
  const newLioness = Object.assign({}, lioness);
  newLioness.age = 0;
  newLioness.name = generateName();
  newLioness.appearance = newLioness.appearance[Math.floor(Math.random() * newLioness.appearance.length)];
  return newLioness;
}

function generateName() {
  const prefixes = ["As", "Am", "Is", "Ab", "Mak", "Nal", "Niz", "Sar", "Zar", "Zar"];
  const suffixes = ["ra", "ma", "ia", "an", "la", "ni", "zi", "ya", "ba", "da", "na", "ya", "sa", "ta", "ka"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return prefix + suffix;
}
