export interface IEventBusSubscriber<T> {
  OnUpdate: (message: T) => void
}

export interface IEventBus {
  subscribe: <T>(topicKey: string, subscriber: IEventBusSubscriber<T>) => void
  publish: <T>(topicKey: string, message: T) => void
}
