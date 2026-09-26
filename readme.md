# Node.js + Express + MongoDB Backend Setup

### 1. **Initialize the Node.js Project**

Create the `package.json` file using `npm init`.

```bash
npm init -y
```

### 2. **Install and Configure Nodemon**

Install Nodemon as a development dependency to automatically restart the server whenever code changes.

```bash
npm install nodemon --save-dev
```

### 3. **Install and Configure Dotenv**

Install `dotenv` to manage environment variables such as database URLs, API keys, and port numbers.

```bash
npm install dotenv
```

### 4. **Create the Project Folder and File Structure**

Organize the project using folders such as:

* `controllers`
* `db`
* `models`
* `routes`
* `middleware`
* `utils`
* `validators`

### 5. **Install and Initialize Express**

Install Express to build the backend server and REST APIs.

```bash
npm install express
```

### 6. **Configure Express and CORS**

Set up Express middleware such as JSON parsing and configure CORS to allow communication between the frontend and backend.

### 7. **Configure Standard `ApiResponse` and `ApiError`**

Create reusable `ApiResponse` and `ApiError` classes to maintain a consistent API response format and error-handling structure throughout the application.

### 8. **Configure Application Constants**

Create a constants file for commonly used fixed values such as user roles, HTTP status codes, and other application-wide constants.

### 9. **Install and Initialize Mongoose**

Install Mongoose to interact with MongoDB and define database schemas and models.

```bash
npm install mongoose
```

### 10. **Connect the Application to MongoDB**

Configure the MongoDB connection using Mongoose and the MongoDB connection string stored in the `.env` file.

### 11. **Create and Configure Health Check**

Create a health check controller and route to verify that the backend server is running properly.

Then, register the health check route in `app.js`.

For example:

```text
GET /api/v1/healthcheck
```

The endpoint can return a simple response such as:

```json
{
  "statusCode": 200,
  "message": "Server is running",
  "success": true
}
```

### 12. **Add an Async Handler**

Create a reusable async handler to properly catch errors from asynchronous controller functions and pass them to the application's error-handling middleware.

This prevents the need to repeatedly write `try...catch` blocks inside every asynchronous controller.

For example:

```js
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

module.exports = asyncHandler;
```

A controller can then be written as:

```js
const healthCheck = asyncHandler(async (req, res) => {
  // Controller logic
});
```

Instead of manually writing:

```js
const healthCheck = async (req, res, next) => {
  try {
    // Controller logic
  } catch (error) {
    next(error);
  }
};
```
