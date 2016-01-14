
function createExportProxy(...modules) {
  const handler = {
    get: (target, name) => {
      for (let i = 0; i < modules.length; i++) {
        const module = modules[i]

        if (module && module[name]) {
          return module[name]
        }
      }
    }
  }

  const proxy = new Proxy({}, handler)

  return proxy
}

export default createExportProxy
