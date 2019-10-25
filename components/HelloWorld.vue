<template>
  <div class="hello">
    <child-component v-model="localValue" />
    <h1>{{ value }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'
import ChildComponent from '@/components/Input.vue'

@Component({
  components: { ChildComponent }
})
export default class HelloWorld extends Vue {
  @Prop() private value!: string

  @Emit()
  public input(value: string) { // eslint-disable-line
  }

  private get localValue(): string {
    return this.value
  }

  private set localValue(value: string) {
    this.input(value)
  }
}
</script>
