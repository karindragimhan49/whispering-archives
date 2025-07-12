# SCP-Style Horror Log: The Whispering Archives

**Accessing Secure File... Decrypting... Welcome, Agent.**

This repository contains the source code for **"The Whispering Archives,"** a secure, internal web application for a clandestine organization dedicated to the containment and study of anomalous entities. This full-stack project is built using the MERN stack, featuring a dark, immersive UI designed to evoke the mystery and tension of the SCP Foundation universe.

The application serves as a database where agents can log, review, and manage classified reports on anomalous objects, entities, and phenomena.

---

## `[ACCESS GRANTED] >` `Loading Visual Data...`

Here is a glimpse into the secure interface of The Whispering Archives.

**Main User Interface Banner:**
*A dark, glitch-art inspired banner that sets the tone for the application.*
![The Whispering Archives UI Banner]([UI_BANNER_IMAGE_LINK])

**The Secure Archives (Dashboard):**
*The central hub where all classified anomaly logs are displayed. The interface is designed to resemble a retro-futuristic secure terminal.*
![The Whispering Archives Dashboard]([DASHBOARD_SCREENSHOT_LINK])

**Long-form Banner/Collage:**
*A collage showcasing various components of the UI, including the secure login and individual log entries.*
![The Whispering Archives Feature Collage]([LONG_BANNER_LINK])

---

## `[System.Features] >` `Executing program...`

*   **Secure Agent Authentication:** A themed login and registration system using **JWT (JSON Web Tokens)** for access control. Only authorized agents can access the archives.
*   **Anomaly Log Database:** Full **CRUD (Create, Read, Update, Delete)** functionality for anomaly reports.
*   **Classification System:** Each entry is classified (`Safe`, `Euclid`, `Keter`) to indicate its potential threat level.
*   **Immersive User Interface:**
    *   A dark, atmospheric UI built with **Next.js** and **Tailwind CSS**.
    *   **Glitch effects, flickering text, and retro terminal fonts** to enhance the horror/mystery theme.
    *   **Redacted Text Effects:** Important or sensitive information is displayed as `[DATA EXPUNGED]` or `[REDACTED]`, staying true to the SCP style.
*   **Dynamic and Responsive:** The interface is fully responsive and works seamlessly on all devices, from mobile terminals to desktop command centers.

---

## `[System.Technology_Stack] >` `Initializing...`

The archives are built on a modern, robust, and secure technology stack.

*   **Frontend:**
    *   **Framework:** Next.js (App Router)
    *   **Styling:** Tailwind CSS
    *   **Animations:** Framer Motion (for subtle, eerie animations)
    *   **UI Components:** Lucide Icons, Custom-built themed components

*   **Backend:**
    *   **Runtime:** Node.js
    *   **Framework:** Express.js
    *   **Database:** MongoDB with Mongoose (for storing user and anomaly data)
    *   **Authentication:** `bcryptjs` for password hashing & `jsonwebtoken` for secure sessions.

*   **Architecture:**
    *   Clean, scalable backend architecture with separated routes, controllers, and middleware.
    *   React Context API for managing agent authentication state across the frontend.

---

## `[System.Protocols] >` `Running local instance...`

To run a local instance of The Whispering Archives on your terminal, follow these classified protocols. Unauthorized access is strictly monitored.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/whispering-archives.git
    cd whispering-archives
    ```

2.  **Configure Backend Environment:**
    *   Navigate to the `server` directory: `cd server`
    *   Create a `.env` file and provide the following credentials:
        ```
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_top_secret_jwt_key
        ```
    *   Install dependencies: `npm install`

3.  **Configure Frontend Environment:**
    *   Navigate to the `client` directory: `cd client`
    *   Install dependencies: `npm install`

4.  **Initiate The System:**
    *   From the project's **root directory**, run the concurrent script:
    ```bash
    npm run dev
    ```
    *   The system will now be accessible at `http://localhost:3000`.

---

**`[CONNECTION_TERMINATED]`**

This project was a creative exploration of blending a strong thematic concept with modern full-stack development practices.
