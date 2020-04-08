<template>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
                     <v-img
                  src="https://firebasestorage.googleapis.com/v0/b/sachanon-2ae27.appspot.com/o/bath_towel-84.jpg?alt=media&token=70f76661-b83b-48ac-b546-18721ecd73ad"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
    </v-flex>
  </v-layout>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      imgs: '',  // Img Url , string or Array
      visible: false,
      index: 0   // default
    }
  },
  methods: {
    showSingle() {
      this.imgs = 'https://i.loli.net/2018/11/10/5be6852ce6965.jpeg'
      this.show()
    },
    showMultiple() {
      this.imgs = ['https://i.loli.net/2018/11/10/5be6852cdb002.jpeg', 'https://i.loli.net/2018/11/10/5be6852ce6965.jpeg']
      this.index = 1  // index of imgList
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>