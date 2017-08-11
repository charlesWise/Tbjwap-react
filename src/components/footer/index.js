/**
 * Created by chenrunsheng on 2017/7/24.
 */
import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1
    }
  }

  componentDidMount() {
    let location = this.props.router && this.props.router.location;
    if (location.pathname == '/home') {
      this.setState({ currentTab: 1 })
    } else if (location.pathname == '/invest') {
      this.setState({ currentTab: 2 })
    } else if (location.pathname == '/account') {
      this.setState({ currentTab: 3 })
    } else if (location.pathname == '/find') {
      this.setState({ currentTab: 4 })
    }
  }

  _clickTab(type) {
    switch (type) {
      case 1:
        this.props.router.replace('/home');
        break;
      case 2:
        this.props.router.replace('/invest');
        break;
      case 3:
        this.props.router.replace('/account');
        break;
      case 4:
        this.props.router.replace('/find');
        break;
    }
  }

  render() {
    return (
      <footer className="footer-wrap">
        <ul className="footer">
          <li onClick={() => this._clickTab(1)}>
            <p><i className={this.state.currentTab == 1 ? 'icon-home-active' : 'icon-home'}></i></p>
            <p className={this.state.currentTab == 1 && 'active'}>首页</p>
          </li>
          <li onClick={() => this._clickTab(2)}>
            <p><i className={this.state.currentTab == 2 ? 'icon-invest-active' : 'icon-invest'}></i></p>
            <p className={this.state.currentTab == 2 && 'active'}>投资</p>
          </li>
          <li onClick={() => this._clickTab(3)}>
            <p><i className={this.state.currentTab == 3 ? 'icon-account-active' : 'icon-account'}></i></p>
            <p className={this.state.currentTab == 3 && 'active'}>账户</p>
          </li>
          <li onClick={() => this._clickTab(4)}>
            <p><i className={this.state.currentTab == 4 ? 'icon-find-active' : 'icon-find'}></i></p>
            <p className={this.state.currentTab == 4 && 'active'}>发现</p>
          </li>
        </ul>
      </footer>
    )
  }
}


export default Footer;