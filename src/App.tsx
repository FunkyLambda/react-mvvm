import {NavigationContainer} from '@react-navigation/native'
import MainRoute from './views/routes/MainRoute'
import {NavigationRef} from './views/navigation'
import {IMainViewModel} from './viewmodels/Main/types'

export default (props: {vm: IMainViewModel}) => {
  return (
    <NavigationContainer ref={NavigationRef}>
      <MainRoute vm={props.vm}/>
    </NavigationContainer>
  )
}
