class HomePage{
    elements = {
        newRegistrationBtn: () => cy.get('button.sign-up-button')
    }

    navigateToRegistration() {
        cy.visit('https://accounts.weni.ai/auth/realms/weni/protocol/openid-connect/auth?client_id=weni-webapp&redirect_uri=https%3A%2F%2Fdash.weni.ai%2F&state=d8fc7f8d-7949-4c24-99d9-5fae7d03e36e&response_mode=fragment&response_type=code&scope=email%20profile%20openid%20offline_access&code_challenge=-AFgd4VUKMtH1MFUxJTFwMFYQJ5l5Ga5CSXEv6-3PO4&code_challenge_method=S256');
        cy.intercept('GET', '**/login-actions/registration?*').as('registrationPage');
        this.elements.newRegistrationBtn().click();
        cy.wait('@registrationPage');
    }
}

export default HomePage;