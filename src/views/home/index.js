/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import './home.scss';

import { banner } from 'service/apiUrl';
import AppDownload from 'components/common/AppDownload';
import Banner from 'components/common/Banner';
import Footer from 'components/footer';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isShowAppDownload: true,
      bannerInfo: []
    }
  }

  componentDidMount () {
    banner({type: 100}).then(res => {
      if(res.boolen == 1) {
        this.setState({
          bannerInfo: res.data
        })
      }
    });
  }

  _closeAppDownload() {
    this.setState({
      isShowAppDownload: false
    })
  }

  render () {
    console.log(this.state.bannerInfo)
    return (
      <section className="home-wrapper">
          {this.state.isShowAppDownload && <AppDownload closeAppDownload={() => this._closeAppDownload()} />}
          <Banner bannerInfo={this.state.bannerInfo} />
          <Footer />
      </section>
    )
  }
}

export default Home;