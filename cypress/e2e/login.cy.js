import AccountsWeni from "../support/accountsWeni";

    const accountsWeni = new AccountsWeni()
    const mock = require('../fixtures/users.json')

describe('Login', () => {


    describe('Login with successful', () => {

        const validUsers = mock.users.filter(user => user.roles.includes('login'))
        
        validUsers.forEach(user => {

            it('Given I am on the Login page', () => {
            cy.visit('/')
            accountsWeni.clickSelectLanguage()
            cy.contains('Welcome, Wenier!').should('exist').and('be.visible');
            })

            it(`When I enter "${user.email}" in the Email field`, () => {
            accountsWeni.typeEmailLogin(user.email)
            })

            it(`Then I enter "${user.password}" in the Password field`, () => {
            accountsWeni.typePasswordLogin(user.password)
            })

            it('Then I click on the Log In button', () => {
            accountsWeni.clickLoginBtn()
            })

            it('Then login successful', () => {
                cy.get('h1').contains('Your organizations').should('be.visible');
                cy.get('section.profile').click();
                cy.get('[data-test="logout"').click();
                cy.get('span[data-testid="button-label"').contains('Logout').should('be.visible').click();
            })
        })
    })
} )
    