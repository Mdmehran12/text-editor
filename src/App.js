import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <div style={{
					display: "flex",
					background: 'black',
					padding: '5px 0 5px 5px',
					fontSize: '20px'
				}}>
					<div style={{ margin: '10px' }}>
						<NavLink to="/" style={({ isActive }) => ({
							color: isActive ? 'red' : 'white' })}>
							Home
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/about" style={({ isActive }) => ({
							color: isActive ? 'red' : 'white' })}>
							About
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/contact" style={({ isActive }) => ({
							color: isActive ? 'red' : 'white' })}>
							Contact
						</NavLink>
					</div>
				</div> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" To="#">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">about</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">contact</NavLink>
                </li>

              </ul>

            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
