<template>
  <v-container class="grey lighten-4" style="opacity=0.5;">
       <v-layout>
        <v-flex id="bgHead">
          <v-card class="mx-auto" max-width="600" elevation="7">
          <div class="d-flex">
            <h3 style="text-decoration: underline;font-size:50px;" class="text-xs-center font-weight-medium brown--text text--lighten-2">Sachanon Textile<i class="fab fa-accessible-icon"></i></h3>
          </div>
          <v-card-text style="text-align: justify;font-family: 'Prompt', sans-serif;font-size:18px;" class="text-xs-center font-italic pt-1 green--text text--darken-2 font-weight-bold">
<!--             "ผ้าโรงงานของเราประกอบไปด้วย ผ้าขนหนูหลากหลายประเภทไม่ว่าจะเป็น ผ้าเช็ดตัว ผ้าขนหนูพรีเมี่ยม ผ้าเช็ดหน้า ผ้าเช็ดผม ผ้าสำหรับเป็นของชำร่วยให้ลูกค้าผ้าสำหรับธุรกิจสปาและโรงแรม รวมถึง ผ้าขนหนูรับไหว้สำหรับงานแต่งงานแบบต่างๆ" -->
                  "เราผลิตและจำหน่ายสินค้าเช่น ผ้าขนหนู ผ้าเช็ดผม ผ้าเช็ดมือ ผ้าปู เครื่องนอน เกรดพรีเมี่ยมสำหรับ โรงแรม รีสอร์ท สปา และสามารถใช้สำหรับเป็นของชำร่วยเพื่อแจกในงานและโอกาสต่างๆได้ เรารับประกันคุณภาพการทำงานกว่า 10 ปีคัดสรรสิ่งที่ดีที่สุดสำหรับลูกค้าทุกท่าน"
          </v-card-text>
          </v-card>

        </v-flex>
      </v-layout>
          <v-divider class="my-3"></v-divider>
      <v-layout v-if="mobileCheck === true">
          <v-flex>
            <v-card style="padding-bottom:5px;">
                <v-tabs
                  v-model="tab"
                  style="background-color:#5b6ce1"
                  dark
                >
                  <v-tab
                    v-for="item in productLists"
                    :key="item.tab"
                  >
                    {{ item.tab }}
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item
                    v-for="item in productLists"
                    :key="item.tab"
                  >

                    <div style="
                    display:grid;
                    grid-column-gap: 5px;
                    grid-template-columns: 300px;
                    background-color: white;
                    padding: 10px;          
                    ">
                      <div v-for="ct in item.content" class="proDuctList" style="margin: auto;">
                          <div id="proDuctImg" style="margin:10px">
                            <a href="#"><img :src="ct.pic" width="150" height="150" /></a>
                          </div>
                          <v-divider style="margin:10px" width="150" class="my-3"></v-divider>
                          <div id="proDuctDetail" style="line-height:23px;font-family: 'Prompt', sans-serif;margin:10px;width:150px;padding-bottom: 16px">
                              <span style="color:red;width:80px;float:left">{{ ct.title }}</span>
                              <span style="color:green;float:right">{{ ct.price }} ฿</span>
                              <span style="color:grey;clear:both">ขนาด: {{ ct.spec}}</span><br>
                              <span style="color:grey;clear:both">น้ำหนัก: {{ ct.weight }}</span><br>
                          </div>
                      </div>
                    </div>
                  </v-tab-item>
                </v-tabs-items>
                <span style="margin:10px;font-family: 'Prompt', sans-serif;color:black;clear:both">*ราคานี้เป็นราคาขายปลีกเบื้องต้นสามารถ</span><br>
                <span style="margin:10px;font-family: 'Prompt', sans-serif;color:black;clear:both">เปลี่ยนแปลงได้ตามจำนวนการสั่งซื้อ</span>
              </v-card>
          </v-flex>
      </v-layout>
      <v-layout v-else>
          <v-flex>
            <v-card style="padding-bottom:5px;">
                <v-tabs
                  v-model="tab"
                  style="background-color:#5b6ce1"
                  dark
                >
                  <v-tab
                    v-for="item in productLists"
                    :key="item.tab"
                  >
                    {{ item.tab }}
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item
                    v-for="item in productLists"
                    :key="item.tab"
                  >

                    <div style="
                    display:grid;
                    grid-column-gap: 5px;
                    grid-template-columns: 180px 180px 180px 180px 180px 180px;
                    background-color: white;
                    padding: 10px;          
                    ">
                      <div v-for="ct in item.content" class="proDuctList">
                          <div id="proDuctImg" style="margin:10px">
                            <a href="#"><img :src="ct.pic" width="150" height="150" /></a>
                          </div>
                          <v-divider style="margin:10px" width="150" class="my-3"></v-divider>
                          <div id="proDuctDetail" style="line-height:23px;font-family: 'Prompt', sans-serif;margin:10px;width:150px;padding-bottom: 16px">
                              <span style="color:red;width:80px;float:left">{{ ct.title }}</span>
                              <span style="color:green;float:right">{{ ct.price }} ฿</span>
                              <span style="color:grey;clear:both">ขนาด: {{ ct.spec}}</span><br>
                              <span style="color:grey;clear:both">น้ำหนัก: {{ ct.weight }}</span><br>
                          </div>
                      </div>
                    </div>
                  </v-tab-item>
                </v-tabs-items>
                <span style="margin:10px;font-family: 'Prompt', sans-serif;color:black;clear:both">*ราคานี้เป็นราคาขายปลีกเบื้องต้นสามารถเปลี่ยนแปลงได้ตามจำนวนการสั่งซื้อ</span>
              </v-card>
          </v-flex>
      </v-layout>
     <v-divider class="my-3"></v-divider>
      <v-layout row wrap align-center>
        <v-flex xs12 sm6>
          <div>
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
                    :src="require('../assets/bath_towel-55.jpg')"
                    height=100%
                    position=10%
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
            <div class="text-xs-center">
              <v-card elevation="15" class="mt-3 px-3 pt-1 mr-3 ml-4 mb-3">
              <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ผ้าขนหนู</h1>
              <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                      ผ้าขนหนูที่ดีควรมีคุณสมบัติที่สามารถซับน้ำได้ดีซักแล้วไม่เป็นขุย คุณภาพขนก็เป็นสิ่งที่สำคัญ ผ้าขนหนูคุณภาพสูงส่วนใหญ่จะใช้ผ้าขนคู่เป็นหลักเนื่อจากผ้ามีอายุการใช้งานได้ยาวนาน ผ้าของเราจะเน้นเป็นผ้าขนคู่ Cotton 100% เราจำหน่าย สินค้าผ้าขนหนูหลายขนาด สำหรับใช้ในกิจกรรมต่างๆเช่น ผ้าเช็ดตัว ผ้าเช็ดผม ผ้าเช็ดมือ 
              </p>
              <div>
                    <table style="margin:auto">
                      <tr>
                        <th>สินค้า</th>
                        <th>ขนาด</th>
                        <th>เกรด</th>
                      </tr>
                      <tr>
                        <td>ผ้าเช็ดตัว</td>
                        <td>30 * 60 นิ้ว 18 / 16 ปอนด์</td>
                        <td>A / B</td>
                      </tr>
                      <tr>
                        <td>ผ้าเช็ดตัว</td>
                        <td>27 * 54 นิ้ว 10 / 12 / 14 ปอนด์</td>
                        <td>A / B</td>
                      </tr>
                      <tr>
                        <td>ผ้าเช็ดมือ</td>
                        <td>18 * 32 นิ้ว 5 ปอนด์</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>ผ้าเช็ดมือ</td>
                        <td>15 * 30 นิ้ว 3.5 ปอนด์</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>ผ้าเช็ดหน้า</td>
                        <td>12 * 12 นิ้ว 1.5 ปอนด์</td>
                        <td>A</td>
                      </tr>
                    </table>
                </div>
              <div class="text-xs-center mt-2">
                <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/towel" small color="primary">ดูเพิ่มเติม</v-btn>
              </div>
              </v-card>
            </div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm5>
          <v-layout row wrap>
            <v-flex d-flex>
                  <v-img
                    :src="require('../assets/S__19914824.jpg')"
                    height=100%
                    class="grey lighten-2"
                  >

                  </v-img>
            </v-flex>
          </v-layout>
        </v-flex>
          <v-flex d-flex xs12 sm7 child-flex>
            <div class="text-xs-center mt-3">
              <v-card elevation="15" class="px-3 pt-1 mr-3 ml-4 mb-3">
              <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ผ้าปูที่นอน</h1>
              <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                      เนื่องด้วยการสังเกตุและความเข้าใจในตลาดผ้าปูในปัจจุบัน เราจึงเน้นผลิตผ้าปูที่มีความนุ่มสบาย ทอด้วยผ้า Cotton 250 เส้นต่อตารางนิ้ว ซึ่งเหมาะสำหรับใช้ในโรงแรม ขนาดเล็กไปถึงขนาดใหญ่ลูกค้าสามารถเลือกลายตามความต้องการของลูกค้าได้เช่น ลายเรียบ ลายริ้วเล็ก ลายริ้วใหญ่ และ ลายตารางนอกจากนี้ลูกค้าสามารถสั่งตัดขนาดผ้าปูตามความต้องการของลูกค้าได้ 
              </p>
<div>
                    <table style="margin:auto">
                      <tr>
                        <th>สินค้า</th>
                        <th>ขนาด</th>
                        <th>เกรด</th>
                      </tr>
                      <tr>
                        <td>ผ้าปูที่นอน</td>
                        <td>6 ฟุต Cotton 100%</td>
                        <td>250 / 180 เส้นต่อตารางนิ้ว</td>
                      </tr>
                      <tr>
                        <td>ผ้าปูที่นอน</td>
                        <td>5 ฟุต Cotton 100%</td>
                        <td>250 / 180 เส้นต่อตารางนิ้ว</td>
                      </tr>
                      <tr>
                        <td>ผ้าปูที่นอน</td>
                        <td>3.5 ฟุต Cotton 100%</td>
                        <td>250 / 180 เส้นต่อตารางนิ้ว</td>
                      </tr>
                    </table>
                </div>
              <div class="text-xs-center mt-2">
                <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/bedsheet" small color="primary">ดูเพิ่มเติม</v-btn>
              </div>
              </v-card>
            </div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm5>
          <v-layout row wrap>
            <v-flex d-flex>
                  <v-img
                    :src="require('../assets/S__3121220.jpg')"
                    height=100%
                    position=20%
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
            <div class="text-xs-center">
              <v-card elevation="15" class="mt-3 px-3 pt-1 mr-3 ml-4 mb-3">
              <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ผ้าเช็ดเท้า</h1>
              <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                       ผ้าเช็ดเท้าเป็นส่วนหนึ่งของ เฟอร์นิเจอร์ที่มีความสำคัญไม่แพ้กับอย่างอื่น คุณภาพที่สำคัญสำหรับผ้าเช็ดเท้าคือควรซับน้ำได้ดีและสามารถกันการลื่นได้ ผ้าเช็ดเท้าของเรามีหลายสีและ หลายลาย ตามความต้องการของลูกค้า เช่น ลายหยดน้ำ ลาย welcome และ ลายขอบ การเลือกซื้อผ้าเช็ดเท้าที่ดีสามารถเปลี่ยนอารมณ์และบรรยากาศห้องของคุณได้อย่างมีนัยสำคัญ
              </p>
              <div>
                    <table style="margin:auto">
                      <tr>
                        <th>สินค้า</th>
                        <th>ขนาด</th>
                        <th>เกรด</th>
                      </tr>
                      <tr>
                        <td>ผ้าเช็ดเท้า</td>
                        <td>20 * 30 นิ้ว 10 ปอนด์</td>
                        <td>A / B</td>
                      </tr>
                      <tr>
                        <td>ผ้าเช็ดเท้า</td>
                        <td>17 * 28 นิ้ว 8 ปอนด์</td>
                        <td>A / B</td>
                      </tr>
                    </table>
                </div>
              <div class="text-xs-center mt-2">
                <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/bathmat" small color="primary">ดูเพิ่มเติม</v-btn>
              </div>
              </v-card>
            </div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
          <v-flex d-flex xs12 sm5>
                    <v-layout row wrap>
                      <v-flex d-flex>
                            <v-img
                              :src="require('../assets/towel-127.jpg')"
                              height=100%
                              position=30%
                              class="grey lighten-2"
                            >

                            </v-img>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                <v-flex d-flex xs12 sm7>
                  <div class="text-xs-center">
                    <v-card elevation="15" class="mt-3 px-3 pt-1 mr-3 ml-4 mb-3">
                    <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">ปลอกหมอน</h1>
                    <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                            ปลอกหมอนเป็นสิ่งที่สำคัญอย่างมากในการการจัดเซ็ตเครื่องนอนของคุณ การเลือกสีให้เหมาะกับผ้าปูบางครั้งเป็นเรื่องที่ท้าทายเราจึงมีปลอกหมอนหลายเฉดสีและหลายลายให้ลูกค้าเลือก สินค้าของเราผลิตจาก Cotton 100% 250เส้น ซึ่งทำให้เนื่อผ้ามีความนุ่มสบายเวลานอนและเหมาะสำหรับใช้ในโรงแรมและรีสอร์ท
                    </p>
                    <div>
                          <table style="margin:auto">
                            <tr>
                              <th>สินค้า</th>
                              <th>ขนาด</th>
                              <th>เกรด</th>
                            </tr>
                            <tr>
                              <td>ปลอกหมอน</td>
                              <td>20 * 30 * 6 นิ้ว Cotton 100% เรียบ / ริ้ว</td>
                              <td>250 เส้น</td>
                            </tr>
                            <tr>
                              <td>ปลอกหมอน</td>
                              <td>20 * 30 * 6 นิ้ว Cotton 100% เรียบ / ริ้ว</td>
                              <td>210 เส้น</td>
                            </tr>
                            <tr>
                              <td>ปลอกหมอน</td>
                              <td>20 * 30 * 6 นิ้ว Cotton 100% เรียบ / ริ้ว</td>
                              <td>180 เส้น</td>
                            </tr>
                          </table>
                      </div>
                    <div class="text-xs-center mt-2">
                      <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/pillow" small color="primary">ดูเพิ่มเติม</v-btn>
                    </div>
                    </v-card>
                  </div>
              </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm5>
          <v-layout row wrap>
            <v-flex d-flex>
                  <v-img
                    :src="require('../assets/S__3129347.jpg')"
                    height=100%
                    class="grey lighten-2"
                  >

                  </v-img>
            </v-flex>
          </v-layout>
        </v-flex>
                <v-flex d-flex xs12 sm7>
                  <div class="text-xs-center">
                    <v-card elevation="15" class="mt-3 px-3 pt-1 mr-3 ml-4 mb-3">
                    <h1 style="text-decoration: underline;" class="mb-2 text-xs-center blue--text text--darken-2 mt-3">เสื้อคลุม</h1>
                    <p class="text-xs-center font-weight-bold subheading brown--text text--darken-2">
                            เสื้อคลุมของเรามีหลายขนาดให้ลูกค้าเลือกเพื่อให้เหมาะสำหรับโรงแรมและรีสอร์ทที่มีทั้งชาวไทยและชาวต่างชาติอีกทั้งเนื่อผ้าที่มีความหลากหลายอย่างเช่น ลายรังผึ้ง ดอบบี้สีต่างๆ เนื้อผ้าเบาเหมาะสำหรับใส่สบายๆ ตอนเช้าและหลังอาบน้ำ
                    </p>
                    <div>
                          <table style="margin:auto">
                            <tr>
                              <th>สินค้า</th>
                              <th>ขนาด</th>
                              <th>เกรด</th>
                            </tr>
                            <tr>
                              <td>เสื้อคลุมรังผึ้ง</td>
                              <td>XS / S / M / L Cotton 100%</td>
                              <td>A</td>
                            </tr>
                            <tr>
                              <td>เสื้อคลุมด็อบบี้</td>
                              <td>XS / S / M / L Cotton 100%</td>
                              <td>A</td>
                            </tr>
                          </table>
                      </div>
                    <div class="text-xs-center mt-2">
                      <v-btn class="mb-3" style="font-family: 'Prompt', sans-serif;" to="/pillow" small color="primary">ดูเพิ่มเติม</v-btn>
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
          <div class="d-flex">
            <h1 style="text-decoration: underline;font-size: 40px" class="text-xs-center green--text text--darken-3 font-weight-bold mb-3 mt-3">ลูกค้าของเรา</h1>
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

#bgHead {
    background-image: url(/img/bath_towel-74.a95b498b.jpg);
    padding: 27px;
    opacity: 0.8;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.v-tabs__container {
  background-color: #1565c0;
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
        mobileCheck: this.$vuetify.breakpoint.xs,
        tab: null,
        productLists: [
          {
            tab: 'ผ้าเช็ดตัว',
            content:[
                {
                      pic: require('../assets/towel-8.jpg'),
                      title:"ผ้าเช็ดตัว",
                      price:"170",
                      weight:"18 ปอนด์",
                      spec:"30x60 นิ้ว",
                },
                {
                      pic: require('../assets/towel-8.jpg'),
                      title:"ผ้าเช็ดตัว",
                      price:"160",
                      weight:"16 ปอนด์",
                      spec:"27x54 นิ้ว",
                },
                {
                      pic: require('../assets/towel-8.jpg'),
                      title:"ผ้าเช็ดตัว",
                      price:"170",
                      weight:"18 ปอนด์",
                      spec:"30x60 นิ้ว",
                },
                {
                      pic: require('../assets/towel-8.jpg'),
                      title:"ผ้าเช็ดตัว",
                      price:"160",
                      weight:"16 ปอนด์",
                      spec:"27x54 นิ้ว",
                },
                {
                      pic: require('../assets/towel-8.jpg'),
                      title:"ผ้าเช็ดตัว",
                      price:"170",
                      weight:"18 ปอนด์",
                      spec:"30x60 นิ้ว",
                },
                {
                      pic: require('../assets/towel-8.jpg'),
                      title:"ผ้าเช็ดตัว",
                      price:"160",
                      weight:"16 ปอนด์",
                      spec:"27x54 นิ้ว",
                },
                {
                      pic: require('../assets/towel-8.jpg'),
                      title:"ผ้าเช็ดตัว",
                      price:"170",
                      weight:"18 ปอนด์",
                      spec:"30x60 นิ้ว",
                },
                {
                      pic: require('../assets/towel-8.jpg'),
                      title:"ผ้าเช็ดตัว",
                      price:"160",
                      weight:"16 ปอนด์",
                      spec:"27x54 นิ้ว",
                },
              ]
          },
          {
            tab: 'ผ้าปูที่นอน',
            content:[
                {
                      pic: require('../assets/S__19914825.jpg'),
                      title:"ผ้าปูที่นอน",
                      price:"170",
                      weight:"18 ปอนด์",
                      spec:"30x60 นิ้ว",
                },
                {
                      pic: require('../assets/S__19914825.jpg'),
                      title:"ผ้าปูที่นอน",
                      price:"160",
                      weight:"16 ปอนด์",
                      spec:"27x54 นิ้ว",
                },
            ]
          }
        ],  
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
