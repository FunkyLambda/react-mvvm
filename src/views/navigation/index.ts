import {createRef} from 'react'
import {NavigationContainerRef, StackActions} from '@react-navigation/native'
import {INavigator} from './types'

// NavigationActions seems deprecated in latest version (5.x)
// of React Navigation.
// Instead they prescribe a method using React.createRef,
// as implemented below.
// Ref: https://reactnavigation.org/docs/navigating-without-navigation-prop/
export const NavigationRef = createRef<NavigationContainerRef<any>>()

export default class implements INavigator {
  Push(pathName: string, params?: object) {
    const current = NavigationRef.current

    // the previous implementation: current?.dispatch(StackActions.push(pathName, params))
    // meant that rapidly pressing a button to route would route to the same screen multiple times
    // this solves that
    // https://github.com/react-navigation/react-navigation.github.io/issues/42#issuecomment-529601326
    current?.navigate({
      name: pathName,
      params,
      merge: true,
    })
  }

  Pop(toTop?: boolean) {
    const current = NavigationRef.current
    if (toTop) {
      current?.dispatch(StackActions.popToTop())
    } else {
      current?.dispatch(StackActions.pop())
    }
  }
}
