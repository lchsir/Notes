import React, { memo } from 'react'
import { Card, Table } from 'antd'

export default memo(function Index() {
    const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 40,
          address: 'London Park',
        },
      ]

    const columns = [
        {
          title: 'Full Name',
          width: 100,
          dataIndex: 'name',
          key: 'name',
          fixed: 'left',
        },
        {
          title: 'Age',
          width: 100,
          dataIndex: 'age',
          key: 'age',
          fixed: 'left',
        },
        { title: 'Column 1', dataIndex: 'address', key: '1' },
        { title: 'Column 2', dataIndex: 'address', key: '2' },
        { title: 'Column 3', dataIndex: 'address', key: '3' },
        { title: 'Column 4', dataIndex: 'address', key: '4' },
        { title: 'Column 5', dataIndex: 'address', key: '5' },
        { title: 'Column 6', dataIndex: 'address', key: '6' },
        { title: 'Column 7', dataIndex: 'address', key: '7' },
        { title: 'Column 8', dataIndex: 'address', key: '8' },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          render: () => <a>action</a>,
        },
      ]

    return (
        // 对于列很多的数据，我们可以去固定前后的列，横向滚动查看其他数据,需要和scroll.x配合使用
        <div>
            <Card title='高级表格' style={{ width: '800px' }}>
                <Table dataSource={data} columns={columns} scroll={{x: 1000}} />
            </Card>
        </div>
    )
})

