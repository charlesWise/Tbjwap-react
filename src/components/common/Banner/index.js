/**
 * Created by chenrunsheng on 2017/7/28.
 */
import React from 'react';
import ReactSwipe from 'react-swipe';

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
    /* eslint-disable */
    const swipeOptions = {
      startSlide: 1,
      speed: 400,
      auto: 3000,
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
      callback: function(index, elem) {},
      transitionEnd: function(index, elem) {}
    };
    /* eslint-enable */
    return (
        <ReactSwipe ref={v => this.reactSwipe = v} className="carousel" swipeOptions={swipeOptions}>
            {
              this.state.bannerInfo.length > 0 && this.state.bannerInfo.map((item, index) => {
                return (
                  <a key={'banner'+index} href={item.href_url}>
                    <img src={item.url_s700} alt=""/>
                  </a>
                )
              })
            }
        </ReactSwipe>
    )
  }
}


export default Banner;