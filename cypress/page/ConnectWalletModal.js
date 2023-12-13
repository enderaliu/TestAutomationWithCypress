class ConnectWalletModal {
     
    assertTitle(title) {
        cy.get('#rk_connect_title')
          .scrollIntoView()
          .should('exist')
          .and('contain', title);
    }

    clickSelectNetworkButton() {
        cy.get('[data-bs-toggle="dropdown"]').as('networkDropdown');
        cy.get('@networkDropdown').should('be.visible').click();
    }

    clickSelectNetworkOption(optionText) {
        this.clickSelectNetworkButton();
        cy.get('[data-testid^="network-select-item"]').as('networkSelectItem');
        cy.get("@networkSelectItem").contains(optionText)
           .scrollIntoView()
           .should('be.visible')
           .click();    
    }

    verifySelectedContract(expectedContractName) {
        cy.get('.high-contrast.font-semibold').each(($el) => {
        
            if ($el.text().includes(expectedContractName)) {
                cy.wrap($el)
                  .scrollIntoView()
                  .should('contain', expectedContractName);
                return false; 
            }
        });
    }

    clickCloseModalButton() {
        cy.get('button[aria-label="Close"]').as('closeButton');
        cy.get('@closeButton').should('be.visible').click();
    }

    clickWalletConnect() {
        cy.get('[data-testid="rk-wallet-option-walletConnect"]').as('walletConnect');
        cy.get('@walletConnect').should('be.visible').click();
    }

    clickOpenButtonFromWalletModal() {
        cy.contains('button', 'OPEN').as('openButton');
        cy.get('@openButton').scrollIntoView().should('be.visible').click();
    }

    assertDesktopTitleExists() {
        cy.get('.w3m-desktop-title')
          .scrollIntoView()
          .should('exist')
          .and('have.length.at.least', 1);
    }
}

export default new ConnectWalletModal();