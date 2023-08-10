import React from 'react'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap-icons/font/bootstrap-icons.css';



function Nav({Toggle}) {
return(
<nav className="navbar navbar-expand-sm navbar-dark bg-transparent px-3" data-testid='nav'>
    <i className="navbar-brand  text-white bi bi-list justify-left fs-4 " onClick={Toggle} ></i>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Xper</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Setting</a>
                    <a className="dropdown-item" href="/logout">Logout</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
)
}

export default Nav;