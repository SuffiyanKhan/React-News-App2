import React from 'react';
import logo from "../Assets/globel2.png";
import "../Navbar/Navbar.css"




export default function Navbar() {
  let getText=(e)=>{
    // console.log(e.target.value)
  }
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="logo">
                        <h3>Gl<span><img src={logo} alt="" /></span>ble News</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                        {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                    <div className="collapse navbar-collapse ul" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Sports</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Politics</a>
                            </li>
                        </ul>
                    {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
                        {/* <ul className='class="navbar-nav me-auto mb-2 mb-lg-0"'>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        </ul> */}
                        {/* <div className="search d-flex">
                            <input className='form-control me-2' type="search" placeholder="Search" aria-label="Search" />
                        </div> */}
                        <form className="d-flex" role="search">
                        <input onChange={getText} className='form-control me-2' type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn">Search</button>
                        </form>
                        {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

