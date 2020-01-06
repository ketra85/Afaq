import React from 'react';
import 'antd/dist/antd.css';
import './GDProfile.css';
import Navigation from './components/navigation/navigation';
import { Layout, Row, Col, List, Avatar, Tag } from 'antd';

export default class GDProfile extends React.Component {
  render() {
    const gdData = {
      name: 'Abdulaziz Abdulhameed Abdulrahman ',
      id: 82134,
      stream: 'IT',
      phase: 'OJT',
      PM: 'Meshaal',
      SL: 'AK',
      LM: 'Binoy',
      uni: 'CMU',
      major: 'IS',
      AOI: 'Programming, Design, Communication'
    };
    const { Sider, Content } = Layout;
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider class="aboutGd" width="512px">
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
                <Tag>{gdData.stream}</Tag>
                <Tag>{gdData.phase}</Tag>
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
          </Sider>
          <Layout>
            <Content style={{ minHeight: '100vh' }} class="gdProfile">
              <Row style={{ minHeight: '15vh', background: 'white' }}>
                <Col></Col>
              </Row>
              <Row>
                <Col className="skillcard">
                  <div className="tableDiv">
                    <div className="h5 afaqHeading">Timeline</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="skillcard" span={12}>
                  <div className="tableDiv">
                    <div className="h5 afaqHeading">Tasks</div>
                  </div>
                </Col>
                <Col className="skillcard" span={12}>
                  <div className="tableDiv">
                    <div className="h5 afaqHeading">Skillsets</div>
                  </div>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
