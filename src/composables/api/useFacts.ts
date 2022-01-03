import { http, ResponseInterface, initialResponse } from '@/composables/useHttp'
import { ref } from 'vue'

interface FactInterface {
  fact: string,
  length: number
}

interface FactsInterface {
  current_page: 1,
  data: FactInterface[]
}

export default function useFacts () {
  const response = ref<ResponseInterface<FactInterface | FactsInterface>>(initialResponse)
  const loading = ref(false)

  const find = async () => {
    loading.value = true
    response.value = await http<FactsInterface>({ url: 'facts' })
    loading.value = false
  }

  const get = async () => {
    loading.value = true
    response.value = await http<FactInterface>({
      url: 'fact'
    })
    loading.value = false
  }

  return { response, loading, find, get }
}
