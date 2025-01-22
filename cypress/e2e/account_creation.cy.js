import HomePage from "../support/homePage";
import AccountsWeni from "../support/accountsWeni";

    const homePage = new HomePage();
    const accountsWeni = new AccountsWeni()
    const mock = require('../fixtures/users.json')
    
describe('Account Creation', () => {
    
    describe('Create account successfully', () => {

        const validUsers = mock.users.filter(user => user.roles.includes('createAccount'))
        const input ={
            textValidEmail: 'E-mail não confirmado! Acesse a mensagem que enviamos para a sua caixa de entrada e confirme.',
        }

        validUsers.forEach(user => {

            it('Given I am on the account creation page', () => {
                cy.visit('/')
                accountsWeni.clickSelectLanguage();
                homePage.clickRegistrationBtn();
                cy.contains('Become a Wenier!').should('exist').and('be.visible');
               })

            it(`When I enter "${user.email}" in the Email field`, () => {
                accountsWeni.typeEmail(user.email)
            })
    
            it(`Then I enter "${user.password}" in the Password field`, () => {
                accountsWeni.typePassword(user.password)
            })
    
            it(`Then I enter "${user.password}" in the Confirm password field`, () => {
                accountsWeni.typeConfirmPassword(user.password)
            })
           
            it('Then I click on the Sign up button', () => {
                accountsWeni.clickSignupBtn()
            })
    
            it(`And I see the text: "${input.textValidEmail}"`, () => {
                cy.get('#modal').contains(input.textValidEmail).should('be.visible')
            })
        })
    })
 })