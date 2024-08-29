import React from 'react'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="badge fs-4">The Daddy</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            
                            <a className="nav-link "  onClick={()=>{props.setCategory("business")}}>BUSINESS</a>
                            <a className="nav-link"onClick={()=>{props.setCategory("entertainment")}}>ENTERTAINMENT</a>
                            <a className="nav-link"  onClick={()=>{props.setCategory("sports")}}>SPORTS</a>
                            <a className="nav-link"  onClick={()=>{props.setCategory("health")}}>HEALTH</a>
                            <a className="nav-link"  onClick={()=>{props.setCategory("technology")}}>TECHNOLOGY</a>
                            <a className="nav-link"  onClick={()=>{props.setCategory("science")}}>SCIENCE</a>
                        

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
