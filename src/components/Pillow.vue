<template>
	<v-container class="grey lighten-4" style="opacity=0.5;">
	<v-layout row wrap mt-5>
		<v-flex d-flex xs12 sm6 mt-2>
        <v-layout row wrap>
        <v-flex xs12>
          <v-carousel height=600px>
            <v-carousel-item
              v-for="(item,i) in slides"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      <VueEasyLightbox
          :visible="visible"
          :imgs="imgs"
          :index="index"
          @hide="handleHide"
      ></VueEasyLightbox>
      <v-flex 
        d-flex
            v-for="(item,i) in slides"
            :key="i"
            mb-2
            mt-3
      >
        <div>
                  <v-img
        :src="item.src"
        width = 250
        height = 150
        @click="showSingle(item.src)"
        style="cursor:pointer"
      ></v-img>
        </div>
      </v-flex>
      </v-layout>
		</v-flex>
		<v-flex d-flex xs12 sm6 mt-5>
			<div>
			<p style="text-decoration: underline;font-size:40px" class="font-weight-bold brown--text text--lighten-2 text-xs-center">ปลอกหมอน Cotton100%</p>
			<p style="font-size:30px" class="font-weight-bold purple--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span> มีหลากหลายแบบให้เลือก</p>
			<p style="font-size:30px" class="font-weight-bold lime--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span> ผ้านุ่มเย็น</p>
			<p style="font-size:30px" class="font-weight-bold orange--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span> วัสดุธรรมชาติไม่ระคายเคือง</p>
			<p style="font-size:20px" class="ml-5 mr-5 text-xs-center"> ปลอกหมอนเป็นสิ่งที่สำคัญอย่างมากในการการจัดเซ็ตเครื่องนอนของคุณ การเลือกสีให้เหมาะกับผ้าปูบางครั้งเป็นเรื่องที่ท้าทายเราจึงมีปลอกหมอนหลายเฉดสีและหลายลายให้ลูกค้าเลือก สินค้าของเราผลิตจาก Cotton 100% 250เส้น ซึ่งทำให้เนื่อผ้ามีความนุ่มสบายเวลานอนและเหมาะสำหรับใช้ในโรงแรมและรีสอร์ท</p>
			<v-data-table
			    :headers="headers"
			    :items="towels"
			    class="elevation-1"
			    hide-actions
			 >
			    <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.size }}</td>
            <td class="text-xs-left">{{ props.item.texture }}</td>
    			</template>
  			</v-data-table>
			</div>
		</v-flex>
	</v-layout>
	</v-container>
</template>

<style type="text/css">
	table{
		max-width: 100% !important;
		margin-left: 20px;
		margin-top: 5px;
	}
</style>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
  export default {
    components: {
       VueEasyLightbox
    },
    data() {
      return {
        slides: [
          {
            src: require('../assets/pillow1.jpg'),
          },
          {
            src: require('../assets/towel-127.jpg'),
          },
          {
            src: require('../assets/S__20094980.jpg'),
          },

        ],
        towels: [
          {
            name: 'ปลอกหมอน 20*30*6 นิ้ว',
            size: '250 เส้น',
            texture: 'เรียบและริ้ว'
          },
          {
            name: 'ปลอกหมอน 20*30*6 นิ้ว',
            size: '210 เส้น',
            texture: 'เรียบและริ้ว'
          },
          {
            name: 'ปลอกหมอน 20*30*6 นิ้ว',
            size: '180 เส้น',
            texture: 'เรียบและริ้ว'
          },
        ],
        headers: [
          {
            text: 'ขนาด',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'ขนาดเส้น', value: 'size'},
          { text: 'ลาย', value: 'texture'}
        ],
        imgs: '',
        index: 0,
        visible: false,
       }
    },
    methods: {
      showSingle(myImg) {
        this.imgs = myImg
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
    }
  }
</script>