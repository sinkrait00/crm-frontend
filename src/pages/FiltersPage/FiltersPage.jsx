import React, {useEffect} from 'react'
import CRMTable from "../../components/Table/CRMTable";
import Header from "../../components/Header/Header";
import {Route, Switch} from "react-router-dom";

import {FilterColumns, VendorColumns} from "../../components/Table/Columns";
import '../UsersPage/UsersPage.css'
import {connect} from "react-redux";
import CreateOrEditFilterContainer from "../../components/Filters/CreateOrEditFilterContainer";
import {getTags} from "../../redux/reducers/tagReducer";
const FiltersPage = (props)=>{
    useEffect(()=>{
        props.getTags()
    },[])
const data = props.tags.map(item=>{
    return{
        key: item.id,
        title: item.title
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
                                   title={'Фильтры'}
                                   linkForCreate={`${props.match.path}/create-filters`}
                                   columns={FilterColumns}
                                   data={data}/>} />
                        <Route path={`${props.match.path}/create-filters`} exact   render={()=><CreateOrEditFilterContainer
                            title={'Создание фильтра'}
                            loadData={0} />} />

                        <Route path={`${props.match.path}/edit-filters/:filter_id`}  exact   render={()=><CreateOrEditFilterContainer
                            title={'Редактирование фильтра'} p
                            data={data}
                            loadData={1} />} />
                    </Switch>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state=>{
    return{
        tags: state.tags.tags
    }
}
export  default  connect(mapStateToProps,{getTags})(FiltersPage)