const events = [
  "You played with your littermates",
  "An outside lion argued with your father",
  "You got a best friend",
  "You are wiser. Now you have 1 year old",
  // Add more events here
];

let lioness = createLioness();
document.getElementById("gender").textContent = lioness.gender;
document.getElementById("appearance").textContent = lioness.appearance;
document.getElementById("age").textContent = lioness.age;
document.getElementById("pride-name").textContent = lioness.pride.name;
document.getElementById("pride-members").textContent = lioness.pride.members;

document.getElementById("next-button").addEventListener("click", function() {
  // Generate event
  const eventIndex = Math.floor(Math.random() * events.length);
  const event = events[eventIndex];
  document.getElementById("event").textContent = event;

  // Update lioness age
  lioness.age++;

  // TODO: Add more game logic here
});

function createLioness() {
  const lioness = {
    gender: "female",
    appearance: ["golden", "sandy", "dark", "light", "spotted", "striped", "solid"][Math.floor(Math.random() * 7)],
    age: 0,
    name: generateName()
    pride: {
      name: "Pridelands",
      members: 20
    }
  };
  
  function generateName() {
  const prefixes = ["Ki", "Ku", "Tu", "Ta", "Za", "Nya", "Ma", "Sha", "Aku", "Mala"];
  const suffixes = ["ra", "ni", "sha", "ki", "la", "si", "na", "ma", "li", "ku"];
  const prefixIndex = Math.floor(Math.random() * prefixes.length);
  const suffixIndex = Math.floor(Math.random() * suffixes.length);
  const name = prefixes[prefixIndex] + suffixes[suffixIndex];
  return name;
}


  return lioness;
}
