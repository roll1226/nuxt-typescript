<template>
  <button @click="onClick">Reset</button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ResetButton extends Vue {
  @Prop()
  public initialValue!: string

  /** モデルバインドのために記述必須 */
  @Prop()
  public value!: string

  /** モデルバインドのために記述必須 */
  @Emit()
  public input(value: string) { // eslint-disable-line
  }

  public onClick() {
    this.input(this.initialValue)
  }
}
</script>
