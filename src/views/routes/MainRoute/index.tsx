import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LandingPage from '../../pages/LandingPage'
import UserSettingsPage from '../../pages/UserSettingsPage'
import {IMainViewModel} from '../../../viewmodels/Main/types'
import {RegistryNames} from '../../../startup/RegistryNames'

export default (props: {vm: IMainViewModel}) => {
  //console.log('Rendering MainRoute...')

  // The VM
  const {vm} = props

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RegistryNames.LandingPage}
      >
        {() => <LandingPage vm={vm.LandingViewModel} />}
      </Stack.Screen>
      <Stack.Screen
        name={RegistryNames.UserSettingsPage}
      >
        {() => <UserSettingsPage vm={vm.UserSettingsViewModel} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
