import React from 'react'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Medicare</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="https://github.com/PIYUSH-GIRI23/Intern-form-Frontend" target='_blank'>Frontend (Github)</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://github.com/PIYUSH-GIRI23/Intern-form" target='_blank'>Backend (Github)</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                                <button class="btn btn-outline-success" type="submit">Admin</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
