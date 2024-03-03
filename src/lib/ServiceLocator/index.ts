// Service Locator for the project.
// To avoid the anti-pattern, GetService should NOT be called
// from clases or functions that ought to have all dependencies injected.
// Only things that exist adjacent to the composition-root, 
// such as a base view or even view containers, may reference this.

import {Container} from '../IoCContainer'

export const CurrentContainer = new Container()

export const GetService = function<T>(label: string): T {
  return CurrentContainer.Resolve<T>(label)
}
