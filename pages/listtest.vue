<template>
  <div>
    <h1>
      リストテスト
    </h1>

    <input v-model="listtext" type="text" />
    <button @click="test">
      リスト挿入
    </button>

    {{ listText }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface listTest {
  title: string
  season: 'spring' | 'summer' | 'autumn' | 'winter'
  bool: boolean
  num: number
}

@Component
export default class algolie extends Vue {
  public listtext: string = ''
  public listText: listTest = {
    title: '',
    season: 'spring',
    bool: false,
    num: 7
  }

  test() {
    this.listText.title = this.listtext
  }
}
</script>
