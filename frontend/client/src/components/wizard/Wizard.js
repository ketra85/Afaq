import React from 'react';
import 'antd/dist/antd.css';
import './Wizard.css';
import { Steps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faMapMarkerAlt,
  faCircle,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons';
const { Step } = Steps;

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: 'Familiarization',
        date: 'Mar 01 - Mar 28',
        status: 'finish',
        isDisabled: false,
        faIcon: faCheckCircle,
        color: '#323232'
      },
      {
        name: 'HR',
        date: 'Apr 01 - Apr 14',
        status: 'finish',
        isDisabled: false,
        faIcon: faCheckCircle,
        color: '#323232'
      },
      {
        name: 'UI/UX',
        date: 'Apr 15 - May 23',
        status: 'finish',
        isDisabled: false,
        faIcon: faCheckCircle,
        color: '#323232'
      },
      {
        name: 'iCrafts',
        date: 'May 24 - Jun 28',
        status: 'process',
        isDisabled: false,
        faIcon: faMapMarkerAlt,
        color: '#791049'
      },
      {
        name: 'Technical',
        date: 'Jun 29 - Jul 20',
        status: 'wait',
        isDisabled: true,
        faIcon: faCircle,
        color: '#d7d7d7'
      },
      {
        name: 'BA',
        date: 'Jul 31 - Aug 22',
        status: 'wait',
        isDisabled: true,
        faIcon: faCircle,
        color: '#d7d7d7'
      },
      {
        name: 'OJT',
        date: 'Aug 23 - Feb 29',
        status: 'wait',
        isDisabled: true,
        faIcon: faCircle,
        color: '#d7d7d7'
      }
    ];
    this.state = {
      current: 3
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(current) {
    console.log('onChange:', current);
    this.setState({ current });
  }

  render() {
    return (
      <div>
        <Steps
          type="navigation"
          labelPlacement="vertical"
          size="small"
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
                  size="24"
                />
              }
            />
          ))}
        </Steps>
      </div>
    );
  }
}
