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
      let  statepropscurrent = mapStateToProps(store.state)
      const [stateProps, setStateProps] = useState(statepropscurrent)
      useEffect(() => {
        const listener = () => {
          console.info('new Event')
          statepropscurrent = mapStateToProps(store.state);
          setStateProps(statepropscurrent);
        }
        store.event.on('new state', listener);
        return () => {
          store.event.off('new state', listener)
        }
      },[])
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


      //store.event.removeListener('new state', listener)

       
      return <Component {...stateProps} {...dispatchedAction} {...ownProps}/>
    }

    return WrapComponent
    
  }
}