import { createUI } from 'taro-ui-vue3'
import {
  AtButton,
  AtInput,
} from 'taro-ui-vue3/lib'

const tuv3 = createUI({
  AtButton,
  AtInput,
})

export function useTuv(app){
  app.use(tuv3)
}
