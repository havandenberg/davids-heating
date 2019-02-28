import * as firebase from 'firebase';

// Move to types file when creating User type
const USER_DEFAULTS = {};

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  messagingSenderId: '',
  projectId: '',
  storageBucket: '',
};
firebase.initializeApp(config);

export type AuthProvider = 'facebook' | 'google' | 'email';
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const getAuthProvider = (provider: AuthProvider) => {
  switch (provider) {
    case 'facebook':
      return facebookProvider;
    case 'google':
      return googleProvider;
    default:
      return null;
  }
};

export const auth = firebase.auth();

export const createNewUser = (user: firebase.User) => ({
  ...USER_DEFAULTS,
  email: user.email || '',
  firstName: user.displayName || '',
  lastName: user.displayName || '',
});

export default firebase;
