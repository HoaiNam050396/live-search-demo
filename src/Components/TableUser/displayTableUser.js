import { Table, Tag, Space, Avatar } from 'antd'

export const TableUser = (props) => {
    const columns = [
        {
          title: 'Avatar',
          dataIndex: 'avatar',
          key: 'avatar',
          render: url => <Avatar src={url} size="default" />,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: e => <p>{e}</p> 
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
          render: e => <p>{e}</p> 
        },
        {
          title: 'Score',
          dataIndex: 'score',
          key: 'score',
          render: (e) => <p>{e}</p>,
        },
      ];
    return(
        <div>
            <Table columns={columns} dataSource={props.data}/>
        </div>
    )
}