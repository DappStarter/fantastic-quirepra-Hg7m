require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million purchase install entire off three'; 
let testAccounts = [
"0xbc281a974ec102db6941db70cf90cb7a5c385c3839c7ee9bdad25dee6b53bde4",
"0x2b9783abd2b2593bc5dbcf58e7677bc2e3e69952f8bdab37111639949b39cebc",
"0xbee494857dc1b7d69b17abcb43999200a491eca3d6cace5ce4556cca72ec825f",
"0xf9e64408cd9159bb7414dcc943967a1cd8263a4f7f61844f0d442b3057d4c462",
"0xa52c0268c1b091de697778cd08d8c258a63f7eb438237accdf9f125600a10ff3",
"0x4a3ab2bbb01dfaf458e85a79af08d4872582fe8edf919a3310b2bf2e88d56b6b",
"0xaff7dbd091bcc5b78a278a7b621696f045cea5ca0fe1e865d769b1256381a643",
"0xc4b368ab33949ba94078a95995efbb1a62272ee3e2b02e3ddb92a1cd3f81878a",
"0xe0293fc0ee104a38d94f5de6b5315e9f8b96ea3a35ccdad8d702211c3e406b14",
"0xcb61543a72cba0f2924d2867170580d906b6e1a960e8a4c981935d8cb01935da"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


