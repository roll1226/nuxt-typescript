<template>
  <div>
    <h1>
      algoliaテスト
    </h1>

    <h2>
      追加
    </h2>
    <input v-model="title" type="text" />
    <button @click="test">
      test
    </button>

    <h2>
      検索
    </h2>
    <input v-model="query" type="text" />
    <button @click="search">
      検索
    </button>

    <div v-for="(query, index) in queryList" :key="index">
      {{ query.title }}
    </div>
  </div>
</template>

<script lang="ts">
import algoliasearch from 'algoliasearch'
import { Component, Vue } from 'nuxt-property-decorator'

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID as string,
  process.env.ALGOLIA_API_KEY as string
)
const index = client.initIndex('todo')

@Component
export default class algolie extends Vue {
  public title: string = ''
  public query: string = ''
  public queryList: object[] = []

  async test() {
    if (this.title === '') return
    await index.addObject({ title: this.title })
  }

  async search() {
    const searchResult = await index.search({ query: this.query })
    this.queryList = searchResult.hits
  }
}
</script>
