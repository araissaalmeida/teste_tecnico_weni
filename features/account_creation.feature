Feature: Account Creation

     Scenario: Create account with empty fields
        Given I am on the account creation page
        When I enter ' ' in the Email field
        Then I enter ' ' in the password field
        Then I enter ' ' in the confirm password field
        Then the Sign up button should not be enabled
    
    Scenario: Create account with invalid email
        Given I am on the account creation page
        When I enter '@mailslurp.biz' in the Email field
        Then I enter ' ' in the password field
        Then I enter ' ' in the confirm password field
        Then I click on the Sign up button
        And I see the text: Invalid email address.
    
    Scenario: Create account with invalid password requirements
        Given I am on the account creation page
        When I enter '86257bdc-48f7-4795-a93d-897c965cfc40@mailslurp.biz' in the Email field
        Then I enter '1' in the password field
        Then I enter '1' in the confirm password field
        Then I click on the Sign up button
        And I see the text: Invalid password: must contain at least 1 special characters.
    
    Scenario: Create account with password mismatch
        Given I am on the account creation page
        When I enter '86257bdc-48f7-4795-a93d-897c965cfc40@mailslurp.biz' in the Email field
        Then I enter '1@' in the password field
        Then I enter '1@' in the confirm password field
        Then I click on the Sign up button
        And I see the text: Invalid password: must contain at least 1 upper case characters.
    
    Scenario: Create account with password inconsistency
        Given I am on the account creation page
        When I enter '86257bdc-48f7-4795-a93d-897c965cfc40@mailslurp.biz' in the Email field
        Then I enter '1@A' in the password field
        Then I enter '1@A' in the confirm password field
        Then I click on the Sign up button
        And I see the text: Invalid password: must contain at least 1 lower case characters.

    Scenario: Create account with password conflict
        Given I am on the account creation page
        When I enter '86257bdc-48f7-4795-a93d-897c965cfc40@mailslurp.biz' in the Email field
        Then I enter '1@Aa' in the password field
        Then I enter '1@Aa' in the confirm password field
        Then I click on the Sign up button
        And I see the text: Invalid password: minimum length 8.

    Scenario: Create account with password misalliance
        Given I am on the account creation page
        When I enter '86257bdc-48f7-4795-a93d-897c965cfc40@mailslurp.biz' in the Email field
        Then I enter '1@Aabbbb' in the password field
        Then I enter '1@Aabb' in the confirm password field
        Then I click on the Sign up button
        And I see the text: Password confirmation doesn't match.

    Scenario: Create account successfully
        Given I am on the account creation page
        When I enter '86257bdc-48f7-4795-a93d-897c965cfc40@mailslurp.biz' in the Email field
        Then I enter '1@Aabbbb' in the password field
        Then I enter '1@Aabbbb' in the confirm password field
        Then I click on the Sign up button
        And I see the text: "E-mail não confirmado! Acesse a mensagem que enviamos para a sua caixa de entrada e confirme."    