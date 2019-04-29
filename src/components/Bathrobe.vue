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
            >
            
            <img :src="item.src" style="width:100%;height:auto;"/>

            </v-carousel-item>
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
        ml-5
        style="cursor:pointer"
        position="50% 10%"
      ></v-img>
        </div>
      </v-flex>
      </v-layout>
		</v-flex>
		<v-flex d-flex xs12 sm6 mt-5>
			<div>
			<p style="text-decoration: underline;" class="display-2 font-weight-bold brown--text text--lighten-2 text-xs-center">เสื้อคลุมอาบน้ำ รังผึ้ง ด็อบบี้</p>
			<p class="display-1 font-weight-bold purple--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span>   ดีไซน์สวย</p>
			<p class="display-1 font-weight-bold lime--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span> ใส่สบาย</p>
			<p class="display-1 font-weight-bold orange--text text--darken-1 text-xs-center"><span><img height="20px" width="20px" src="https://cdn.pixabay.com/photo/2013/07/12/17/00/approved-151676__340.png" /></span>    ผิวสัมผัสนุ่ม</p>
			<p class="ml-5 mr-5 text-xs-center">เสื้อคลุมของเรามีหลายขนาดให้ลูกค้าเลือกเพื่อให้เหมาะสำหรับโรงแรมและรีสอร์ทที่มีทั้งชาวไทยและชาวต่างชาติอีกทั้งเนื่อผ้าที่มีความหลากหลายอย่างเช่น ลายรังผึ้ง ดอบบี้สีต่างๆ เนื้อผ้าเบาเหมาะสำหรับใส่สบายๆ ตอนเช้าและหลังอาบน้ำ</p>
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
            src: require('../assets/bathrobe1.jpg'),
          },
          {
            src: require('../assets/bathrobe2.jpg'),
          }
        ],
        towels: [
        	{
        		name: 'S',
        		weight: 'รังผึ้งและด็อบบี้'
        	},
        	{
        		name: 'M',
        		weight: 'รังผึ้งและด็อบบี้'
        	},
        	{
        		name: 'L',
        		weight: 'รังผึ้งและด็อบบี้'
        	},
        	{
        		name: 'XL',
        		weight: 'รังผึ้งและด็อบบี้'
        	}
        ],
        headers: [
        	{
        		text: 'ขนาด',
        		align: 'left',
        		sortable: false,
        		value: 'name'
        	},
        	{ text: 'ลาย', weight: 'weight'}
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