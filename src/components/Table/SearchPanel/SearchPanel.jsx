import React, {useEffect} from 'react'
import {searchSVG} from "../../../assets/icons";
import './SearchPanel.css'


const SearchPanel = (props)=>{

    return(
        <div className="searchPanel"><input placeholder='Поиск...' onChange={(event) => props.handleSearchText(event.target.value)} type="text"/><img src={searchSVG} alt=""/></div>
    )
}

export  default SearchPanel;