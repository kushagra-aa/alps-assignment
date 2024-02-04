# Project Documentation

## Overview

This document details the steps taken, challenges faced, and technology stack used to complete the project.

## Technology Stack

- **Backend:** Express.js, Node.js
- **Frontend:** ReactJS, TypeScript
- **Styling:** CSS
- **Data Source:** Zoho Creator API

## Steps Taken

1. Gathering Resources:
    - Identified and collected relevant resources, including Zoho Creator API documentation.
2. Project Initialization:
    - Established project directory structure using best practices (e.g., Node.js-Express.js-Typescript or ViteJS-ReactJS-Typescript).
    - Initialized Git version control and made an initial commit.
3. Research and Planning:
    - Researched Zoho Creator APIs for:
        - OAuth (AccessToken, RefreshToken)
        - CRUD operations (Create, Read, Update, Delete)
    - Determined data clustering logic based on project requirements.
4. Zoho API Integration:
    - Implemented access token generation and refresh mechanisms.
    - Integrated relevant APIs for data retrieval, creation, editing, and deletion.
5. Express.js Server Setup:
    - Defined app structure, routes, controllers, and middleware components.
    - Implemented appropriate HTTP routes for data access and management.
6. Middleware Logic:
    - Established client authentication using environment variables.
    - Implemented Zoho authentication, checking access tokens and refreshing if needed.
7. Writing and Styling the UI (TSX):
    - Structured content and layout using React components.
    - Included tables and modals for data presentation and interaction.
    - Applied CSS styles for visual appeal and clarity.
8. Form and API Handling:
    - Developed functionalities for adding, editing, retrieving, refreshing, and deleting data using respective API endpoints.
9. Data Processing:
    - Implemented logic to handle undefined fields and potential data errors.
10. Data Clustering:
    - Defined the clustering logic based on chosen fields (e.g., department, insurance type) and algorithm (if applicable).
11. README.md Creation:
    - Provided basic project information, setup instructions, and usage details.

## Challenges Faced

- Zoho Creator API Integration:
  - The Zoho Creator API documentation was found to be inconsistent and challenging to navigate, leading to difficulties in understanding available functionality and implementing specific operations.
  - The API returned several unexpected errors, requiring additional debugging and troubleshooting to determine the root cause and implement workarounds.

- Design and User Interface:
  - The project lacked a specific design or style guide, necessitating the creation of a basic UI from scratch without clear direction.
  - This resulted in potential inconsistencies in layout and styling across different components.

## Conclusion

Despite encountering certain challenges, such as difficulties with Zoho Creator API integration and the absence of a defined design, this project was successfully completed, fulfilling the assigned requirements. The final product provides a functional and user-friendly interface for managing data through CRUD operations and data clustering.
