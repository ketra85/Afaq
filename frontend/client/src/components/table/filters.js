import React from 'react';
import { Row, Col, Select } from 'antd';
import 'antd/dist/antd.css';

export default class PMTable extends React.Component {
  render() {
    const { Option } = Select;

    const children = [];
    children.push(<Option key="1">{'IT'}</Option>);
    children.push(<Option key="2">{'HR'}</Option>);

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Col span={2}>Stream</Col>
        <Col span={2}>
          <Select
            size="large"
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {children}
          </Select>
        </Col>
        <Col span={2}>Phase</Col>
        <Col span={2}>
          <Select
            size="large"
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {children}
          </Select>
        </Col>
        <Col span={2}>
          <a>Reset Filter</a>
        </Col>
      </Row>
    );
  }
}
