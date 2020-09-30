import React, {useEffect} from 'react'
import CRMTable from "../../components/Table/CRMTable";
import Header from "../../components/Header/Header";
import {Route, Switch} from "react-router-dom";

import { VendorColumns} from "../../components/Table/Columns";
import '../UsersPage/UsersPage.css'
import CreateOrEditProviderContainer from "../../components/Providers/CreateOrEditProviderContainer";
import {connect} from "react-redux";
import {getProviders} from "../../redux/reducers/providerReducer";
import {Table} from "antd";
const ProvidersPage = (props)=>{
    useEffect(()=>{
        props.getProviders()
    },[])
    const data = props.providers.map(item=>{
        return {
            key: item.id,
            company: item.company,
            manager: item.manager,
            warehouse: item.warehouse,
            email: item.email,
            phone: item.phone,
            favorite: item.favorite
        }
    })
    const favoriteRows ={
            columnTitle: 'Избранный',
            selectedRowKeys: data.filter((item) => item.favorite && item).map(item=>item.key)
    }

    return(
        <>
            <Header />
            <div className="container">
                <div className='tableSection'>
                    <Switch>
                    <Route path={props.match.path} exact
                           render={()=>
                               <CRMTable
                               title={'Поставщики'}
                               linkForCreate={`${props.match.path}/create-providers`}
                               columns={VendorColumns}
                               data={data}
                               favRows={favoriteRows}
                           />}
                    />
                    <Route path={`${props.match.path}/create-providers`} exact   render={()=><CreateOrEditProviderContainer
                        title={'Создание поставщика'}
                        loadData={0} />} />

                    <Route path={`${props.match.path}/edit-providers/:provider_id`}  exact   render={()=><CreateOrEditProviderContainer
                        title={'Редактирование поставщика'} p
                        providers={props.providers}
                        loadData={1} />} />
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