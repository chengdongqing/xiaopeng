import { InjectionKey, Ref } from 'vue'

export const MainLayoutInjectionKey = Symbol() as InjectionKey<{
  isChangeThemeOnScroll: Ref<boolean>
  setChangeThemeOnScroll(change: boolean): void
}>
