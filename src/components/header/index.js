/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import './header'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header className="header-wrap">
          我是头部
        </header>
    )
  }
}


export default Header;