<template>
	<v-container class="grey lighten-4">
		<v-layout>
		  <div>
		    <button @click="showSingle">Show single picture.</button>
		    <button @click="showMultiple">Show a group of pictures.</button>
		    <VueEasyLightbox
		      :visible="visible"
		      :imgs="imgs"
		      :index="index"
		      @hide="handleHide"
		    ></VueEasyLightbox>

		    <!-- Component name: 'vue-easy-lightbox' -->
		    <!--
		      <vue-easy-lightbox
		        :visible="visible"
		        :imgs="imgs"
		        :index="index"
		        @hide="handleHide"
		      ></vue-easy-lightbox>
		     -->
		  </div>
		</v-layout>
	</v-container>
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