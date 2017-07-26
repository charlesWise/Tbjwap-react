/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';

import './home';
import { Banner } from '../../service/apiUrl';
import Header from 'components/header';
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
          <Header />
          <Footer />
      </section>
    )
  }
}

export default Home;