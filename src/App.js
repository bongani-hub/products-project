import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

import ProductList from "./ProductList";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/add" element={<AddProduct />} />
					<Route path="/update/:id" element={<UpdateProduct />} />

					<Route path="/product-list" element={<ProductList />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
