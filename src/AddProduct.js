import React from "react";

import { useState } from "react";
import { Alert } from "react-bootstrap";

function AddProduct() {
	const [name, setName] = useState("");
	const [file, setFile] = useState("");
	const [description, setDescription] = useState("");

	async function addProduct() {
		console.warn(name, file, description);
		const formData = new FormData();
		formData.append("file", file);
		formData.append("name", name);
		formData.append("description", description);
		let result = await fetch("http://localhost:8000/api/addproduct", {
			method: "POST",
			body: formData,
		});
		Alert("data has been added");
	}

	return (
		<div className="col-sm-6 offset-sm-5">
			<input
				type="text"
				className="form-control"
				onChange={(e) => setName(e.target.value)}
				placeholder="name"
			/>
			<br />
			<input
				type="file"
				className="form-control"
				onChange={(e) => setFile(e.target.files[0])}
				placeholder="file"
			/>
			<br />
			<input
				type="text"
				className="form-control"
				onChange={(e) => setDescription(e.target.value)}
				placeholder="description"
			/>
			<br />
			<button onClick={addProduct} className="btn btn-primary">
				Add Product
			</button>
		</div>
	);
}

export default AddProduct;
