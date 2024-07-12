# eCommerce Project

Welcome to our eCommerce project repository! This project is designed to serve as a backend for an eCommerce platform, providing essential functionalities for managing products, orders, and users.

## Getting Started

To run this project locally, follow these steps:

### Clone the Repository

Clone the repository using [Git](https://git-scm.com/):

```bash
git clone https://github.com/imashiqe/ecommerce-backend-a1.git
cd ecommerce-backend-a1
```

### Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```plaintext
DATABASE_URL=<your_database_url>
SERVER_PORT=5000
```

Replace `<your_database_url>` with the URL of your MongoDB database.

### Start the Server in Development Mode

To start the server in development mode with hot-reloading, use:

```bash
npm run start:dev
```

### Access the Application

Once the server is running, open your browser and navigate to:

```
http://localhost:5000
```

## Description

This eCommerce project provides a robust backend system for managing various aspects of an eCommerce platform. It includes APIs for:

- Product management
- User authentication and authorization
- Order processing
- Cart management
- and more

Get Any Error

1. **Remove `eslint` from `devDependencies` in `package.json`**:
   - Open your `package.json` file.
   - Locate the `devDependencies` object.
   - Remove the line that specifies `eslint`.

    ```json
    {
      "devDependencies": {
        // Other dev dependencies...
        "eslint": "^7.32.0", // Remove this line
        // Other dev dependencies...
      }
    }
    ```

2. **Delete `package-lock.json` file**:
   - In your project directory, locate and delete the `package-lock.json` file.

3. **Remove `node_modules` directory**:
   - In your project directory, locate and delete the `node_modules` directory.

4. **Install `prettier` as a dev dependency**:
   - Open your terminal.
   - Run the following command to install Prettier:
     ```bash
     npm install --save-dev prettier
     ```

5. **Run `npm install`**:
   - In your terminal, run the following command to install the necessary packages:
     ```bash
     npm install
     ```

6. **Run `npm run build`**:
   - In your terminal, run the following command to build your project:
     ```bash
     npm run build
     ```

7. **Deploy with Vercel**:
   - In your terminal, run the following command to deploy your project with Vercel:
     ```bash
     vercel --prod
     ```

Here's the consolidated set of commands to run in your terminal:

```bash
# Remove eslint from package.json
# (Manually edit package.json to remove eslint from devDependencies)

# Delete package-lock.json
rm package-lock.json

# Remove node_modules directory
rm -rf node_modules

# Install prettier as a dev dependency
npm install --save-dev prettier

# Install all dependencies
npm install

# Build the project
npm run build

# Deploy with Vercel
vercel --prod
```

Feel free to explore the codebase and adapt it to suit your specific requirements.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
