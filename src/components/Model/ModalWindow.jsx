import React,{useState} from 'react';
import {toggleModal} from "../../redux/reducers/tableReducer";
import {connect} from "react-redux";
import Modal from "antd/es/modal";
import {deleteUser} from "../../redux/reducers/usersReducer";
import {deleteProvider} from "../../redux/reducers/providerReducer";
import {deleteTag} from "../../redux/reducers/tagReducer";

const modalSwitcher = (value)=>{
    switch (value.type) {
        case 'DELETE':
            return {
                title: 'Удаление',
                body: 'Вы действительно хотите удалить запись?',
            }

        case 'LOGOUT':
            return {title: 'Выход из системы', body: 'Вы действительно хотите выйти?'}
    }
}

const ModalWindow = ({modalWindow,toggleModal,deleteUser,deleteProvider,deleteTag})=>{
    const data = modalSwitcher(modalWindow)
    return (
        <Modal
            title={data.title}
            visible={modalWindow.isOpen}
            onOk={async ()=>{
                if(modalWindow.data.typeRow==='providers'){
                    await deleteProvider(modalWindow.data.id)
                }else if(modalWindow.data.typeRow==='users'){
                    await deleteUser(modalWindow.data.id)
                }else if(modalWindow.data.typeRow==='filters')
                    await deleteTag(modalWindow.data.id)
                 toggleModal({isOpen:false})
            }}
            onCancel={()=>toggleModal({isOpen:false})}
            okText="Да"
            cancelText="Нет"
        >
            <p>{data.body}</p>
        </Modal>
    );
}
const mapStateToProps=state=>{
    return{
       modalWindow: state.table.modalWindow
    }
}
export default connect(mapStateToProps,{toggleModal,deleteUser,deleteProvider,deleteTag})(ModalWindow)