import React from "react";
import { Button, Row, Col, Steps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faMapMarkerAlt,
  faCircle,
  faSuitcase
} from "@fortawesome/free-solid-svg-icons";
const { Step } = Steps;

class rotationPlan extends React.Component {
  constructor(props) {
    super(props);
    this.famRotation = {
      name: "Familiarization",
      date: "Mar 01 - Mar 28",
      status: "finish"
    };

    this.ojtRotation = {
      name: "OJT",
      date: "Aug 23 - Feb 29",
      status: "finish",
      faIcon: faSuitcase
    };
    this.state = {
      rotations: []
    };
    this.stepIcon = {
      faIcon: faCircle,
      color: "#323232"
    };
    this.addRotation = this.addRotation.bind(this);
  }

  addRotation() {
    // console.log("rotations: ");
    // console.log(this.state.rotations);
    var addedRotations = this.state.rotations;
    // console.log("addedRotations: ");
    // console.log(addedRotations);
    var newRotation = [
      {
        name: "UX",
        date: "Aug 23 - Feb 29",
        status: "finish"
      }
    ];
    addedRotations.push(newRotation[0]);
    // console.log("addedRotations: ");
    // console.log(addedRotations);
    this.setState({ rotations: addedRotations });
  }

  render() {
    return (
      <div className="rotationPlanner">
        {console.log(this.state.rotations.length)}
        <Row type="flex" align="middle" className="headerDiv">
          <Col span={24}>
            <Steps labelPlacement="vertical">
              <Step
                key={this.famRotation.name}
                title={this.famRotation.name}
                subTitle={this.famRotation.date}
                status={this.famRotation.status}
                icon={
                  <FontAwesomeIcon
                    icon={this.stepIcon.faIcon}
                    color={this.stepIcon.color}
                    size="1x"
                  />
                }
              />
              {this.state.rotations.length > 0 &&
                this.state.rotations.map(item => (
                  <Step
                    key={item.name}
                    title={item.name}
                    subTitle={item.date}
                    status={item.status}
                    icon={
                      <FontAwesomeIcon
                        icon={this.stepIcon.faIcon}
                        color={this.stepIcon.color}
                        size="1x"
                      />
                    }
                  />
                ))}

              <Step
                key={this.ojtRotation.name}
                title={this.ojtRotation.name}
                subTitle={this.ojtRotation.date}
                status={this.ojtRotation.status}
                icon={
                  <FontAwesomeIcon
                    icon={this.ojtRotation.faIcon}
                    color={this.stepIcon.color}
                    size="1x"
                  />
                }
              />
            </Steps>
          </Col>
        </Row>
        <Row>
          <Col className="contentWarpper">
            <div className="afaqCard">
              <Button type="primary" onClick={this.addRotation}>
                Primary
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default rotationPlan;
