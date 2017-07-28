/**
 * Created by chenrunsheng on 2017/7/28.
 */
import React from 'react';
import './banner.scss';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerInfo: this.props.bannerInfo || []
    }
  }

  componentDidMount () {

  }

  render() {
    return (
        <section className="app-download-wrap">
          banner
        </section>
    )
  }
}


export default Banner;