import HomePage from "../support/homePage";
import AccountsWeni from "../support/accountsWeni";

    const homePage = new HomePage();
    const accountsWeni = new AccountsWeni()
    
describe('Account Creation and Login', () => {

    const input ={
        email: '',
        password: '',
        textValidEmail: 'E-mail não confirmado! Acesse a mensagem que enviamos para a sua caixa de entrada e confirme.',
    }
    
    describe('Create account successfully', () => {
       const input ={
            email: '',
            password: '',
            textValidEmail: 'E-mail não confirmado! Acesse a mensagem que enviamos para a sua caixa de entrada e confirme.',
        }

       it('Given I am on the account creation page', () => {
        cy.visit('/')
        homePage.clickRegistrationBtn();
        cy.contains('Become a Wenier!').should('exist').and('be.visible');
       })

       it(`When I enter "${input.email}" in the Email field`, () => {
            accountsWeni.typeEmail(input.email)
        })

        it(`Then I enter "${input.password}" in the Password field`, () => {
            accountsWeni.typePassword(input.password)
        })

        it(`Then I enter "${input.password}" in the Confirm password field`, () => {
            accountsWeni.typeConfirmPassword(input.password)
        })
       
        it('Then I click on the Sign up button', () => {
            accountsWeni.clickSignupBtn()
        })

        it(`And I see the text: "${input.textValidEmail}"`, () => {
            cy.contains(input.textValidEmail).should('be.visible')
        })

        it('And after confirming my account, I see the system home screen', () => {
            cy.contains('').should('be.visible')
        })

    })

    describe('Login with account create', () => {
        const input ={
            email: 'raii.anjos@gmail.com',
            password: 'Raissa@1234',
        }

       it('Given I am on the account creation page', () => {
        cy.visit('/')
        cy.contains('Welcome, Wenier!').should('exist').and('be.visible');
       })

       it(`When I enter "${input.email}" in the Email field`, () => {
        accountsWeni.typeEmailLogin(input.email)
       })

       it(`Then I enter "${input.password}" in the Password field`, () => {
        accountsWeni.typePasswordLogin(input.password)
       })

       it('Then I click on the Log In button', () => {
        accountsWeni.clickLoginBtn()
        })

        after(() => {
            cy.clearAllLocalStorage(); })

    })

 })
