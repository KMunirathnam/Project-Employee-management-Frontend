# Supply Chain Management Application

A comprehensive full-stack Supply Chain Management Application designed to streamline inventory control, supplier management, order processing, and shipment tracking. The platform provides secure role-based access, real-time notifications, and efficient supply chain operations through a scalable microservice-friendly architecture.

## 🚀 Features

### Authentication & Authorization

* User Registration and Login
* JWT-Based Authentication
* Role-Based Access Control (RBAC)
* Secure Password Encryption
* Session Management

### Inventory Management

* Add New Products
* View Inventory Details
* Update Product Information
* Delete Products
* Inventory Stock Monitoring
* Low Stock Alerts

### Supplier Management

* Add Suppliers
* View Supplier Details
* Update Supplier Information
* Delete Suppliers
* Supplier Contact Management

### Order Management

* Create Purchase Orders
* View Order History
* Update Order Status
* Cancel Orders
* Order Tracking

### Shipment Tracking

* Create Shipment Records
* Track Shipment Status
* Delivery Monitoring
* Shipment History Management

### Real-Time Notifications

* Kafka-Based Event Processing
* Order Status Notifications
* Inventory Alerts
* Shipment Updates
* Reliable Message Delivery

### Dashboard & Analytics

* Inventory Statistics
* Total Orders Overview
* Supplier Analytics
* Shipment Reports
* Real-Time Business Insights

### Backend Services

* RESTful API Integration
* CRUD Operations
* Kafka Event Streaming
* MySQL Database Connectivity

---

## 🛠️ Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)
* Bootstrap 5
* Axios

### Backend

* Java 17
* Spring Boot
* Spring Security
* Spring Data JPA
* REST API
* JWT Authentication
* Apache Kafka

### Database

* MySQL

### Tools & Platforms

* Git
* GitHub
* Maven
* Postman

---

## 📂 Project Structure

```text
supply-chain-management/
│
├── scm-backend/
│   ├── src/main/java
│   │   ├── controller
│   │   ├── service
│   │   ├── repository
│   │   ├── entity
│   │   ├── security
│   │   └── kafka
│   │
│   ├── src/main/resources
│   └── pom.xml
│
└── scm-frontend/
    ├── css
    ├── js
    ├── pages
    ├── assets
    └── index.html
```

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure the following software is installed:

* Java 17 or later
* Maven 3.8+
* MySQL Server
* Apache Kafka
* Node.js (Optional)
* Git

---

# Backend Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd scm-backend
```

### 2. Configure Database

Update the `application.properties` file:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/scm_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 3. Configure Kafka

```properties
spring.kafka.bootstrap-servers=localhost:9092
spring.kafka.consumer.group-id=scm-group
```

### 4. Run Kafka Server

```bash
zookeeper-server-start.bat config/zookeeper.properties

kafka-server-start.bat config/server.properties
```

### 5. Build and Run Backend

```bash
mvn clean install
mvn spring-boot:run
```

Backend will run on:

```text
http://localhost:8080
```

---

# Frontend Setup

### 1. Navigate to Frontend Directory

```bash
cd scm-frontend
```

### 2. Configure API Base URL

```javascript
const BASE_URL = "http://localhost:8080/api";
```

### 3. Run Frontend

If using Live Server:

```bash
Open index.html using Live Server
```

Frontend will run on:

```text
http://localhost:5500
```

---

## 🔑 User Roles

### Admin

* Manage Users
* Manage Inventory
* Manage Suppliers
* Manage Orders
* View Reports

### Supplier

* View Assigned Orders
* Update Shipment Status
* Manage Product Supply

### Warehouse Manager

* Inventory Monitoring
* Stock Updates
* Shipment Processing

---

## 📦 Core Modules

### Authentication Module

* Register User
* Login User
* JWT Token Generation
* Role-Based Authorization

### Inventory Module

* Add Product
* Update Product
* Delete Product
* View Inventory
* Low Stock Monitoring

### Supplier Module

* Add Supplier
* Edit Supplier
* Delete Supplier
* Supplier Directory

### Order Module

* Create Orders
* Process Orders
* Update Order Status
* Order Tracking

### Shipment Module

* Shipment Creation
* Delivery Tracking
* Shipment History

### Notification Module

* Kafka Producer
* Kafka Consumer
* Real-Time Event Processing

---

## 🔌 REST API Endpoints

### Authentication APIs

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

### Product APIs

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | /api/products      | Get All Products |
| POST   | /api/products      | Add Product      |
| PUT    | /api/products/{id} | Update Product   |
| DELETE | /api/products/{id} | Delete Product   |

### Supplier APIs

| Method | Endpoint            | Description     |
| ------ | ------------------- | --------------- |
| GET    | /api/suppliers      | Get Suppliers   |
| POST   | /api/suppliers      | Add Supplier    |
| PUT    | /api/suppliers/{id} | Update Supplier |
| DELETE | /api/suppliers/{id} | Delete Supplier |

### Order APIs

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | /api/orders      | Get Orders          |
| POST   | /api/orders      | Create Order        |
| PUT    | /api/orders/{id} | Update Order Status |
| DELETE | /api/orders/{id} | Cancel Order        |

### Shipment APIs

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| GET    | /api/shipments      | Get Shipments          |
| POST   | /api/shipments      | Create Shipment        |
| PUT    | /api/shipments/{id} | Update Shipment Status |

---

## 🗄️ Database Schema

### Users

```sql
id
name
email
password
role
```

### Products

```sql
id
product_name
description
price
quantity
supplier_id
```

### Suppliers

```sql
id
supplier_name
email
phone
address
```

### Orders

```sql
id
product_id
quantity
status
order_date
```

### Shipments

```sql
id
order_id
tracking_number
status
delivery_date
```

---

## 📊 Screenshots

Add screenshots for:

* Login Page
* Dashboard
* Inventory Management
* Supplier Management
* Order Processing
* Shipment Tracking
* Reports Dashboard

---

## 🚀 Future Enhancements

* Microservices Architecture
* Docker Containerization
* Kubernetes Deployment
* Email Notifications
* AI-Based Demand Forecasting
* Multi-Warehouse Support
* Cloud Deployment (AWS/Azure)
* Mobile Application Support

---

## 🤝 Contributing

Contributions are welcome.

```bash
git checkout -b feature/new-feature
git commit -m "Added new feature"
git push origin feature/new-feature
```

---

## License

This project is licensed under the MIT License.

---

## Author
K Munirathnam

* GitHub: https://github.com/KMunirathnam
* LinkedIn: https://linkedin.com/in/kmunirathnam
