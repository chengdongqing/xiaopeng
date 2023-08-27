type ConfigurationItem = {
  title: string
  children: (
    | {
        name: string
        value: string | boolean
        optional?: boolean | number
      }
    | ConfigurationItem
  )[]
}

export interface ConfigurationProps {
  modelName: string
  children: {
    subModelName: string
    price: number
    children: ConfigurationItem[]
  }[]
}
