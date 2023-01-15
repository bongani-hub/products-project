import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Products</Navbar.Brand>
					<Nav className="me-auto navbar_wrapper">
						<Link to="/add">Add Products</Link>
						<Link to="/update">Update Products</Link>
						<Link to="/delete">Delete Products</Link>
						<Link to="/product-list">Product list</Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
