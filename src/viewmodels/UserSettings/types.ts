export type TCallbacks = {
  setName: (name: string) => void
  setAge: (age: number) => void
  setIsSubscribed: (subscribed: boolean) => void
}

export interface IUserSettingsViewModel {
  SetCallbacks: (callbacks: TCallbacks) => void
  Name: string
  Age: number
  IsSubscribed: boolean
  MaySubscribe: () => boolean
  OnUpdateName: (name: string) => void
  OnUpdateAge: (age: string) => void
  OnUpdateSubscription: (subscribe: boolean) => void
  SaveUpdates: () => void
}
