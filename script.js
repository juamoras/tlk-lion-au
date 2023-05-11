let lioness = {
  name: "Zuri",
  age: 0,
  color: generateCoatColor()
};

function generateEvent() {
  
  let currentAges = { texts: ["You are now " + lioness.age + " months old."] };
  let ageEvents = [    { ageRange: [1], texts: ["(name) is born."] },
    { ageRange: [3], texts: ["(name) begins to eat."] },
    { ageRange: [2, 4], texts: ["(name) begins to explore."] },
    { ageRange: [5, 6], texts: ["(name) experiences."] },
    { ageRange: [7], texts: ["While running, (name) discovered a den."] }
  ];

  let nonAgeEvents = [    { type: "random", texts: ["(name) found a shiny rock!"] },
    { type: "social", texts: ["(name) played with her cubs."] },
    { type: "time", texts: ["(name) rested under a tree."] }
  ];

  let possibleAgeEvents = ageEvents.filter(eventObj => eventObj.ageRange.includes(lioness.age));
  let possibleNonAgeEvents = nonAgeEvents;

  let currentAge = currentAges.texts[0];
  let ageEvent = "";
  let nonAgeEvent = "";

  if (possibleAgeEvents.length > 0) {
    let randomAgeEventIndex = Math.floor(Math.random() * possibleAgeEvents.length);
    ageEvent = possibleAgeEvents[randomAgeEventIndex].texts[Math.floor(Math.random() * possibleAgeEvents[randomAgeEventIndex].texts.length)];
    ageEvent = ageEvent.replace("(name)", lioness.name);
  }

  if (possibleNonAgeEvents.length > 0) {
    let randomNonAgeEventIndex = Math.floor(Math.random() * possibleNonAgeEvents.length);
    nonAgeEvent = possibleNonAgeEvents[randomNonAgeEventIndex].texts[Math.floor(Math.random() * possibleNonAgeEvents[randomNonAgeEventIndex].texts.length)];
    nonAgeEvent = nonAgeEvent.replace("(name)", lioness.name);
  }

  let events = `<b>${currentAge}</b>\n<br><br>${ageEvent}\n<br><br>\n${nonAgeEvent}`;


  if (events.length > 0) {
    document.getElementById("event").innerHTML = events;
  }  
    
  if (document.getElementById("explore").classList.contains("active")) {
    // Code specific to the Explore tab
    // script.js
// Call the function from otherScript.js
myFunction();
  }
}
 

function generateCoatColor() {
  let baseColors = ["golden", "brown", "white", "black", "orange"];
  let unnaturalColors = ["blue", "purple", "red"];
  let shadingColors = ["light", "dark", "medium"];
  let markings = ["light spotted", "no markings"];
  let rareMarkings = ["mottled", "rosette", "striped", "spotted", "piebald"];
  let tailTypes = ["normal","extra fluffy","bob","no"]; 

  let baseColor = baseColors[Math.floor(Math.random() * baseColors.length)];
  let shadingColor = shadingColors[Math.floor(Math.random() * shadingColors.length)];
  let marking = markings[Math.floor(Math.random() * markings.length)];
  let tailType = tailTypes[Math.floor(Math.random() * tailTypes.length)];

  let coatColor;
  if (Math.random() < 0.3) { // 30% chance of unnatural color with rare markings
    coatColor = `${shadingColor} ${baseColor} <span style="font-weight: bold">-</span> ${rareMarkings[Math.floor(Math.random() * rareMarkings.length)]} <span style="font-weight: bold">-</span> ${tailType} tail`;
  } else if (Math.random() < 0.5) { // 50% chance of normal color with regular markings
    coatColor = `${shadingColor} ${baseColor} <span style="font-weight: bold">-</span> ${marking} <span style="font-weight: bold">-</span> ${tailType} tail`;
  } else { // 20% chance of normal color with regular markings
    coatColor = `${shadingColor} ${unnaturalColors[Math.floor(Math.random() * unnaturalColors.length)]} <span style="font-weight: bold">-</span> ${rareMarkings[Math.floor(Math.random() * rareMarkings.length)]} <span style="font-weight: bold">-</span> ${tailType} tail`;
  }

  return coatColor;
}


function advanceMonth() {
  lioness.age += 1;
  generateEvent();
  updateDetails();
}

function newLioness() {
  lioness = {
    name: "Sarabi",
    age: 0,
    color: generateCoatColor()
  };
  
  generateEvent();
  updateDetails();
}

function updateDetails() {
  let ageText;

  
  if (lioness.age === 12) {
    ageText = "1 year";
  } else if (lioness.age > 12) {
    let years = Math.floor(lioness.age / 12);
    let months = lioness.age % 12;
    ageText = years + " years and " + months + " months";
  } else {
    ageText = lioness.age + " months";
  }
  
  document.getElementById("name").innerHTML = lioness.name;
  document.getElementById("age").innerHTML = " " + ageText;
  document.getElementById("color").innerHTML = " " + lioness.color;
}

function openTab(tabName) {
  var i, tabContent, tablinks;

  // Hide all tab content
  tabContent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Deactivate all tab buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected tab content and activate the corresponding tab button
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName + "Tab").classList.add("active");

  // Clear the event content when switching to the Life tab
  if (tabName === "life") {
    document.getElementById("event").innerHTML = "";
  } else {
    generateEvent(); // Generate events when switching to the Explore tab
  }
}
