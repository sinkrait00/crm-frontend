import React from 'react'
import { Table, Switch, Radio, Form, Space } from 'antd';
import 'antd/dist/antd.css';
const CRMTable : React.FunctionComponent = ()=>{

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.Name - b.Name,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a>Delete</a>
                    <a className="ant-dropdown-link">
                        {/*More actions <DownOutlined />*/}
                    </a>
                </Space>
            ),
        },
    ];

    const data = [];
    for (let i = 1; i <= 10; i++) {
        data.push({
            key: i,
            name: 'John Brown',
            age: `${i}2`,
            address: `New York No. ${i} Lake Park`,
            description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        });
    }
   const state = {

        loading: false,
        size: 'default',
    };
    return(
        <Table
            className='table'
            {...state}
            pagination={
                {
                position: ['none','bottomCenter'],
                pageSize: 5
            }}
            columns={columns}
            dataSource={data}
            //scroll={scroll}
        />
    )
}

export default CRMTable