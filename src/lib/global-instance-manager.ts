declare global {
    // eslint-disable-next-line no-var
    var GlobalInstanceManagerInstance: GlobalInstanceManager // NOSONAR
}

type ObjectCache = Record<string, object>

class GlobalInstanceManager {
    _instances: ObjectCache = {}

    getInstance(type: string): unknown {
        return this._instances[type]
    }

    saveInstance(type: string, instance: object): void {
        if (typeof this._instances[type] === 'undefined') {
            this._instances[type] = instance
        }
    }
}

if (!('GlobalInstanceManagerInstance' in globalThis)) {
    globalThis.GlobalInstanceManagerInstance = new GlobalInstanceManager()
}

const GlobalInstanceManagerInstance = globalThis.GlobalInstanceManagerInstance

export default GlobalInstanceManagerInstance
