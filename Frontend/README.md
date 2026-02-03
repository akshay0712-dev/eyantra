# E-Yantra - Frontend

This directory contains the frontend for the E-Yantra web application. It is a modern, responsive single-page application (SPA) built with React and Vite.

## Tech Stack

*   **Framework:** [React](https://reactjs.org/) (v19)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with a `JIT` compiler for optimized builds.
*   **Routing:** [React Router](https://reactrouter.com/) (v7) for client-side routing.
*   **HTTP Client:** [Axios](https://axios-http.com/) for making API requests to the backend.
*   **Animation:** [Framer Motion](https://www.framer.com/motion/) for smooth page transitions and animations.
*   **Notifications:** [React Hot Toast](https://react-hot-toast.com/) for user-friendly notifications.
*   **Charts & UI:**
    *   [Recharts](https://recharts.org/): For displaying charts in the admin dashboard.
    *   [Radix UI](https://www.radix-ui.com/): For accessible and unstyled UI primitives.
    *   [Lucide React](https://lucide.dev/): For icons.

---

## Features

*   **Component-Based Architecture:** Organized into reusable components for different UI sections.
*   **Public Pages:** A full suite of pages including Home, About, Events, Contact, and more.
*   **Admin Dashboard:** A protected area for site administrators with functionality to:
    *   Manage Events (Create, Edit, Delete)
    *   Manage Developer Profiles
    *   View Contact Form Submissions
*   **Private Routing:** Uses a `PrivateRoute` component to protect admin routes from unauthorized access.
*   **Responsive Design:** Optimized for a seamless experience on both desktop and mobile devices.

## Getting Started

### Prerequisites

*   Node.js (v18.x or higher)
*   npm

### 1. Environment Variables

Create a `.env` file in this `Frontend` directory with the following content. This variable should point to your running backend API.

```env
# The base URL for your backend API
VITE_API_BASE="http://localhost:8000/api"
```

### 2. Installation

Navigate to this directory and install the dependencies.

```sh
# From the project root
cd Frontend

# Install dependencies
npm install
```

### 3. Running the Development Server

Start the Vite development server.

```sh
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port). The Vite server supports Hot Module Replacement (HMR) for a fast development experience.

### 4. Building for Production

To create a production-ready build, run:

```sh
npm run build
```

This will create an optimized `dist` directory with the static assets for your application.
