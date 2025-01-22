import { defineConfig } from "cypress"

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config){
    },
    baseUrl: 'https://accounts.weni.ai/auth/realms/weni/protocol/openid-connect/auth?client_id=weni-webapp&redirect_uri=https%3A%2F%2Fdash.weni.ai%2F&state=a2cecfa6-ecc2-48e5-a91a-345eb02d9966&response_mode=fragment&response_type=code&scope=email%20profile%20openid%20offline_access&code_challenge=UGLXX9lfu7bu-VnygZ943Ci7T868bR3z3PuYIiqSElg&code_challenge_method=S256',
    testIsolation: false
    //specPattern: 'cypress/e2e/account_creation.cy.js'
  },
});


