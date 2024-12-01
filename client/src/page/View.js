import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();

  const [employe, setEmployee] = useState({});
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8001/api/v1/employee/${id}`)
        .then((resp) => setEmployee(resp.data.data));
    }
  }, []);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Date of Joining</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employe.name}</td>
              <td>{employe.department}</td>
              <td>{employe.doj}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;
