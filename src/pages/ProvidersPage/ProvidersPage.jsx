import React, {useEffect} from 'react'
import CRMTable from "../../components/Table/CRMTable";
import Header from "../../components/Header/Header";
import {Route, Switch} from "react-router-dom";

import { VendorColumns} from "../../components/Table/Columns";
import '../UsersPage/UsersPage.css'
import CreateOrEditProviderContainer from "../../components/Providers/CreateOrEditProviderContainer";
import CreateOrEditUserContainer from "../../components/Users/CreateOrEditUserContainer";
const ProvidersPage = (props)=>{
    useEffect(()=>{

    },[props.match.path])
    console.log(`${props.match.path}/create-providers`)
    return(
        <>
            <Header />
            <div className="container">
                <div className='tableSection'>
                    <Switch>
                    <Route path={props.match.path} exact  render={()=><CRMTable title={'Поставщики'} linkForCreate={`${props.match.path}/create-providers`} columns={VendorColumns}/>} />
                    <Route path={`${props.match.path}/create-providers`} exact   render={()=><CreateOrEditProviderContainer title={'Создание поставщика'} loadData={0}/>} />

                    <Route path={`${props.match.path}/edit-providers`}  exact   render={()=><CreateOrEditProviderContainer title={'Редактирование поставщика'} loadData={0}/>} />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export  default  ProvidersPage