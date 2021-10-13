import React, { memo, useState } from 'react'
import { Card, Table, Button, Modal, message } from 'antd'

export default memo(function Index() {
    const columns = [
        {
            id: 'ID',
            dataIndex: 'key'
        },
        {
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age'
        },
        {
            title: '操作',
            key: 'operaion',
            // text:row的值
            render: (text, record) => {
                return <Button onClick={() => removeItem(text, record.key)}>删除</Button>
            }
        }
    ]

    const removeItem = (text, key) => {
        console.log(text, key)
        Modal.confirm({
            title: '确认',
            content: '你确定要离开我吗？',
            onOk: () => {
                setState(state.filter(item => item.key !== key))
                message.success('删除成功')
            }
        })
    }

    const data = [
        {
            key: '1',
            name: 'casey1',
            age: '18',
            address: '幸福里大街'
        },
        {
            key: '2',
            name: 'casey2',
            age: '18',
            address: '幸福里大街'
        },
        {
            key: '3',
            name: 'casey3',
            age: '18',
            address: '幸福里大街'
        }
    ]

    const [state, setState] = useState(data)

    return (
        <div>
            <Card title='高度固定的表格'>
                <Table 
                    dataSource={state} 
                    columns={columns}
                    pagination={{pageSize: 20}}
                    scroll={{ y: 260 }} />
            </Card>
        </div>
    )
})

