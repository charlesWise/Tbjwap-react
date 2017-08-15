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

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <section className="invest-nav-wrap">
                <ul>
                    <li className="active" onClick={() => { this.props.prjSeries(0) }}><a href="javascript:;">全部</a></li>
                    <li onClick={() => { this.props.prjSeries(1) }}><a href="javascript:;">盾系</a></li>
                    <li onClick={() => { this.props.prjSeries(2) }}><a href="javascript:;">赢系</a></li>
                    <li onClick={() => { this.props.prjSeries(3) }}><a href="javascript:;">铂系</a></li>
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