export interface INavigator {
  Push: (componentName: string, params?: object) => void
  Pop: (toTop?: boolean) => void
}
