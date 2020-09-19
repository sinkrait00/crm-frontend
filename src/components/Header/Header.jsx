import React from 'react'
import {NavLink} from "react-router-dom";
import {arrowLeftSVG} from '../../assets/icons'
import './Header.css'
const Header: React.FunctionComponent = ()=>{
    return(
        <div className="header__wrapper">
        <div className="container">
        <div className="header">
            <div className="header__atHome">
            <NavLink to='/main'><img src={arrowLeftSVG} alt=""/>На главную</NavLink>
        </div>
            <div className="header__usersData">
                <p>Алфёров Дмитрий <img src="" alt=""/></p>

            </div>

        </div>
        </div>
        </div>
    )
}
export default Header;