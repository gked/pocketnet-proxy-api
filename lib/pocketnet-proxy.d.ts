declare namespace global {
  var MIN_NODES_COUNT: number
  var WRITE_LOGS: boolean
  var USE_TRUST_NODES_ONLY: boolean
  var REVERSE_PROXY: boolean
  var USE_TLS_NODES_ONLY: boolean
}

declare module 'pocketnet-proxy/src/kit.js' {
  interface NodeManager {
    someProperty: string
  }

  interface Cache {
    add: (key: string, value: any) => void
    get: (key: string) => any
  }

  interface Kit {
    start: (config: { list: Array<'nodeManager' | 'cache'> }) => Promise<void>
    proxy: () => Promise<{
      api: {
        node: {
          rpc: {
            action: (params: {
              method: string
              parameters: unknown
              options?: any
            }) => Promise<any>
          }
        }
      }
    }>
  }

  const kit: Kit
  export default kit
}

declare module 'pocketnet-proxy/src/lib/btc16.js';