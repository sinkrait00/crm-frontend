import React, {useEffect} from 'react'
import {searchSVG} from "../../../assets/icons";
import './SearchPanel.css'
import {connect, useSelector} from "react-redux";
import {writeInSearchText} from "../../../redux/reducers/tableReducer";


const SearchPanel = (props)=>{

    return(
        <div className="searchPanel"><input placeholder='Поиск...' onChange={(event) => props.handleSearchText(event.target.value)} type="text"/><img src={searchSVG} alt=""/></div>
    )
}
const mapStateToProps=state=>{
    return{
        searchText: state.table.searchText
    }
}
export  default connect(mapStateToProps,{writeInSearchText})(SearchPanel);