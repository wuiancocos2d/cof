import {createApp} from "vue";
import Dialog from "@/components/common/dialog/Dialog.vue";

export const createDialog = (opt)=>{
  const mountNode = document.createElement('div')
  const Instance = createApp(Dialog,{
    ...opt
  })
  document.body.appendChild(mountNode)
  Instance.mount(mountNode)
}

