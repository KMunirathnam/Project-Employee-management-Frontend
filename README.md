# Employee Management System - Frontend

A responsive and user-friendly frontend application built with React.js for managing employee information efficiently. 
The application provides an intuitive interface for employee administration, including employee registration, updates, search functionality, and dashboard analytics.

## 🚀 Features

### Authentication

* Employee Login Interface
* Form Validation
* Secure User Session Handling

### Dashboard

* Employee Overview
* Department-wise Employee Statistics
* Quick Navigation to Employee Operations

### Employee Management

* Add New Employee
* View Employee Records
* Update Employee Details
* Delete Employee Information
* Search Employees by Name or ID

### User Experience

* Responsive Design
* Interactive UI Components
* Real-Time API Integration
* Error Handling and Notifications

---

## 🛠️ Technology Stack

### Frontend Technologies

* React.js
* JavaScript (ES6+)
* Axios
* HTML5
* CSS3

### API Communication

* REST API
* Axios HTTP Client

---

## 📂 Project Structure

```text
employee-management-ui/
│
├── public/
│   ├── index.html
│
├── src/
│   ├── components/
│   │   ├── EmployeeList.js
│   │   ├── AddEmployee.js
│   │   ├── UpdateEmployee.js
│   │   ├── Dashboard.js
│   │   └── Login.js
│   │
│   ├── services/
│   │   └── EmployeeService.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

Before running the application, ensure the following are installed:

* Node.js (v18 or higher)
* npm or yarn
* Backend API running on port 8080

---

## Clone the Repository

```bash
git clone <repository-url>
cd employee-management-ui
```

---

## Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

## Configure Backend API URL

Update the API base URL in the service file:

```javascript
const BASE_URL = "http://localhost:8080/api/employees";
```

---

## Start Development Server

```bash
npm start
```

The application will start on:

```text
http://localhost:3000
```

---

## Available Scripts

### Run Development Server

```bash
npm start
```

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

### Eject Configuration

```bash
npm run eject
```

---

## Application Workflow

1. User logs into the system.
2. Dashboard displays employee statistics.
3. User can:

   * Add Employee
   * View Employee List
   * Search Employees
   * Edit Employee Details
   * Delete Employee Records
4. All operations communicate with the Spring Boot backend through REST APIs.

---

## API Integration

The frontend communicates with the backend using Axios.

Example API call:

```javascript
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/employees";

export const getEmployees = () => {
    return axios.get(BASE_URL);
};
```

---

## Screenshots

Include screenshots of the following pages:

* Login Page
* Dashboard
* Employee List
* Add Employee Form
* Edit Employee Form
* Search Functionality

---

## Future Enhancements

* JWT Authentication Integration
* Dark Mode Support
* Advanced Employee Filtering
* Pagination
* Employee Profile Pictures
* Role-Based Access Control
* Responsive Mobile Dashboard

---

## Performance Optimizations

* Component Reusability
* API Request Optimization
* Lazy Loading
* Efficient State Management

---

## Browser Support

The application supports all modern browsers:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

---

## Author

**Your Name**

* GitHub: https://github.com/KMunirathnam
* LinkedIn: https://linkedin.com/in/kmunirathnam
