import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css'
import {messageSVG, providerSVG, usersSVG, documentSVG, instructionSVG, filterSVG} from '../../assets/icons'
import Header from "../../components/Header/Header";
import {Redirect, withRouter} from "react-router-dom";
const MainPage: React.FunctionComponent = ({history})=>{


    return(
        <>
            <Header />
        <div className="container">
            <div className="row justify-content-around mt-5">
                <div className="col-6 mainPageBlock providerBlock" onClick={()=>history.push("/providers")}>
                    <p>Поставщики</p>
                    <img src={providerSVG} alt=""/>
                </div>
                <div className="col-5 mainPageBlock chatBlock" onClick={()=>history.push("/chat")}>
                    <p>Чат</p>
                    <img src={messageSVG} alt=""/>
                </div>
            </div>
            <div className="row justify-content-around mt-5">
                <div className="col-5 mainPageBlock usersBlock" onClick={()=>history.push("/users")}> <p>Пользователи</p><img src={usersSVG} alt=""/></div>
                <div className="col-6 mainPageBlock filesBlock" onClick={()=>history.push("/files")}> <p>Файлы</p><img src={documentSVG} alt=""/></div>
            </div>
            <div className="row justify-content-around mt-5">
                <div className="col-6 mainPageBlock instructionBlock" onClick={()=>history.push("/instruction")}> <p>Инструкция</p><img src={instructionSVG} alt=""/></div>
                <div className="col-5 mainPageBlock filtersBlock" onClick={()=>history.push("/filters")}> <p>Фильтры</p><img src={filterSVG} alt=""/></div>
            </div>
        </div>
    </>
    )


}


export default withRouter(MainPage)