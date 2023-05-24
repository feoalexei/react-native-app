import { createAsyncThunk } from '@reduxjs/toolkit';

import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';

import { auth } from '../../firebase/config';

export const authSignUp = createAsyncThunk('auth/signUp', async ({ login, email, password }, thunkAPI) => {
    try {
      const {user} = await createUserWithEmailAndPassword(auth, email, password);
    
      await updateProfile(user, {displayName: login});
      const userData = {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
        // photo: photoUrl,
        // password,
      };
      console.log(userData);
      return userData;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  });

export const authSignIn = createAsyncThunk('auth/signIn', async ({email, password }, thunkAPI) => {
    try {
      const {user} = await signInWithEmailAndPassword(auth, email, password);
      const userData = {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
        // photo: user.photoURL,
      };
      return userData;
    } catch (error) {
        console.log("error.code", error.code);
        console.log("error.message", error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
  });



export const authSignOut = () => async (dispatch, getState) => {};

