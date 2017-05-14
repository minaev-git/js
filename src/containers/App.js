/**
 * Created by Никита on 11.05.2017.
 */
import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Place from '../components/Place';
import *as placeActions from '../actions/PlaceActions';

class App extends Component {
  render() {
    return (
     <Place/>
    )
  }
}
function mapStateToProps(state){
  return {

  }
}
function mapDispatchToProps(dispatch) {
  return {
    placeActions: bindActionCreators(placeActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);