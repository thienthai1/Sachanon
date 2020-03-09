<template>
  <v-container class="grey lighten-4" style="opacity=0.5;">
        <v-carousel class="hidden-xs-only">
          <v-carousel-item
            v-for="(item,i) in slides"
            :key="i"
          >
            
                    <v-img
                      :src="item.src"
                      position="50% 50%"
                      height=100%
                      width=100%
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
          </v-carousel-item>
        </v-carousel>
    <v-divider class="my-3"></v-divider>
       <v-layout align-center>
        <v-flex>
          <v-card elevation="7">
          <div class="d-flex hidden-xs-only">
            <h3 style="text-decoration: underline;font-size:50px;" class="text-xs-center font-weight-medium brown--text text--lighten-2">Sachanon Textile<i class="fab fa-accessible-icon"></i></h3>
          </div>
          <div class="d-flex hidden-sm-and-up">
            <h3 style="text-decoration: underline;font-size:38px;" class="pt-3 text-xs-center font-weight-medium brown--text text--lighten-2">Sachanon Textile<i class="fab fa-accessible-icon"></i></h3>
          </div>
          <v-card-text style="text-align: justify;font-family: 'Prompt', sans-serif;font-size:18px;" class="text-xs-center font-italic pt-1 green--text text--darken-2 font-weight-bold">
<!--             "ผ้าโรงงานของเราประกอบไปด้วย ผ้าขนหนูหลากหลายประเภทไม่ว่าจะเป็น ผ้าเช็ดตัว ผ้าขนหนูพรีเมี่ยม ผ้าเช็ดหน้า ผ้าเช็ดผม ผ้าสำหรับเป็นของชำร่วยให้ลูกค้าผ้าสำหรับธุรกิจสปาและโรงแรม รวมถึง ผ้าขนหนูรับไหว้สำหรับงานแต่งงานแบบต่างๆ" -->
                  "เราผลิตและจำหน่ายสินค้าเช่น ผ้าขนหนู ผ้าเช็ดผม ผ้าเช็ดมือ ผ้าปู เครื่องนอน เกรดพรีเมี่ยมสำหรับ โรงแรม รีสอร์ท สปา และสามารถใช้สำหรับเป็นของชำร่วยเพื่อแจกในงานและโอกาสต่างๆได้ เรารับประกันคุณภาพการทำงานกว่า 10 ปีคัดสรรสิ่งที่ดีที่สุดสำหรับลูกค้าทุกท่าน"
          </v-card-text>
          </v-card>

        </v-flex>
      </v-layout>
    <v-divider class="my-3"></v-divider>
      <v-layout row wrap align-center>
        <v-flex xs12 sm6>
          <div class="d-flex hidden-xs-only">
              <v-card elevation="15" class="ml-1 mr-3 blue darken-22">
              <v-card-title primary-title>
                  <div style="font-family: 'Prompt', sans-serif;font-size:25px;" class="mb-4 mt-4 white--text text--darken-2">
                    " วิธีการเลือกซื้อ ผ้าปูที่นอนผ้าขนหนูสำหรับผู้ประกอบกิจการโรงแรม "<br/>
                  <span style="font-size:18px;">
                    การเลือกซื้อผ้าปูและผ้าเช็ดตัวหรับใช้ในกิจการโรงแรมเป็นทั้งศาสตร์และศิลป์ที่จำเพาะเจาะจงในแต่ละแบบของธุรกิจ 
                    ความนุ่มและความคุ้มค่าก็เป็นสิ่งที่สำคัญในการตัดสินใจวิดิโอนี้จะช่วย
                    ตอบคำถามและให้ความรู้เบื้องต้นสำหรับนักธุรกิจและผู้ซื้อเพื่อช่วยเพิ่มความมั่นใจในการเลือกซื้อสินค้า
                  </span>
                  </div>
              </v-card-title>
              </v-card>
            </div>
           <div class="d-flex hidden-sm-and-up">
              <v-card elevation="15" class="xs-12 blue darken-22">
              <v-card-title primary-title>
                  <div style="font-family: 'Prompt', sans-serif;font-size:25px;" class="mb-4 mt-4 white--text text--darken-2">
                    " วิธีการเลือกซื้อ ผ้าปูที่นอนผ้าขนหนูสำหรับผู้ประกอบกิจการโรงแรม "<br/>
                  <span style="font-size:18px;">
                    การเลือกซื้อผ้าปูและผ้าเช็ดตัวหรับใช้ในกิจการโรงแรมเป็นทั้งศาสตร์และศิลป์ที่จำเพาะเจาะจงในแต่ละแบบของธุรกิจ 
                    ความนุ่มและความคุ้มค่าก็เป็นสิ่งที่สำคัญในการตัดสินใจวิดิโอนี้จะช่วย
                    ตอบคำถามและให้ความรู้เบื้องต้นสำหรับนักธุรกิจและผู้ซื้อเพื่อช่วยเพิ่มความมั่นใจในการเลือกซื้อสินค้า
                  </span>
                  </div>
              </v-card-title>
              </v-card>
            </div>
        </v-flex>
        <v-flex xs12 sm6 class="mt-3">
              <iframe 
            width="100%" 
            height="300" 
            src="https://www.youtube.com/embed/oRTFGTgPFME?start=4" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>

              <!-- <v-card-title>
                <div>
                  <h3 class="headline white--text">"วิธีการเลือกซื้อ ผ้าปูที่นอนผ้าขนหนูสำหรับผู้ประกอบกิจการโรงแรม"</h3>
                </div>
              </v-card-title> -->
            <!-- </v-card> -->
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm5>
          <v-layout row wrap>
            <v-flex d-flex>
                  <v-img
                    :src="towel"
                    height=250px
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
        </v-flex>
        <v-flex d-flex xs12 sm7>
            <div class="text-xs-center d-flex hidden-xs-only">
              <v-card elevation="15" class="mt-3 ml-4 px-3 pt-1">
              <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ผ้าขนหนู</h1>
              <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                      ผ้าขนหนูที่ดีควรมีคุณสมบัติที่สามารถซับน้ำได้ดีซักแล้วไม่เป็นขุย คุณภาพขนก็เป็นสิ่งที่สำคัญ ผ้าขนหนูคุณภาพสูงส่วนใหญ่จะใช้ผ้าขนคู่เป็นหลักเนื่อจากผ้ามีอายุการใช้งานได้ยาวนาน ผ้าของเราจะเน้นเป็นผ้าขนคู่ Cotton 100% เราจำหน่าย สินค้าผ้าขนหนูหลายขนาด สำหรับใช้ในกิจกรรมต่างๆเช่น ผ้าเช็ดตัว ผ้าเช็ดผม ผ้าเช็ดมือ 
              </p>
              <div class="text-xs-center">
                <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/towel" small color="primary">ดูเพิ่มเติม</v-btn>
              </div>
              </v-card>
            </div>
            <div class="text-xs-center d-flex hidden-sm-and-up">
              <v-card elevation="15" class="mt-3 px-3 pt-1">
              <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ผ้าขนหนู</h1>
              <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                      ผ้าขนหนูที่ดีควรมีคุณสมบัติที่สามารถซับน้ำได้ดีซักแล้วไม่เป็นขุย คุณภาพขนก็เป็นสิ่งที่สำคัญ ผ้าขนหนูคุณภาพสูงส่วนใหญ่จะใช้ผ้าขนคู่เป็นหลักเนื่อจากผ้ามีอายุการใช้งานได้ยาวนาน ผ้าของเราจะเน้นเป็นผ้าขนคู่ Cotton 100% เราจำหน่าย สินค้าผ้าขนหนูหลายขนาด สำหรับใช้ในกิจกรรมต่างๆเช่น ผ้าเช็ดตัว ผ้าเช็ดผม ผ้าเช็ดมือ 
              </p>
              <div class="text-xs-center">
                <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/towel" small color="primary">ดูเพิ่มเติม</v-btn>
              </div>
              </v-card>
            </div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
          <v-flex d-flex xs12 sm7 child-flex>
            <div class="text-xs-center d-flex hidden-xs-only">
              <v-card elevation="15" class="px-3 pt-1 mr-3 mb-3">
              <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ผ้าปูที่นอน</h1>
              <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                      เนื่องด้วยการสังเกตุและความเข้าใจในตลาดผ้าปูในปัจจุบัน เราจึงเน้นผลิตผ้าปูที่มีความนุ่มสบาย ทอด้วยผ้า Cotton 250 เส้นต่อตารางนิ้ว ซึ่งเหมาะสำหรับใช้ในโรงแรม ขนาดเล็กไปถึงขนาดใหญ่ลูกค้าสามารถเลือกลายตามความต้องการของลูกค้าได้เช่น ลายเรียบ ลายริ้วเล็ก ลายริ้วใหญ่ และ ลายตารางนอกจากนี้ลูกค้าสามารถสั่งตัดขนาดผ้าปูตามความต้องการของลูกค้าได้ 
              </p>
              <div class="text-xs-center">
                <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/bedsheet" small color="primary">ดูเพิ่มเติม</v-btn>
              </div>
              </v-card>
            </div>
          <div class="text-xs-center d-flex hidden-sm-and-up">
            <v-card elevation="15" class="px-3 pt-1 mb-3">
            <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ผ้าปูที่นอน</h1>
            <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                    เนื่องด้วยการสังเกตุและความเข้าใจในตลาดผ้าปูในปัจจุบัน เราจึงเน้นผลิตผ้าปูที่มีความนุ่มสบาย ทอด้วยผ้า Cotton 250 เส้นต่อตารางนิ้ว ซึ่งเหมาะสำหรับใช้ในโรงแรม ขนาดเล็กไปถึงขนาดใหญ่ลูกค้าสามารถเลือกลายตามความต้องการของลูกค้าได้เช่น ลายเรียบ ลายริ้วเล็ก ลายริ้วใหญ่ และ ลายตารางนอกจากนี้ลูกค้าสามารถสั่งตัดขนาดผ้าปูตามความต้องการของลูกค้าได้ 
            </p>
            <div class="text-xs-center">
              <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/bedsheet" small color="primary">ดูเพิ่มเติม</v-btn>
            </div>
            </v-card>
          </div>
        </v-flex>
        <v-flex d-flex xs12 sm5>
          <v-layout row wrap>
            <v-flex d-flex>
                  <v-img
                    :src="require('../assets/S__19914824.jpg')"
                    height=250px
                    class="grey lighten-2"
                  >

                  <!--<template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template> -->

                  </v-img>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm5>
          <v-layout row wrap>
            <v-flex d-flex>
                  <v-img
                    :src="require('../assets/S__3121222.jpg')"
                    height=250px
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
        </v-flex>
        <v-flex d-flex xs12 sm7 child-flex>
          <div class="text-xs-center d-flex hidden-xs-only">
            <v-card elevation="15" class="mt-3 ml-4 px-3 pt-1">
            <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ผ้าเช็ดเท้า</h1>
            <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                    ผ้าเช็ดเท้าเป็นส่วนหนึ่งของ เฟอร์นิเจอร์ที่มีความสำคัญไม่แพ้กับอย่างอื่น คุณภาพที่สำคัญสำหรับผ้าเช็ดเท้าคือควรซับน้ำได้ดีและสามารถกันการลื่นได้ ผ้าเช็ดเท้าของเรามีหลายสีและ หลายลาย ตามความต้องการของลูกค้า เช่น ลายหยดน้ำ ลาย welcome และ ลายขอบ การเลือกซื้อผ้าเช็ดเท้าที่ดีสามารถเปลี่ยนอารมณ์และบรรยากาศห้องของคุณได้อย่างมีนัยสำคัญ 
            </p>
            <div class="text-xs-center">
              <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/bathmat" small color="primary">ดูเพิ่มเติม</v-btn>
            </div>
            </v-card>
          </div>
          <div class="text-xs-center d-flex hidden-sm-and-up">
            <v-card elevation="15" class="mt-3 px-3 pt-1">
            <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ผ้าเช็ดเท้า</h1>
            <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                    ผ้าเช็ดเท้าเป็นส่วนหนึ่งของ เฟอร์นิเจอร์ที่มีความสำคัญไม่แพ้กับอย่างอื่น คุณภาพที่สำคัญสำหรับผ้าเช็ดเท้าคือควรซับน้ำได้ดีและสามารถกันการลื่นได้ ผ้าเช็ดเท้าของเรามีหลายสีและ หลายลาย ตามความต้องการของลูกค้า เช่น ลายหยดน้ำ ลาย welcome และ ลายขอบ การเลือกซื้อผ้าเช็ดเท้าที่ดีสามารถเปลี่ยนอารมณ์และบรรยากาศห้องของคุณได้อย่างมีนัยสำคัญ 
            </p>
            <div class="text-xs-center">
              <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/bathmat" small color="primary">ดูเพิ่มเติม</v-btn>
            </div>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
          <v-flex d-flex xs12 sm7 child-flex>
            <div class="text-xs-center d-flex hidden-xs-only">
              <v-card elevation="15" class="px-3 pt-1 mr-3 mb-3">
              <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ปลอกหมอน</h1>
              <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                      ปลอกหมอนเป็นสิ่งที่สำคัญอย่างมากในการการจัดเซ็ตเครื่องนอนของคุณ การเลือกสีให้เหมาะกับผ้าปูบางครั้งเป็นเรื่องที่ท้าทายเราจึงมีปลอกหมอนหลายเฉดสีและหลายลายให้ลูกค้าเลือก สินค้าของเราผลิตจาก Cotton 100% 250เส้น ซึ่งทำให้เนื่อผ้ามีความนุ่มสบายเวลานอนและเหมาะสำหรับใช้ในโรงแรมและรีสอร์ท 
              </p>
              <div class="text-xs-center">
                <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/pillow" small color="primary">ดูเพิ่มเติม</v-btn>
              </div>
            </v-card>
          </div>
            <div class="text-xs-center d-flex hidden-sm-and-up">
              <v-card elevation="15" class="px-3 pt-1 mb-3">
              <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ปลอกหมอน</h1>
              <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                      ปลอกหมอนเป็นสิ่งที่สำคัญอย่างมากในการการจัดเซ็ตเครื่องนอนของคุณ การเลือกสีให้เหมาะกับผ้าปูบางครั้งเป็นเรื่องที่ท้าทายเราจึงมีปลอกหมอนหลายเฉดสีและหลายลายให้ลูกค้าเลือก สินค้าของเราผลิตจาก Cotton 100% 250เส้น ซึ่งทำให้เนื่อผ้ามีความนุ่มสบายเวลานอนและเหมาะสำหรับใช้ในโรงแรมและรีสอร์ท 
              </p>
              <div class="text-xs-center">
                <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/pillow" small color="primary">ดูเพิ่มเติม</v-btn>
              </div>
            </v-card>
          </div>
        </v-flex>
        <v-flex d-flex xs12 sm5>
          <v-layout row wrap>
            <v-flex d-flex>
                  <v-img
                    :src="require('../assets/towel-127.jpg')"
                    height=250px
                    class="grey lighten-2"
                  >
                    
                  <!--<template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template> -->

                  </v-img>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm5>
          <v-layout row wrap>
            <v-flex d-flex>
                  <v-img
                    :src="require('../assets/S__3129347.jpg')"
                    height=250px
                    class="grey lighten-2"
                  >
                    
                  <!--<template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template> -->

                  </v-img>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm7 child-flex>
          <div class="text-xs-center d-flex hidden-xs-only">
            <v-card elevation="15" class="mt-3 ml-4 px-3 pt-1">
            <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">เสื้อคลุม</h1>
            <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                    เสื้อคลุมของเรามีหลายขนาดให้ลูกค้าเลือกเพื่อให้เหมาะสำหรับโรงแรมและรีสอร์ทที่มีทั้งชาวไทยและชาวต่างชาติอีกทั้งเนื่อผ้าที่มีความหลากหลายอย่างเช่น ลายรังผึ้ง ดอบบี้สีต่างๆ เนื้อผ้าเบาเหมาะสำหรับใส่สบายๆ ตอนเช้าและหลังอาบน้ำ
            </p>
            <div class="text-xs-center">
              <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/bathrobe" small color="primary">ดูเพิ่มเติม</v-btn>
            </div>
            </v-card>
          </div>
          <div class="text-xs-center d-flex hidden-sm-and-up">
            <v-card elevation="15" class="mt-3 px-3 pt-1">
            <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">เสื้อคลุม</h1>
            <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                    เสื้อคลุมของเรามีหลายขนาดให้ลูกค้าเลือกเพื่อให้เหมาะสำหรับโรงแรมและรีสอร์ทที่มีทั้งชาวไทยและชาวต่างชาติอีกทั้งเนื่อผ้าที่มีความหลากหลายอย่างเช่น ลายรังผึ้ง ดอบบี้สีต่างๆ เนื้อผ้าเบาเหมาะสำหรับใส่สบายๆ ตอนเช้าและหลังอาบน้ำ
            </p>
            <div class="text-xs-center">
              <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/bathrobe" small color="primary">ดูเพิ่มเติม</v-btn>
            </div>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <div class="text-xs-center">
      <v-card elevation="7">
       <v-layout align-center>
        <v-flex>
          <div class="d-flex d-flex hidden-xs-only">
            <h1 style="text-decoration: underline;font-size: 40px" class="text-xs-center green--text text--darken-3 font-weight-bold mb-3 mt-3">Our Customers</h1>
          </div>
          <div class="d-flex hidden-sm-and-up">
            <h3 style="text-decoration: underline;font-size:38px;" class="text-xs-center green--text text--darken-3 font-weight-bold mb-3 mt-3">Our Customers<i class="fab fa-accessible-icon"></i></h3>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
      <v-flex
              v-for="(item,i) in customers"
              :key="n"
              xs12
              md4
              d-flex
            >
            <v-hover>
              <v-card 
              flat 
              tile 
              class="d-flex ml-4 mr-4 mb-4"
              :class="`elevation-${hover ? 12 : 2}`"
              slot-scope="{ hover }"
              >
                <v-img
                  :src="item.url"
                  aspect-ratio="1"
                  class="grey lighten-2 black--text"
                >
                  <!--<template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template> -->
              <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span style="background-color: white!important;opacity: 0.6;font-family: 'Prompt', sans-serif;font-size:22px;" class="grey lighten-2">{{item.title}}</span>
                    </v-flex>
                  </v-layout>
              </v-container>
                </v-img>
              </v-card>
            </v-hover>
            </v-flex>
      </v-layout>
      </v-card>
      </div>
      <v-divider class="my-3"></v-divider>
  </v-container>
</template>

<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Mitr|Prompt');
p {
    font-family: 'Prompt', sans-serif;
}
h1 {
    font-family: 'Prompt', sans-serif;
}
</style>

<script>
import slide1 from "../assets/bath_towel-55.jpg"
import slide2 from "../assets/towel-1.jpg"
import towel from "../assets/bath_towel-84.jpg"

  export default {
  data () {
      return {
        towel: towel,
        slides: [
          {
            src: slide1,
          },
          {
            src: slide2,
          }
        ],
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
        customers: [
          { title: 'โรงแรมเอส48 เชียงไหม่', url: require('../assets/s48.jpg') },
          { title: 'โอโซนวิลล่า ภูเก็ต', url: require('../assets/ozonevilla.jpg') },
          { title: 'โรงแรมนภาลัย อุดรธานี', url: require('../assets/napalai.jpg') },
          { title: 'เจมทรีบูติค ลำปาง', url: require('../assets/gemTree.jpg') },
          { title: 'Kata Bella Resort Phuket', url: require('../assets/kataBella.jpg')},
          { title: 'SN Plus Hotel Pattaya', url: require('../assets/snPlus.jpeg') },
          { title: 'ตำนานป่ารีสอร์ท ระยอง', url: require('../assets/tamNanpa.jpg')},
          { title: 'Asura Resort เกาะลันตา', url: require('../assets/asura.jpg')},
          { title: 'เวียงตากริเวอร์ไซด์ ตาก', url: require('../assets/wiengTak.jpg') },
          { title: 'The Loft Hillside เชียงไหม่', url: require('../assets/theLoft.jpg') }
        ]
      }
    }
  }
</script>

<style>

</style>
