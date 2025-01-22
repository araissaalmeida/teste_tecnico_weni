import HomePage from "../support/homePage";
import AccountsWeni from "../support/accountsWeni";

const homePage = new HomePage()
const accountsWeni = new AccountsWeni()
const mock = require('../fixtures/users.json')

describe('Organization and Project Creation Form', () => {

    describe('Step About you filled out correctly', () => {

        const validUsers = mock.users.filter(user => user.roles.includes('formFilling'))
        const input = {
            firstname: 'Raissa',
            surname: 'Almeida',
            number: '77999999999'
        }

        validUsers.forEach(user => {

            it('Given I am on the Organization creation form page', () => {
                cy.visit('/')
                cy.contains('Welcome, Wenier!').should('exist').and('be.visible');
                accountsWeni.typeEmailLogin(user.email)
                accountsWeni.typePasswordLogin(user.password)
                accountsWeni.clickLoginBtn()
                cy.contains('Welcome, Wenier! Tell me more about you').should('exist').and('be.visible')
            })

            it(`When I enter "${input.firstname}" in the First Name field`, () => {
                accountsWeni.typeFirstname(input.firstname)
            })
    
            it(`When I enter "${input.surname}" in the Surname field`, () => {
                accountsWeni.typeSurname(input.surname)
            })
    
            it(`When I enter "${input.number}" in the WhatsApp Number field`, () => {
                accountsWeni.typeWhatsappNumber(input.number)
            })

            it('Then I select an option in the Organization Position field', () => {
                accountsWeni.clickSelectPositionCompany()
                accountsWeni.clickOptionPositionCompany()
            })
    
            it('And I click on the Next button', () => {
                accountsWeni.clickNextBtn()
            })
        })
    })

    describe('Step About the company filled out correctly', () => {

        const input = {
            companyName: 'Teste Automatizado',
            projectName: 'Testes com cypress e javascript',
        }

        it('Given I am on the Organization creation form page', () => {
            cy.contains('Now tell me more about your company').should('exist').and('be.visible')
        })

        it(`When I enter "${input.companyName}" in the Company Name field`, () => {
            accountsWeni.typeCompanyName(input.companyName)
        })

        it('When I select an option in the Company Size field', () => {
            accountsWeni.clickSelectCompanySize()
            accountsWeni.clickOptionCompanySize()
        })

        it('When I select an option in the Segment of Activity field', () => {
            accountsWeni.clickSelectSegmentActivity()
            accountsWeni.clickOptionSegmentActivity()
        })

        it(`Then I enter "${input.projectName}" in the Project Name field`, () => {
            accountsWeni.typeProjectName(input.projectName)
        })

        it('And I click on the Next button', () => {
            accountsWeni.clickNextBtnCompany()
        })

    })

    describe('Step Start of the Project with successful creation with Agent', () => {

        const input = {
            agentName: 'Blue Giraffe',
            goalAgent: 'Answering questions and providing information about automatizada tests of software',
            textSuccessfully: 'Project successfully created',
        }

        it('Given I am on the Organization creation form page', () => {
            cy.contains('How are we going to start?').should('exist').and('be.visible')
        })

        it(`When I enter "${input.agentName}" in the Name Agent field`, () => {
            accountsWeni.typeAgentName(input.agentName)
        })

        it(`When I enter "${input.goalAgent}" in the Goal field`, () => {
            accountsWeni.typeGoalAgent(input.goalAgent)
        })

        it('Then I click on the Finish button', () => {
            accountsWeni.clickFinishBtn()
        })

        it(`And I see the text: "${input.textSuccessfully}" `, () => {
            cy.contains(input.textSuccessfully).should('be.visible')
        })

        it('And I click on the Start button', () => {
            accountsWeni.clickGetStartedBtn()
        })

    })

})