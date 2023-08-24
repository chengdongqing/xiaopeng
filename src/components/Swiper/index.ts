import { InjectionKey, Ref } from 'vue'
import Container from './Swiper.vue'
import ButtonGroup from './SwiperButtons.vue'
import Item from './SwiperItem.vue'

export interface SwiperProps {
  autoplay?: boolean
  interval?: number
  duration?: number
  card?: boolean
  cardScale?: number
  pauseOnHover?: boolean
}

export interface SwiperInjectionProps {
  current: Ref<number>
  card: boolean
  cardScale: number
  register(): number
  goTo(index: number): void
  toNext(): void
  toPrev(): void
}

export const SwiperInjectionKey = Symbol() as InjectionKey<SwiperInjectionProps>

export { Container, Item, ButtonGroup }
