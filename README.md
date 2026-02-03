# E-Yantra - Full Stack Web Application

This is a full-stack web application built for the E-Yantra initiative. It features a React frontend and a Node.js (Express) backend, designed to manage events, developers, and user interactions.

## About The Project

The project is a comprehensive platform for E-Yantra, providing a public-facing website to showcase events, developers, and other information. It also includes a complete admin dashboard for managing the platform's content, including events, developer profiles, and contact form submissions.

### Key Features

*   **Public-Facing Website:** A modern, responsive frontend to display information to users.
*   **Event Management:** Admins can create, update, and delete events, which are then displayed on the frontend.
*   **Developer Showcase:** A section to feature the developers who have worked on the project.
*   **Contact Form:** A functional contact form for users to send messages, with responses viewable in the admin dashboard.
*   **Admin Dashboard:** A secure, private section for administrators to manage all aspects of the site.
*   **Image Uploads:** Utilizes Cloudinary for efficient image hosting and management for events and developer profiles.
*   **User Authentication:** Secure JWT-based authentication for the admin panel.

## Tech Stack

The project is built with a modern MERN-like stack:

| Category      | Technology                                                                                             |
|---------------|--------------------------------------------------------------------------------------------------------|
| **Frontend**  | [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), [React Router](https://reactrouter.com/), [Axios](https://axios-http.com/), [Framer Motion](https://www.framer.com/motion/) |
| **Backend**   | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/), [JWT](https://jwt.io/), [Cloudinary](https://cloudinary.com/)         |
| **Deployment**| Frontend on [Vercel](https://vercel.com/), Backend on [Render](https://render.com/)                     |

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   **Node.js** (v18.x or higher recommended)
*   **npm** or **yarn**
*   **MongoDB:** A running instance of MongoDB (local or a cloud service like MongoDB Atlas).

### Environment Variables

You will need to create `.env` files for both the frontend and backend directories.

#### 1. Backend (`/Backend/.env`)

Create a file named `.env` in the `Backend` directory and add the following variables:

```env
# Server Configuration
PORT=8000

# MongoDB Configuration
MONGODB_URI=<YOUR_MONGODB_CONNECTION_STRING>
DB_NAME=<YOUR_DATABASE_NAME>

# JWT Secrets
ACCESS_TOKEN_SECRET=<YOUR_ACCESS_TOKEN_SECRET>
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=<YOUR_REFRESH_TOKEN_SECRET>
REFRESH_TOKEN_EXPIRY=7d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
CLOUDINARY_API_KEY=<YOUR_CLOUDINARY_API_KEY>
CLOUDINARY_API_SECRET=<YOUR_CLOUDINARY_API_SECRET>
```

#### 2. Frontend (`/Frontend/.env`)

Create a file named `.env` in the `Frontend` directory and add the following variable:

```env
# The base URL for your backend API
VITE_API_BASE="http://localhost:8000/api"
```

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-repository/E-Yantra.git
    cd E-Yantra
    ```

2.  **Install Backend Dependencies:**
    ```sh
    cd Backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    ```sh
    cd ../Frontend
    npm install
    ```

### Running the Application

You need to run both the backend and frontend servers simultaneously in separate terminals.

1.  **Run the Backend Server:**
    ```sh
    cd Backend
    npm run dev
    ```
    The server will start on the port specified in your `.env` file (e.g., `http://localhost:8000`).

2.  **Run the Frontend Development Server:**
    ```sh
    cd Frontend
    npm run dev
    ```
    The frontend will start on `http://localhost:5173` (or another port if 5173 is in use).

## Deployment

This project is configured for easy deployment:

*   **Backend:** The `render.yml` file is included for deploying the backend to **Render**.
*   **Frontend:** The `vercel.json` file is included for deploying the frontend to **Vercel**.

Simply link your repository to these services and follow their instructions to deploy. Remember to set the environment variables in the service's dashboard.
