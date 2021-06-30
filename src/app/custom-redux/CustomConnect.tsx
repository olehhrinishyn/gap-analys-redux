import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import {store} from '../App'

export const CustomConnect = (mapStateToProps, mapDispatchToProps) => {

  return (Component) => {
    const WrapComponent = ownProps => {
      // useEffect(()=>{
      //   return () => {
      //     store.event.off
      //   }
      // }) // TODO: UNSUBSCIBE FROM EVENT
      // TODO: HOW TO COMBINE REDUCER
      const dispatchedAction = {};
      const keys = Object.keys(mapDispatchToProps);
      
      keys.forEach(key => {
        const payloadfunc = (payload) => {
          const actionObject = mapDispatchToProps[key](payload)
          store.dispache(actionObject)
        }

        dispatchedAction[key] = payloadfunc;
       }
       ); // TODO: CHECK DISPATCH
       let  statepropscurrent = mapStateToProps(store)
      const [stateProps, setStateProps] = useState(statepropscurrent)
      
      store.event.on('new state', () => {
        statepropscurrent = mapStateToProps(store.state);
        setStateProps(statepropscurrent);
      })


       
      return <Component {...stateProps} {...dispatchedAction} {...ownProps}/>
    }

    return WrapComponent
    
  }
}