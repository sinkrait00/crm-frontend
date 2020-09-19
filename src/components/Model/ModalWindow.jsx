import React,{useState} from 'react';
import {toggleModal} from "../../redux/reducers/tableReducer";
import {connect} from "react-redux";
import Modal from "antd/es/modal";

const modalSwitcher = (value)=>{
    switch (value) {
        case 'DELETE':
            return {title: 'Удаление', body: 'Вы действительно хотите удалить запись?'}

        case 'LOGOUT':
            return {title: 'Выход из системы', body: 'Вы действительно хотите выйти?'}
    }
}

const ModalWindow = ({text='123',modalWindow,toggleModal})=>{
    const data = modalSwitcher(modalWindow.type)
    return (
        <Modal
            title={data.title}
            visible={modalWindow.isOpen}
            onOk={()=>toggleModal({isOpen:false})}
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
export default connect(mapStateToProps,{toggleModal})(ModalWindow)