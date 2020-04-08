<template>
	<v-container class="grey lighten-4">
		 			<v-jumbotron
				    :gradient="gradient"
				  >
				  <v-img
                    :src="require('../assets/towel-8.jpg')"
                    height=600px
                    position="20% 120%"
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
				  </v-jumbotron>
		<v-divider class="my-3"></v-divider>
		<v-layout row wrap>
			<v-flex class="text-xs-center mt-3" d-flex xs12 sm6>
				<div>
				<h1 style="text-decoration: underline;font-size:30px;" class="brown--text text--lighten-2">ความเป็นมาของ ษาชานนท์เทคซ์ไทลล์</h1>
				<p style="text-align: center;font-size:20px;" class="mt-2 ml-5 mr-5">
				ษาชานนท์เทคซ์ไทล์ ก่อตั้งขึ้นมาตั้งแต้ปี 2549 มีเป้าหมายเพื่อให้บริการจำหน่ายผลิตภัณฑ์สิ่งทอคุณภาพสูงสำหรับ โรงแรม รีสอร์ท และ สปาทั่วประเทศ เรารับรองคุณภาพบริการมามากกว่า 10 ปีโรงงานของเราตั้งอยู่ที่ ซอย 70/4 หรือซอยทอผ้า ตำบลบางครุ อำเภอพระประแดงจังหวัดสมุทรปราการ เรามุ่งมั่นที่จะพัฒนาสินค้าให้เป็นที่ต้องการของลูกค้าและตลาด เราจำหน่ายสินค้าที่มีความต้องการอย่างมากสำหรับดำเนินกิจการ โรงแรม รีสอร์ท สปา เช่น ผ้าปู ปลอกหมอน ผ้าขนหนู ผ้าเช็ดหน้า ผ้าเช็ดเท้า เสื้อคลุมอาบน้ำ และ รองเท้าสำหรับใส่ในบ้าน หากท่านสนใจ และ ประสงค์ต้องการสอบถามข้อมูลเรายินดีให้คำปรึกษากับทุกท่าน 
				</p>
				</div>
			</v-flex>
			<v-flex class="text-xs-center mt-3" d-flex xs12 sm6>
								  <v-img
                    :src="require('../assets/towel-83.jpg')"
                    height=350px
                    position="50% 30%"
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
	</v-container>
</template>