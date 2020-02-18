import React from 'react';
import './navigation.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from 'antd';
import {
  faStroopwafel,
  faHome,
  faConciergeBell,
  faBell,
  faAddressBook,
  faQuestionCircle,
  faLink,
  faUserCircle,
  faPlane
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GDProfile from '../../GDProfile';

const { Footer } = Layout;

library.add(faStroopwafel);

function Navigation() {
  return (
    // <script type="text/javascript">
    //     {/* // Sets active link in Bootstrap menu
    //     // Add this code in a central place used\shared by all pages
    //     // like your _Layout.cshtml in ASP.NET MVC for example */}
    //     $('a[href="' + this.location.pathname + '"]').parents('li,ul').addClass('active');
    // </script>
    <div>
      {/* Sidebar */}
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li id="home">
            {/* <Link to="/"> */}
            <a
              href="/"
              data-toggle="tooltip"
              data-placement="right"
              title="Home"
            >
              <FontAwesomeIcon icon={faHome} aria-hidden="true" size="1x" />
            </a>
            {/* </Link> */}
          </li>
          <li id="notification">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="right"
              title="Notifications"
            >
              <FontAwesomeIcon icon={faBell} aria-hidden="true" size="1x" />
            </a>
          </li>
          <li id="contact">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="right"
              title="Contacts"
            >
              <FontAwesomeIcon
                icon={faAddressBook}
                aria-hidden="true"
                size="1x"
              />
            </a>
          </li>
          <li id="help">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="right"
              title="Help"
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                aria-hidden="true"
                size="1x"
              />
            </a>
          </li>
          <li id="link">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="right"
              title="Links"
            >
              <FontAwesomeIcon icon={faLink} aria-hidden="true" size="1x" />
            </a>
          </li>
          <li className="footer" id="profile">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="right"
              title="Profile"
            >
              <FontAwesomeIcon
                icon={faUserCircle}
                aria-hidden="true"
                size="1x"
              />
            </a>
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="right"
              title="QR"
            >
              <FontAwesomeIcon icon={faPlane} aria-hidden="true" size="1x" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
