import HomePage from '../Page/HomePage';
import ConnectWalletModal from '../Page/ConnectWalletModal';

describe('Smart Contract Connectivity Tests', () => {
    beforeEach(() => {
        // Common setup tasks
        HomePage.visit();
        HomePage.assertTitle('Welcome');
        HomePage.clickConnectWalletButton();
        ConnectWalletModal.assertTitle('Connect a Wallet');
    });

    const smartContracts = [
        'Ethereum',
        'Goerli',
        'Optimism',
        'Gnosis',
        'Polygon',
        'Optimism Goerli',
        'Arbitrum',
        'Fuji',
        'Mumbai'
    ];

    smartContracts.forEach((contract) => {
        it(`Verifies connectivity with ${contract} Smart Contract`, () => {
            ConnectWalletModal.clickSelectNetworkOption(contract);
            HomePage.clickConnectWalletButton();
            ConnectWalletModal.verifySelectedContract(contract);
            ConnectWalletModal.clickCloseModalButton();
        });
    });
});

describe('QR Code Scanning Test', () => {
    beforeEach(() => {

        HomePage.visit();
    });

    it('Displays a QR code for scanning', () => {

        HomePage.clickConnectWalletButton();
        ConnectWalletModal.clickWalletConnect();
        HomePage.verifyIfQrCodeIsDisplayed();
    });
});

