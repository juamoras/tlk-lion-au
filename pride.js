// pride.js

function generatePride() {
  let pride = {
    name: generatePrideName(),
    members: generatePrideMembers()
  };

  return pride;
}

function generatePrideName() {
  // Generate a random name for the pride
  let prideNames = ["Savannah Pride", "Golden Mane Pride", "Jungle Pride", "Amber Pride", "Royal Pride"];
  let randomIndex = Math.floor(Math.random() * prideNames.length);
  return prideNames[randomIndex];
}

function generatePrideMembers() {
  let minMembers = 4; // Minimum number of pride members
  let maxMembers = 10; // Maximum number of pride members
  let membersCount = Math.floor(Math.random() * (maxMembers - minMembers + 1)) + minMembers;

  let members = [];
  for (let i = 0; i < membersCount; i++) {
    let member = {
      name: generateMemberName(),
      gender: generateMemberGender(),
      age: generateMemberAge(),
      relationship: generateMemberRelationship()
    };
    members.push(member);
  }

  return members;
}

function generateMemberName() {
  // Generate a random name for a pride member
  let names = ["Simba", "Nala", "Mufasa", "Sarabi", "Kovu", "Kiara", "Zazu", "Rafiki", "Timon", "Pumbaa"];
  let randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function generateMemberGender() {
  // Generate a random gender for a pride member
  let genders = ["Male", "Female"];
  let randomIndex = Math.floor(Math.random() * genders.length);
  return genders[randomIndex];
}

function generateMemberAge() {
  let minAge = 12; // Minimum age in months
  let maxAge = 120; // Maximum age in months
  let age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
  return updateAgeText(age);
}

function updateAgeText(age) {
  let ageText;
  
  if (age === 12) {
    ageText = "1 year";
  } else if (age > 12) {
    let years = Math.floor(age / 12);
    let months = age % 12;
    ageText = years + " years and " + months;
  } else {
    ageText = age + " months";
  }
  
  return ageText;
}


function generateMemberRelationship() {
  // Generate a random relationship for a pride member with the player lioness
  let relationships = ["Sibling", "Mother", "Companion", "Leader", "Friend"];
  let randomIndex = Math.floor(Math.random() * relationships.length);
  return relationships[randomIndex];
}

function displayPride(pride) {
    console.log(pride); // Check the pride object in the console
    
    document.getElementById("prideName").innerHTML = "<b>Pride Name:</b> " + pride.name;
  
    let membersHTML = "<b>Pride Members:</b><br><br>";
    for (let i = 0; i < pride.members.length; i++) {
      let member = pride.members[i];
      membersHTML += "<b>Member " + (i + 1) + "</b><br>";
      membersHTML += "Name: " + member.name + "<br>";
      membersHTML += "Gender: " + member.gender + "<br>";
      membersHTML += "Age: " + member.age + " months<br>";
      membersHTML += "Relationship: " + member.relationship + "<br><br>";
    }
    document.getElementById("prideMembers").innerHTML = membersHTML;
  
    console.log(membersHTML); // Check the generated HTML content in the console
  }