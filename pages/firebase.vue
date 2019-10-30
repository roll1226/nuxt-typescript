<template>
  <div>
    <h1>
      firebaseテスト
    </h1>

    <input v-model="text" type="text" />
    <button @click="goFire">
      送信
    </button>
    <br />
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'
import { firestore } from '@/plugins/firebase'

@Component
export default class firebase extends Vue {
  public text?: string = ''

  @Emit()
  goFire() {
    firestore
      .collection('test')
      .doc('test')
      .set({
        text: this.text
      })
      .then(function() {
        console.log('Document successfully written!')
      })
      .catch(function(error) {
        console.error('Error writing document: ', error)
      })
  }
}
</script>
