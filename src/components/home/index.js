
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Link, Redirect } from "react-router-dom";
import connect from 'redux-connect-decorator'
import { Form, Icon, Input, Button, Checkbox, Table } from 'antd';
import { fetchContacts } from '../../actions/contactActions'
import AppLayout from '../../layout';
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
@connect((store) => {
  return {
    contacts: store.contact.contacts,
  };
})
class Home extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  componentDidMount(){
    this.props.dispatch(fetchContacts())
  }
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  render() {
    console.log(this.props.contacts);
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const stringSorter = (a, b, key) => a[key].toString().localeCompare(b[key].toString());
    const columns = [
      {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.firstName || null,
        onFilter: (value, record) => record.firstName.includes(value),
        sorter: (a, b) => stringSorter(a, b, 'firstName'),
        sortOrder: sortedInfo.columnKey === 'firstName' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.lastName || null,
        onFilter: (value, record) => record.lastName.includes(value),
        sorter: (a, b) => stringSorter(a, b, 'lastName'),
        sortOrder: sortedInfo.columnKey === 'lastName' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.email || null,
        onFilter: (value, record) => record.email.includes(value),
        sorter: (a, b) => stringSorter(a, b, 'email'),
        sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        sorter: (a, b) => a.phone - b.phone,
        sortOrder: sortedInfo.columnKey === 'phone' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Photo',
        dataIndex: 'photo',
        key: 'photo',
        ellipsis: true,
      },
    ];
    return (
      <AppLayout style={{overflow: "auto"}} className="layout">
        <div>
          <div className="table-operations">
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <Table columns={columns} dataSource={this.props.contacts} onChange={this.handleChange} />
        </div>
      </AppLayout>
    );
  }
}


export default Home;
