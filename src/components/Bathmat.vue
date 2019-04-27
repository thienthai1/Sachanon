<template>
	<v-container class="grey lighten-4" style="opacity=0.5;">
	<v-layout row wrap mt-5>
		<v-flex d-flex xs12 sm6 mt-2>
		      <v-carousel height=600px>
        		<v-carousel-item
          		v-for="(item,i) in slides"
          		:key="i"
          		:src="item.src"
        		></v-carousel-item>
      		</v-carousel>
		</v-flex>
		<v-flex d-flex xs12 sm6 mt-5>
			<div>
			<p style="text-decoration: underline;" class="display-2 font-weight-bold brown--text text--lighten-2 text-xs-center">ผ้าเช็ดเท้า Cotton100%</p>
			<p class="display-1 font-weight-bold purple--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span> มีหลากหลายไซส์ให้เลือก</p>
			<p class="display-1 font-weight-bold lime--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span> ขนหลุดล่วงน้อย</p>
			<p class="display-1 font-weight-bold orange--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span> ซับน้ำดี</p>
			<p class="ml-5 mr-5 text-xs-center">ผ้าเช็ดเท้าเป็นส่วนหนึ่งของ เฟอร์นิเจอร์ที่มีความสำคัญไม่แพ้กับอย่างอื่น คุณภาพที่สำคัญสำหรับผ้าเช็ดเท้าคือควรซับน้ำได้ดีและสามารถกันการลื่นได้ ผ้าเช็ดเท้าของเรามีหลายสีและ หลายลาย ตามความต้องการของลูกค้า เช่น ลายหยดน้ำ ลาย welcome และ ลายขอบ การเลือกซื้อผ้าเช็ดเท้าที่ดีสามารถเปลี่ยนอารมณ์และบรรยากาศห้องของคุณได้อย่างมีนัยสำคัญ</p>
			<v-data-table
			    :headers="headers"
			    :items="towels"
			    class="elevation-1"
			    hide-actions
			 >
			    <template v-slot:items="props">
			      <td class="text-xs-left">{{ props.item.name }}</td>
			      <td class="text-xs-left">{{ props.item.weight }}</td>
    			</template>
  			</v-data-table>
			</div>
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
            md3
            mt-3
      >
        <div>
                  <v-img
        :src="item.src"
        width = 250
        height = 150
        @click="showSingle(item.src)"
        ml-5
        style="cursor:pointer"
      ></v-img>
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
            src: require('../assets/S__3121220.jpg'),
          },
          {
            src: require('../assets/S__3121221.jpg'),
          },
          {
            src: require('../assets/S__3121222.jpg'),
          },
          {
            src: require('../assets/S__3121223.jpg'),
          },
        ],
        towels: [
        	{
        		name: 'ผ้าเช็ดเท้า 20*30 นิ้ว',
        		weight: '10 ปอนด์'
        	},
        	{
        		name: 'ผ้าเช็ดเท้า 17*28 นิ้ว',
        		weight: '8 ปอนด์'
        	}
        ],
        headers: [
        	{
        		text: 'ขนาด',
        		align: 'left',
        		sortable: false,
        		value: 'name'
        	},
        	{ text: 'น้ำหนัก', weight: 'weight'}
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