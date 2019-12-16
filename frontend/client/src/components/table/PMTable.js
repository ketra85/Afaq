import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Tag, Icon } from 'antd';

export default class PMTable extends React.Component {
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
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
                color = 'magenta';
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

    //<Icon type="info-circle" /><a>{" " + text}</a>

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
        key: '5',
        name: 'Yousuf',
        id: 97789,
        stream: ['IT'],
        phase: ['Rotation'],
        doj: '29-FEB-2018',
        alerts: 'Missing Rotation Plan'
      },
      {
        key: '5',
        name: 'Reem',
        id: 34567,
        stream: ['HR'],
        phase: ['Finishing OJT'],
        doj: '08-OCT-2018',
        alerts: ''
      },
      {
        key: '5',
        name: 'Elham',
        id: 81239,
        stream: ['IT'],
        phase: ['Finishing OJT'],
        doj: '08-OCT-2018',
        alerts: ''
      },
      {
        key: '5',
        name: 'Abdulaziz',
        id: 109283,
        stream: ['IT'],
        phase: ['Finishing OJT'],
        doj: '21-DEC-2018',
        alerts: ''
      }
    ];
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: 'none' }}
        scroll={{ y: 300 }}
      />
    );
  }
}
