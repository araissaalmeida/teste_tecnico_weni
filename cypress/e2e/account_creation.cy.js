import HomePage from "../support/homePage";
import AccountsWeni from "../support/accountsWeni";

    const homePage = new HomePage();
    const accountsWeni = new AccountsWeni()
    
describe('Account Creation', () => {

    describe('Create account successfully', () => {

        const input = { 
            email: '',
        }

        it('Given I am on the account creation page', () => {
            homePage.navigateToRegistration();
        })
        
        it(`When I enter in the email field`, () => {
        accountsWeni.elements.emailInput().should(element => { debugger })

           // cy.wait(1000);
           // cy.get('#greetings').should('exist').and('be.visible');
        //    accountsWeni.typeEmail(input.email);
        })
        //it(`Then I enter ' ' in the password field`)
      //  it(`Then I enter ' ' in the confirm password field`)
       // it(`Then I click on the 'Sign up' button`)
       // it(``)


    })


})