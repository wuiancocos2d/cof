import {defineStore} from "pinia";
import {store} from "@/store";
import {getTaroLocation} from "@/utils/location";

interface AppState {
  token: string,
  appId: string,
  geo: string,
}

export const useAppStore = defineStore('appStore',{
  state:(): AppState => ({
    token: '',
    appId: 'wx02d75d81e3feb322',
    geo: ''
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
    getGeo: async function():Promise<string>{
      const location  = await getTaroLocation()
      debugger
      return location.geo as string
    }
  }
})

export function useAppStoreWithOut(){
  return useAppStore(store)
}
