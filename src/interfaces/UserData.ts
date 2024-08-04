// user data fetched from github login
// todo: good to reduce the number of fields?
// might not need twitter_url for example
// todo: check what is html_url, is it needed?
// todo: good to add comments for ambiguous fields
export interface UserData {
  name: string;
  email: string;
  login: string;
  bio: string;
  avatar_url: string;
  twitter_username: string;
  html_url: string;
  location: string;
}
