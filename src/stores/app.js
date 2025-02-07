import { reactive } from "vue"
import { defineStore } from "pinia"
import Utils from "../utils"

export const useAppStore = defineStore("appStore", () => {
  const state = reactive({
    //settings
    init: false,
    failed: false,
    debug: false,
    language:"de",
    //core section
    "viur.version": null,
    "viur.version.min": [3, 5, 0],
    "viur.version.max": [3, 9, 0],

    // app details
    "name": "Administration",
    "logo": Utils.publicAsset("logo-cube.svg"),
    "loader.logo": Utils.publicAsset("logo-cube.svg"),
    "loader.color": 'var(--sl-color-neutral-800)',
    "login.background": Utils.publicAsset("login-background.jpg"),
    "login.logo": Utils.publicAsset("logo-center.svg"),
    "color.primary": "",
    "color.secondary": "",
  })

  return { state }
})
