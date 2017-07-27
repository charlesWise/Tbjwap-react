/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';

import './home.scss';
import { Banner } from '../../service/apiUrl';
import AppDownload from 'components/appDownload';
import Footer from 'components/footer';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () {
    Banner({type: 100}).then(res => {
      if(res.boolen == 1) {
        
      }
    });
  }

  render () {
    return (
      <section className="home-wrapper">
          <AppDownload />
          <Footer />
      </section>
    )
  }
}

export default Home;