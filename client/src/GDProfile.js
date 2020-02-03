import React from 'react';
import 'antd/dist/antd.css';
import './GDProfile.css';
import GDHomepage from './GDHomepage';
import { Layout, Row, Col, Avatar, Tag } from 'antd';

export default class GDProfile extends React.Component {
  render() {
    const gdData = {
      name: 'Abdulaziz Abdulhameed Abdulrahman ',
      id: 82134,
      stream: 'IT',
      phase: 'OJT',
      PM: 'Meshaal Al-Mutlaq',
      SL: 'Abdulkarim Lambe',
      LM: 'Binoy Mathew',
      uni: 'Carnegie Melon University',
      major: 'Information Systems',
      AOI: 'Programming, Design and Communication'
    };

    const { Sider } = Layout;

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            className="aboutGd"
            width="512px"
            // collapsible="true"
            // collapsedWidth="0"
          >
            <Row type="flex" align="middle" className="nameRow">
              <Col offset={1} span={9} style={{ textAlign: 'center' }}>
                <Avatar size={100} icon="user" />
              </Col>
              <Col span={13}>
                <h1
                  style={{
                    fontSize: '1rem',
                    marginBottom: '5px'
                  }}
                >
                  {gdData.name}({gdData.id})
                </h1>
                <Tag color="rgba(255,10,0,0.25)">{gdData.stream}</Tag>
                <Tag color="rgba(0,80,0,0.25)">{gdData.phase}</Tag>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1}>
                <h1 className="aboutHeadingsTitle">ADVISORS</h1>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1} span={11}>
                <h1 className="aboutHeadings">Program Manager:</h1>
              </Col>
              <Col span={11}>
                <h1 className="aboutHeadings">{gdData.PM}</h1>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1} span={11}>
                <h1 className="aboutHeadings">Stream Lead:</h1>
              </Col>
              <Col span={11}>
                <h1 className="aboutHeadings">{gdData.SL}</h1>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1} span={11}>
                <h1 className="aboutHeadings">Line Manager:</h1>
              </Col>
              <Col span={11}>
                <h1 className="aboutHeadings">{gdData.LM}</h1>
              </Col>
            </Row>
            <Row className="spacerRow"></Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1}>
                <h1 className="aboutHeadingsTitle">ABOUT GRADUATE DEVELOPEE</h1>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1} span={11}>
                <h1 className="aboutHeadings">University:</h1>
              </Col>
              <Col span={11}>
                <h1 className="aboutHeadings">{gdData.uni}</h1>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1} span={11}>
                <h1 className="aboutHeadings">Major:</h1>
              </Col>
              <Col span={11}>
                <h1 className="aboutHeadings">{gdData.major}</h1>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1} span={11}>
                <h1 className="aboutHeadings">Areas of Interest:</h1>
              </Col>
              <Col span={11}>
                <h1 className="aboutHeadings">{gdData.AOI}</h1>
              </Col>
            </Row>
            <Row className="spacerRow"></Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1}>
                <h1 className="aboutHeadingsTitle">FORMS</h1>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1} span={11}>
                <a className="aboutForms">Resume</a>
              </Col>
              <Col span={11}>
                <a className="aboutForms">Rotation 1 Evaluation Form</a>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1} span={11}>
                <a className="aboutForms">Familiarization Plan</a>
              </Col>
              <Col span={11}>
                <a className="aboutForms">Rotation 2 Evaluation Form</a>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1} span={11}>
                <a className="aboutForms">Rotation Plan</a>
              </Col>
              <Col span={11}>
                <a className="aboutForms">Rotation 3 Evaluation Form</a>
              </Col>
            </Row>
            <Row type="flex" align="middle" className="headingsRow">
              <Col offset={1} span={11}>
                <a className="aboutForms">6 Months Presentation</a>
              </Col>
              <Col span={11}>
                <a className="aboutForms">Rotation 4 Evaluation Form</a>
              </Col>
            </Row>
          </Sider>
          <GDHomepage />
        </Layout>
      </div>
    );
  }
}
