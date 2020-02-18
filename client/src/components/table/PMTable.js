import React from 'react';
import 'antd/dist/antd.css';
import './PMTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilter,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  Table,
  Tag,
  Avatar,
  Row,
  Col,
  Select,
  Button,
  Modal,
  Input,
  Upload,
  Icon,
  message
} from 'antd';
import moment from 'moment';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from "axios";

const { TextArea } = Input;

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  }
};

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
    this.selectedStream = [];
    this.selectedPhase = [];
    this.state = {
      buttonDisable: true,
      tableData: this.data,
      visible: false,
      error: null,
      isLoaded: false,
      gds: []
    };
    this.handleStreamChange = this.handleStreamChange.bind(this);
    this.handlePhaseChange = this.handlePhaseChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.userList = this.userList.bind(this);
  }

  componentDidMount() {
    // this.userList();
    this.catCall();
  }

  catCall() {
    fetch("http://openlibrary.org/api/books?bibkeys=ISBN:0201558025", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(res => res.json())
    .then(catJSON => {
      console.log(catJSON);
    })
    .catch(err => {
      console.log(err);
    })
  }

  userList() {
    axios.get("http://localhost:5000/api/User")
      .then(res => {
        console.log(res.data);
      })
    // fetch("https://localhost:5000/api/User", {
    //   method: "GET",
    //   mode: "no-cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*"
    //   }
    // })
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     console.log(result);
    //     this.setState({
    //       isLoaded: true,
    //       gds: result
    //     });
    //   },
    //   (error) => {
    //     this.setState({
    //       isLoaded: true,
    //       error
    //     });
    //   }
    // )
  }

  showModal() {
    this.setState({ visible: true });
  }

  handleOk(e) {
    console.log(e);
    message.success('Submitted successfully');
    this.setState({ visible: false });
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  handleStreamChange(value) {
    this.selectedStream = value;
    var array = this.filterData();
    this.handleStateChange(array);
  }

  handlePhaseChange(value) {
    this.selectedPhase = value;
    var array = this.filterData();
    this.handleStateChange(array);
  }

  handleStateChange(array) {
    console.log(this.selectedStream.length);
    console.log(this.selectedPhase.length);
    if (this.selectedStream.length === 0 && this.selectedPhase.length === 0) {
      this.setState({
        buttonDisable: true,
        tableData: array
      });
    } else {
      this.setState({
        buttonDisable: false,
        tableData: array
      });
    }
  }

  filterData() {
    var array = this.data;
    var filter = [];
    if (this.selectedStream.length !== 0) {
      this.selectedStream.map((tag, index) => {
        array.map(item => {
          item.stream[0] === this.selectedStream[index] && filter.push(item);
        });
      });
      if (this.selectedPhase.length !== 0) {
        var filter2 = [];
        this.selectedPhase.map((tag, index) => {
          filter.map(item => {
            item.phase[0] === this.selectedPhase[index] && filter2.push(item);
          });
        });
        return filter2;
      } else {
        return filter;
      }
    }
    if (this.selectedPhase.length !== 0) {
      this.selectedPhase.map((tag, index) => {
        array.map(item => {
          item.phase[0] === this.selectedPhase[index] && filter.push(item);
        });
      });
      return filter;
    } else {
      return array;
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
    this.selectedPhase = [];
    this.selectedStream = [];
    this.setState({
      buttonDisable: true,
      tableData: this.data
    });
  }

  render() {
    const error = this.state.error;
    const isLoaded = this.state.isLoaded;
    const gds = this.state.gds;

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
        sorter: (a, b) => this.compareByAlpha(a.name, b.name),
        // sortDirection: ["descend", "ascend"]
        render: text => (
          <span>
            <Link to="/GDProfile">{' ' + text}</Link>
          </span>
        )
        /* <Link to="/GDProfile">{' ' + text}</Link> */
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
                color = 'rgba(255,10,0,0.25)';
              }
              if (tag === 'HR') {
                color = 'rgba(255,191,0,0.25)';
              }
              if (tag === 'COM (Delegated)') {
                color = 'rgba(127,0,255,0.25)';
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
                color = 'rgba(0,80,0,0.25)';
              }
              if (tag === 'Familiarization') {
                color = 'rgba(170,170,0,0.25)';
              }
              if (tag === 'Rotation') {
                color = 'rgba(0,200,0,0.25)';
              }
              if (tag === 'Finishing OJT') {
                color = 'rgba(0,0,0,0.25)';
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
        sortDirection: ['descend', 'ascend'],
        render: text => (
          <span>
            {text.length > 0 && (
              <span className="pointerClass" onClick={this.showModal}>
                <FontAwesomeIcon icon={faExclamationCircle} color="red" />
                {' ' + text}
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
        color: 'rgba(255,10,0,0.25)'
      },
      {
        key: 'HR',
        value: 'HR',
        color: 'rgba(255,191,0,0.25)'
      },
      {
        key: 'COM (Delegated)',
        value: 'COM (Delegated)',
        color: 'rgba(127,0,255,0.25)'
      }
    ];

    const phases = [
      {
        key: 'Joining',
        value: 'Joining',
        color: 'rgba(220,220,220,0.25)'
      },
      {
        key: 'Familiarization',
        value: 'Familiarization',
        color: 'rgba(170,170,0,0.25)'
      },
      {
        key: 'Rotation',
        value: 'Rotation',
        color: 'rgba(0,200,0,0.25)'
      },
      {
        key: 'OJT',
        value: 'OJT',
        color: 'rgba(0,80,0,0.25)'
      },
      {
        key: 'Finishing OJT',
        value: 'Finishing OJT',
        color: 'rgba(0,0,0,0.25)'
      }
    ];

    const gimmeSomeBloodyStreams = streams => {
      return streams.reduce(
        (acc, { color, value }) =>
          `${acc}
                &[title='${value}'] {
                   background-color: ${color};
                }
        `,
        ''
      );
    };

    const gimmeSomeBloodyPhases = phases => {
      return phases.reduce(
        (acc, { color, value }) =>
          `${acc}
                &[title='${value}'] {
                   background-color: ${color};
                }
        `,
        ''
      );
    };

    const StyledSelectStreams = styled(Select)`
      min-width: 100%;
      .ant-select-selection li.ant-select-selection__choice {
        ${({ streams }) => (streams ? gimmeSomeBloodyStreams(streams) : '')}
      }
    `;

    const StyledSelectPhases = styled(Select)`
      min-width: 100%;
      .ant-select-selection li.ant-select-selection__choice {
        ${({ phases }) => (phases ? gimmeSomeBloodyPhases(phases) : '')}
      }
    `;

    const StreamOptions = streams.map(({ color, value }) => (
      <Select.Option color={color} title={value} key={value}>
        {value}
      </Select.Option>
    ));

    const PhaseOptions = phases.map(({ color, value }) => (
      <Select.Option color={color} title={value} key={value}>
        {value}
      </Select.Option>
    ));

    return (
      <div>
        <Row>
          <Col className="headerBox">
            <Row type="flex" align="middle" style={{ height: '14vh' }}>
              <Col offset={2} span={2}>
                <span className="heading">
                  <FontAwesomeIcon
                    icon={faFilter}
                    color="#d7d7d7"
                    style={{ width: '1.5em' }}
                  />
                  Stream
                </span>
              </Col>
              <Col span={5}>
                <StyledSelectStreams
                  streams={streams}
                  mode="multiple"
                  placeholder="Filter Streams"
                  size="large"
                  style={{ width: '100%' }}
                  allowClear
                  value={this.selectedStream}
                  onChange={this.handleStreamChange}
                >
                  {StreamOptions}
                </StyledSelectStreams>
              </Col>
              <Col offset={2} span={2}>
                <span className="heading">
                  <FontAwesomeIcon
                    icon={faFilter}
                    color="#d7d7d7"
                    style={{ width: '1.5em' }}
                  />
                  Phase
                </span>
              </Col>
              <Col span={5}>
                <StyledSelectPhases
                  phases={phases}
                  mode="multiple"
                  placeholder="Filter Phases"
                  style={{ width: '100%' }}
                  size="large"
                  allowClear
                  value={this.selectedPhase}
                  onChange={this.handlePhaseChange}
                >
                  {PhaseOptions}
                </StyledSelectPhases>
              </Col>
              <Col offset={2} span={2}>
                <Button
                  type="link"
                  disabled={this.state.buttonDisable}
                  onClick={this.clearFilters}
                >
                  <span style={{ fontSize: '1.35rem' }}>Clear Filters</span>
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
                pagination={{ position: 'false' }}
                scroll={{ y: 'calc(70vh - 4em)' }}
              />
            </div>
          </Col>
        </Row>
        <Modal
          destroyOnClose={true}
          visible={this.state.visible}
          title="Graduate Developee Information"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              onClick={this.handleOk}
              style={{ background: '#791049', borderColor: '#791049' }}
            >
              Submit
            </Button>
          ]}
        >
          <Row gutter={[100, 10]}>
            <Col span={12}>University:</Col>
            <Col span={12}>Major:</Col>
          </Row>

          <Row gutter={[100, 16]}>
            <Col span={12}>
              <Input />
            </Col>
            <Col span={12}>
              <Input />
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col>CV:</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={10}>
              <Upload {...props}>
                <Button style={{ padding: '0 60px' }}>
                  <Icon type="upload" /> Upload
                </Button>
              </Upload>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col>Areas of Interest:</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col>
              <TextArea rows={4} />
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}
