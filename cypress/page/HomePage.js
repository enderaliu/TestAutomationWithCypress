class HomePage {
    visit() {
        cy.visit('/');
    }

    assertTitle(title) {
        cy.title().should('include', title);
    }

    clickConnectWalletButton() {
        cy.get('[data-testid="rk-connect-button"]').click();
    }

    clickSelectNetwork() {
        cy.get('.btn-outline-primary').click();
    }

    verifyIfQrCodeIsDisplayed() {
        cy.wait(2000);
        cy.get('div[role="document"]').contains('Scan with your phone').should('exist');
        
    }

}
export default new HomePage();
