import React from "react";


function MainHeader() {



    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Menu 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu 2</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MainHeader;