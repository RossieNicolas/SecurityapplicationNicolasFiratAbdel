/* eslint no-restricted-globals: 0 */

import auth0 from 'auth0-js';
const LOGIN_SUCCESS_PAGE = "/contact";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
    auth0 = new  auth0.WebAuth({
        domain: "dev-h1jx91ic.eu.auth0.com",
        clientID: "DQ2KDU2LUrlToeXBfMrLAjt26VmzrGzh",
        redirectUri:"https://musing-jang-1930f8.netlify.com/callback",
        audience: "https://dev-h1jx91ic.eu.auth0.com/userinfo",
        //audience: "http://securityapplicationAPapi.com",
        responseType: "token id_token",
        scope: "openid profile read:messages"
    })
    constructor(){
        this.login = this.login.bind(this);
    }
    login(){
        this.auth0.authorize();
    }
    handleAuthentication(){
        this.auth0.parseHash((err, authResults) =>{
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            }
            else if (err){
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        });
    }
    isAuthenticated(){
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;

    }
    logout(){
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem("message");
        localStorage.removeItem("Name");
        location.pathname = LOGIN_FAILURE_PAGE;
    }

}