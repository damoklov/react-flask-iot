import React from 'react'
import './App.css';

function Footer() {
    return (
        <footer id="lab_social_icon_footer">
            <link
                href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
                rel="stylesheet"/>
                <div className="container">
                    <div className="text-center center-block">
                        <a href="https://www.facebook.com/"><i
    id="social-fb"
    className="fa fa-facebook-square fa-3x social"/></a>
                        <a href="https://twitter.com/"><i
    id="social-tw"
    className="fa fa-twitter-square fa-3x social"/></a>
                        <a href="https://google.com/"><i
    id="social-gp"
    className="fa fa-google-plus-square fa-3x social"/></a>
                        <a href="mailto:#"><i id="social-em"
    className="fa fa-envelope-square fa-3x social"/></a>
                    </div>
                </div>
                    <p>IoT © LPNU. All rights reserved.</p>
        </footer>
    )
  }

export default Footer;







