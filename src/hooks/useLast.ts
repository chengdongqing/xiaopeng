import { Ref, ref, UnwrapRef, watch } from 'vue'

export default function useLast<T>(
  value: Ref<UnwrapRef<T>>
): Ref<UnwrapRef<T>> {
  const last = ref(value.value as T)
  let old = ref(value.value as T)

  watch(
    () => value.value,
    () => {
      last.value = old.value
      old.value = value.value
    }
  )

  return last
}
