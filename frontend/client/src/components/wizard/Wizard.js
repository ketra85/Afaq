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
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(current) {
    console.log('onChange:', current);
    this.setState({ current });
  }

  render() {
    const data = [
      {
        name: 'Familiarization',
        date: 'Mar 01 - Mar 28',
        status: 'finish'
      },
      { name: 'HR', date: 'Apr 01 - Apr 14', status: 'finish' },
      { name: 'UI/UX', date: 'Apr 15 - May 23', status: 'finish' },
      { name: 'iCrafts', date: 'May 24 - Jun 28', status: 'process' },
      { name: 'Technical', date: 'Jun 29 - Jul 20', status: 'wait' },
      { name: 'BA', date: 'Jul 31 - Aug 22', status: 'wait' },
      { name: 'OJT', date: 'Aug 23 - Feb 29', status: 'wait' }
    ];

    return (
      <div>
        <Steps
          labelPlacement="vertical"
          size="small"
          current={this.state.current}
          onChange={this.onChange}
        >
          <Step
            title={data[0].name}
            subTitle={data[0].date}
            status={data[0].status}
            icon={<FontAwesomeIcon icon={faCheckCircle} color="#323232" />}
          />
          <Step
            title={data[1].name}
            subTitle={data[1].date}
            status={data[1].status}
            icon={<FontAwesomeIcon icon={faCheckCircle} color="#323232" />}
          />
          <Step
            title={data[2].name}
            subTitle={data[2].date}
            status={data[2].status}
            icon={<FontAwesomeIcon icon={faCheckCircle} color="#323232" />}
          />
          <Step
            title={data[3].name}
            subTitle={data[3].date}
            status={data[3].status}
            icon={<FontAwesomeIcon icon={faMapMarkerAlt} color="#791049" />}
          />
          <Step
            title={data[4].name}
            subTitle={data[4].date}
            status={data[4].status}
            disabled="true"
            icon={<FontAwesomeIcon icon={faCircle} color="#d7d7d7" />}
          />
          <Step
            title={data[5].name}
            subTitle={data[5].date}
            status={data[5].status}
            disabled="true"
            icon={<FontAwesomeIcon icon={faCircle} color="#d7d7d7" />}
          />
          <Step
            title={data[6].name}
            subTitle={data[6].date}
            status={data[6].status}
            disabled="true"
            icon={<FontAwesomeIcon icon={faSuitcase} color="#d7d7d7" />}
          />
        </Steps>
      </div>
    );
  }
}

{
  /* <Step
          title="Step 1"
          subTitle="00:00:05"
          status="finish"
          description="This is a description."
        />
        <Step
          title="Step 2"
          subTitle="00:01:02"
          status="process"
          description="This is a description."
        />
        <Step
          title="Step 3"
          subTitle="waiting for longlong time"
          status="wait"
          description="This is a description."
        /> */
}
