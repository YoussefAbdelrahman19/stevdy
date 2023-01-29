import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-home">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={require("./stevdy.jpg")} alt="Stvdy" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item  text-nowrap mx-4">
                <a className="nav-link elem1 " aria-current="page" href="#">
                  Browser
                </a>
              </li>
              <li className="nav-item  text-nowrap mx-4">
                <a className="nav-link elem2" href="#">
                  Bootcamps
                </a>
              </li>
              <li className="nav-item  text-nowrap mx-4">
                <a className="nav-link elem3" href="#">
                  How It Works
                </a>
              </li>
              <li className="nav-item  text-nowrap mx-4 ">
                <a className="nav-link elem4" href="#">
                  Testemonial
                </a>
              </li>
            </ul>
            <div class="d-flex ">
              <button className="mx-5 about-us-button rounded btn px-4 border-0 elem5 fw-bolder">
                About us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
