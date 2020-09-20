import {Space} from "antd";
import React, {useCallback} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../../redux/reducers/tableReducer";






const ColumnActions = withRouter((props)=>{
    const ref= props.match.path.slice(1,props.location.pathname.length)
    const dispatch = useDispatch()
    const openModal = useCallback(()=>{
        dispatch(toggleModal({isOpen: true,type: 'DELETE'}))
    },[dispatch])
    return(
        <Space size="middle">
            <Link to={`/${ref}/edit-${ref}`}>Изменить</Link>
            <span onClick={()=>openModal()}>Удалить</span>
        </Space>
    )
})








export  const UserColumns =[
    {
        title: 'ФИО',
        dataIndex: 'full_name',
        sorter: (a, b) => a.full_name > b.full_name,
    },
    {
        title: 'Роль',
        dataIndex: 'role',
        sorter: (a, b) => a.role > b.role,
    },
    {
        title: 'Должность',
        dataIndex: 'position',
        sorter: (a, b) => a.position > b.position,
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        sorter: (a, b) => a.email > b.email,
    },
    {
        title: 'Телефон',
        dataIndex: 'phone',
    },
    {
        title: 'Действие',
        key: 'action',
        render: () => <ColumnActions/>,
    },
]

export  const VendorColumns =[
    {
        title: 'Компания',
        dataIndex: 'company',
        sorter: (a, b) => a.company > b.company,
    },
    {
        title: 'Менеджер',
        dataIndex: 'manager',
        sorter: (a, b) => a.manager > b.manager,
    },
    {
        title: 'Адрес склада',
        dataIndex: 'warehouse',
        sorter: (a, b) => a.warehouse > b.warehouse,
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        sorter: (a, b) => a.email > b.email,
    },
    {
        title: 'Телефон',
        dataIndex: 'phone',
    },
    {
        title: 'Действие',
        key: 'action',
        render: () =>  <ColumnActions/>,
    },
]




