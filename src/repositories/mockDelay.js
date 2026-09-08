import { delay } from '../lib/delay.js'
import { config } from '../config/env.js'

export function mockDelay() {
  return delay(config.mockLatencyMs)
}
