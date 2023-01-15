import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		getList();
	}, []);
	async function deleteOperation(id) {
		let result = await fetch("http://localhost:8000/api/delete/" + id, {
			method: "DELETE",
		});
		result = await result.json();
		console.warn(result);
		getList();
	}
	async function getList() {
		let result = await fetch("http://localhost:8000/api/list");
		result = await result.json();
		setData(result);
	}
	return (
		<div>
			<h1>product list</h1>
			<div className="col-sm-8 offset-sm-2">
				<Table>
					<tbody>
						<tr>
							<td>Id</td>
							<td>Name</td>
							<td>Description</td>
							<td>Image</td>
							<td>Delete</td>
						</tr>
						{data.map((item) => (
							<tr>
								<td>{item.id}</td>
								<td>{item.Name}</td>
								<td>{item.Description}</td>

								<td>
									<img
										alt=""
										style={{ width: 100 }}
										src={"http://localhost:8000/" + item.file_path}
									/>
								</td>
								<td>
									<span
										onClick={() => deleteOperation(item.id)}
										className="delete">
										Delete
									</span>
								</td>
								<td>
									<Link to={"update/" + item.id}>
										<span className="update">Update</span>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default ProductList;
