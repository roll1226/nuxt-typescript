<template>
  <div>
    <input v-model="localValue" type="text" />
    <button @click="textChange">
      変更
    </button>
    {{ value }}
    {{ test }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'
@Component
export default class testin extends Vue {
  @Prop()
  public value!: string

  @Prop({ type: String, required: true }) private test!: string

  @Emit()
  public input(value: string) { // eslint-disable-line
  }

  private get localValue(): string {
    return this.value
  }

  private set localValue(value: string) {
    this.input(value)
  }

  textChange() {
    if (this.value === '') return
    this.$store.commit('SET_TEXT', this.value)
  }
}
</script>
