import {IContainer} from '../lib/IoCContainer/types'
import {CurrentContainer} from '../lib/ServiceLocator'
import {RegistryNames} from './RegistryNames'
import {INavigator} from '../views/navigation/types'
import Navigator from '../views/navigation'
import {IMainViewModel} from '../viewmodels/Main/types'
import MainViewModel from '../viewmodels/Main'
import {ILandingViewModel} from '../viewmodels/Landing/types'
import LandingViewModel from '../viewmodels/Landing'
import {IUserSettingsViewModel} from '../viewmodels/UserSettings/types'
import UserSettingsViewModel from '../viewmodels/UserSettings'
import {IUserSettings} from '../models/UserSettings/types'
import UserSettings from '../models/UserSettings'
import {IEventBus} from '../utils/EventBus/types'
import EventBus from '../utils/EventBus'

// ---------------------------------------------------------------------
// Register services below
// ---------------------------------------------------------------------
export const RegisterServices = () => {
  register<INavigator>(RegistryNames.INavigator, () => new Navigator())
  register<IEventBus>(
    RegistryNames.IEventBus,
    (c) => new EventBus(),
    true,
  )
  register<IUserSettings>(
    RegistryNames.IUserSettings,
    (c) => new UserSettings(),
    true, // singleton (i.e., global state)
  )
  register<IMainViewModel>(
    RegistryNames.IMainViewModel,
    (c) => new MainViewModel(
      c.Resolve<ILandingViewModel>(RegistryNames.ILandingViewModel),
      c.Resolve<IUserSettingsViewModel>(RegistryNames.IUserSettingsViewModel),
    )
  )
  register<ILandingViewModel>(
    RegistryNames.ILandingViewModel,
    (c) => new LandingViewModel(
      c.Resolve<INavigator>(RegistryNames.INavigator),
      c.Resolve<IUserSettings>(RegistryNames.IUserSettings),
      c.Resolve<IEventBus>(RegistryNames.IEventBus),
    )
  )
  register<IUserSettingsViewModel>(
    RegistryNames.IUserSettingsViewModel,
    (c) => new UserSettingsViewModel(
      c.Resolve<INavigator>(RegistryNames.INavigator),
      c.Resolve<IUserSettings>(RegistryNames.IUserSettings),
      c.Resolve<IEventBus>(RegistryNames.IEventBus),
    )
  )
}


// ---------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------
type TValueOf<T> = T[keyof T]
function register<T>(
  label: TValueOf<typeof RegistryNames>,
  resolution: (container: IContainer) => T,
  asSingleton: boolean = false,
) {
  if (asSingleton)
    CurrentContainer.RegisterSingleton<T>(label, resolution)
  else
    CurrentContainer.Register<T>(label, resolution)
}
