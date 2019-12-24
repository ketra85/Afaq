import React from 'react';
import { Row, Col, Select, Icon } from 'antd';
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
      <Row type="flex" align="middle" style={{ height: '14vh' }}>
        <Col offset={2} span={2}>
          <Icon type="filter" />
          Stream
        </Col>
        <Col span={5}>
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
        <Col offset={2} span={2}>
          <Icon type="filter" />
          Phase
        </Col>
        <Col span={5}>
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
        <Col offset={2} span={2}>
          <a>Reset Filter</a>
        </Col>
      </Row>
    );
  }
}
