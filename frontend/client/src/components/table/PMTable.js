import React from 'react';
import 'antd/dist/antd.css';
import './PMTable.css';
import PMFilter from './filters';
import { Table, Tag, Icon, Avatar, Row, Col } from 'antd';

export default class PMTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabelData: ''
    };
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
        sorter: true
      },
      {
        title: 'Staff ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Stream',
        key: 'stream',
        dataIndex: 'stream',
        render: tags => (
          <span>
            {tags.map(tag => {
              var color;
              if (tag === 'IT') {
                color = 'rgba(0, 0, 0, 0.25)';
              }
              if (tag === 'HR') {
                color = 'gold';
              }
              if (tag === 'COM (Delegated)') {
                color = 'geekblue';
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
        render: tags => (
          <span>
            {tags.map(tag => {
              var color;
              if (tag === 'OJT') {
                color = 'red';
              }
              if (tag === 'Familiarization') {
                color = 'lime';
              }
              if (tag === 'Rotation') {
                color = 'purple';
              }
              if (tag === 'Finishing OJT') {
                color = 'volcano';
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
        key: 'doj'
      },
      {
        title: 'Alerts',
        dataIndex: 'alerts',
        key: 'alerts',
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

    const data = [
      {
        key: '1',
        name: 'Eman',
        id: 76131,
        stream: ['IT'],
        phase: ['OJT'],
        doj: '21-JUN-2018',
        alerts: 'Missing CV / Area of Interest'
      },
      {
        key: '2',
        name: 'Khalid',
        id: 96294,
        stream: ['HR'],
        phase: ['OJT'],
        doj: '06-MAY-2018',
        alerts: 'Missing Rotation Plan'
      },
      {
        key: '3',
        name: 'Omar',
        id: 82746,
        stream: ['HR'],
        phase: ['Familiarization'],
        doj: '09-APR-2018',
        alerts: 'Missing Rotation Evaluation'
      },
      {
        key: '4',
        name: 'Fathima',
        id: 49591,
        stream: ['COM (Delegated)'],
        phase: ['Familiarization'],
        doj: '22-JUL-2018',
        alerts: 'Missing Rotation Evaluation'
      },
      {
        key: '5',
        name: 'Maryam',
        id: 63840,
        stream: ['COM (Delegated)'],
        phase: ['Rotation'],
        doj: '05-JAN-2018',
        alerts: 'Missing Rotation Plan'
      },
      {
        key: '6',
        name: 'Yousuf',
        id: 97789,
        stream: ['IT'],
        phase: ['Rotation'],
        doj: '29-FEB-2018',
        alerts: 'Missing Rotation Plan'
      },
      {
        key: '7',
        name: 'Reem',
        id: 34567,
        stream: ['HR'],
        phase: ['Finishing OJT'],
        doj: '08-OCT-2018',
        alerts: ''
      },
      {
        key: '8',
        name: 'Elham',
        id: 81239,
        stream: ['IT'],
        phase: ['Finishing OJT'],
        doj: '08-OCT-2018',
        alerts: ''
      },
      {
        key: '9',
        name: 'Abdulaziz',
        id: 109283,
        stream: ['IT'],
        phase: ['Finishing OJT'],
        doj: '21-DEC-2018',
        alerts: ''
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
        key: 'COM',
        value: 'COM',
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
        key: 'Fimiliarization',
        value: 'Fimiliarization',
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
    // this.setState({ tabelData: data });
    return (
      <div>
        <Row>
          <Col className="headerBox">
            <PMFilter stream={streams} phase={phases} />
          </Col>
        </Row>
        <Row>
          <Col className="contentBox rpd">
            <div className="tableDiv">
              <div className="h5 afaqHeading">Graduate Developees</div>
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ position: 'false' }}
                scroll={{ y: 400 }}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
