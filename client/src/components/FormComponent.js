import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const FormComponent = ({ mode }) => {
  const { id } = useParams();

  const API_URL = "http:/localhost:8001/api/v1/";
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    doj: "",
    address: "",
    hobbies: [],
    gender: "",
  });
  const hobbiesList = ["Reading", "Swimming", "Playing", "Singing"];
  const { name, department, doj, address, hobbies, gender } = formData;

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8001/api/v1/employee/${id}`).then((resp) => {
        const empData = resp.data;
        console.log("fetchdata", empData.data);
        setFormData(empData.data);
      });
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("mode", mode);
    if (mode === "add") {
      axios
        .post(`http://localhost:8001/api/v1/employee/`, formData)
        .then((resp) => {
          console.log("saved form response", resp.data);
        });
    } else if (mode === "edit") {
      axios
        .put(`http://localhost:8001/api/v1/employee/${id}`, formData)
        .then((resp) => {
          console.log("saved form response", resp.data);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        hobbies: [...prev.hobbies, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        hobbies: prev.hobbies.filter((hobby) => hobby !== value),
      }));
    }
  };
  return (
    <div className="formComponent">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Name </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Departments</label>
              <select
                name="department"
                value={department}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a Department
                </option>
                <option value="hr">HR</option>
                <option value="sales">Sales</option>
                <option value="tech">Tech</option>
                <option value="account">Account</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date of Joining</label>
              <input
                type="date"
                name="doj"
                value={doj}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {hobbiesList.map((hobby, index) => (
                <label key={index} className="hobbylable">
                  <input
                    type="checkbox"
                    value={hobby}
                    checked={hobbies?.includes(hobby) || false}
                    onChange={handleHobbyChange}
                  />
                  {hobby}
                </label>
              ))}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                id="address"
                value={address}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="group-radio">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    onChange={handleChange}
                  />
                  Fenale
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="button-group">
          <button type="submit">{mode === "add" ? "Save" : "Update"}</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
