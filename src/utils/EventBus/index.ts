import {IEventBus, IEventBusSubscriber} from './types'

export default class EventBus implements IEventBus {
  private subscribers: {[key: string]: Array<IEventBusSubscriber<any>>}

  constructor() {
    this.subscribers = {}
  }

  subscribe = <T>(topicKey: string, subscriber: IEventBusSubscriber<T>) => {
    let topic_subscribers = this.subscribers[topicKey]
    if (!topic_subscribers) {
      topic_subscribers = new Array<IEventBusSubscriber<T>>()
      this.subscribers[topicKey] = topic_subscribers
    }
    if (!topic_subscribers.includes(subscriber)) {
      topic_subscribers.push(subscriber)
    }
  }

  publish = <T>(topicKey: string, message: T) => {
    let topic_subscribers = this.subscribers[topicKey]
    if (!!topic_subscribers) {
      topic_subscribers.forEach(s => {
        s.OnUpdate(message)
      })
    }
  }
}
