import { createUI } from 'taro-ui-vue3'
import {
  AtButton,
  AtInput,
  AtInputNumber
} from 'taro-ui-vue3/lib'

const tuv3 = createUI({
  AtButton,
  AtInput,
  AtInputNumber
})

export function useTuv(app){
  app.use(tuv3)
}
