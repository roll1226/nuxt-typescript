<template>
  <div class="home">
    <Logo />
    <h1>
      {{ aaa }}
      {{ texts }}
    </h1>

    <input v-model="text" type="text" />
    <button @click="textChange">
      変更
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IState } from '../store/index'
import Logo from '~/components/Logo.vue'

@Component({
  components: { Logo }
})
export default class test extends Vue {
  public aaa: string = '眠い'
  public text: string = ''

  get texts(): string {
    return (this.$store.state as IState).text
  }

  textChange() {
    if (this.text === '') return
    this.$store.commit('SET_TEXT', this.text)
  }
}
</script>
