/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import { Link } from 'react-router';

import './home';
import { getIndexSpecial,banner } from '../../service/apiUrl';
import Header from 'components/header';
import Footer from 'components/footer';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentDidMount () {
    getIndexSpecial().then(res => {
      if(res.boolen == 1) {
        this.setState({
          data: res.data
        })
      }
    });
    banner({type: 100}).then(res => {
      if(res.boolen == 1) {
      }
    });
  }

  render () {
    return (
      <section className="home-wrapper">
          <Header />
          {
            this.state.data.length > 0 && this.state.data.map((v, i) => {
              return <Link key={i}>{v.name}</Link>
            })
          }
          <Footer />
      </section>
    )
  }
}

export default Home;