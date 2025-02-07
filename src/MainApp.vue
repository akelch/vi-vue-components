<template>
  <div class="wrapper">
    <div class="init-spinner">
      <loader
        size="8"
        :logo="appStore.state['loader.logo']"
        :color="appStore.state['loader.color']"
      ></loader>


      <sl-dialog :open="appStore.state['failed']" :label="$t('connection.header')" @sl-request-close.prevent="()=>{}">
        {{ $t('connection.message') }}
        <div slot="footer">
          <sl-button variant="success" outline @click="reload" :loading="state.loading">{{$t('refresh')  }}</sl-button>
        </div>
      </sl-dialog>

    </div>
  </div>
</template>
<script setup>
import Loader from "@viur/vue-utils/generic/Loader.vue"
import {useAppStore} from "./stores/app"
import {reactive} from "vue";

const appStore = useAppStore()

const state = reactive({
  loading:false,

})

  function reload(){
    state.loading=true
    window.location.reload()
  }
</script>

<style scoped>

.wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-image: v-bind("state.backgroundImage");*/
  background-position: center center;
  background-size: cover;

}

.init-spinner {
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%
}

</style>

<style>

@import './style/reset.css';

body {
  background: var(--sl-color-neutral-100);
  line-height: 1.5;
  color: var(--sl-color-neutral-800);
  font-family: 'Source Sans Pro', 'Open Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

</style>