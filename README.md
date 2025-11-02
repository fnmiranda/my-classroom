# My Classroom

**My Classroom** is a web application built with **Next.js** and **React** to manage classroom content such as dashboards, notebooks, and user profiles.  
It provides a simple and modern interface for organizing study materials and tracking student information.

---

## 🚀 Technologies

- **Next.js** — React framework for building full-stack web applications with server-side rendering and routing.  
- **React** — Library for creating dynamic user interfaces using reusable components.  
- **CSS (globals.css)** — Defines global styles shared across all pages and components.

---

## 📁 Project Structure

Below is an overview of the main folders and files based on the structure you provided:

app/
├─ (dashboard)/ # Main section grouping all dashboard routes
│ ├─ dashboard/ # Contains dashboard pages and components
│ ├─ notebooks/ # Section for user notes or course notebooks
│ ├─ perfil/ # User profile page
│ ├─ page.js # Entry page for the dashboard
│ └─ layout.js # Layout applied to dashboard pages
│
├─ auth/login/ # Login page and authentication logic
│
├─ favicon.ico # Website icon
├─ globals.css # Global CSS styles
├─ layout.js # Root layout shared by all pages
└─ page.js # Root landing page (e.g., home)


---

## ⚙️ How It Works

- `app/` directory uses the **App Router** from Next.js 13+.  
- Each folder inside `app/` can contain its own `page.js` (a page) and `layout.js` (the design that wraps that section).  
- The `(dashboard)` group organizes all related pages under one common layout, keeping the structure modular.  
- The `/auth/login` route manages user login and authentication.  
- Styling and layout consistency come from `globals.css` and the shared `layout.js`.

---

## ▶️ Running the Project

```bash
# 1. Clone the repository
git clone https://github.com/fnmiranda/my-classroom.git
cd my-classroom

# 2. Install dependencies
npm install

# 3. Run in development mode
npm run dev

Then open http://localhost:3000

in your browser.
🧩 Summary

    Built with Next.js + React

    Uses the App Router for modular pages and layouts

    Organized dashboard sections (dashboard, notebooks, perfil)

    Includes simple authentication flow at /auth/login

    This README gives a clean overview for new contributors or users to understand the project structure and setup.
