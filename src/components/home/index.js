
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Link, Redirect } from "react-router-dom";
import connect from 'redux-connect-decorator'
import { Form, Icon, Input, Button, Checkbox, Table } from 'antd';
import { fetchContacts } from '../../actions/contactActions'
import AppLayout from '../../layout';

@connect((store) => {
  return {
    contacts: store.contact.contacts,
  };
})
class Home extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    newData:[],
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
    var data = [];
    var firstNameFilter = [];
    var lastNameFilter = [];
    var emailFilter = [];

    for (var i = 0; i<this.props.contacts.length; i++){
      let obj = {};
      let firstNameObj = {}
      let lastNameObj = {}
      let emailObj = {}
      firstNameObj.text = this.props.contacts[i].firstName;
      firstNameObj.value = this.props.contacts[i].firstName;
      firstNameFilter.push(firstNameObj)
      lastNameObj.text = this.props.contacts[i].lastName;
      lastNameObj.value = this.props.contacts[i].lastName;
      lastNameFilter.push(lastNameObj)
      emailObj.text = this.props.contacts[i].email;
      emailObj.value = this.props.contacts[i].email;
      emailFilter.push(emailObj)
      obj.key = this.props.contacts[i].id;  // event id
      obj.firstName = this.props.contacts[i].firstName;
      obj.lastName = this.props.contacts[i].lastName;
      obj.email = this.props.contacts[i].email;
      obj.phone = this.props.contacts[i].phone;
      obj.photo = <img
          style={{
            maxHeight: '50px',
            maxWeight: '50px'
          }}
          alt=""
          src={this.props.contacts[i].photo}
        />;
      data.push(obj);
    }
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const stringSorter = (a, b, key) => a[key].toString().localeCompare(b[key].toString());
    const columns = [
      {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        filters: firstNameFilter,
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
        filters: lastNameFilter,
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
        filters: emailFilter,
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
          <br></br>
          <div className="table-operations">
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <Table columns={columns} dataSource={data} onChange={this.handleChange} />
        </div>
      </AppLayout>
    );
  }
}


export default Home;
