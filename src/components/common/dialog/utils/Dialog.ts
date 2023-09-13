import {createApp} from "vue";
import Dialog from "@/components/common/dialog/Dialog.vue";

export function createDialog(opt){
  const mountNode = document.createElement('div')
  const Instance = createApp(Dialog,{
    ...opt
  })
  const app = document.getElementById('App')
  app.appendChild(mountNode)
  Instance.mount(mountNode)
}

