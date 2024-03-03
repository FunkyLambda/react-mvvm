// A pretty basic IoC container, that gets the job done.
// Could use a 3rd party one however due to lack of RTTI in TypeScript,
// these all tend to flood classes with decorators (such as @injectable), 
// therefore coupling them tightly to implementation (Bad!).
// It is also unclear whether such librairies support registration of
// functions (alongside classes).

import {IContainer} from './types'

type TContainerRegistration = {
  isSingleton: boolean
  previouslyResolved: boolean
  resolution: any
}

export class Container implements IContainer {
  private registrations: {
    [label: string]: TContainerRegistration
  }

  constructor() {
    this.registrations = {}
  }

  Register<T>(
    label: string,
    resolution: (container: Container) => T,
  ) {
    this.register(false, label, resolution)
  }

  RegisterSingleton<T>(
    label: string,
    resolution: (container: Container) => T,
  ) {
    this.register(true, label, resolution)
  }

  Resolve<T>(label: string): T {
    const registration = this.registrations[label]
    let resolution: any = undefined

    if (registration.isSingleton) {
      if (!registration.previouslyResolved) {
        registration.resolution = registration.resolution()
      }

      resolution = registration.resolution
    } else {
      resolution = registration.resolution()
    }

    registration.previouslyResolved = true

    return resolution
  }

  private register(
    isSingleton: boolean = false,
    label: string,
    resolution: (container: Container) => any
  ) {
    this.registrations[label] = {
      isSingleton,
      previouslyResolved: false,
      resolution: () => resolution(this),
    }
  }
}

export default Container
