<?php
function generatePride() {
  $pride = [
    "name" => generatePrideName(),
    "members" => generatePrideMembers()
  ];

  return $pride;
}

function generatePrideName() {
  // Generate a random name for the pride
  $prideNames = ["Savannah Pride", "Golden Mane Pride", "Jungle Pride", "Amber Pride", "Royal Pride"];
  $randomIndex = rand(0, count($prideNames) - 1);
  return $prideNames[$randomIndex];
}

function generatePrideMembers() {
  $minMembers = 4; // Minimum number of pride members
  $maxMembers = 10; // Maximum number of pride members
  $membersCount = rand($minMembers, $maxMembers);

  $members = [];
  for ($i = 0; $i < $membersCount; $i++) {
    $member = [
      "name" => generateMemberName(),
      "gender" => generateMemberGender(),
      "age" => generateMemberAge(),
      "relationship" => generateMemberRelationship()
    ];
    $members[] = $member;
  }

  return $members;
}

function generateMemberName() {
  // Generate a random name for a pride member
  $names = ["Simba", "Nala", "Mufasa", "Sarabi", "Kovu", "Kiara", "Zazu", "Rafiki", "Timon", "Pumbaa"];
  $randomIndex = rand(0, count($names) - 1);
  return $names[$randomIndex];
}

function generateMemberGender() {
  // Generate a random gender for a pride member
  $genders = ["Male", "Female"];
  $randomIndex = rand(0, count($genders) - 1);
  return $genders[$randomIndex];
}

function generateMemberAge() {
  $minAge = 12; // Minimum age in months
  $maxAge = 120; // Maximum age in months
  $age = rand($minAge, $maxAge);
  return updateAgeText($age);
}

function updateAgeText($age) {
  $ageText;

  if ($age === 12) {
    $ageText = "1 year";
  } elseif ($age > 12) {
    $years = floor($age / 12);
    $months = $age % 12;
    $ageText = $years . " years and " . $months;
  } else {
    $ageText = $age . " months";
  }

  return $ageText;
}

function generateMemberRelationship() {
  // Generate a random relationship for a pride member with the player lioness
  $relationships = ["Sibling", "Mother", "Companion", "Leader", "Friend"];
  $randomIndex = rand(0, count($relationships) - 1);
  return $relationships[$randomIndex];
}

function displayPride($pride) {
  echo "<script>console.log(" . json_encode($pride) . ");</script>";
  echo "<script>document.getElementById('prideName').innerHTML = '<b>Pride Name:</b> " . $pride['name'] . "';</script>";

  $membersHTML = "<b>Pride Members:</b><br><br>";
  for ($i = 0; $i < count($pride['members']); $i++) {
    $member = $pride['members'][$i];
    $membersHTML .= "<b>Member " . ($i + 1) . "</b><br>";
    $membersHTML .= "Name: " . $member['name'] . "<br>";
    $membersHTML .= "Gender: " . $member['gender'] . "<br>";
    $membersHTML .= "Age: " . $member['age'] . " months<br>";
    $membersHTML .= "Relationship: " . $member['relationship'] . "<br><br>";
  }
  echo "<script>document.getElementById('prideMembers').innerHTML = " . json_encode($membersHTML) . ";</script>";
  echo "<script>console.log(" . json_encode($membersHTML) . ");</script>";
}

