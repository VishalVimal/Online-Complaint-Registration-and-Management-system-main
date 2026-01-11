# FixIt - Online Complaint Registration and Management System

A modern, full-stack web application for managing community complaints including street lights, water pipe leakage, rainwater drainage, road issues, and waste collection. This system enables citizens to report issues, track their status, and allows administrators and officers to manage complaints efficiently.

## 🎯 Problem Statement

The primary goal of this project is to assist the general population in reporting and resolving community problems online, eliminating the need for frequent visits to government offices. This approach helps citizens save time and money while promoting transparency and reducing corruption in public service delivery.

### Key Objectives

- Provide a smart and simple method for registering complaints online
- Enable real-time tracking of complaint status
- Automate the manual complaint management system
- Improve efficiency in addressing community issues
- Support multiple types of complaints (street lights, water pipes, drainage, roads, waste collection)

## ✨ Features

### For Citizens
- 📝 Easy complaint registration with image upload
- 📍 Location-based reporting with Google Maps integration
- 📊 Real-time complaint status tracking
- 💬 Feedback system for completed work
- 🗑️ Ability to delete own complaints

### For Administrators
- ✅ Approve or reject complaints
- 👮 Assign officers to complaints
- 📈 Track work status (Started/Finished)
- 👥 Manage user list
- 🔍 View all complaints in the system

### For Officers
- 📋 View assigned complaints
- 🔄 Update work status
- 📸 Upload work completion images
- ✅ Mark work as finished

## 🛠️ Tech Stack

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![EJS](https://img.shields.io/badge/EJS-000000?style=for-the-badge)

- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5, EJS Templates
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with optional demo mode)
- **Authentication:** JWT (JSON Web Tokens)
- **File Upload:** Cloudinary (for production), Placeholder images (for demo)
- **Styling:** Modern CSS with gradients, animations, and glassmorphism effects

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (optional - demo mode available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/fixit-complaint-system.git
   cd fixit-complaint-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (Optional - for database mode)
   Create a `.env` file in the root directory:
   ```env
   mongoDB=your_mongodb_connection_string
   ```

4. **Run the application**
   ```bash
   npm start
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## 🎮 Demo Mode

The application includes a **demo mode** that allows you to test all features without setting up a database!

### Demo Credentials

**User Login:**
- Username: `demo`
- Password: `demo123`

**Admin Login:**
- Name: `admin`
- Password: `admin123`

**Officer Login:**
- Officer Name: `officer1`
- Officer ID: `off001`

### Enabling Demo Mode

Demo mode is enabled by default. To switch to database mode, set `DEMO_MODE = false` in `index.js` and all controller files.

> **Note:** In demo mode, data is stored in memory and will reset when the server restarts.

## 📁 Project Structure

```
fixit-complaint-system/
├── controllers/          # Route controllers
│   ├── Admin/           # Admin-related controllers
│   ├── Officer/         # Officer-related controllers
│   └── User/            # User-related controllers
├── models/              # Database schemas
│   └── Authentication/   # User, Admin, Officer schemas
├── routes/              # Express routes
├── views/               # EJS templates
├── public/              # Static files (CSS, images)
├── jwt/                 # JWT token utilities
├── demo-data.js         # In-memory data store for demo mode
├── index.js             # Main application file
└── package.json         # Dependencies
```

## 🔐 User Roles

### 1. Citizen/User
- Register and login
- Submit complaints with images
- Track complaint status
- Provide feedback
- Delete own complaints

### 2. Officer
- Login with officer credentials
- View assigned complaints
- Update work status
- Upload completion images

### 3. Administrator
- Login with admin credentials
- Approve/reject complaints
- Assign officers
- Manage all complaints
- View user list

## 🎨 Modern UI Features

- ✨ Gradient backgrounds and modern color schemes
- 🎭 Smooth animations and transitions
- 💎 Glassmorphism effects
- 📱 Fully responsive design
- 🎯 Intuitive user interface
- 🔤 Modern typography (Inter font)
- 🎪 Bootstrap Icons integration

## 📝 Usage

1. **As a Citizen:**
   - Sign up or login
   - Click "New Complaint" to report an issue
   - Upload an image and provide location details
   - Track your complaint status in the dashboard

2. **As an Officer:**
   - Login with officer credentials
   - View assigned complaints
   - Update work status and upload completion images

3. **As an Admin:**
   - Login with admin credentials
   - Review all complaints
   - Approve/reject and assign officers
   - Monitor system activity

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Bootstrap for UI components
- Cloudinary for image hosting
- MongoDB for database support
- Express.js community

---

**Built with ❤️ for better community service**
