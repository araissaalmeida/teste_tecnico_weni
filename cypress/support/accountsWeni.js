class AccountsWeni{
    elements ={
        emailInput: () => cy.get('input[name="email"][placeholder="Enter your e-mail"]'),
        passwordInput: () => cy.get('.input-itself input size-md normal'),
        confirmPasswordInput: () => cy.get(''),
        signupBtn: () => cy.get(''),


    }

    typeEmail(email) {
        this.elements.emailInput().type(email);
    }
}

export default AccountsWeni;