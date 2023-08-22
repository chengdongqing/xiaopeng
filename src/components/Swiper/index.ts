import { InjectionKey, Ref } from 'vue'
import Container from './Swiper.vue'
import Item from './SwiperItem.vue'

export interface SwiperProps {
  current?: number
  autoplay?: boolean
  interval?: number
  animation?: AnimationTypes
  duration?: number
  card?: boolean
}

export interface SwiperInjectionProps {
  current: Ref<number>
  animation: Ref<string>
  duration: number
  register: () => number
}

export const SwiperInjectionKey = Symbol() as InjectionKey<SwiperInjectionProps>

export type AnimationTypes = 'fadeIn' | 'slideX' | 'slideY'

export const animationMap = {
  fadeIn: ['fade', 'fade'],
  slideX: ['slide-right', 'slide-left'],
  slideY: ['slide-up', 'slide-down']
}

export { Container, Item }
