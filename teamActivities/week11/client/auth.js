//Auth class which provides basic JWT based authentication for our app.
// Requires: access to the makeRequest  functions
import { makeRequest } from './authHelpers.js';
export default class Auth {
  constructor() {
    this.jwtToken = '';
    this.user = {};
  }

  async login(callback) {
    // replace the ids below with whatever you used in your form.
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const postData = {
      email: username.value,
      password: password.value  
    };
    try {
      const data = await makeRequest('login', 'POST', postData);
      this.jwtToken = data.accessToken;

      this.user = await this.getCurrentUser(username.value);
      // hide the login form.
      document.getElementById('login').classList.add('hidden');
      // clear the password
      password.value = '';
      
      // since we have a token let's go grab some data from the API by executing the callback if one was passed in
      if(callback) {
        callback();
      }
    } catch (error) {
      // if there were any errors display them
      console.log(error);
    }
  }
  // uses the email of the currently logged in user to pull up the full user details for that user from the database
  async getCurrentUser(email) {
    try {
      const data = await makeRequest(
      'users?email=' + email,
      'GET',
      null,
      this.jwtToken
      );
        
    } catch (error) {
      // if there were any errors display them
      console.log(error);
    }
  }
  
  set token(value) {
    
  }
  get token() {
    return this.jwtToken;
  }
} // end auth class