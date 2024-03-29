**User Management System**

### API Access Information
I utilized https://reqres.in/ for user registration and data retrieval. To access the main page, please use the provided credentials:
```
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
```
Feel free to make use of this option to explore the application's functionality.

### Overview
This project is a User Management System built using React, Redux, TypeScript, and CSS. It allows registered users to view a list of user cards on the homepage and access detailed information about each user by clicking on their respective card. The system is responsive and includes features for registration, login, user authentication, user listing, user details, and persistent liking of users.

### Features
- Registration and login functionality using email/password authentication.
- Input validation for all user inputs, displaying error messages for invalid data.
- Persistent user authentication using browser memory storage.
- Logout functionality to clear user authentication token from browser memory.
- Responsive design for seamless user experience across different devices.
- User listing page displaying all registered users.
- User details page showing specific user information.
- Ability to like/unlike users, with likes persisting across page reloads.

### Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for managing application state.
- **TypeScript**: Superset of JavaScript that adds static typing to the language.
- **CSS**: Styling language used for designing the user interface.
- **React Router**: Library for declarative routing in React applications.
- **Axios**: Promise-based HTTP client for making API requests.
- **JWT**: JSON Web Tokens used for user authentication.
- **reqres.in API**: Mock API service used for simulating user data.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/your_username/user-management-system.git
   ```
2. Navigate to the project directory:
   ```
   cd user-management-system
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the application:
   ```
   npm start
   ```
5. Open your web browser and visit `http://localhost:3000` to view the application.

### Usage
1. Register using your email and password.
2. Explore the list of user cards on the homepage.
3. Click on a user card to view detailed information about the user.
4. Like or unlike users by clicking on the heart icon.
5. Logout to clear your authentication token and log out of the system.
