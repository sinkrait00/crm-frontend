import {Space} from "antd";
import React, {useCallback} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../../redux/reducers/tableReducer";




const ColumnActions = withRouter((props)=>{
    const ref= props.match.path.slice(1,props.location.pathname.length)
    const dispatch = useDispatch()
    const openModal = useCallback(()=>{
        dispatch(toggleModal({
            isOpen: true,
            type: 'DELETE',
            data:{
            typeRow: ref,
            id: props.row.key}
        }))
    },[dispatch])
    return(
        <Space size="middle">
            <span onClick={()=>props.history.push(`/${ref}/edit-${ref}/${props.row.key}`)}>Изменить</span>
            <span onClick={()=>openModal()}>Удалить</span>
        </Space>

    )
})



export const FilterColumns =[
    {
        title: "Название",
        dataIndex: 'title',
        sorter: (a, b) => a.full_name > b.full_name
    },
    {
        title: 'Действие',
        key: 'action',
        render: (row) => <ColumnActions row={row}/>,
    },
]


const columnSorter = (x,y)=>(x< y)? -1 : (x>y)? 1 : 0

export  const UserColumns =[
    {
        title: 'ФИО',
        dataIndex: 'full_name',
        sorter: (a,b)=>columnSorter(a.full_name,b.full_name),
    },
    {
        title: 'Роль',
        dataIndex: 'role',
        sorter: (a,b)=>columnSorter(a.role,b.role),
    },
    {
        title: 'Должность',
        dataIndex: 'position',
        sorter: (a,b)=>columnSorter(a.position,b.position)
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        sorter: (a, b) => columnSorter(a.email,b.email),
    },
    {
        title: 'Телефон',
        dataIndex: 'phone',
    },
    {
        title: 'Действие',
        key: 'action',
        render: (row) => <ColumnActions row={row}/>,
    },
]

export  const VendorColumns =[
    {
        title: 'Компания',
        dataIndex: 'company',
        sorter: (a, b) => columnSorter(a.company,b.company),
    },
    {
        title: 'Менеджер',
        dataIndex: 'manager',
        sorter: (a, b) => columnSorter(a.manager,b.manager),
    },
    {
        title: 'Адрес склада',
        dataIndex: 'warehouse',
        sorter: (a, b) =>  columnSorter(a.warehouse,b.warehouse),
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        sorter: (a, b) =>  columnSorter(a.email,b.email),
        render: (value)=><a href={`mailto:${value}`}>{value}</a>
    },
    {
        title: 'Телефон',
        dataIndex: 'phone',
        render: (value)=><a href={`tel:${value}`}>{value}</a>
    },
    {
        title: 'Действие',
        key: 'action',
        render: (row) => <ColumnActions row={row}/>
    },
]




