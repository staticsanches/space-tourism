import 'csstype'

type Colors = 'dark' | 'light' | 'white'

declare module 'csstype' {
  interface Properties {
    '--clr-dark'?: string
    '--clr-light'?: string
    '--clr-white'?: string

    '--fs-900'?: string
    '--fs-800'?: string
    '--fs-700'?: string
    '--fs-600'?: string
    '--fs-500'?: string
    '--fs-400'?: string
    '--fs-300'?: string
    '--fs-200'?: string

    '--ff-serif'?: string
    '--ff-sans-cond'?: string
    '--ff-sans-normal'?: string

    '--gap'?: string
    '--grid-container-gap'?: string

    '--flow-space'?: string
  }
}
