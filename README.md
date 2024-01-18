# SkillCraze Backend

SkillCraze Backend is the server-side component of the SkillCraze MERN (MongoDB, Express.js, React.js, Node.js) web application. It handles data storage, authentication, and serves the necessary APIs for the frontend.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Node.js:** Backend server runtime.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing course and user data.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Be3tle/skillcraze-server.git
   cd skillcraze-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

   The server should be accessible at `http://localhost:5000/` by default.

## Configuration

Create a `.env` file in the root directory and configure the following environment variables:

```env
PORT=3000
MONGODB_URI=<Your MongoDB Connection String>
```

Make sure to replace `<Your MongoDB Connection String>` and `<Your JWT Secret Key>` with your actual MongoDB connection string and a secret key for JWT.

## API Documentation

For detailed API documentation, refer to [API_DOCUMENTATION.md](API_DOCUMENTATION.md).

Include details about the available endpoints, request and response formats, and any authentication requirements.

## Contributing

If you would like to contribute to SkillCraze Backend, please follow the steps outlined in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

Remember to replace placeholder names, URLs, and environment variable values with your actual project information. If you have specific API documentation, consider creating an `API_DOCUMENTATION.md` file for more detailed information about your endpoints.
```
