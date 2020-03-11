import React from "react";
import "./GDHomepage.css";
import "./Wizard.css";
import AfaqTimeline from "../../components/AfaqTimeline";
import { Layout, Row, Col, Steps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faMapMarkerAlt,
  faCircle,
  faSuitcase
} from "@fortawesome/free-solid-svg-icons";
const { Step } = Steps;

export default class GDHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: "Familiarization",
        date: "Mar 01 - Mar 28",
        status: "finish",
        isDisabled: false,
        faIcon: faCheckCircle,
        color: "#323232"
      },
      {
        name: "HR",
        date: "Apr 01 - Apr 14",
        status: "finish",
        isDisabled: false,
        faIcon: faCheckCircle,
        color: "#323232"
      },
      {
        name: "UI/UX",
        date: "Apr 15 - May 23",
        status: "finish",
        isDisabled: false,
        faIcon: faCheckCircle,
        color: "#323232"
      },
      {
        name: "iCrafts",
        date: "May 24 - Jun 28",
        status: "process",
        isDisabled: false,
        faIcon: faMapMarkerAlt,
        color: "#791049"
      },
      {
        name: "Technical",
        date: "Jun 29 - Jul 20",
        status: "wait",
        isDisabled: true,
        faIcon: faCircle,
        color: "#d7d7d7"
      },
      {
        name: "BA",
        date: "Jul 31 - Aug 22",
        status: "wait",
        isDisabled: true,
        faIcon: faCircle,
        color: "#d7d7d7"
      },
      {
        name: "OJT",
        date: "Aug 23 - Feb 29",
        status: "wait",
        isDisabled: true,
        faIcon: faSuitcase,
        color: "#d7d7d7"
      }
    ];
    this.rotations = [
      {
        timeline: "Rotation 0 Timeline",
        tasks: "Rotation 0 Tasks",
        skills: "Rotation 0 Skills"
      },
      {
        timeline: "Rotation 1 Timeline",
        tasks: "Rotation 1 Tasks",
        skills: "Rotation 1 Skills"
      },
      {
        timeline: "Rotation 2 Timeline",
        tasks: "Rotation 2 Tasks",
        skills: "Rotation 2 Skills"
      },
      {
        timeline: "Rotation 3 Timeline",
        tasks: "Rotation 3 Tasks",
        skills: "Rotation 3 Skills"
      },
      {
        timeline: "Rotation 4 Timeline",
        tasks: "Rotation 4 Tasks",
        skills: "Rotation 4 Skills"
      },
      {
        timeline: "Rotation 5 Timeline",
        tasks: "Rotation 5 Tasks",
        skills: "Rotation 5 Skills"
      },
      {
        timeline: "Rotation 6 Timeline",
        tasks: "Rotation 6 Tasks",
        skills: "Rotation 6 Skills"
      }
    ];
    this.state = {
      current: 3
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(current) {
    this.setState({ current });
  }
  render() {
    const { Content } = Layout;
    return (
      <Layout>
        <Content style={{ minHeight: "100vh" }} className="gdProfile">
          <Row type="flex" align="bottom" className="headerBox">
            <Col span={24}>
              <div className="gdWizard">
                <Steps
                  type="navigation"
                  labelPlacement="vertical"
                  size="default"
                  current={this.state.current}
                  onChange={this.onChange}
                >
                  {this.data.map(item => (
                    <Step
                      key={item.name}
                      title={item.name}
                      subTitle={item.date}
                      status={item.status}
                      disabled={item.isDisabled}
                      icon={
                        <FontAwesomeIcon
                          icon={item.faIcon}
                          color={item.color}
                          size="1x"
                        />
                      }
                    />
                  ))}
                </Steps>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="skillcard">
              <div className="tableDiv">
                <div className="h5 afaqHeading">Timeline</div>
                <img
                  id="locationIcon"
                  src="https://icon-library.net/images/vector-location-icon/vector-location-icon-17.jpg"
                  width="16px"
                  alt="Today"
                />
                <div id="timeline" style={{ display: "flex", maxWidth: 900 }}>
                  <AfaqTimeline />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="skillcard secoundRow secoundRowLeft" span={12}>
              <div className="tableDiv">
                <div className="h5 afaqHeading">Tasks</div>
                <p>{this.rotations[this.state.current].tasks}</p>
              </div>
            </Col>
            <Col className="skillcard secoundRow secoundRowRight" span={12}>
              <div className="tableDiv">
                <div className="h5 afaqHeading">Skillsets</div>
                <p>{this.rotations[this.state.current].skills}</p>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
