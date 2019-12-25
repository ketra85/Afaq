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
    this.setState({ buttonD: false });
  }

  render() {
    return (
      <Row type="flex" align="middle" style={{ height: '14vh' }}>
        <Col offset={2} span={2}>
          <Icon type="filter" />
          Stream
        </Col>
        <Col span={5}>
          <Select
            mode="tags"
            placeholder="Filter Streams"
            style={{ width: '100%' }}
            onChange={this.handleChange}
          >
            {this.props.stream.map(item => (
              <Option key={item.key} value={item.value}>
                <div>{item.value}</div>
              </Option>
            ))}
          </Select>
        </Col>
        <Col offset={2} span={2}>
          <Icon type="filter" />
          Phase
        </Col>
        <Col span={5}>
          <Select
            mode="tags"
            placeholder="Filter Phases"
            style={{ width: '100%' }}
          >
            {this.props.phase.map(item => (
              <Option key={item.key} value={item.value}>
                <div>{item.value}</div>
              </Option>
            ))}
          </Select>
        </Col>
        <Col offset={2} span={2}>
          <Button type="link" disabled={this.state.buttonD}>
            Clear Filters
          </Button>
        </Col>
      </Row>
    );
  }
}
