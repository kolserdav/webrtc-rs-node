declare module '*/addon/addon.node' {
  export const start: (arg: string) => Promise<string>
  export const peer_connection_1: () => Promise<void>
}