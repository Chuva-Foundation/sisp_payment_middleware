# SISP Payment Middleware

The SISP Payment Middleware is a Node.js project that aims to simplify the process of integrating the SISP Payments API into your applications. It provides a middleware solution that enables users to generate payment forms and simulate payments for testing purposes on their systems during the development stage.

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the SISP Payment Middleware, follow the installation steps outlined in the next section. The middleware is designed to work with the Less framework and Jest for unit testing.

## Prerequisites

Before you proceed with the installation, make sure you have the following prerequisites installed on your system:

1. Node.js: Ensure you have Node.js installed. You can download it from the official website: https://nodejs.org/

2. Yarn: Yarn is used as the package manager for this project. If you don't have Yarn installed, you can install it by following the instructions on the official website: https://yarnpkg.com/

## Installation

To install the SISP Payment Middleware and its dependencies, follow these steps:

1. Clone the repository:

    ```
    git clone https://github.com/Chuva-Foundation/sisp_payment_middleware.git
    ```

2. Change into the project directory:

    ```
    cd sisp_payment_middleware
    ```

3. Install project dependencies:

    ```
    yarn install
    ```

## Usage


## Testing

The SISP Payment Middleware includes unit tests to ensure its reliability. To run the tests, use the following command:

```
yarn test
```

Make sure that you have Jest installed as a development dependency before running the tests.

## Contributing

We welcome contributions to improve the project! To contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your contribution. The branch name should follow the format: `SPM-number`, where `number` corresponds to the issue number you are addressing. For example, if you are working on Issue #3, your branch name should be `SPM-3`.

2. Make your changes, enhancements, or bug fixes in the new branch.

3. Before submitting a pull request (PR), ensure that your changes are thoroughly tested, and the codebase is clean.

4. When committing your changes, use the following format for your commit message: `SPM#number: your commit message`. Replace `number` with the issue number you are addressing and describe the purpose of your commit in the commit message. For example, `SPM#3: Configure the project`.

5. Submit the pull request to the `main` branch of this repository. When you create the pull request, make sure to include the issue number in the title or description of the pull request. For example, you can use the format Fixes #3 or Closes #3 to reference issue number 3 in your pull request. This allow GitHub automatically recognize the reference to the issue in your pull request title or description and link it accordingly.

6. Our team will review your changes, provide feedback, and collaborate with you to ensure that your contribution meets the project's standards.

7. Once your pull request is approved, your changes will be merged into the main project.

Thank you for contributing to the project! Your efforts are valuable and greatly appreciated. If you have any questions or need further assistance, don't hesitate to ask.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](https://github.com/Chuva-Foundation/sisp_payment_middleware/blob/main/LICENSE) file for details.
