
<h2 align="center">IIT GUWAHATI VIRTUAL QUEUE APPLICATION</h2>
<h4 align="left">A React native based application with NodeJs server powered by MySql database. The following repository is a showcasing for the project,The main repository is private for now(Currently work is in progress on the new Backend and frontend folder). These are the some interfaces of the Application</h4>

**A React-Node Based  Application**  

-------
#### Some interfaces fro students side
![campuscart1](https://github.com/iks1/PickMeUp/assets/94672267/7a81f03f-c891-4547-a230-8ee209db2f24)

![campuscart2](https://github.com/iks1/PickMeUp/assets/94672267/81cf955e-6d88-41cd-b55f-7c92c4a51d02)
#### Stationaries side for printing stuffs remotely
![campuscart3](https://github.com/iks1/PickMeUp/assets/94672267/06e28695-e173-43e5-897c-618a28406953)

![campuscart4](https://github.com/iks1/PickMeUp/assets/94672267/c98be325-ea74-4724-9a1e-f56b9eb5d0fc)


# Development Readme


### Prerequisites

1.  [Git](https://git-scm.com/downloads).
2.  [Node & npm](https://nodejs.org/en/download/) _(version 18 or greater)_.
3.  [nvm](https://dev.to/skaytech/how-to-install-node-version-manager-nvm-for-windows-10-4nbi).
4.  Clone of the repo.

## Installation of the Project

1. Clone the project by -  `git clone https://github.com/yamiamit/Campus_Cart.git`.

## Running the Project

### Steps to run backend

In order to install all packages follow the steps below:

 1. Move to <b> OldCode/CC_Backend </b> folder
 2. To make sure you have the required npm version run -  `nvm use 18`
 3. If you don't have the desired version of node install it by -  `nvm install 18` and then run -  `nvm use 18`
 4. Then to install all the required packages run -  `npm install`
 5. Then run -  `node index.js`
 6. Your server should start!

 > The server will be served on **http://localhost:8080/**

### Steps To Set Up Frontend
 
 #### customer side
 1. Move to <b> OldCode/CC_Customer </b>
 2. `npm install`
 3. `npx expo start`
 4. To run the application install the Expo Go application from Play Store and scan the QR Code or run  it on emulator

 #### shopkeeper side
 1. Move to <b> OldCode/CC_Shop </b> and repeat the above process


### Directory Structure

The following is a high-level overview of relevant files and folders.

```
OldCode/CC_Backend/
├── config/
│   ├── default.js
│   └── ...
├── controllers/
|   ├── shopkeeper.js
|   ├── user.js
|   └── ...
├── middlewares/
|   ├── validation
|   |    ├──shopkeeper.js
|   |    └──user.js
|   └── auth.js
├── models/
|   ├── customer_model.js
|   ├── db.js
|   ├── order_model.js
|   └── shop_model.js
├── routes/
|   └── ...
├── .gitignore
├── package-lock.json
└── package.json

OldCode/CC_Shop/
├── assets/
│   └── ...
├── components/
|   ├── Completed.js
|   ├── CompletedActive.js
|   ├── Google.js
|   ├── InputField.js
|   ├── Navbar.js
|   ├── Pending.js
|   └── ...
├── pages/
|   ├── Getstarted.js
|   ├── Login.js
|   └── PendingHomePage.js
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── metro.config.js
├── package-lock.json
├── package.json
└── m-cli.config.js

OldCode/CC_Customer/
├── assets/
│   └── ...
├── components/
|   ├── FilterCard.js
|   ├── FoodCard.js
|   ├── FoodCard2.js
|   ├── FoodItemCard.js
|   ├── FoodPopUp.js
|   ├── Google.js
|   └── ...
├── context/
|   ├── AuthContext.js
|   └── ...
├── pages/
|   ├── BillingPage.js
|   ├── foodDashboard.js
|   ├── FoodShopPage.js
|   ├── GetStarted.js
|   ├── Login.js
|   ├── printDashboard.js
|   ├── SignUp.js
|   └── ...
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── metro.config.js
├── package-lock.json
├── react-native.config.js
├── package.json
└── m-cli.config.js


```
