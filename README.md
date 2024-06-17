Project Management App
A simple project management application built with React, Redux, and styled-components.
Features

User authentication (login and logout)
Dashboard displaying a list of projects
Project details page showing tasks associated with each project
Add and remove tasks from projects

Technologies Used

React
Redux
styled-components
react-router-dom
uuid

Getting Started
Prerequisites

Node.js (v12 or higher)
npm (v6 or higher) or yarn (v1 or higher)

Installation

Clone the repository:
bashCopygit clone https://github.com/your-username/project-management-app.git

Change to the project directory:
bashCopycd project-management-app

Install the dependencies:
bashCopynpm install
# or
yarn install


Running the App
To start the development server, run:
bashCopynpm start


src/components: Contains the main components of the application (Dashboard, Login, ProjectDetails)
src/redux: Contains the Redux reducers and store configuration
src/routes: Contains the application routes and private route component
src/utils: Contains utility functions (useAuth hook)

Dummy Data
The application comes with some dummy data for projects and tasks. You can find and modify this data in the projectReducer.js and taskReducer.js files located in the src/redux directory.
Authentication
The authentication is a simple mock implementation. To log in, use the following credentials:

Username: sahajjain78@gmail.com
Password: Test@1234

