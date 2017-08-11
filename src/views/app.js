/**
 * Created by chenrunsheng on 2017/7/21.
 */
import React from 'react';
import { connect } from 'react-redux';
import Loading from 'components/common/Loading';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){

  }

  render(){
    let { loading } = this.props;
    return(
      <div>
        {this.props.children}
        {loading && <Loading />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading : state.loading
  }
}

export default connect( mapStateToProps )(App);