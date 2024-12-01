import Emp from "../model/employee.model.js";

export const getAllEmployee = async (req, res) => {
  const { name } = req.query;
  let employess;
  if (name) {
    console.log("name", name);

    employess = await Emp.find({ name });
  } else {
    employess = await Emp.find({});
  }
  console.log("emplye", employess);
  res.json({ success: true, data: employess });
};

export const createEmployee = async (req, res) => {
  const emp = new Emp(req.body);
  await emp.save();
  res.json({ success: true, msg: "employee successfully saved" });
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  await Emp.findByIdAndUpdate(id, req.body);
  res.json({ success: true, msg: "Update Successfully" });
};

export const searchEmplyee = (req, res) => {
  const { search } = req.params;
  res.send(`search employee, ${search}`);
};

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  const employee = await Emp.findById(id);
  console.log("empoye", employee);
  res.json({ success: true, data: employee });
};

export const deleteById = async (req, res) => {
  const { id } = req.params;
  await Emp.findByIdAndDelete(id);
  res.json({ success: true, msg: "Delete Successfully" });
};
