import React from "react";
import "./SLPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { Table, Tag, Avatar, Row, Col, Select, Button } from "antd";
import moment from "moment";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SLPage extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        key: "0",
        name: "Eman",
        id: 76131,
        phase: ["OJT"],
        LM: "Marwan",
        doj: "21-JUN-2018",
        alerts: ""
      },
      {
        key: "1",
        name: "Khalid",
        id: 96294,
        phase: ["OJT"],
        LM: "Ajit",
        doj: "06-MAY-2018",
        alerts: "Missing Rotation Plan"
      },
      {
        key: "2",
        name: "Omar",
        id: 82746,
        phase: ["Familiarization"],
        LM: "Mary",
        doj: "09-APR-2018",
        alerts: ""
      },
      {
        key: "3",
        name: "Fatima",
        id: 49591,
        phase: ["Familiarization"],
        LM: "Venkat",
        doj: "22-JUL-2018",
        alerts: "Missing Rotation Plan"
      },
      {
        key: "4",
        name: "Maryam",
        id: 63840,
        phase: ["Rotation"],
        LM: "Binoy",
        doj: "05-JAN-2018",
        alerts: ""
      },
      {
        key: "5",
        name: "Yousuf",
        id: 97789,
        phase: ["Rotation"],
        LM: "KV",
        doj: "29-FEB-2018",
        alerts: "Missing Line Manager"
      },
      {
        key: "6",
        name: "Reem",
        id: 34567,
        phase: ["Finishing OJT"],
        LM: "Binoy",
        doj: "08-OCT-2018",
        alerts: ""
      },
      {
        key: "7",
        name: "Elham",
        id: 81239,
        phase: ["Finishing OJT"],
        LM: "AK",
        doj: "08-OCT-2018",
        alerts: ""
      },
      {
        key: "8",
        name: "Abdulaziz",
        id: 109283,
        phase: ["Finishing OJT"],
        LM: "Not IT",
        doj: "21-DEC-2018",
        alerts: "Missing Line Manager"
      }
    ];
    this.selectedPhase = [];
    this.state = {
      buttonDisable: true,
      tableData: this.data,
      visible: false
    };
    this.handlePhaseChange = this.handlePhaseChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  handlePhaseChange(value) {
    this.selectedPhase = value;
    var array = this.filterData();
    this.handleStateChange(array);
  }

  handleStateChange(array) {
    if (this.selectedPhase.length === 0) {
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
    this.setState({
      buttonDisable: true,
      tableData: this.data
    });
  }

  render() {
    const columns = [
      {
        dataIndex: "avatar",
        key: "avatar",
        width: 64,
        render: icon => <Avatar size="default" icon="user" />
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => this.compareByAlpha(a.name, b.name),
        // sortDirection: ["descend", "ascend"]
        render: text => (
          <span>
            <Link to="/GDProfile">{" " + text}</Link>
          </span>
        )
        /* <Link to="/GDProfile">{' ' + text}</Link> */
      },
      {
        title: "Staff ID",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => a.id - b.id
        // sortDirection: ["descend", "ascend"]
      },
      {
        title: "Phase",
        key: "phase",
        dataIndex: "phase",
        sorter: (a, b) => this.compareByAlpha(a.phase, b.phase),
        // sortDirection: ["descend", "ascend"],
        render: tags => (
          <span>
            {tags.map(tag => {
              var color;
              if (tag === "OJT") {
                color = "rgba(0,80,0,0.25)";
              }
              if (tag === "Familiarization") {
                color = "rgba(170,170,0,0.25)";
              }
              if (tag === "Rotation") {
                color = "rgba(0,200,0,0.25)";
              }
              if (tag === "Finishing OJT") {
                color = "rgba(0,0,0,0.25)";
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
        title: "Line Manager",
        dataIndex: "LM",
        key: "LM",
        sorter: (a, b) => this.compareByAlpha(a.LM, b.LM)
      },
      {
        title: "DOJ",
        dataIndex: "doj",
        key: "doj",
        sorter: (a, b) => moment(a.doj).unix() - moment(b.doj).unix()
      },
      {
        title: "Alerts",
        dataIndex: "alerts",
        key: "alerts",
        sorter: (a, b) => this.compareByAlpha(a.alerts, b.alerts),
        sortDirection: ["descend", "ascend"],
        render: text => (
          <span>
            {text.length > 0 && (
              <span className="pointerClass" onClick={this.showModal}>
                <FontAwesomeIcon icon={faExclamationCircle} color="red" />
                {" " + text}
              </span>
            )}
          </span>
        )
      }
    ];

    const phases = [
      {
        key: "Joining",
        value: "Joining",
        color: "rgba(220,220,220,0.25)"
      },
      {
        key: "Familiarization",
        value: "Familiarization",
        color: "rgba(170,170,0,0.25)"
      },
      {
        key: "Rotation",
        value: "Rotation",
        color: "rgba(0,200,0,0.25)"
      },
      {
        key: "OJT",
        value: "OJT",
        color: "rgba(0,80,0,0.25)"
      },
      {
        key: "Finishing OJT",
        value: "Finishing OJT",
        color: "rgba(0,0,0,0.25)"
      }
    ];

    const gimmeSomeBloodyPhases = phases => {
      return phases.reduce(
        (acc, { color, value }) =>
          `${acc}
                &[title='${value}'] {
                   background-color: ${color};
                }
        `,
        ""
      );
    };

    const StyledSelectPhases = styled(Select)`
      min-width: 100%;
      .ant-select-selection li.ant-select-selection__choice {
        ${({ phases }) => (phases ? gimmeSomeBloodyPhases(phases) : "")}
      }
    `;

    const PhaseOptions = phases.map(({ color, value }) => (
      <Select.Option color={color} title={value} key={value}>
        {value}
      </Select.Option>
    ));

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
                  Phase
                </span>
              </Col>
              <Col span={5}>
                <StyledSelectPhases
                  phases={phases}
                  mode="multiple"
                  placeholder="Filter Phases"
                  style={{ width: "100%" }}
                  size="large"
                  allowClear
                  value={this.selectedPhase}
                  onChange={this.handlePhaseChange}
                >
                  {PhaseOptions}
                </StyledSelectPhases>
              </Col>
              <Col offset={2} span={2}></Col>
              <Col span={5}></Col>
              <Col offset={2} span={2}>
                <Button
                  type="link"
                  disabled={this.state.buttonDisable}
                  onClick={this.clearFilters}
                >
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
                scroll={{ y: "calc(70vh - 4em)" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
