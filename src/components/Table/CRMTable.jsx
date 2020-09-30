import React, {useEffect, useState} from 'react'
import { Table} from 'antd';
import 'antd/dist/antd.css';
import SearchPanel from "./SearchPanel/SearchPanel";
import './CRMTable.css'

import {addSVG} from "../../assets/icons";
import {withRouter} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import ModalWindow from "../Model/ModalWindow";
import Loader from "../Loader/Loader";
import {roleChecker} from "../Auth/roleChecker";
import {toggleLoader} from "../../redux/reducers/mainReducer";
import {tableDataSorter} from "./tableDataSorter";


const CRMTable : React.FunctionComponent = ({columns,title,data,linkForCreate,history,role,favRows})=>{



    const [searchText,setSearchText] = useState('')
    const isModal = useSelector(state=>state.table.modalWindow.isOpen)
    const isFetchLoader = useSelector(state=>state.main.isFetchLoader)
    const [isLoader, setIsLoader]= useState('')


    const filteredColumns = ()=>{
        if(role==='superadmin' || role==='admin' || role==='employee'){
            return columns
        }
        return columns.slice(0,columns.length-1)
    }
    let tableState = {
        className: 'table',
        loading: isLoader,
        pagination:{
            position: ['none','bottomCenter'],
            pageSize: 5
        },
        dataSource: tableDataSorter(data,searchText),
        columns: filteredColumns()
    }

        if (favRows){
            tableState.rowSelection=favRows
        }

    useEffect(()=>{
        setIsLoader(isFetchLoader)
    },[isFetchLoader])






    return(
        <div className='crmTable'>
            <div className='crmTable__title'><h2>{title}</h2>
                <div className='crmTable__searchField'>
                        <SearchPanel handleSearchText={setSearchText}/>


                    {role==='superadmin' || role==='admin' || role==='employee' ?
                        <div className='crmTable__recordCreator' onClick={()=>history.push(linkForCreate)}>
                             <img
                            src={addSVG} alt=""/>
                        </div>
                        : <></>}

                </div>
            </div>

        <Table
            {...tableState}

        />
            {isModal && <ModalWindow />}
        </div>
    )
}
const mapStateToProps = state=>{
    return{
       isFetchLoader: state.main.isFetchLoader,
        role: state.main.isAuthorized.role
    }
}
export default connect(mapStateToProps)(withRouter(CRMTable))