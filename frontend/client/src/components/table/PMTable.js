import React from 'react';
import 'antd/dist/antd.css';
import './PMTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Table, Tag, Icon, Avatar, Row, Col, Select, Button } from 'antd';
import moment from 'moment';

export default class PMTable extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        key: '0',
        name: 'Eman',
        id: 76131,
        stream: ['IT'],
        phase: ['OJT'],
        doj: '21-JUN-2018',
        alerts: 'Missing CV / Area of Interest'
      },
      {
        key: '1',
        name: 'Khalid',
        id: 96294,
        stream: ['HR'],
        phase: ['OJT'],
        doj: '06-MAY-2018',
        alerts: 'Missing Rotation Plan'
      },
      {
        key: '2',
        name: 'Omar',
        id: 82746,
        stream: ['HR'],
        phase: ['Familiarization'],
        doj: '09-APR-2018',
        alerts: 'Missing Rotation Evaluation'
      },
      {
        key: '3',
        name: 'Fatima',
        id: 49591,
        stream: ['COM (Delegated)'],
        phase: ['Familiarization'],
        doj: '22-JUL-2018',
        alerts: 'Missing Rotation Evaluation'
      },
      {
        key: '4',
        name: 'Maryam',
        id: 63840,
        stream: ['COM (Delegated)'],
        phase: ['Rotation'],
        doj: '05-JAN-2018',
        alerts: 'Missing Rotation Plan'
      },
      {
        key: '5',
        name: 'Yousuf',
        id: 97789,
        stream: ['IT'],
        phase: ['Rotation'],
        doj: '29-FEB-2018',
        alerts: 'Missing Rotation Plan'
      },
      {
        key: '6',
        name: 'Reem',
        id: 34567,
        stream: ['HR'],
        phase: ['Finishing OJT'],
        doj: '08-OCT-2018',
        alerts: ''
      },
      {
        key: '7',
        name: 'Elham',
        id: 81239,
        stream: ['IT'],
        phase: ['Finishing OJT'],
        doj: '08-OCT-2018',
        alerts: ''
      },
      {
        key: '8',
        name: 'Abdulaziz',
        id: 109283,
        stream: ['IT'],
        phase: ['Finishing OJT'],
        doj: '21-DEC-2018',
        alerts: ''
      }
    ];
    this.state = {
      selectedStream: [],
      selectedPhase: [],
      streamApplied: false,
      phaseApplied: false,
      buttonDisable: true,
      tableData: this.data
    };
    this.handleStreamChange = this.handleStreamChange.bind(this);
    this.handlePhaseChange = this.handlePhaseChange.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  handleStreamChange(value) {
    if (value.length === 0) {
      if (!this.state.phaseApplied) {
        this.setState({
          buttonDisable: true,
          tableData: this.data,
          streamApplied: false,
          selectedStream: value
        });
      } else {
        console.log(this.state.selectedPhase)
        this.setState({
          // tableData: this.data,
          streamApplied: false,
          selectedStream: value
        });
      this.handlePhaseChange(this.state.selectedPhase);
      }
    } else {
      if (!this.state.phaseApplied) {
        var array = this.data;
      } else {
        var array = this.state.tableData;
      }
      var filter = [];
      value.map((tag, index) => {
        array.map(item => {
          item.stream[0] === value[index] && filter.push(item);
        });
      });
      this.setState({
        buttonDisable: false,
        tableData: filter,
        streamApplied: true,
        selectedStream: value
      });
    }
  }

  handlePhaseChange(value) {
    if (value.length === 0) {
      this.setState({
        buttonDisable: true,
        tableData: this.data,
        phaseApplied: false,
        selectedPhase: value
      });
    } else {
      if (!this.state.streamApplied) {
        var array = this.data;
      } else {
        var array = this.state.tableData;
      }
      var filter = [];
      value.map((tag, index) => {
        array.map(item => {
          item.phase[0] === value[index] && filter.push(item);
        });
      });
      this.setState({
        buttonDisable: false,
        tableData: filter,
        phaseApplied: true,
        selectedPhase: value
      });
    }
  }

  compareByAlpha(a, b) {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  }

  clearFilters() {
    this.setState({
      buttonDisableisable: true,
      tableData: this.data,
      selectedStream: [],
      selectedPhase: [],
      phaseApplied: false,
      streamApplied: false
    });
  }

  render() {
    const columns = [
      {
        dataIndex: 'avatar',
        key: 'avatar',
        width: 64,
        render: icon => <Avatar size="default" icon="user" />
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => this.compareByAlpha(a.name, b.name)
        // sortDirection: ["descend", "ascend"]
      },
      {
        title: 'Staff ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id
        // sortDirection: ["descend", "ascend"]
      },
      {
        title: 'Stream',
        key: 'stream',
        dataIndex: 'stream',
        sorter: (a, b) => this.compareByAlpha(a.stream, b.stream),
        // sortDirection: ["descend", "ascend"],
        render: tags => (
          <span>
            {tags.map(tag => {
              var color;
              if (tag === 'IT') {
                color = 'rgba(0, 0, 0, 0.25)';
              }
              if (tag === 'HR') {
                color = 'rgba(0, 80, 0, 0.25)';
              }
              if (tag === 'COM (Delegated)') {
                color = 'rgba(170, 170, 0, 0.25)';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: 'Phase',
        key: 'phase',
        dataIndex: 'phase',
        sorter: (a, b) => this.compareByAlpha(a.phase, b.phase),
        // sortDirection: ["descend", "ascend"],
        render: tags => (
          <span>
            {tags.map(tag => {
              var color;
              if (tag === 'OJT') {
                color = 'rgba(220,220,220, 0.25)';
              }
              if (tag === 'Familiarization') {
                color = 'rgba(255,200,0, 0.25)';
              }
              if (tag === 'Rotation') {
                color = 'rgba(220,220,220, 0.25)';
              }
              if (tag === 'Finishing OJT') {
                color = 'rgba(220,220,220, 0.25)';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: 'DOJ',
        dataIndex: 'doj',
        key: 'doj',
        sorter: (a, b) => moment(a.doj).unix() - moment(b.doj).unix()
      },
      {
        title: 'Alerts',
        dataIndex: 'alerts',
        key: 'alerts',
        sorter: (a, b) => this.compareByAlpha(a.alerts, b.alerts),
        sortDirection: ['descend'],
        render: text => (
          <span>
            {text.length > 0 && (
              <span>
                <Icon type="info-circle" />
                <a>{' ' + text}</a>
              </span>
            )}
          </span>
        )
      }
    ];

    const streams = [
      {
        key: 'IT',
        value: 'IT',
        color: 'rgba(0,0,0,0.25)'
      },
      {
        key: 'HR',
        value: 'HR',
        color: 'rgba(0,80,0,0.25)'
      },
      {
        key: 'COM (Delegated)',
        value: 'COM (Delegated)',
        color: 'rgba(170,170,0,0.25)'
      }
    ];

    const phases = [
      {
        key: 'OJT',
        value: 'OJT',
        color: 'rgba(220,220,220,0.25)'
      },
      {
        key: 'Familiarization',
        value: 'Familiarization',
        color: 'rgba(255,200,0,0.25)'
      },
      {
        key: 'Rotation',
        value: 'Rotation',
        color: 'rgba(220,220,220,0.25)'
      },
      {
        key: 'Finishing OJT',
        value: 'Finishing OJT',
        color: 'rgba(220,220,220,0.25)'
      }
    ];

    return (
      <div>
        <Row>
          <Col className="headerBox">
            <Row type="flex" align="middle" style={{ height: "14vh" }}>
              <Col offset={2} span={2}>
                <span className="heading">
                  <FontAwesomeIcon
                    icon={faFilter}
                    color="#d7d7d7"
                    style={{ width: "1.5em" }}
                  />
                  Stream
                </span>
              </Col>
              <Col span={5}>
                <Select
                  mode="tags"
                  placeholder="Filter Streams"
                  style={{ width: "100%" }}
                  allowClear
                  value={this.state.selectedStream}
                  onChange={this.handleStreamChange}>
                  {streams.map(item => (
                    <Select.Option key={item.key} value={item.value}>
                      <span>{item.value}</span>
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col offset={2} span={2}>
                <span className="heading">
                  <FontAwesomeIcon
                    icon={faFilter}
                    color="#d7d7d7"
                    style={{ width: "1.5em" }}
                  />
                  Phase
                </span>
              </Col>
              <Col span={5}>
                <Select
                  mode="tags"
                  placeholder="Filter Phases"
                  style={{ width: "100%" }}
                  allowClear
                  value={this.state.selectedPhase}
                  onChange={this.handlePhaseChange}>
                  {phases.map(item => (
                    <Option key={item.key} value={item.value}>
                      <div>{item.value}</div>
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col offset={2} span={2}>
                <Button
                  type="link"
                  disabled={this.state.buttonDisable}
                  onClick={this.clearFilters}>
                  <span style={{ fontSize: "1.35rem" }}>Clear Filters</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="contentBox rpd">
            <div className="tableDiv">
              <div className="h5 afaqHeading">Graduate Developees</div>
              <Table
                columns={columns}
                dataSource={this.state.tableData}
                pagination={{ position: "false" }}
                scroll={{ y: "50vh" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
