/**
 * Created by chenrunsheng on 2017/7/29.
 */
import React from 'react';
import './invest.scss';

import Header from 'components/header';
import InvestNavigation from './InvestNavigation';
import InvestList from './InvestList';
import Footer from 'components/footer';

class Invest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
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


export default Invest;