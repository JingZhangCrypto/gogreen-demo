export enum Env {
  DEV = 'development',
  TEST = 'test',
  PRODUCTION = 'production',
}

export enum AppHostEnum {
  main = '', // TODO: add main production host
  test = 'station.g.io',
}
export const isProduction = () => window.location.hostname === AppHostEnum.main
