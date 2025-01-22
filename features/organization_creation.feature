Feature: Organization and Project Creation Form

    Scenario: Step About you with empty fields
        Given I am on the Organization creation form page
        When I enter ' ' in the First Name field
        When I enter ' ' in the Surname field
        When I enter ' ' in the WhatsApp Number field
        Then I dont select an option in the Organization Position field
        And the Next button should not be enabled 

    Scenario: Step About you with only First Name filled in
        Given I am on the Organization creation form page
        When I enter 'Jane' in the First Name field
        When I enter ' ' in the Surname field
        When I enter ' ' in the WhatsApp Number field
        Then I dont select an option in the Organization Position field
        And the Next button should not be enabled 

    Scenario: Step About you with first name and surname filled in
        Given I am on the Organization creation form page
        When I enter 'Jane' in the First Name field
        When I enter 'Doe' in the Surname field
        When I enter ' ' in the WhatsApp Number field
        Then I dont select an option in the Organization Position field
        And the Next button should not be enabled 
    
    Scenario: Step About you with only Position empty
        Given I am on the Organization creation form page
        When I enter 'Jane' in the First Name field
        When I enter 'Doe' in the Surname field
        When I enter '85992593797' in the WhatsApp Number field
        Then I dont select an option in the Organization Position field
        And the Next button should not be enabled  

   Scenario: Step About You with data persistence
        Given I am on the organization creation form page
        When I enter 'Jane' in the First Name field
        When I enter 'Doe' in the Last Name field
        When I enter '85992593797' in the WhatsApp Number field
        Then I select an option in the Organization Position field
        And the Next button should be enabled
        And I click on the Back button
        And I click on the Next button
        And all the fields keep filled
        And I click on the Next button

    Scenario: Step About you filled out correctly
        Given I am on the Organization creation form page
        When I enter 'Jane' in the First Name field
        When I enter 'Doe' in the Surname field
        When I enter '85992593797' in the WhatsApp Number field
        Then I select an option in the Organization Position field
        And I click on the Next button

    Scenario: Step About the company with empty fields
        Given I am on the Organization creation form page 
        When I enter ' ' in the Company Name field
        When I dont select an option in the Company Size field
        When I dont select an option in the Segment of Activity field
        Then I enter ' ' in the Project Name field
        And the Next button should not be enabled

    Scenario: Step About the company with only Company Name filled in
        Given I am on the Organization creation form page 
        When I enter 'TestsCompanyName' in the Company Name field
        When I select an option in the Company Size field
        When I dont select an option in the Segment of Activity field
        Then I enter ' ' in the Project Name field
        And the Next button should not be enabled

    Scenario: Step About the company with only Company Name and Company Size filled in
        Given I am on the Organization creation form page 
        When I enter 'TestsCompanyName' in the Company Name field
        When I select an option in the Company Size field
        When I dont select an option in the Segment of Activity field
        Then I enter ' ' in the Project Name field
        And the Next button should not be enabled

    Scenario: Step About the company with only Project empty
        Given I am on the Organization creation form page 
        When I enter 'TestsCompanyName' in the Company Name field
        When I select an option in the Company Size field
        When I select an option in the Segment of Activity field
        Then I enter ' ' in the Project Name field
        And the Next button should not be enabled

    Scenario: Step About the company with data persistence
        Given I am on the Organization creation form page 
        When I enter 'TestsCompanyName' in the Company Name field
        When I select an option in the Company Size field
        When I select an option in the Segment of Activity field
        Then I enter 'TestesProjectName' in the Project Name field
        And the Next button should be enabled
        And I click on the Back button
        And I click on the Next button
        And all the fields keep filled
        And I click on the Next button

    Scenario: Step About the company with navigation
        Given I am on the Organization creation form page 
        When I enter 'TestsCompanyName' in the Company Name field
        When I select an option in the Company Size field
        When I select an option in the Segment of Activity field
        Then I enter 'TestesProjectName' in the Project Name field
        And the Next button should be enabled
        And I click on the Next button
        And I click on the Back button
        And all the fields keep filled
        And I click on the Next button

    Scenario: Step About the company filled out correctly
        Given I am on the Organization creation form page 
        When I enter 'TestsCompanyName' in the Company Name field
        When I select an option in the Company Size field
        When I select an option in the Segment of Activity field
        Then I enter 'Project' in the Project Name field
        And I click on the Next button

    Scenario: Step Start of the project with empty fields
        Given I am on the Organization creation form page
        When I enter '  ' in the Name Agent field
        When I enter '  ' in the Goal field
        And the Finish button should not be enabled

    Scenario: Step Start of the Project with only Name Agent filled in
        Given I am on the Organization creation form page
        When I enter 'John Doe' in the Name Agent field
        When I enter '  ' in the Goal field
        And the Finish button should not be enabled

    Scenario: Step Start of the Project with data persistence
        Given I am on the Organization creation form page
        When I enter 'John Doe' in the Name Agent field
        When I enter 'Answer the questions' in the Goal field
        And the Finish button should be enabled
        And I click on the Back button
        And I click on the Next button
        And all the fields keep filled

    Scenario: Step Start of the Project with template invalidate fill
        Given I am on the Organization creation form page
        When I enter 'John Doe' in the Name Agent field
        When I enter 'Answer the questions' in the Goal field
        And the Finish button should be enabled
        And I click on the Use template
        And the Finish button should not be enabled

    Scenario: Step Start of project with partial data filled
        Given I am on the Organization creation form page
        When I enter 'John Doe' in the Name Agent field
        When I enter 'Answer the questions' in the Goal field
        Then the Finish button should be enabled
        Then I click on the Use template
        Then I select an option in the Use templates
        Then I click on the Use template button
        Then I enter '12345678910' in the App_Key field
        And I enter ' ' in the App_Secret field
        And I enter ' ' in the Project description field
        And the Finish button should not be enabled

    Scenario: Step Start of the project with only Project description empty
        Given I am on the Organization creation form page
        When I enter 'John Doe' in the Name Agent field
        When I enter 'Answer the questions' in the Goal field
        Then the Finish button should be enabled
        Then I click on the Use template
        Then I select an option in the Use templates
        Then I click on the Use template button
        Then I enter '12345678910' in the App_Key field
        And I enter '91350322144852163000265856891255' in the App_Secret field
        And I enter ' ' in the Project description field
        And the Finish button should not be enabled

    Scenario: Step Start of the project with all fields filled
        Given I am on the Organization creation form page
        When I enter 'John Doe' in the Name Agent field
        When I enter 'Answer the questions' in the Goal field
        Then the Finish button should be enabled
        Then I click on the Use template
        Then I select an option in the Use templates
        Then I click on the Use template button
        Then I enter '12345678910' in the App_Key field
        And I enter '91350322144852163000265856891255' in the App_Secret field
        And I enter 'Lorem ipsum luctus fringilla nullam varius conubia aenean vehicula.' in the Project description field
        And the Finish button should be enabled

    Scenario: Step Start of the Project with incomplete template validation
        Given I am on the Organization creation form page
        When I click on the Use template
        Then I select an option in the Use templates
        Then I click on the Use template button
        Then I enter '12345678910' in the App_Key field
        And I enter ' ' in the App_Secret field
        And the Finish button should not be enabled

    Scenario: Step Start of the project with successful creation with Template
        Given I am on the Organization creation form page
        When I click on the Use template
        Then I select an option in the Use templates
        Then I click on the Use template button
        Then I enter '12345678910' in the App_Key field
        And I enter '91350322144852163000265856891255' in the App_Secret field
        And I enter 'Lorem ipsum luctus fringilla nullam varius conubia aenean vehicula.' in the Project description field
        And the Finish button should be enabled
        And I click on the Finish button
        And I see the text: "Project successfully created"
        And I click on the Start button

    Scenario: Step Start of the Project with successful creation with Agent
        Given I am on the Organization creation form page
        When I enter 'John Doe' in the Name Agent field
        When I enter 'Answer the questions' in the Goal field
        Then the Finish button should be enabled
        And I click on the Finish button
        And I see the text: "Project successfully created"
        And I click on the Start button