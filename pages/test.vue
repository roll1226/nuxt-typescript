<template>
  <div class="home">
    <Logo />
    <h1>
      {{ aaa }}
    </h1>
    <child-component v-model="localValue" :test="texts" />
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
  public test: string = 'テストテキスト'

  get texts(): string {
    return (this.$store.state.texts as IText).text
  }

  public localValue?: string = ''
}
</script>
