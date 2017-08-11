/**
 * Created by chenrunsheng on 2017/7/28.
 */
import React from 'react';
import ReactLoading from 'react-loading';

import './loading.scss';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="loading-wap">
        <div className="loading">
          <ReactLoading type={'spinningBubbles'} color={'#FFF'} width={'2.8rem'} height={'2.8rem'} />
          <p>Loading...</p>
        </div>
      </section>
    )
  }
}


export default Loading;