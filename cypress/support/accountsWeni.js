class AccountsWeni{
    elements ={
        emailInput: () => cy.get('input[name="email"][placeholder="Enter your e-mail"]'),
        passwordInput: () => cy.get('input[name="password"][placeholder="Enter a password"]'),
        confirmPasswordInput: () => cy.get('input[name="password-confirm"][placeholder="Confirm your password"]'),
        signupBtn: () => cy.get('button.login-button.unnnic-button--primary'),

        emailLogin: () => cy.get('input[name="username"][placeholder="Enter your username or e-mail"]'),
        passwordLogin: () => cy.get('input[name="password"][placeholder="Enter your password"]'),
        loginBtn: () => cy.get('button.login-button.unnnic-button--primary'),

        firstnameInput: () => cy.get('input[placeholder="Your first name"]'),
        surnameInput: () => cy.get('input[placeholder="Your surname"]'),
        whatsappNumberInput: () => cy.get('div.whatsapp_number__input_container__number input'),
        positionSelect: () => cy.get('input[placeholder="Select your position"]'),
        positionOption: () => cy.get('[data-testid="option"][title="I am a student"]'),
        nextBtn: () => cy.get('[data-testid="button-label"]'),

        companyNameInput: () => cy.get('input[placeholder="Company name"]'),
        companySizeSelect: () => cy.get('[placeholder="Select size"]'),
        companySizeOption: () => cy.get('[data-testid="option"][title="Only me"]'),
        segmentActivitySelect: () => cy.get('[placeholder="Select the segment"]'),
        segmentActivityOption: () => cy.get('[data-testid="option"][tabindex="8"]'),
        projectNameInput: () => cy.get('[placeholder="Project name"]'),
        nextBtnCompany: () => cy.get('.unnnic-button--primary[data-v-ed84dbab]'),

        agentNameInput: () => cy.get('input[placeholder="Tainá"]'),
        agentGoalInput: () => cy.get('.unnnic-text-area__textarea.unnnic-text-area__textarea--size-md.unnnic-text-area__textarea--type-normal'),
        finishBtn: () => cy.get('.unnnic-button--primary'),
        getStartBtn: () => cy.get('[class="unnnic-button__label"][data-testid="button-label"]'),
    }

    typeEmail(email) {
        this.elements.emailInput().type(email)
    }

    typePassword(text) {
        if(!text) return;
        this.elements.passwordInput().type(text)
    }

    typeConfirmPassword(text){
        if(!text) return;
        this.elements.confirmPasswordInput().type(text)
    }

    clickSignupBtn() {
        this.elements.signupBtn().click()
    }

    typeEmailLogin(email) {
        this.elements.emailLogin().type(email)
    }

    typePasswordLogin(text) {
        if(!text) return;
        this.elements.passwordLogin().type(text)
    }

    clickLoginBtn() {
        this.elements.loginBtn().click()
    }

    typeFirstname(text) {
        if(!text) return;
        this.elements.firstnameInput().type(text)
    }

    typeSurname(text) {
        if(!text) return;
        this.elements.surnameInput().type(text)
    }

    typeWhatsappNumber(text) {
        if(!text) return;
        this.elements.whatsappNumberInput().type(text)
    }

    clickSelectPositionCompany() {
        this.elements.positionSelect().click()
    }

    clickOptionPositionCompany(){
        this.elements.positionOption().click()
    }

    clickNextBtn(){
        this.elements.nextBtn().click()
    }

    typeCompanyName(text) {
        if(!text) return;
        this.elements.companyNameInput().type(text)
    }

    clickSelectCompanySize() {
        this.elements.companySizeSelect().click()
    }

    clickOptionCompanySize(){
        this.elements.companySizeOption().click()
    }

    clickSelectSegmentActivity(){
        this.elements.segmentActivitySelect().click()
    }

    clickOptionSegmentActivity(){
        this.elements.segmentActivityOption().click()
    }

    typeProjectName(text) {
        if(!text) return;
        this.elements.projectNameInput().type(text)
    }

    clickNextBtnCompany(){
        this.elements.nextBtnCompany().click()
    }

    typeAgentName(text) {
        if(!text) return;
        this.elements.agentNameInput().type(text)
    }

    typeGoalAgent(text) {
        if(!text) return;
        this.elements.agentGoalInput().type(text)
    }

    clickFinishBtn(){
        this.elements.finishBtn().click()
    }

    cllickGetStartedBtn(){
        this.elements.getStartBtn().click()
    }

}

export default AccountsWeni;