import {IUserSettings} from '../../models/UserSettings/types'
import {INavigator} from '../../views/navigation/types'
import {IUserSettingsViewModel, TCallbacks} from './types'
import {RegistryNames} from '../../startup/RegistryNames'
import {IEventBus} from '../../utils/EventBus/types'

export default class implements IUserSettingsViewModel {
  public Name:string
  public Age: number
  public IsSubscribed: boolean

  private navigator: INavigator
  private userSettings: IUserSettings
  private eventBus: IEventBus
  private callbacks!: TCallbacks

  constructor(
    navigator: INavigator,
    userSettings: IUserSettings,
    eventBus: IEventBus,
  ) {
    this.navigator = navigator
    this.userSettings = userSettings
    this.eventBus = eventBus
    
    this.Name = this.userSettings.name
    this.Age = this.userSettings.age || 0
    this.IsSubscribed = this.userSettings.isSubscribed || false
  }

  public MaySubscribe = () => {
    return this.Age >= 18
  }

  public SetCallbacks = (callbacks: TCallbacks) => {
    this.callbacks = callbacks
  }

  public OnUpdateName = (name: string) => {
    this.Name = name
    this.callbacks.setName(this.Name)
  }

  public OnUpdateAge = (age: string) => {
    const age_input_valid = age === '' || /^\d+$/.test(age)
    if (!age_input_valid) {
      return
    }
    this.Age = Number(age)
    this.IsSubscribed = this.IsSubscribed && this.MaySubscribe()
    this.callbacks.setAge(this.Age)
    this.callbacks.setIsSubscribed(this.IsSubscribed)
  }

  public OnUpdateSubscription = (subscribe: boolean) => {
    this.IsSubscribed = subscribe
    this.callbacks.setIsSubscribed(this.IsSubscribed)
  }

  public SaveUpdates = () => {
    this.userSettings.name = this.Name
    this.userSettings.age = this.Age
    this.userSettings.isSubscribed = this.IsSubscribed

    this.eventBus.publish(RegistryNames.UserSettingsTopicKey, this.userSettings)

    this.navigator.Pop()
  }
}
