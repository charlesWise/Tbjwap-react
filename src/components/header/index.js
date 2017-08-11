/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import { Link } from 'react-router';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header-wrap">
        <ul>
          <li>
            {
              this.props.left && <Link to="/home"></Link>
            }
          </li>
          <li>{this.props.title}</li>
          <li>
            {
              this.props.right && <Link>{this.props.right}</Link>
            }
          </li>
        </ul>
      </header>
    )
  }
}


export default Header;