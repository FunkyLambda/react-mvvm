import {ILandingViewModel} from '../Landing/types'
import {IUserSettingsViewModel} from '../UserSettings/types'

export interface IMainViewModel {
  LandingViewModel: ILandingViewModel
  UserSettingsViewModel: IUserSettingsViewModel
}
