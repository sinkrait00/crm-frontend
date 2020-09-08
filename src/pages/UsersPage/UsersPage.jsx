import React from 'react'
import CRMTable from "../../components/Table/CRMTable";
import Header from "../../components/Header/Header";
import './UsersPage.css'

const UsersPage = ()=>{
    return(
        <>
            <Header />
            <div className="container">
                <div className='usersTableSection'>
                    <div></div>
        <CRMTable />
                </div>
            </div>
            </>
    )
}

export  default  UsersPage