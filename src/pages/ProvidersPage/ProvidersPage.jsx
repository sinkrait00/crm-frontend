import React, {useEffect} from 'react'
import CRMTable from "../../components/Table/CRMTable";
import Header from "../../components/Header/Header";
import {Route, Switch} from "react-router-dom";

import { VendorColumns} from "../../components/Table/Columns";
import '../UsersPage/UsersPage.css'
import CreateOrEditProviderContainer from "../../components/Providers/CreateOrEditProviderContainer";
import {connect} from "react-redux";
import {getProviders} from "../../redux/reducers/providerReducer";
const ProvidersPage = (props)=>{
    useEffect(()=>{
        props.getProviders()
    },[])
    const data = props.providers.map(item=>{
        return {
            company: item.company,
            manager: item.manager,
            warehouse: item.warehouse,
            email: item.email,
            phone: item.phone
        }
    })
    return(
        <>
            <Header />
            <div className="container">
                <div className='tableSection'>
                    <Switch>
                    <Route path={props.match.path} exact
                           render={()=><CRMTable
                               title={'Поставщики'}
                               linkForCreate={`${props.match.path}/create-providers`}
                               columns={VendorColumns}
                                data={props.data}/>} />
                    <Route path={`${props.match.path}/create-providers`} exact   render={()=><CreateOrEditProviderContainer title={'Создание поставщика'} loadData={0}/>} />

                    <Route path={`${props.match.path}/edit-providers`}  exact   render={()=><CreateOrEditProviderContainer title={'Редактирование поставщика'} loadData={0}/>} />
                    </Switch>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state=>{
    return{
        providers: state.providers.providers
    }
}
export  default  connect(mapStateToProps,{getProviders})(ProvidersPage)