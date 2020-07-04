## OAuth-Demo
Simple implementation of a 3rd party OAuth authorization app.

## About
- This project includes an application for logging in to OAuth 3rd party auth services
- The project is built as a client/server setup
- The UI is very minimal, and just to showcase the flow of authentication process
- This repo is configured to work with the [`polar`](https://www.polar.com/accesslink-api/) API, but you should easially be able to reconfigure it to work with any 3rd party OAuth service.

## Installation
You need [`node`](https://nodejs.org/en/) and [`npm`](https://www.npmjs.com/) to run this application.

```bash
 git clone https://github.com/LarsL123/OAuth-Demo.git
 cd OAuth-Demo
 npm i 
 npm start 
```

## Configuration

The project is configured using the npm package [`config`](https://github.com/lorenwest/node-config)
 ```json
{
  "authService": {
    "name": "polar",
    "OAuthUrl": "https://polarremote.com/v2/oauth2/token",
    "clientToken": "CLIENT_AUTH_STRING",
    "redirect_uri": "http://localhost:4001/auth"
  },
  "appPort": 4001
}
 ````
 
 You can edit any of the fields in config/default.json to fit your needs.
 You can add your clientToken in the clientToken field or, you can add it as an environment variable called CLIENT_AUTH_STRING. Ether will work. Just make sure NOT to post your secret key to ANY source control site.
 
 You if you want to change the auth server, make sure to also update the link attribute in frontend/index.html
