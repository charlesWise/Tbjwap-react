/**
 * Created by chenrunsheng on 2017/8/15.
 */
import React from 'react';
import './loadMore.scss';

class LoadMore extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="load-more-wap">
                <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
                <p>数据加载中</p>
            </section>
        )
    }
}


export default LoadMore;