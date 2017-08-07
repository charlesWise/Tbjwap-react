/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import { connect } from 'react-redux';

import { isShowLoading } from './../actions';
import Loading from 'components/common/Loading';
import Home from 'views/home';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    
  }

  loading() {
    // this.props.isShowLoading(true);
    if (!this.props.loading) return null;
    return <Loading />
  }

  render(){
    return(
      <div>
        {this.props.children|| <Home/>}
        {this.loading()}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    loading : state.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    isShowLoading: (isShowLoad) => dispatch(isShowLoading(isShowLoad))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);