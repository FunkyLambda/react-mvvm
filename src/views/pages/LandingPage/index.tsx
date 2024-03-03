import {useEffect, useState} from 'react'
import {LandingPage} from './LandingPage'
import {ILandingViewModel} from '../../../viewmodels/Landing/types'

export default (props: {vm: ILandingViewModel}) => {
  //console.log("Rendering LandingPage...")
  
  // The VM
  const {vm} = props

  // The actual view
  const View = () => {
    // The local state (use as many or as few callbacks depending on level of granularity required)
    const [_n, setName] = useState(vm.Name)
    vm.SetCallbacks({setName})

    //useEffect(vm.OnPageLoaded)

    return LandingPage(vm)
  }
  return <View />
}
