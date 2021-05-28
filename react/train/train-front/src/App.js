import React,{useCallback,useMemo} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {setFrom} from './store/actions'
const App=(props)=>{
  console.log(props,'----------');
  const{
    from,
    dispatch
  }=props;
  const onBack=useCallback(()=>{
    window.history.back();
  },[])
  return(
    <>
    </>
  )
}
// HOC 
export default connect(
  function mapStateToProps(state){
    return state;
  },
  function mapDispatchToProps(dispatch){
    return{
      dispatch
    }
  }
)(App)