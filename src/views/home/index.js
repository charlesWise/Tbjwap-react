/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import './home.scss';

import { banner } from 'service/apiUrl';
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
      isMount: false,
      isShowAppDownload: true,
      bannerInfo: []
    }
  }

  componentWillMount() {
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

        this.setState({
          bannerInfo: bannerImg,
          isMount: true
        })
      }
    });
    /* eslint-enable */
  }

  componentWillUnmount() {
    this.setState({isMount: false})
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
          {this.state.isMount && <Banner bannerInfo={this.state.bannerInfo} />}
          <ActiveNavigation />
          <RecommendNew />
          <Qualification />
          <Footer />
      </section>
    )
  }
}

export default Home;