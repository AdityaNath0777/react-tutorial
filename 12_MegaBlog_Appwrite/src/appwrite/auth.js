import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// // basic steps for signup authentication

// // 1. create a user
// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// // Step 2. create an account for user
// const account = new Account(client);

// const user = await account.create(
//     ID.unique(),
//     'email@example.com',
//     'password'
// );

// better way
export class AuthService {
  // let's create some props
  client = new Client();
  account; // don't initialise till we call the constructor as it would be wastage of resources of init. already

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // docs says account creation is a promise i.e. async will be used
  async createAccount({ email, password, name }) {
    // promieses might be failed
    // so use try-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        mame
      );

      if (userAccount) {
        // if account has been created, let's log-in user's account or do sometging else as per requirement

        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const currUser = await this.account.get();
      if (currUser) {
        return currUser;
      } else return null;
    } catch (error) {
      throw error;
      // or
      // console.log("Appwrite service :: getCurrentUser :: error ", error);
    }

    // in case there is some problem in try-catch
    return null;
  }


	// logOut
	async logout(){
		try{
			// to logout of all sessions
			return await this.account.deleteSessions();

			// to logout current session ONLY
			// return async this.account.deleteSession();
		}catch(error){
			throw error;
		}
	}
}

// to prevent using 'new' keyword everytime,
// we will first create an objet of this class
// then export it

const authService = new AuthService();
export default authService;