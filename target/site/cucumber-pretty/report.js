$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("darkSky.feature");
formatter.feature({
  "line": 3,
  "name": "Verify darksky",
  "description": "",
  "id": "verify-darksky",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 3986483463,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkySD.verifyHomePage()"
});
formatter.result({
  "duration": 1348350581,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify timeline is displayed in correct format",
  "description": "",
  "id": "verify-darksky;verify-timeline-is-displayed-in-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@timelineformat"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I entered San Antonio in search box",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify timeline is displayed with two hours incremented",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "San Antonio",
      "offset": 10
    }
  ],
  "location": "DarkSkySD.verifyChosenLocation(String)"
});
formatter.result({
  "duration": 5667171453,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkySD.verifyTimelineFormat()"
});
formatter.result({
  "duration": 1571179411,
  "status": "passed"
});
formatter.after({
  "duration": 109175149,
  "status": "passed"
});
formatter.before({
  "duration": 2154395653,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkySD.verifyHomePage()"
});
formatter.result({
  "duration": 1006810307,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify individual day temp timeline",
  "description": "",
  "id": "verify-darksky;verify-individual-day-temp-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@temptimeline"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I expand today\u0027s timeline",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify lowest and highest temp is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkySD.expandToday()"
});
formatter.result({
  "duration": 2085370610,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkySD.verifyTempValues()"
});
formatter.result({
  "duration": 79580531,
  "status": "passed"
});
formatter.after({
  "duration": 91680352,
  "status": "passed"
});
});