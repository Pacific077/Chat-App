# Chat-Buds

Chat-Buds is a Full Stack Chatting App.
Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.
## Tech Stack

*Client:* React JS

*Server:* Node JS, Express JS

*Database:* Mongo DB
  
## Run Locally

Clone the project

bash
  git clone https://github.com/Pacific077/Chat-App.git


Go to the project directory


Install dependencies

bash
  cd backend/
  npm install


bash
  cd frontend/
  npm install --legacy-peer-deps


Start the Server from root directory

bash
  cd backend/
  npm start

Start the Frontend from root directory

bash
  cd frontend/
  npm start


  
# Features

### Authenticaton
1. User can register with their name, emailId, password and profile picture.
2. Users can login their account by using their registered credentials.
 
### User Profile 
Allows user to create their Profile along with their Name, EmailID, Profile Picture 

### Contacts and Chats
Enables users to add contacts by using their email IDs.

### Search Users
Users can search other registered users by their name or email ID.

### One to One chat
1. Users are able to initiate and engage in one-on-one and group conversations seamlessly.
2. Users are able to view past conversations easily.
3. Users can send emojis in their text using The emoji Picker availabe.

### Message Scheduling
User can schedule a message for future delivery at specific date and time.

### Group Chat with email System for invitation purpose
1. User can create Group Chats by inviting other registered users.
2. Invitation will be sent to the invited user in their respective mail IDs.
3. Invited user can accept or reject the invitation to join the group.
4. To join the group invited user can click on the link present in the mail to accept the invite and then login to their account.
5. Admin control is implemented. Only admin of the group can add or remove group members or rename the group.

## Made By
Md Faisal Rahman  
Ankur Kumar 
Mantu Kumar
Palak Thakur