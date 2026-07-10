import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">Student App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Add Student</Link>
                            <Link class="nav-link" to="/search">Search Students</Link>
                            <Link class="nav-link" to="/delete">Delete student</Link>
                            <Link class="nav-link" to="/view">View Students</Link>
                            <Link class="nav-link disabled" aria-disabled="true">Disabled</Link>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}
