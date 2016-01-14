
import { equal } from 'assert'

import _ from './fixture/item'

describe('## export proxy', () => {
  describe('# basic', () => {
    it('success', () => {
      equal(_.changePwd(), 'change password success')
      equal(_.buyItem(), 'buy item success')
    })
  })
})
