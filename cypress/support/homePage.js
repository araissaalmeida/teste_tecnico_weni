class HomePage{
    elements = {
        newRegistrationBtn: () => cy.get('button.sign-up-button')
    }

    clickRegistrationBtn(){
        this.elements.newRegistrationBtn().click();
    }

    //navigateToRegistration() {
    //    cy.visit('https://dash.weni.ai')
    //    cy.wait(1000)
    //    cy.origin('https://accounts.weni.ai', () => {
    //            cy.get('button.sign-up-button').click();
    //            cy.contains('Become a Wenier!').should('exist').and('be.visible');
    //    });
    }
//}

export default HomePage;