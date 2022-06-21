declare module globalThis {
  // eslint-disable-next-line no-var, no-unused-vars
  var GlobalInstanceManagerInstance: any
}

type ObjectCache = {
  [key: string]: any
}

class GlobalInstanceManager {
  _instances: ObjectCache = {}

  saveInstance (type: any, instance: any): void {
    if (this._instances[type] == null) {
      this._instances[type] = instance
    }
  }

  getInstance (InstanceType: any): any {
    if (this._instances[InstanceType] == null) {
      if (InstanceType.constructor != null) {
        this._instances[InstanceType] = new InstanceType()
      } else if (InstanceType.createInstance != null) {
        this._instances[InstanceType] = InstanceType.createInstance()
      } else {
        this._instances[InstanceType] = InstanceType
      }
    }

    const instance = this._instances[InstanceType]

    if (instance) {
      return instance
    }
  }
}

if (globalThis.GlobalInstanceManagerInstance == null) {
  globalThis.GlobalInstanceManagerInstance = new GlobalInstanceManager()
}

const GlobalInstanceManagerInstance = globalThis.GlobalInstanceManagerInstance

export default GlobalInstanceManagerInstance
