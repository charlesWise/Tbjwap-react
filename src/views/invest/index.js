/**
 * Created by chenrunsheng on 2017/7/29.
 */
import React from 'react';
import { connect } from 'react-redux';
import './invest.scss';

import { isShowLoading } from './../../actions';

import { plist } from 'service/apiUrl';
import Header from 'components/header';
import InvestNavigation from './InvestNavigation';
import InvestList from './InvestList';
import Footer from 'components/footer';

class Invest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.isMount = false;
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    this._fetchData();
  }

  componentWillUnmount() {

  }

  async _fetchData() {
    let { isShowLoading } = this.props;
    isShowLoading(true);
    /* eslint-disable */
    let params = {
      page: 1,
      per_page: 15,
      isNoAuto: false,
      prj_series: 0
    }
    plist(params).then(res => {
      if (res.boolen == 1) {
        console.log(res)
        this._isMount();
        isShowLoading(false);
      }
    });
    /* eslint-enable */
  }

  _isMount() {
    if (!this.isMount) {
      this.isMount = true;
    }
  }

  render() {
    return (
      <section className="wrapper">
        <Header left={true} title="投资" right="筛选" />
        <InvestNavigation />
        <InvestList />
        <Footer router={this.props.router} />
      </section>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    isShowLoading: (isShowLoad) => dispatch(isShowLoading(isShowLoad))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invest);