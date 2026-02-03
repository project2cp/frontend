# 🎟️ EventSphere – Event Management Platform

![React](https://img.shields.io/badge/React-19.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.1.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.8-teal)
![License](https://img.shields.io/badge/License-MIT-green)

**EventSphere** is a modern event management platform that allows users to **discover events, register for free tickets, and manage their participation**, while enabling organizers to **create, publish, and monitor events through a dedicated dashboard**.

The platform is built with **React 19**, **Vite**, and **Tailwind CSS**, and integrates with a **Laravel backend**.

---

## 📑 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [User Roles](#user-roles)
- [License](#license)

---

## 📌 Overview

EventSphere provides a complete solution for managing events online:

- Users can explore and register for events (free tickets, no payment).
- Organizers can create events, manage capacity and pricing, and view statistics.
- Organizer access is granted after submitting an application and receiving approval.

---

## ✨ Features

### 👤 User Features
- User registration and authentication
- Browse and search events by category
- View event details (date, location, price, available places)
- Register for events and receive free tickets
- Manage registered events (My Tickets)
- Profile management
- Email verification

### 🧑‍💼 Organizer Features
- Organizer application via a dedicated form
- Approval required to become an organizer
- Create and publish events with:
  - Title and description
  - Date and location
  - Number of available places
  - Price (free or paid)
- Organizer dashboard with:
  - Total registrations per event
  - Event statistics and summaries

---

## 🧰 Tech Stack

### Frontend
- React 19 - Modern UI library with concurrent features

- Vite 6 - Next-generation frontend tooling

- Tailwind CSS 4 - Utility-first CSS framework

- React Router DOM 7 - Client-side routing

- Axios - HTTP client for API communication

- Framer Motion - Animation library

React Icons - Icon library
### Backend
- Laravel 11 (PHP backend)

- RESTful API communication

- JWT Authentication for secure sessions

- MySQL Database for data storage

### Development Tools
- ESLint - Code quality and consistency

- Vite Proxy - API request forwarding for development

- Hot Module Replacement - Fast development experience

---

## 🗂️ Project Structure
frontend/
├── src/
│ ├── assets/ # Images, icons, fonts
│ ├── components/ # Reusable UI components
│ │ ├── auth/ # Authentication (Login, Signup, Logout)
│ │ ├── cardFeatures/ # Event card interactions
│ │ ├── Explore_section/ # Event discovery components
│ │ ├── Home_section/ # Homepage sections
│ │ ├── layout/ # Navbar, Sidebar, Alerts
│ │ └── pages/ # Page-level components (routes)
│ │
│ ├── App.jsx # Main router
│ ├── main.jsx # Application entry point
│ └── index.css # Global styles
│
├── .env
├── vite.config.js
├── package.json
└── README.md


---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+**
- **npm** or **yarn**
- **Laravel backend** running
- Modern web browser

### Installation

```bash
cd frontend
npm install
npm run dev

```

## 👥 User Roles
### Regular User

- Create an account and log in

- Search and explore available events

- Register for events (free ticket system)

- View and manage registered events

- Update profile information

### Organizer

- Submit an organizer application

- Create and manage events after approval

- View dashboard statistics for each event

## 📄 License

This project is licensed under the MIT License.