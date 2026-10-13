
import { useState } from "react";

const App = () => {

  // Task 1 - Employee Form
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const [employees, setEmployees] = useState([]);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const handleEmployeeChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleEmployeeSubmit = (e) => {
    e.preventDefault();

    if (!employee.name || !employee.department || employee.salary === "") {
      alert("Please fill all employee fields");
      return;
    }

    if (editEmployeeId !== null) {
      setEmployees(employees.map((item) =>
        item.id === editEmployeeId
          ? { ...employee, id: editEmployeeId }
          : item
      ));
      setEditEmployeeId(null);
    } else {
      setEmployees([...employees, { ...employee, id: Date.now() }]);
    }

    setEmployee({ name: "", department: "", salary: "" });
  };

  const editEmployee = (item) => {
    setEmployee({
      name: item.name,
      department: item.department,
      salary: item.salary
    });
    setEditEmployeeId(item.id);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((item) => item.id !== id));
  };


  // Task 2 - Product Form
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: ""
  });

  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();

    if (
      !product.name ||
      product.price === "" ||
      product.quantity === ""
    ) {
      alert("Please fill all product fields");
      return;
    }

    if (editProductId !== null) {
      setProducts(products.map((item) =>
        item.id === editProductId
          ? { ...product, id: editProductId }
          : item
      ));
      setEditProductId(null);
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }

    setProduct({ name: "", price: "", quantity: "" });
  };

  const editProduct = (item) => {
    setProduct({
      name: item.name,
      price: item.price,
      quantity: item.quantity
    });
    setEditProductId(item.id);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };


  return (
    <>
    <div>
      <div className="bg-blue-700  text-white text-center h-50">
      <h1>Employee Management</h1>

      <form onSubmit={handleEmployeeSubmit}>
        <input name="name" placeholder="Employee Name" value={employee.name} onChange={handleEmployeeChange} />
        <input name="department" placeholder="Department" value={employee.department} onChange={handleEmployeeChange} />
        <input name="salary" type="number" placeholder="Salary" value={employee.salary} onChange={handleEmployeeChange} />
        <button type="submit" className="bg-black rounded-2xl w-40">{editEmployeeId !== null ? "Update Employee" : "Add Employee"}</button>
      </form>

      <h3>Employee Details</h3>

      {employees.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Department: {item.department}</p>
          <p>Salary: {item.salary}</p>
          <button onClick={() => editEmployee(item)}>Edit</button>
          <button onClick={() => deleteEmployee(item.id)}>Delete</button>
          <hr />
        </div>
      ))}
        </div>



       <div className="bg-pink-700  text-white text-center h-50">
      <h1>Product Management</h1>

      <form onSubmit={handleProductSubmit}>
        <input name="name" placeholder="Product Name" value={product.name} onChange={handleProductChange} />
        <input name="price" type="number" placeholder="Price" value={product.price} onChange={handleProductChange} />
        <input name="quantity" type="number" placeholder="Quantity" value={product.quantity} onChange={handleProductChange} />
        <button type="submit" className="bg-black rounded-2xl w-40">{editProductId !== null ? "Update Product" : "Add Product"}</button>
      </form>

      <h3>Product Details</h3>

      {products.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => editProduct(item)}>Edit</button>
          <button onClick={() => deleteProduct(item.id)}>Delete</button>
          
        </div>
      ))}
      </div>
    </div>
    </>
  );
};

export default App;

