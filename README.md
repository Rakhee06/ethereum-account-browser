# Ethereum Account Browser

This Application lets user to browser any Ethereum account with a valid ethereum address/block number.

### Technologies Used
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org)
- [Semantic UI](https://react.semantic-ui.com/)
- [Ethereum Scan API](https://etherscan.io/apis)

### .env file config
- Make a .env file on the root folder and populate the file with below URLS
- Make sure you have `dotenv` package installed
    
```$xslt
REACT_APP_ETHEREUM_TXN_URL=https://api.etherscan.io/api?module=account&action=txlist
REACT_APP_ETHEREUM_BLOCK_URL=https://api.etherscan.io/api?module=block&action=getblockreward
REACT_APP_ERC_TOKEN_URL=http://api.etherscan.io/api?module=account&action=tokentx
REACT_APP_API_KEY=YOUR_API_KEY
```
### Installation Steps
```$xslt
$ git clone git@github.com:Rakhee06/ethereum-account-browser.git
$ npm install
$ npm start
```
- The application will be hosted on `localhost:3000`

### Features
- State Management: Redux & Redux-Saga to store the state of the components and provided a middleware to handle side-effects
- Uses Ethereum Scan API to fetch data related to Ethereum Account and can be navigated by
    * ethereum address
    * block number
- Fetches ERC 20 Token detail with the given ethereum address

### TODO
- Webpack with Hot-Module-Replacement
- Pagination: Due to time constraint, could not implement pagination but will soon commit the changes required
- Documentation: Better documentation
- UI Design and Animation: Make better
- Test cases


