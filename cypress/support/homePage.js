class HomePage {
    elements = {
        newRegistrationBtn: () => cy.get('button.sign-up-button')
    }

    clickRegistrationBtn() {
        this.elements.newRegistrationBtn().click();
    }
}
export default HomePage;