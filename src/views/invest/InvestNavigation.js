/**
 * Created by chenrunsheng on 2017/8/11.
 */
import React from 'react';
import { connect } from 'react-redux';
import { prjSeries } from './../../actions';

class InvestNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curSeries: 0
        }
    }

    componentDidMount() {

    }

    _prdSeries(type) {
        this.props.prjSeries(type);
        this.setState({ curSeries: type })
    }

    render() {
        return (
            <section className="invest-nav-wrap">
                <ul>
                    <li className={this.state.curSeries == 0 && 'active'}
                        onClick={() => { this._prdSeries(0) }}><a href="javascript:;">全部</a></li>
                    <li className={this.state.curSeries == 1 && 'active'}
                        onClick={() => { this._prdSeries(1) }}><a href="javascript:;">盾系</a></li>
                    <li className={this.state.curSeries == 2 && 'active'}
                        onClick={() => { this._prdSeries(2) }}><a href="javascript:;">赢系</a></li>
                    <li className={this.state.curSeries == 3 && 'active'}
                        onClick={() => { this._prdSeries(3) }}><a href="javascript:;">铂系</a></li>
                </ul>
            </section>
        )
    }
}


function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        prjSeries: (type) => dispatch(prjSeries(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestNavigation);