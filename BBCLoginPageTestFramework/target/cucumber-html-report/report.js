$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ARSHO/eclipse-workspace/LoginTestCucumberFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Logging into BBC Good Food",
  "description": "\tAs a user\r\n    I want to login into BBC Good Food",
  "id": "logging-into-bbc-good-food",
  "keyword": "Feature"
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
  "name": "Open Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I hoover over and click Sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Sign in page is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.open_Chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 12344545573,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 310365339,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_hoover_over_and_click_Sign_in_link()"
});
formatter.result({
  "duration": 414586190,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.sign_in_page_is_displayed()"
});
formatter.result({
  "duration": 8741896680,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User enters valid username and password",
  "description": "",
  "id": "logging-into-bbc-good-food;user-enters-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I enter valid username and password",
  "rows": [
    {
      "cells": [
        "MadhuSuresh",
        "London1!"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be sucessfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_enter_valid_username_and_password(DataTable)"
});
formatter.result({
  "duration": 633398704,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.click_Sign_in()"
});
formatter.result({
  "duration": 3513427919,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_should_be_sucessfully_logged_in()"
});
formatter.result({
  "duration": 387894989,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 465996375,
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
  "name": "Open Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I hoover over and click Sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Sign in page is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.open_Chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 9975372955,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 394500972,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_hoover_over_and_click_Sign_in_link()"
});
formatter.result({
  "duration": 473048802,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.sign_in_page_is_displayed()"
});
formatter.result({
  "duration": 7122905161,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User enters invalid username and password",
  "description": "",
  "id": "logging-into-bbc-good-food;user-enters-invalid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I enter invalid username and password",
  "rows": [
    {
      "cells": [
        "msdf",
        "London1!"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should land on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "exit browser",
  "keyword": "And "
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_enter_invalid_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1606217014,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.Sign_in()"
});
formatter.result({
  "duration": 2470272219,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_should_land_on_Sign_in_page()"
});
formatter.result({
  "duration": 4698450194,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.exit_browser()"
});
formatter.result({
  "duration": 203278103,
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
  "name": "Open Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I hoover over and click Sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Sign in page is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.open_Chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 10326483032,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 422502422,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_hoover_over_and_click_Sign_in_link()"
});
formatter.result({
  "duration": 319337810,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.sign_in_page_is_displayed()"
});
formatter.result({
  "duration": 10789042141,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User enters invalid password",
  "description": "",
  "id": "logging-into-bbc-good-food;user-enters-invalid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I enter valid username and invalid password",
  "rows": [
    {
      "cells": [
        "MadhuSuresh",
        "London"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "land on Sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "exit",
  "keyword": "And "
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_enter_valid_username_and_invalid_password(DataTable)"
});
formatter.result({
  "duration": 361233721,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.click_on_Sign_in()"
});
formatter.result({
  "duration": 5257931842,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.land_on_Sign_in_page()"
});
formatter.result({
  "duration": 3680738306,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.exit()"
});
formatter.result({
  "duration": 302341344,
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
  "name": "Open Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I hoover over and click Sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Sign in page is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.open_Chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 10408588720,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 438841199,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_hoover_over_and_click_Sign_in_link()"
});
formatter.result({
  "duration": 450963572,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.sign_in_page_is_displayed()"
});
formatter.result({
  "duration": 7364136026,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User leaves username and password blank",
  "description": "",
  "id": "logging-into-bbc-good-food;user-leaves-username-and-password-blank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I leave username and password blank",
  "rows": [
    {
      "cells": [
        "",
        ""
      ],
      "line": 34
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should not be signed in",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_leave_username_and_password_blank(DataTable)"
});
formatter.result({
  "duration": 341094196,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_click_Sign_in()"
});
formatter.result({
  "duration": 2621970797,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.i_should_not_be_signed_in()"
});
formatter.result({
  "duration": 4314143424,
  "status": "passed"
});
formatter.match({
  "location": "BBCFoodLoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 2122049480,
  "status": "passed"
});
});