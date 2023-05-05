const events = [
  "You played with your littermates",
  "An outside lion argued with your father",
  "You got a best friend",
  "You are wiser. Now you have 1 year old",
  // Add more events here
];

let lion = {
  gender: ['male', 'female'],
  appearance: ['golden', 'sandy', 'dark', 'light', 'spotted', 'striped', 'solid'],
  age: 0,
  maleNames: ['Simba', 'Mufasa', 'Scar', 'Kovu', 'Timon', 'Pumbaa', 'Rafiki', 'Banzai', 'Ed', 'Nuka'],
  femaleNames: ['Nala', 'Sarabi', 'Kiara', 'Zira', 'Shenzi', 'Vitani']
};

document.getElementById("generate-button").addEventListener("click", function() {
  localStorage.removeItem("lion"); // Remove old lion data
  lion = createLion();
  document.getElementById("name").textContent = lion.name;
  document.getElementById("gender").textContent = lion.gender;
  document.getElementById("appearance").textContent = lion.appearance;
  document.getElementById("age").textContent = lion.age;
  localStorage.setItem("lion", JSON.stringify(lion));
  document.getElementById("events").innerHTML = "";
});

function createLion() {
  let newLion = Object.create(lion);
  newLion.gender = lion.gender[Math.floor(Math.random() * lion.gender.length)];
  newLion.appearance = lion.appearance[Math.floor(Math.random() * lion.appearance.length)];
  newLion.age = 0;
  if (newLion.gender === 'male') {
    newLion.name = lion.maleNames[Math.floor(Math.random() * lion.maleNames.length)];
  } else {
    newLion.name = lion.femaleNames[Math.floor(Math.random() * lion.femaleNames.length)];
  }
  return newLion;
}


function generateEvent() {
  const randomEvent = events[Math.floor(Math.random() * events.length)];
  const eventElement = document.createElement("p");
  eventElement.textContent = randomEvent;
  document.getElementById("events").appendChild(eventElement);
  lion.age++;
  document.getElementById("age").textContent = lion.age;
  lion.gender = lion.gender[Math.floor(Math.random() * lion.gender.length)];
  lion.appearance = lion.appearance[Math.floor(Math.random() * lion.appearance.length)];
  document.getElementById("gender").textContent = lion.gender;
  document.getElementById("appearance").textContent = lion.appearance;
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

// Reset lion data when "generate-button" is clicked
document.getElementById("generate-button").addEventListener("click", function() {
  localStorage.removeItem("lion"); // Remove old lion data
  lion = createLion();
  document.getElementById("name").textContent = lion.name;
  document.getElementById("gender").textContent = lion.gender;
  document.getElementById("appearance").textContent = lion.appearance;
  document.getElementById("age").textContent = lion.age;
  localStorage.setItem("lion", JSON.stringify(lion));
  document.getElementById("events").innerHTML = "";
});
