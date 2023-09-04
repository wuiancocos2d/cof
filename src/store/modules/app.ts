import {defineStore} from "pinia";
import {store} from "@/store";
import {getTaroLocation} from "@/utils/location";

interface AppState {
  token: string,
  appId: string,
}

export const useAppStore = defineStore('appStore',{
  state:(): AppState => ({
    token: '',
    appId: 'wx02d75d81e3feb322',
  }),
  getters: {
    getToken(state):string {
      return state.token
    },
    getAppId(state): string {
      return state.appId
    },

  },
  actions: {
    setToken(token:string): void {
      this.token= token
    },
    setAppId(id:string): void {
      this.appId = id
    },
  }
})

export function useAppStoreWithOut(){
  return useAppStore(store)
}
