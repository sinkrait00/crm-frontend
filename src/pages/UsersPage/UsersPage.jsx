import React, {useEffect} from 'react'
import CRMTable from "../../components/Table/CRMTable";
import Header from "../../components/Header/Header";
import './UsersPage.css'
import {Route, Switch} from "react-router-dom";
import CreateOrEditUserContainer from "../../components/Users/CreateOrEditUserContainer";
import {UserColumns} from "../../components/Table/Columns";
import {connect} from "react-redux";
import {getRoles, getUsers} from "../../redux/reducers/usersReducer";

const UsersPage = (props)=>{
    useEffect(()=>{
        props.getUsers()
        props.getRoles()
    },[])
    const data = props.users.map(item=>{
        return{
            key: item.id,
            full_name: item.full_name,
            role: item.role,
            position: item.position,
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
                    <Route path={props.match.path} exact  render={()=>{
                        return(

                        <CRMTable
                            title={'Пользователи'}
                            linkForCreate={`${props.match.path}/create-users`}
                            columns={UserColumns}
                            data={data}
                            />
                        )
                    }} />
                    <Route path={`${props.match.path}/create-users`}  exact  render={()=><CreateOrEditUserContainer title={'Создание пользователя'} roles={props.roles} loadData={0}/>} />
                    <Route path={`${props.match.path}/edit-users/:user_id`}  exact  render={()=><CreateOrEditUserContainer
                        title={'Изменение пользователя'}
                        loadData={1}
                        roles={props.roles}
                        users={props.users}
                    />} />
                    </Switch>
                    </div>
            </div>
            </>
    )
}
const mapStateToProps = state=>{
    return{
        isFetchLoader: state.main.isFetchLoader,
        users: state.users.users,
        roles: state.users.roles
    }
}
export  default  connect(mapStateToProps,{getUsers,getRoles})(UsersPage)