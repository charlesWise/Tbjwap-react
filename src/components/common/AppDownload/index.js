/**
 * Created by chenrunsheng on 2017/7/26.
 */
import React from 'react';

import './appDownload.scss';

class AppDownload extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="app-download-wrap">
        <i className="icon-logo-48"></i>
        <a href="javascript:;" className="download-tips">点击下载投融家app，畅享全新移动互联体验</a>
        <i className="icon-close" onClick={() => this.props.closeAppDownload()}></i>
      </section>
    )
  }
}


export default AppDownload;