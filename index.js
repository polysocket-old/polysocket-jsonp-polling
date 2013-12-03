module.exports = JsonPolling 

var events       = require('events')
  , L            = require('lodash')
  , Q            = require('q')
  , WebSocketURL = require('websocket-url')
  , util         = require('util')

var CONNECTING = 0
  , OPEN       = 1
  , CLOSING    = 2
  , CLOSED     = 3

function JsonPolling(url, protocols) {
  if (protocols === undefined) {
    protocols = []
  }
  if (typeof protocols === "string") {
    protocols = [protocols]
  }
  if (!L.isArray(protocols)) {
    throw new SyntaxError('protocols must be string, array of strings, or null')
  }
  WebSocketURL.parse(url) // throws error on invalid websocket url
  // TODO check security matches current browser security
  // TODO check port is not to well-known non-websocket port (security error)

  this.readyState     = CONNECTING
  this.bufferedAmount = 0
  this.extensions     = ""
  this.protocol       = ""
}

util.inherits(JsonPolling, events.EventEmitter)

JsonPolling.prototype.close = function(code, reason) {
  if (code !== undefined) {
    if (typeof code === "number" && code === 1000 || (3000 <= code && code < 5000)) {
      // TODO for now expect reason to be valid
      if (this.readyState === CLOSING || this.readyState === CLOSED) {
        // do nothing
      } else if (this.readyState === ?) {}
    } else {
      throw new InvalidAccessError()
    }
  }
}


