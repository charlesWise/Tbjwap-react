/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import { Link } from 'react-router';

import './home';
import Header from 'components/header';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <section className="home-wrapper">
          <Header />
          <Link />
      </section>
    )
  }
}

export default Home;