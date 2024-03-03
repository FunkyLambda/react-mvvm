import {useState} from 'react'
import {UserSettingsPage} from './UserSettingsPage'
import {IUserSettingsViewModel} from '../../../viewmodels/UserSettings/types'

export default (props: {vm: IUserSettingsViewModel}) => {
  //console.log("Rendering UserSettingsPage...")

  // The VM
  const {vm} = props

  // The actual view
  const View = () => {
    // The local state (use as many or as few callbacks depending on level of granularity required)
    const [_n, setName] = useState(vm.Name)
    const [_a, setAge] = useState(vm.Age)
    const [_s, setIsSubscribed] = useState(vm.IsSubscribed)
    vm.SetCallbacks({setName, setAge, setIsSubscribed})

    return UserSettingsPage(vm)
  }
  return <View />
}
