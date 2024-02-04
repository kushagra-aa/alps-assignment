# Alps Assignment

Built with 🤍 For You!

## Features

- Zoho Creator API Integration.
- Keep track of Leave Requests.
- Minimal UI.

> [Zoho Creator](https://creatorapp.zoho.in/dev_it/my-first-project#All_Requests)

## Technologies Used

- **Frontend:** ReactJS, TypeScript
- **Frontend:** Node.js, Express.js, TypeScript

## Screenshots

### Dashboard Page

![image](https://github.com/kushagra-aa/alps-assignment/assets/68841296/c28c0e2e-f8a2-4896-9756-1aac621bb2be)


### Add Modal

![image](https://github.com/kushagra-aa/alps-assignment/assets/68841296/7505525e-b4b2-4707-b191-cd96cfa7e526)


### Edit Modal

![image](https://github.com/kushagra-aa/alps-assignment/assets/68841296/21cd3519-bca0-478a-a814-0ec0f4f03ca7)

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/kushagra-aa/alps-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd alps-assignment
   ```

3. Setup the Backend

   ```bash
   cd backend
   ```

    a. Install dependencies

    ```bash
    yarn
    ```

    b. Add `.env` file

    ```setting
    PORT = <3000>

    ALLOWED_ORIGIN = <'*'>

    ZOHO_CLIENT_ID = <zoho client ID>
    ZOHO_CLIENT_SECRET = <zoho client secret>
    ZOHO_CLIENT_REFRESH_TOKEN = <zoho client refresh token>
    ZOHO_ACCOUNTS_BASE_URL = <zoho accounts base URL>
    ZOHO_CREATOR_BASE_URL = <zoho creator base URL>
    ZOHO_ACCOUNT_OWNER_NAME = <zoho account owner name>
    ZOHO_APP_LINK_NAME = <zoho app link name>
    ZOHO_RECORD_LINK_NAME = <zoho record link name>
    ZOHO_FORM_LINK_NAME = <zoho form link name>

    MY_ACCESS_TOKEN = <client token>
    ```

4. Setup the Frontend

   ```bash
   cd frontend
   ```

    1. Install dependencies

    ```bash
    yarn
    ```

    b. Add `.env` file

    ```setting
    VITE_ACCESS_TOKEN = <client token>
    ```

5. Run Backend

   ```bash
   cd frontend; yarn dev
   ```

6. Run Backend

   ```bash
   cd backend; yarn dev
   ```
