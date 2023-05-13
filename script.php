<?php

$lioness = [
  "name" => "Zuri",
  "age" => 0,
  "color" => generateCoatColor()
];

function generateEvent() {
  global $lioness;
  
  $currentAges = ["texts" => ["You are now " . $lioness["age"] . " months old."]];
  $ageEvents = [
    ["ageRange" => [1], "texts" => ["(name) is born."]],
    ["ageRange" => [3], "texts" => ["(name) begins to eat."]],
    ["ageRange" => [2, 4], "texts" => ["(name) begins to explore."]],
    ["ageRange" => [5, 6], "texts" => ["(name) experiences."]],
    ["ageRange" => [7], "texts" => ["While running, (name) discovered a den."]]
  ];

  $nonAgeEvents = [
    ["type" => "random", "texts" => ["(name) found a shiny rock!"]],
    ["type" => "social", "texts" => ["(name) played with her cubs."]],
    ["type" => "time", "texts" => ["(name) rested under a tree."]]
  ];

  $possibleAgeEvents = array_filter($ageEvents, function($eventObj) {
    global $lioness;
    return in_array($lioness["age"], $eventObj["ageRange"]);
  });
  $possibleNonAgeEvents = $nonAgeEvents;

  $currentAge = $currentAges["texts"][0];
  $ageEvent = "";
  $nonAgeEvent = "";

  if (count($possibleAgeEvents) > 0) {
    $randomAgeEventIndex = mt_rand(0, count($possibleAgeEvents) - 1);
    $ageEventObj = $possibleAgeEvents[$randomAgeEventIndex];
    $randomAgeEventTextIndex = mt_rand(0, count($ageEventObj["texts"]) - 1);
    $ageEvent = $ageEventObj["texts"][$randomAgeEventTextIndex];
    $ageEvent = str_replace("(name)", $lioness["name"], $ageEvent);
  }

  if (count($possibleNonAgeEvents) > 0) {
    $randomNonAgeEventIndex = mt_rand(0, count($possibleNonAgeEvents) - 1);
    $nonAgeEventObj = $possibleNonAgeEvents[$randomNonAgeEventIndex];
    $randomNonAgeEventTextIndex = mt_rand(0, count($nonAgeEventObj["texts"]) - 1);
    $nonAgeEvent = $nonAgeEventObj["texts"][$randomNonAgeEventTextIndex];
    $nonAgeEvent = str_replace("(name)", $lioness["name"], $nonAgeEvent);
  }

  $events = "<b>{$currentAge}</b>\n<br><br>{$ageEvent}\n<br><br>\n{$nonAgeEvent}";

  if (strlen($events) > 0) {
    echo "<script>document.getElementById('event').innerHTML = " . json_encode($events) . ";</script>";
  }

  if (isset($_GET["active_tab"]) && $_GET["active_tab"] === "explore") {
    // Code specific to the Explore tab
    // Add your code here that should execute only when the Explore tab is active
  }
}

function generateCoatColor() {
  $baseColors = ["golden", "brown", "white", "black", "orange"];
$unnaturalColors = ["blue", "purple", "red"];
$shadingColors = ["light", "dark", "medium"];
$markings = ["light spotted", "no markings"];
$rareMarkings = ["mottled", "rosette", "striped", "spotted", "piebald"];
$tailTypes = ["normal", "extra fluffy", "bob", "no"];

$baseColor = $baseColors[mt_rand(0, count($baseColors) - 1)];
$shadingColor = $shadingColors[mt_rand(0, count($shadingColors) - 1)];
$marking = $markings[mt_rand(0, count($markings) - 1)];
$tailType = $tailTypes[mt_rand(0, count($tailTypes) - 1)];

$coatColor = "";
if (mt_rand(0, 9) < 3) { // 30% chance of unnatural color with rare markings
  $rareMarking = $rareMarkings[mt_rand(0, count($rareMarkings) - 1)];
  $coatColor = "{$shadingColor} {$baseColor} <span style=\"font-weight: bold\">-</span> {$rareMarking} <span style=\"font-weight: bold\">-</span> {$tailType} tail";
} elseif (mt_rand(0, 9) < 5) { // 50% chance of normal color with regular markings
  $coatColor = "{$shadingColor} {$baseColor} <span style=\"font-weight: bold\">-</span> {$marking} <span style=\"font-weight: bold\">-</span> {$tailType} tail";
} else { // 20% chance of normal color with rare markings
  $unnaturalColor = $unnaturalColors[mt_rand(0, count($unnaturalColors) - 1)];
  $rareMarking = $rareMarkings[mt_rand(0, count($rareMarkings) - 1)];
  $coatColor = "{$shadingColor} {$unnaturalColor} <span style=\"font-weight: bold\">-</span> {$rareMarking} <span style=\"font-weight: bold\">-</span> {$tailType} tail";
}

return $coatColor;
}

function advanceMonth() {
  global $lioness;

  $lioness["age"] += 1;
  generateEvent();
  updateDetails();

  // Generate pride for the lioness when advancing month
  if (isset($_GET["active_tab"]) && $_GET["active_tab"] === "pride") {
    $pride = generatePride();
    displayPride($pride);
  }
}

function newLioness() {
  global $lioness;

  $lioness = [
    "name" => "Sarabi",
    "age" => 0,
    "color" => generateCoatColor()
  ];

  $pride = generatePride(); // Generate a new pride

  generateEvent();
  updateDetails();
  displayPride($pride); // Update the displayed pride information
}

function updateDetails() {
  global $lioness;

  $ageText = "";

  if ($lioness["age"] === 12) {
    $ageText = "1 year";
  } elseif ($lioness["age"] > 12) {
    $years = floor($lioness["age"] / 12);
    $months = $lioness["age"] % 12;
    $ageText = $years . " years and " . $months . " months";
  } else {
    $ageText = $lioness["age"] . " months";
  }

  echo "<script>document.getElementById('name').innerHTML = " . json_encode($lioness["name"]) . ";</script>";
  echo "<script>document.getElementById('age').innerHTML = ' ' . " . json_encode($ageText) . ";</script>";
  echo "<script>document.getElementById('color').innerHTML = ' ' . " . json_encode($lioness["color"]) . ";</script>";
}

function openTab($tabName) {
  $tabContent = "<script>var tabContent = document.getElementsByClassName('tabcontent');</script>";
  for ($i = 0; $i < count($tabContent); $i++) {
    $tabContent .= "<script>tabContent[$i].style.display = 'none';</script>";
  }

  $tablinks = "<script>var tablinks = document.getElementsByClassName('tablink');</script>";
  for ($i = 0; $i < count($tablinks); $i++) {
    $tablinks .= "<script>tablinks[$i].classList.remove('active');</script>";
  }

  $tabContent .= "<script>document.getElementById(" . json_encode($tabName) . ").style.display = 'block';</script>";
  $tabContent .= "<script>document.getElementById(" . json_encode($tabName . "Tab") . ").classList.add('active');</script>";

  if ($tabName === "life") {
    $tabContent .= "<script>document.getElementById('event').innerHTML = '';</script>";
  } else {
    $tabContent .= "<script>generateEvent();</script>"; // Generate events when switching to the Explore or Pride tab
  }

  echo $tabContent;
}

?>
 

