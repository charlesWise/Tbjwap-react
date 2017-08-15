/**
 * Created by chenrunsheng on 2017/7/28.
 */
import React from 'react';
// import ReactLoading from 'react-loading';

import './loading.scss';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="loading-wap">
        <div className="loading">
          {/* <ReactLoading type={'spinningBubbles'} color={'#FFF'} width={'2.8rem'} height={'2.8rem'} /> */}
          <div className="spinner">
            <div className="spinner-container container1">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="circle4"></div>
            </div>
            <div className="spinner-container container2">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="circle4"></div>
            </div>
            <div className="spinner-container container3">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="circle4"></div>
            </div>
          </div>
          <p>Loading...</p>
        </div>
      </section>
    )
  }
}


export default Loading;