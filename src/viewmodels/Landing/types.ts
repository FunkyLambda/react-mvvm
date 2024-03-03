import {IUserSettings} from '../../models/UserSettings/types'
import {IEventBusSubscriber} from '../../utils/EventBus/types'

export type TCallbacks = {
  setName: (name: string) => void
}

export interface ILandingViewModel extends IEventBusSubscriber<IUserSettings> {
  Name: string
  SetCallbacks: (callbacks: TCallbacks) => void
  OnPageLoaded: () => void
  OnSettingsPressed: () => void
}
