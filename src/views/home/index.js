/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import { connect } from 'react-redux';
import './home.scss';

import { isShowLoading } from './../../actions';

import { banner, indexNavigation, recommendNew } from 'service/apiUrl';
import AppDownload from 'components/common/AppDownload';
import Banner from 'components/common/Banner';
import ActiveNavigation from './ActiveNavigation';
import RecommendNew from './RecommendNew';
import Qualification from './Qualification';
import Footer from 'components/footer';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isShowAppDownload: true,
      bannerInfo: [],
      actNavList: [],
      recommendInfo: null
    }
    this.isMount = false;
  }

  componentWillMount() {
    let { isShowLoading } = this.props;
    isShowLoading(true);
    this._fetchData();
    isShowLoading(false);
  }

  componentWillUnmount() {
    this.setState({isMount: false})
  }

  async _fetchData() {
    /* eslint-disable */
    banner({type: 100}).then(res => {
      if(res.boolen == 1) {
        let bannerImg = [];
        if(res.data.length > 0) {
          for (var key in res.data) {
            bannerImg.push({
              'url_s700': res.data[key].img.attach.url_s700,
              'href_url': res.data[key].href
            })
          }
        }
        this.setState({bannerInfo: bannerImg})
        this._isMount();
      }
    });

    indexNavigation({}).then(res => {
      if(res.boolen == 1) {
        this.setState({actNavList: res.data})
        this._isMount();
      }
    });

    recommendNew({}).then(res => {
      if(res.boolen == 1) {
        this.setState({recommendInfo: res.data})
        this._isMount();
      }
    });
    /* eslint-enable */
  }

  _isMount() {
    if(!this.isMount) {
      this.isMount = true;
    }
  }

  _closeAppDownload() {
    this.setState({
      isShowAppDownload: false
    })
  }

  render () {
    return (
      <section className="wrapper">
          {this.state.isShowAppDownload && <AppDownload closeAppDownload={() => this._closeAppDownload()} />}
          {this.isMount && <Banner bannerInfo={this.state.bannerInfo} />}
          {this.isMount && <ActiveNavigation actNavList={this.state.actNavList} />}
          {this.isMount && <RecommendNew recommendInfo={this.state.recommendInfo} />}
          <Qualification />
          <Footer />
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

export default connect( mapStateToProps, mapDispatchToProps )(Home);