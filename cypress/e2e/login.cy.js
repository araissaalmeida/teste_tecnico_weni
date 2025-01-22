import AccountsWeni from "../support/accountsWeni";

    const accountsWeni = new AccountsWeni()
    const mock = require('../fixtures/users.json')

describe('Login', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.contains('Welcome, Wenier!').should('exist').and('be.visible');
        //Given I am on the Login page
    })


    describe('Login with successful', () => {

        const validUsers = mock.users.filter(user => user.roles.includes('login'))
        
        validUsers.forEach(user => {

            it(`When I enter "${user.email}" in the Email field`, () => {
            accountsWeni.typeEmailLogin(user.email)
            })

            it(`Then I enter "${user.password}" in the Password field`, () => {
            accountsWeni.typePasswordLogin(user.password)
            })

            it('Then I click on the Log In button', () => {
            accountsWeni.clickLoginBtn()
            })

        })
    })
} )
    