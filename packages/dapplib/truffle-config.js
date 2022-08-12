require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift response ranch proud grace cover army gaze'; 
let testAccounts = [
"0x1cdae3dee1144c4e9f9d6ff00c91d1f597a52fb24b21a18f5ab21658ca0af348",
"0xe6e570b0d55d909fcd0ec5c24a0cf1c76c426055c543f542d20eb5041a315b7d",
"0x98c2e1e0d726b1ba33a06e7b7590366ec4a99b79ff61fe61c27ed0f30b52825c",
"0x590af4db3ec3da2a03df05e962bb2b12a3b6e6a9a4e14dbaea40aab3126e11c5",
"0xc89b19945d0c53a8c40a8d2ca912452e0ac03c3ef93c77cc7f4a5b460ca79e0e",
"0xa5868e16f8d4403a5e7fdc90b58e0daac9900b305a8e7910ac0690b523ab7239",
"0xe6c7188725a4c24a2f6af8d0937b9ecdf4905069c5e224fbcabb4b5feade0e04",
"0x37bd75a1345bc65f655097008a71a688bdc3f157b31241503aecb3e9d98a60a8",
"0x9334b0ce2f3fc0c5050cad128d88e72be01579942acea5f901dc1689a8ba21d8",
"0x36ee714661b252e05e585806d1c8c71fbbff8ca9f8ac7ec95b146c6933a541a2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

