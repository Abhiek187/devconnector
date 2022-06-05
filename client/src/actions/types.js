// Alert
// Show an alert
export const SET_ALERT = "SET_ALERT";
// Remove the alert after some time
export const REMOVE_ALERT = "REMOVE_ALERT";

// Auth
// New user registered successfully
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
// Failed to register a new user (invalid fields, email already exists, etc.)
export const REGISTER_FAIL = "REGISTER_FAIL";
// User account exists
export const USER_LOADED = "USER_LOADED";
// User authentication error (no/invalid token)
export const AUTH_ERROR = "AUTH_ERROR";
// Logged in successfully
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// Failed to log in (invalid credentials, bad token, etc.)
export const LOGIN_FAIL = "LOGIN_FAIL";
// User logs out
export const LOGOUT = "LOGOUT";
// Don't show the current user's profile
export const CLEAR_PROFILE = "CLEAR_PROFILE";

// Profile
// Show the current user's profile
export const GET_PROFILE = "GET_PROFILE";
// An error occurred while performing CRUD operations on a profile
export const PROFILE_ERROR = "PROFILE_ERROR";
// Add or remove the user's experience/education
export const UPDATE_PROFILE = "UPDATE_PROFILE";
// Remove the user's profile and posts (likes and comments from other users' posts stay)
export const ACCOUNT_DELETED = "ACCOUNT_DELETED";
// Show all users' profiles
export const GET_PROFILES = "GET_PROFILES";
// Get the user's GitHub repos
export const GET_REPOS = "GET_REPOS";

// Post
// Get all users' posts
export const GET_POSTS = "GET_POSTS";
// An error occurred while performing CRUD operations on a post
export const POST_ERROR = "POST_ERROR";
// Like/unlike a post
export const UPDATE_LIKES = "UPDATE_LIKES";
// Remove the current user's post
export const DELETE_POST = "DELETE_POST";
// Create a new post
export const ADD_POST = "ADD_POST";
// Show the user's post
export const GET_POST = "GET_POST";
// Add a comment to the current post
export const ADD_COMMENT = "ADD_COMMENT";
// Remove a comment from the current post
export const REMOVE_COMMENT = "REMOVE_COMMENT";
