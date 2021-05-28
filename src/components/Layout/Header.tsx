import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            // navbar
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/home">BOOK MANAGEMENT</a>
                    </div>
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/home">SIGN UP</a>
                        <a className="navbar-brand" href="/home">SIGN IN</a>
                    </div>




                    {/* <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="./index.html">Home</a></li>
                            <li><a href="#">Themes</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home<span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="#">Plugins 1</a></li>
                                    <li><a href="#">Plugins 2</a></li>
                                    <li><a href="#">Plugins 3</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Tools</a></li>
                            <li><a href="#">Donate</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        )
    }
}
export default Header;