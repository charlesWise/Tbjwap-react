/**
 * Created by chenrunsheng on 2017/7/21.
 */
import './header.scss'
import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount(){
    
  }

  render() {
    return (
        <header id="head_top">
          我是头部
        </header>
    )
  }
}

function mapStateToProps(state) {
  let userInfo = state.userInfo;
  return {
    userInfo
  }
}

export default connect(mapStateToProps)(Header);