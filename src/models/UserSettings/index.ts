import {IUserSettings} from './types'

export default class UserSettings implements IUserSettings {
  name: string
  age?: number
  isSubscribed?: boolean

  constructor() {
    this.name = ""
  }
}
