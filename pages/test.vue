<template>
  <div class="home">
    <Logo />
    <h1>
      {{ aaa }}
      {{ texts }}
    </h1>
    <!--
    <input v-model="text" type="text" />
    <button @click="textChange">
      変更
    </button> -->
    <child-component v-model="localValue" />
    <!-- <testinput /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ChildComponent from '@/components/Input.vue'
import Logo from '~/components/Logo.vue'
import testinput from '~/components/Input.vue'
import { IText } from '@/store'

@Component({
  components: { Logo, testinput, ChildComponent }
})
export default class test extends Vue {
  public aaa: string = '眠い'

  get texts(): string {
    return (this.$store.state.texts as IText).text
  }

  public localValue?: string = ''
  // textChange() {
  //   if (this.text === '') return
  //   this.$store.commit('SET_TEXT', this.text)
  // }
}
</script>
