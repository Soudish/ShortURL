# ShortURL

## Introduction

**ShortURL** is a lightweight URL shortening service built with **Node.js**, **Express**, and **MongoDB**. It allows users to convert long URLs into concise, easy-to-share links while tracking click analytics for each short URL. The project features a simple REST API backed by a MongoDB database using the Mongoose ORM and a minimalist frontend developed with plain HTML, CSS, and JavaScript. The service employs **nanoid** to generate unique short IDs for URLs, ensuring both efficiency and reliability fileciteturn0file0, fileciteturn0file2.

## Features

- **URL Shortening**: Generate a unique, shortened URL for any provided long URL.
- **Redirection**: Accessing a short URL automatically redirects users to the original URL.
- **Click Analytics**: Each short URL records visit history including click timestamps, allowing for real-time analytics.
- **REST API**: A robust API is provided with endpoints to create URLs and fetch analytics data.
- **Frontend Interface**: A clean and responsive user interface is available for non-developers to quickly shorten URLs and view analytics fileciteturn0file3.
- **Cross-Origin Support**: CORS is enabled on the backend for seamless integration with different frontends and services fileciteturn0file2.

Below is a summary table of the project’s key components and dependencies:

| Component       | Technology / Library                 | Description                                                  |
|-----------------|--------------------------------------|--------------------------------------------------------------|
| Backend         | Node.js, Express, Mongoose, nanoid   | Handles URL creation, redirection, and analytics tracking    |
| Frontend        | HTML, CSS, JavaScript                | Provides a responsive interface for URL shortening           |
| Database        | MongoDB                              | Stores URL data and visit histories                           |
| Development Tool| nodemon                              | Facilitates automatic restarting of the server during development |

## Requirements

Before installing ShortURL, ensure that your system meets the following requirements:

- **Node.js** (v12 or higher) and **npm** installed on your machine.
- A running instance of **MongoDB** (configuration in the source defaults to `mongodb://localhost:27017/short-url`).
- A modern web browser to access the frontend interface.

## Installation

Follow these steps to set up ShortURL on your local machine:

1. **Clone the Repository**

   Open your terminal and run:
   ```
   git clone https://github.com/Soudish/ShortURL.git
   ```

2. **Install Backend Dependencies**

   Navigate to the backend folder:
   ```
   cd ShortURL/backend
   ```
   Install the required dependencies using npm:
   ```
   npm install
   ```
   This will install packages such as **express**, **mongoose**, **cors**, **nanoid**, and **nodemon** as specified in the [package.json](fileciteturn0file5).

3. **Configure MongoDB**

   Ensure MongoDB is running on your local machine. The default connection string is set in `index.js`:
   ```js
   connectToMongoDB('mongodb://localhost:27017/short-url')
   ```
   Adjust this connection string if your MongoDB instance is hosted elsewhere.

4. **Start the Server**

   Launch the backend server using nodemon:
   ```
   npm start
   ```
   The server will start on port **8001** and is configured to print a confirmation message upon successful connection to MongoDB fileciteturn0file2.

5. **Open the Frontend**

   Navigate to the frontend folder:
   ```
   cd ../frontend
   ```
   Open the `index.html` file in your preferred browser. The frontend connects to the backend API at `http://localhost:8001` fileciteturn0file3.

## Usage

The application provides several endpoints and a user-friendly frontend:

### API Endpoints

- **POST /url**

  Generate a new short URL by sending a JSON payload with the target URL:
  ```json
  {
    "url": "https://www.example.com"
  }
  ```
  The API responds with a JSON object containing the generated short ID and URL (e.g., `http://localhost:8001/abcd1234`) fileciteturn0file0.

- **GET /url/analytics/:shortId**

  Retrieve analytics including the total number of clicks and timestamp details:
  ```
  GET http://localhost:8001/url/analytics/abcd1234
  ```
  The returned JSON object includes both the total clicks and a detailed list of visit timestamps fileciteturn0file0.

- **GET /:shortId**

  When visitors access a shortened URL (e.g., `http://localhost:8001/abcd1234`), the server looks up the corresponding original URL, logs the click by appending to the visit history, and redirects the user to the long URL.

### Frontend Interface

The frontend provides an interactive form where users can:

- Input a long URL and submit it to generate a shortened URL.
- View the generated short URL along with options to copy the link.
- Access click analytics by clicking on the **"View Analytics"** button which dynamically fetches and displays the total clicks and individual visit entries fileciteturn0file4.

## Configuration

ShortURL comes with some basic configurations that can be modified to suit your needs:

- **MongoDB Connection String**

  Located in `backend/index.js`:
  ```js
  connectToMongoDB('mongodb://localhost:27017/short-url')
  ```
  Change the connection string according to your database setup.

- **Server Port**

  The default port is set to **8001** in the `index.js` file:
  ```js
  const PORT = 8001;
  ```
  Modify this value if you need to run the server on a different port.

- **Frontend API URL**

  The frontend script at `frontend/script.js` directly references the backend API endpoints (`http://localhost:8001`). Adjust these URLs if your backend is hosted elsewhere.

Additional configurations can be managed directly in the source files as the application does not currently use external configuration files or environment variables.

## Contributing

Contributions are welcome! Follow these guidelines to help improve ShortURL:

- **Fork the Repository**: Create your branch from the main branch.
- **Create a Feature Branch**: Name your branch according to the feature or bug fix (e.g., `feature/improve-analytics`).
- **Commit Changes with Clear Messages**: Use descriptive commit messages that explain the changes made.
- **Submit a Pull Request**: Once your changes are complete, submit a pull request for review.
- **Bug Reports and Feature Requests**: Use the issue tracker to report bugs or request new features.

Your contributions are highly appreciated, and adherence to coding standards and best practices is encouraged throughout the development process.

---

ShortURL is designed to be simple, efficient, and flexible. Whether you are looking for a reliable URL shortening service or a base template for building more complex link-tracking systems, ShortURL offers a solid foundation that can be easily tailored to your needs. Enjoy using and contributing to ShortURL!
