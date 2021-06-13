import React, { Component } from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight}  from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    state ={
        isOpen : false ,
    }
    handleToogle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="navbar__center">
                    <div className="navbar__header">
                        <Link to='/'>
                            <img src={logo} alt="beach Resort"/>
                        </Link>
                        <button type='button' className="navbar__btn hide-for-desktop" onClick={this.handleToogle}>
                            <FaAlignRight className='navbar__icon hide-for-desktop'/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"navbar__links navbar__show":"navbar__links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
