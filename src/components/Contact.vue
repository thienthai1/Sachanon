<template>
	<v-container class="grey lighten-4">
		<v-jumbotron
	    :gradient="gradient"
	    height=400px
	  >
				  <v-img
                    :src="require('../assets/IMG_2306.jpg')"
                    position="50% 50%"
                    height=400px
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
	  <v-divider class="my-4"></v-divider>
	  <v-layout row wrap>
	  	<v-flex d-flex xs12 sm6>
	  		<div class="pr-3 pt-3">
	  		<h1 style="text-decoration: underline;" class="brown--text text--lighten-2">ติดต่อเรา</h1>
	  		<p style="font-size:20px;">หาก ท่านมีข้อสงสัย หรือ อยากสอบถามขอใบเสนอราคา ท่านสามารถติดต่อกับเราได้หลายช่องทางดังนี้</p>
	  		<h1 style="text-decoration: underline;" class="brown--text text--lighten-2">ที่อยู่</h1>
	  		<p style="font-size:20px;">เลขที่ 43 หมู่ 6 ซอยสุขสวัสดิ์ 70/4 ตำบลบางครุ อำเภอ พระประประแดง จังหวัดสมุทรปราการ 10130</p>
	  		<h1 style="text-decoration: underline;" class="brown--text text--lighten-2">โทรศัพท์</h1>
	  		<p style="font-size:20px;"><span><img height="20px" width="20px" src="http://www.logospng.com/images/12/original-lrm-svg-nominally-256-215-pixels-12481.png" /></span> ฝ่ายขาย: 089-788-5439, 085-755-8581 (คุณหมู) 02-463-5085 (คุณเพ็ญ)<br/><span><img height="20px" width="20px" src="http://thinkanddothailand.com/wp-content/uploads/2016/03/LINE-Free-Calls-Messages-Icon.png" /></span>  Line: @scntextile</p>
	  		<v-divider class="my-5"></v-divider>
	  		</div>
	  	</v-flex>
	  	<v-flex d-flex xs12 sm6>
	  		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d533.0175251949191!2d100.52928167631762!3d13.63254299162319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a3d66c7658fb%3A0x50a2b0e9e0bd7b3f!2sSachanontextile+Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1554985115630!5m2!1sen!2sth" width="600" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
	  	</v-flex>
	  </v-layout>
	</v-container>
</template>

<!-- 
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d533.0175251949191!2d100.52928167631762!3d13.63254299162319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a3d66c7658fb%3A0x50a2b0e9e0bd7b3f!2sSachanontextile+Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1554985115630!5m2!1sen!2sth" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
