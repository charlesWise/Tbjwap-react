/**
 * Created by chenrunsheng on 2017/7/24.
 */
import React from 'react';
import './footer';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer className="footer-wrap">
          <ul className="footer">
            <li>
                <p><i className="icon-home"></i></p>
                <p>首页</p>
            </li>
            <li>
                <p><i className="icon-home"></i></p>
                <p>投资</p>
            </li>
            <li>
                <p><i className="icon-home"></i></p>
                <p>账号</p>
            </li>
            <li>
                <p><i className="icon-home"></i></p>
                <p>发现</p>
            </li>
          </ul>
        </footer>
    )
  }
}


export default Footer;