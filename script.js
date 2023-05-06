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
  document.getElementById("
