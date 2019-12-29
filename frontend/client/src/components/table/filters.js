import React from 'react';
import { Row, Col, Select, Icon, Button, Tag } from 'antd';
import 'antd/dist/antd.css';

export default class PMTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applied: '',
      buttonD: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
    this.setState({ buttonD: false, applied: value });
  }

  render() {
    return <div></div>;
  }
}
