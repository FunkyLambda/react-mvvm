import {IUserSettings} from '../../models/UserSettings/types'
import {INavigator} from '../../views/navigation/types'
import {ILandingViewModel, TCallbacks} from './types'
import {RegistryNames} from '../../startup/RegistryNames'
import {IEventBus} from '../../utils/EventBus/types'

export default class implements ILandingViewModel {
  public Name: string

  private navigator: INavigator
  private eventBus: IEventBus
  private callbacks!: TCallbacks

  constructor(
    navigator: INavigator,
    userSettings: IUserSettings,
    eventBus: IEventBus,
  ) {
    this.navigator = navigator
    this.eventBus = eventBus

    this.Name = userSettings.name

    this.eventBus.subscribe(RegistryNames.UserSettingsTopicKey, this)
  }

  OnUpdate = (message: IUserSettings) => {
    this.Name = message.name
    this.callbacks?.setName(this.Name)
  }

  public SetCallbacks = (callbacks: TCallbacks) => {
    this.callbacks = callbacks
  }

  OnPageLoaded = () => {
  }

  OnSettingsPressed = () => {
    this.navigator.Push(RegistryNames.UserSettingsPage)
  }
}
