import {IMainViewModel} from './types'
import {ILandingViewModel} from '../Landing/types'
import {IUserSettingsViewModel} from '../UserSettings/types'

export default class MainViewModel implements IMainViewModel {
  public LandingViewModel: ILandingViewModel
  public UserSettingsViewModel: IUserSettingsViewModel

  constructor(
    landingViewModel: ILandingViewModel,
    userSettingsViewModel: IUserSettingsViewModel,
  ) {
    this.LandingViewModel = landingViewModel
    this.UserSettingsViewModel = userSettingsViewModel
  }
}
