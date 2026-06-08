# Employee Management System

A modern full-stack Employee Management System designed to streamline employee administration and workforce management. 
The application provides a user-friendly interface for managing employee records, department information, and organizational data while leveraging a 
robust RESTful backend architecture.

## 🚀 Features

### Authentication

* Secure Employee Login
* Session Management

### Employee Management

* Add New Employees
* View Employee Details
* Update Employee Information
* Delete Employee Records
* Search Employees by Various Criteria

### Dashboard & Analytics

* Interactive Dashboard
* Department-wise Employee Count
* Real-time Employee Statistics

### Backend Services

* RESTful API Integration
* CRUD Operations
* Database Connectivity with MySQL

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Axios
* HTML5
* CSS3
* JavaScript (ES6+)

### Backend

* Spring Boot
* Spring Data JPA
* Spring MVC
* REST API

### Database

* MySQL

---

## 📂 Project Structure

```text
employee-management-system/
│
├── employee-management-backend/
│   ├── src/main/java
│   ├── src/main/resources
│   └── pom.xml
│
└── employee-management-ui/
    ├── src
    ├── public
    └── package.json
```

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure the following software is installed on your system:

* Java 17 or later
* Maven 3.8+
* Node.js 18+
* MySQL Server
* Git

---

## Backend Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd employee-management-backend
```

### 2. Configure Database

Update the `application.properties` file with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 3. Build and Run the Application

```bash
mvn clean install
mvn spring-boot:run
```

The backend server will start on:

```text
http://localhost:8080
```

---

## Frontend Setup

### 1. Navigate to Frontend Directory

```bash
cd employee-management-ui
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the React Application

```bash
npm start
```

The frontend application will run on:

```text
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| GET    | /api/employees      | Get all employees       |
| GET    | /api/employees/{id} | Get employee by ID      |
| POST   | /api/employees      | Create a new employee   |
| PUT    | /api/employees/{id} | Update employee details |
| DELETE | /api/employees/{id} | Delete employee         |

---

## Screenshots

Add project screenshots here to showcase:

* Login Page
* Dashboard
* Employee List
* Add Employee Form
* Department Statistics

---

## Future Enhancements

* Role-Based Access Control (RBAC)
* JWT Authentication & Authorization
* Employee Attendance Tracking
* Payroll Management
* Export Data to Excel/PDF
* Cloud Deployment (AWS/Azure)

---

## Contributing

Contributions are welcome. Feel free to fork the repository, create a feature branch, and submit a pull request.

```bash
git checkout -b feature/new-feature
git commit -m "Added new feature"
git push origin feature/new-feature
```

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Author

**Your Name**

* GitHub: https://github.com/KMunirathnam
* LinkedIn: https://linkedin.com/in/kmunirathnam

---

