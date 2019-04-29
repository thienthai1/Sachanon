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
		<v-flex d-flex xs12 sm6 mt-2>
			<div>
			<p style="text-decoration: underline;" class="display-2 font-weight-bold brown--text text--lighten-2 text-xs-center">ผ้าเช็ดตัว Cotton100%</p>
			<p class="display-1 font-weight-bold purple--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span> มีหลากหลายไซส์ให้เลือก</p>
			<p class="display-1 font-weight-bold lime--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span> ขนหลุดล่วงน้อย</p>
			<p class="display-1 font-weight-bold orange--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span> ซับน้ำดี</p>
			<p class="ml-5 mr-5 text-xs-center">ผ้าเช็ดตัวที่ดีควรมีคุณสมบัติที่สามารถซับน้ำได้ดีซักแล้วไม่เป็นขุย คุณภาพขนก็เป็นสิ่งที่สำคัญ ผ้าขนหนูคุณภาพสูงส่วนใหญ่จะใช้ผ้าขนคู่เป็นหลักเนื่อจากผ้ามีอายุการใช้งานได้ยาวนาน ผ้าของเราจะเน้นเป็นผ้าขนคู่ Cotton 100% เราจำหน่าย สินค้าผ้าขนหนูหลายขนาด สำหรับใช้ในกิจกรรมต่างๆเช่น ผ้าเช็ดตัว ผ้าเช็ดผม ผ้าเช็ดมือ</p>
			<v-data-table
			    :headers="headers"
			    :items="towels"
			    hide-actions

			 >
			    <template v-slot:items="props">
			      <td class="text-xs-left">{{ props.item.name }}</td>
			      <td class="text-xs-left">{{ props.item.weight }}</td>
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
            src: require('../assets/towel-1.jpg'),
          },
          {
            src: require('../assets/bath_towel-84.jpg')
          },
          {
            src: require('../assets/bath_towel-55.jpg')
          },
          {
            src: require('../assets/bath_towel-74.jpg')
          }
        ],
        towels: [
        	{
        		name: 'เช็ดตัว 30*60 นิ้ว',
        		weight: '18 ปอนด์'
        	},
        	{
        		name: 'เช็ดตัว 30*60 นิ้ว',
        		weight: '16 ปอนด์'
        	},
          {
            name: 'เช็ดตัว 27*54 นิ้ว',
            weight: '14 ปอนด์'
          },
        	{
        		name: 'เช็ดตัว 27*54 นิ้ว',
        		weight: '12 ปอนด์'
        	},
        	{
        		name: 'เช็ดตัว 27*54 นิ้ว',
        		weight: '10 ปอนด์'
        	}
        ],
        headers: [
        	{
        		text: 'ขนาด',
        		align: 'left',
        		sortable: true,
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