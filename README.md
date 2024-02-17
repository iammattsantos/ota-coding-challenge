## OTA Coding Challenge

### Description

A simple note-taking API that provides basic CRUD operations using an in-memory database.

## Note

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

Environment file is already added since it does not contain any sensitive data.

### Instructions

- Clone the repository using your preferred method (HTTPS, SSH, or GitHub CLI).
- Install the required packages by running `npm install` or `yarn install`.
- To start the application, run `npm run dev` or `yarn dev`.
- The API will be accessible at `http://localhost:8080`.

### Endpoints

#### Add New Note

- **Description**: Create a new note.
- **Method**: POST
- **Path**: `/notes`
- **Request Body**:

  ```json
  {
    "title": "New Note",
    "body": "Body of the new note"
  }
  ```

- **Response**:

  - **Success**:

    - **200 Created**:

    ```json
    "Note created"
    ```

  - **Error**:

    - **400 Bad Request**:

    ```json
    "Title and body are required"
    ```

#### Get All Notes

- **Description**: Retrieve all notes.
- **Method**: GET
- **Path**: `/notes`
- **Response**:

  - **Success**:

    - **200 OK**:

    ```json
    [
      {
        "id": "abc123",
        "title": "Note 1",
        "body": "Body of Note 1"
      },
      {
        "id": "def456",
        "title": "Note 2",
        "body": "Body of Note 2"
      }
      // ... other notes
    ]
    ```

#### Get Note By Id

- **Description**: Retrieve a specific note by ID.
- **Method**: GET
- **Path**: `/notes/:id`
- **Response**:

  - **Success**:

    - **200 OK**:

    ```json
    {
      "id": "abc123",
      "title": "Note 1",
      "body": "Body of Note 1"
    }
    ```

  - **Error**:

    - **404 Not Found**:

    ```json
    "Note not found"
    ```

#### Update Note

- **Description**: Update a specific note.
- **Method**: PUT
- **Path**: `/notes/:id`
- **Request Body**:

  ```json
  {
    "title": "Note 1",
    "body": "Body of Note 1"
  }
  ```

- **Response**:

  - **Success**:

    - **204 No Content**

  - **Error**:

    - **400 Bad Request**:

    ```json
    "Title and body are required"
    ```

    - **404 Not Found**:

    ```json
    "Note not found"
    ```

#### Delete Note

- **Description**: Delete a specific note.
- **Method**: DELETE
- **Path**: `/notes/:id`
- **Response**:

  - **Success**:

    - **204 No Content**

  - **Error**:

    - **404 Not Found**:

    ```json
    "Note not found"
    ```
