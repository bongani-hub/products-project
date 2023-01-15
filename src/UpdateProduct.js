import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateProduct(props) {
	const [data, setData] = useState();
	console.warn("props", props.match.params.id);
	useEffect(async () => {
		let result = await fetch(
			"http://localhost:8000/api/product/" + props.match.params.id
		);
		result = await result.json();
		setData(result);
	});
	return (
		<div>
			<h1>Update Product</h1>
			<input type="text" defaultValue={data.name} />
			<br />
			<br />
			<input type="text" defaultValue={data.description} />
			<br />
			<br />
			<input type="file" defaultValue={data.file_path} />
			<br />
			<br />
			<img
				style={{ width: 100 }}
				src={"http:://localhost:8000/api/" + data.file_path}
			/>
			<br />
			<br />

			<button>Update</button>
		</div>
	);
}

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();

		return <Component {...props} router={{ location, navigate, params }} />;
	}

	return ComponentWithRouterProp;
}
export default withRouter(UpdateProduct);
