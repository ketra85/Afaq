import React from 'react';
import 'antd/dist/antd.css';
import './GDProfile.css';
import Navigation from './components/navigation/navigation';
import { Layout, Row, Col, List } from 'antd';

export default class GDProfile extends React.Component {
  render() {
    const { Sider, Content } = Layout;
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider width="64px">
            <Navigation />
          </Sider>
          <Sider class="aboutGd" width="512px"></Sider>
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
