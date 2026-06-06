import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [search, setSearch] = useState("");

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios
      .get(`http://localhost:8080/employees`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addEmployee = () => {
    if (!name || !department || !salary) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post(`http://localhost:8080/employees`, {
        name,
        department,
        salary,
      })
      .then(() => {
        fetchEmployees();
        clearForm();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:8080/employees/${id}`)
      .then(() => {
        fetchEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editEmployee = (employee) => {
    setEditId(employee.id);
    setName(employee.name);
    setDepartment(employee.department);
    setSalary(employee.salary);
  };

  const updateEmployee = () => {
    axios
      .put(`http://localhost:8080/employees/${editId}`, {
        name,
        department,
        salary,
      })
      .then(() => {
        fetchEmployees();
        clearForm();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const clearForm = () => {
    setEditId(null);
    setName("");
    setDepartment("");
    setSalary("");
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalEmployees = employees.length;
  const itEmployees = employees.filter(
    (e) => e.department.toLowerCase() === "it"
  ).length;
  const cseEmployees = employees.filter(
    (e) => e.department.toLowerCase() === "cse"
  ).length;

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <h3>Dashboard</h3>

      <div style={{ marginBottom: "20px" }}>
        <h4>Total Employees: {totalEmployees}</h4>
        <h4>IT Employees: {itEmployees}</h4>
        <h4>CSE Employees: {cseEmployees}</h4>
      </div>

      <h2>{editId ? "Edit Employee" : "Add Employee"}</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <br />
      <br />

      {editId ? (
        <button className="edit-btn" onClick={updateEmployee}>
          Update Employee
        </button>
      ) : (
        <button className="add-btn" onClick={addEmployee}>
          Add Employee
        </button>
      )}

      <hr />

      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => editEmployee(employee)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;