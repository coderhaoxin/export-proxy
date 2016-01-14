
import createExportProxy from '../../lib'

import * as item from './item'
import * as user from './user'

export default createExportProxy(item, user)
