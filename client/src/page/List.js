import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const List = () => {
  const navigate = useNavigate();
  const [employeList, setEmployeeList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    axios
      .get("http://localhost:8001/api/v1/employee")
      .then((resp) => setEmployeeList(resp.data.data));
  };
  const viewEmployee = (id) => {
    console.log("view Id", id);
    navigate(`/employee/${id}`);
  };
  const editEmployee = (id) => {
    console.log("edit Id", id);
    navigate(`/employee/edit/${id}`);
  };
  const deleteEmp = (id) => {
    console.log("delete Id", id);
    axios.delete(`http://localhost:8001/api/v1/employee/${id}`).then((resp) => {
      console.log(resp.data);
      if (resp.data.success) {
        getEmployees();
      }
    });
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const searchButton = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8001/api/v1/employee?name=${search}`)
      .then((resp) => {
        console.log("response", resp.data.data);
        setEmployeeList(resp.data.data);
      });
  };

  const createNew = () => {
    navigate("/employee/add");
  };
  return (
    <div>
      <div className="row container">
        <div className="create-emp">
          <button type="button" onClick={createNew}>
            Add New
          </button>
        </div>
      </div>
      <div className="row container">
        <div className="search-section">
          <div className="form-group">
            <input
              type="text"
              name="search"
              value={search}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={searchButton}>
            <i class="fa-solid fa-magnifying-glass"></i>{" "}
          </button>
        </div>
      </div>
      <div className="row container">
        <div className="employeeList">
          <div>Search List Table</div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Date of Joining</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeList.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>{emp.doj}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        type="button"
                        onClick={() => viewEmployee(emp._id)}
                      >
                        <i class="fa-solid fa-eye"></i>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          editEmployee(emp._id);
                        }}
                      >
                        <i class="fa-solid fa-pencil"></i>
                      </button>
                      <button type="button" onClick={() => deleteEmp(emp._id)}>
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
