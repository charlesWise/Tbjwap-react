/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';

import './home.scss';

import { Banner } from 'service/apiUrl';
import AppDownload from 'components/common/AppDownload';
import Footer from 'components/footer';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isShowAppDownload: true
    }
  }

  componentDidMount () {
    Banner({type: 100}).then(res => {
      if(res.boolen == 1) {
        
      }
    });
  }

  _closeAppDownload() {
    this.setState({
      isShowAppDownload: false
    })
  }

  render () {
    return (
      <section className="home-wrapper">
          {this.state.isShowAppDownload && <AppDownload closeAppDownload={() => this._closeAppDownload()} />}
          
          <Footer />
      </section>
    )
  }
}

export default Home;