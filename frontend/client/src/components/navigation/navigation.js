import React from 'react';
import './navigation.css';

export default class Navigation extends React.Component {
    render() {
        return (
    // <script type="text/javascript">
    //     {/* // Sets active link in Bootstrap menu
    //     // Add this code in a central place used\shared by all pages
    //     // like your _Layout.cshtml in ASP.NET MVC for example */}
    //     $('a[href="' + this.location.pathname + '"]').parents('li,ul').addClass('active');
    // </script>
    <div class="wrapper">
        {/* Sidebar */}
        <nav id="sidebar">
            <ul class="list-unstyled components">
                <li id="home">
                    <a href="#" data-toggle="tooltip" data-placement="right" title="Home"><span class="fa fa-home"
                            aria-hidden="true"></span></a>
                </li>
                <li id="notification">
                    <a href="#" data-toggle="tooltip" data-placement="right" title="Notifications"><span
                            class="fas fa-bell" aria-hidden="true"></span></a>
                </li>
                <li id="contact">
                    <a href="#" data-toggle="tooltip" data-placement="right" title="Contacts"><span
                            class="fas fa-address-book" aria-hidden="true"></span></a>
                </li>
                <li id="help">
                    <a href="#" data-toggle="tooltip" data-placement="right" title="Help"><span
                            class="fas fa-question-circle" aria-hidden="true"></span></a>
                </li>
                <li id="link">
                    <a href="#" data-toggle="tooltip" data-placement="right" title="Links"><span class="fas fa-link"
                            aria-hidden="true"></span></a>
                </li>
                <li class="footer" id="profile">
                    <a href="#" data-toggle="tooltip" data-placement="right" title="Profile"><span
                            class="fas fa-user-circle" aria-hidden="true"></span></a>
                </li>
                <li id="qr">
                    <a href="#" data-toggle="tooltip" data-placement="right" title="QR"><span class="fas fa-plane"
                            aria-hidden="true"></span></a>
                </li>
            </ul>
        </nav>
        </div>
        )
    }
}