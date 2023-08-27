export interface ModelItemProps {
  subModelName: string
  price: number
  children: {
    title: string
    children: {
      title?: string
      children: {
        name: string
        value: string | boolean
        optional?: boolean | number
      }[]
    }[]
  }[]
}

export interface ConfigurationProps {
  modelName: string
  children: ModelItemProps[]
}
