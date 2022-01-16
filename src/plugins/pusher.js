import Pusher from 'pusher-js'

class VuePusher {
  constructor(api_key, options) {
    this.pusher = new Pusher(api_key, options)
    this.channelName = ''
    this.channel = null
  }
}

VuePusher.prototype.subscribe = function (channelName) {
  if (this.channelName === channelName) return this.channel
  if (this.channelName) {
    this.pusher.unsubscribe(this.channelName)
  }
  this.channelName = channelName
  this.channel = this.pusher.subscribe(channelName)
  return this.channel
}

VuePusher.prototype.unsubscribe = function (channelName) {
  this.channels.mainChannel = ''
  this.pusher.unsubscribe(channelName)
}

VuePusher.prototype.getChannels = function () {
  return this.channels
}

export default {
  install(Vue, options) {
    const pusher = new VuePusher(options.api_key, options.options)

    Vue.prototype.$pusher = pusher
  },
}
