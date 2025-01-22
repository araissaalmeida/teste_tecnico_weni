Feature: Login
   
   Scenario: Login with empty fields
        Given I am on the Login page
        When I enter ' ' in the Email field
        Then I enter ' ' in the Password field
        Then I click on the Log In button
        And I see the text: Invalid username or password.

    Scenario: Login with valid email and empty password
        Given I am on the Login page
        When I enter '86257bdc-48f7-4795-a93d-897c965cfc40@mailslurp.biz' in the Email field
        Then I enter ' ' in the Password field
        Then I click on the Log In button
        And I see the text: Invalid username or password.

    Scenario: Login with empty email and valid password
        Given I am on the Login page
        When I enter ' ' in the Email field
        Then I enter '1@Aabbbb' in the Password field
        Then I click on the Log In button
        And I see the text: Invalid username or password.

    Scenario: Login with successful
        Given I am on the Login page
        When I enter '86257bdc-48f7-4795-a93d-897c965cfc40@mailslurp.biz' in the Email field
        Then I enter '1@Aabbbb' in the Password field
        Then I click on the Log In button