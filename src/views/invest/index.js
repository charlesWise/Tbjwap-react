/**
 * Created by chenrunsheng on 2017/7/29.
 */
import React from 'react';
import './invest.scss';

import { banner } from 'service/apiUrl';
import Banner from 'components/common/Banner';
import Footer from 'components/footer';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isMount: false,
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

   render () {
    return (
      <section className="wrapper">
          {this.state.isMount && <Banner bannerInfo = {this.state.bannerInfo} />}
          <Footer router = {this.props.router} />
      </section>
    )
  }
}

export default Home;