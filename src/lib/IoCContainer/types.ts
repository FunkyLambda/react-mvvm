export interface IContainer {
  Register<T>(label: string, resolution: (container: IContainer) => T): void,
  RegisterSingleton<T>(label: string, resolution: (container: IContainer) => T): void,
  Resolve<T>(label: string): T
}
