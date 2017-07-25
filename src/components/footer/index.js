/**
 * Created by chenrunsheng on 2017/7/24.
 */
import React from 'react';
import './footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer className="footer-wrap">
          <ul className="footer">
            <li>
                <p><i className="icon-home-active"></i></p>
                <p className="active">首页</p>
            </li>
            <li>
                <p><i className="icon-invest"></i></p>
                <p>投资</p>
            </li>
            <li>
                <p><i className="icon-account"></i></p>
                <p>账户</p>
            </li>
            <li>
                <p><i className="icon-find"></i></p>
                <p>发现</p>
            </li>
          </ul>
        </footer>
    )
  }
}


export default Footer;