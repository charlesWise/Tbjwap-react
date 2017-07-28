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
    console.log(this.props.bannerInfo)
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            this.state.bannerInfo.length > 0 && this.state.bannerInfo.map((item, index) => {
              return (
                <div className="swiper-slide food_types_container" key={index}>
                  {item.title}
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}


export default Banner;