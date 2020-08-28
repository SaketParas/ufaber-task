import React, { Component } from 'react'
import TocIcon from '@material-ui/icons/Toc';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <TocIcon />
                    <h3 class="text-danger font-weight-bold ml-5">REAL SCHOOL</h3>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <a class="nav-link text-dark font-weight-bold" href="#">Masterclasses <span class="sr-only"></span></a>
                            <a class="nav-link text-dark font-weight-bold" href="#">Programs <span class="sr-only"></span></a>
                            <a class="nav-link text-dark font-weight-bold" href="#">challenges <span class="sr-only"></span></a>
                            <a class="nav-link text-dark font-weight-bold" href="#">Library <span class="sr-only"></span></a>
                            <button type="button" class="btn btn-outline-dark rounded-pill font-weight-bold"><PermIdentityIcon />INR 200</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
