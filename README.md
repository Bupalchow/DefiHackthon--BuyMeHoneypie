# DefiHackthon--BuyMeHoneypie

To add this app to your Dapp 
### Clone the Repository

```
git clone https://github.com/Bupalchow/DefiHackthon--BuyMeHoneypie.git
```

### Contract Compilation and Deployment

  Install dependencies:
   ```
   npm i
   ```
create a .env file and add TESTNET_URL for the network you want to deploy on and PRIVATE_KEY from your metamask wallet

Deploy the smart contract:
   ```
   npx hardhat run scripts/finalDeploy.js --network DeployNetwork
   ```
you can even add multiple networks as per your requirements

you will get a contract address once deployment is complete 

change the contract address in line 17 off
```
client/src/component/GetHoneypie.js
```

###setup frontend
```
cd client
```
```
npm i
```
### if you make changes to the smart contract, update the JSON file in the contracts folder with the new JSON file from the artifacts folder after deploying the smart contract.

### now you can add the GetHoneypie.js component to your app and start receiving Honeypies from your users
