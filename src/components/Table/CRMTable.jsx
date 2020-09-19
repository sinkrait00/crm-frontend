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
import {getEmployees} from "../../redux/reducers/employeeReducer";


const CRMTable : React.FunctionComponent = ({columns,title,data,linkForCreate,history})=>{

    console.log(data)

    const [searchText,setSearchText] = useState('')
    const isModal = useSelector(state=>state.table.modalWindow.isOpen)
    const isFetchLoader = useSelector(state=>state.main.isFetchLoader)
    const [isLoader, setIsLoader]= useState('')
    useEffect(()=>{
        setIsLoader(isFetchLoader)
    },[isFetchLoader])
   const state = {

        loading: isLoader,
        size: 'default',
       rowSelection: {}
    };

     // const newData= data2.filter(item=>{
     //     let word=''
     //     for(let key in item){
     //         word += item[key]
     //     }
     //     return word.trim().toLowerCase().match(searchText)
     // })

    return(
        <div className='crmTable'>
            <div className='crmTable__title'><h2>{title}</h2>
                <div className='crmTable__searchField'>
                    <SearchPanel handleSearchText={setSearchText}/>
                        <div className='crmTable__recordCreator' onClick={()=>history.push(linkForCreate)}>
                             <img
                            src={addSVG} alt=""/>
                        </div>
                </div>
            </div>

        <Table
            className='table'
            {...state}
            pagination={
                {
                position: ['none','bottomCenter'],
                pageSize: 5
            }}

            columns={columns}
             dataSource={ data}
            //scroll={scroll}
        />
            {isModal && <ModalWindow />}
        </div>
    )
}
const mapStateToProps = state=>{
    return{
       isFetchLoader: state.main.isFetchLoader
    }
}
export default connect(mapStateToProps,{getEmployees})(withRouter(CRMTable))