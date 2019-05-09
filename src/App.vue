<template>
  <v-app style="background-image: url('http://www.so-gentlemen.be/fr/wp-content/uploads/2019/01/rafael-hotels-by-la-pleta-home-occitania-spa-3.jpg');height: 100%;  
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;">
      <v-toolbar dark color="primary">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title  to="/" class="white--text text--darken-1 headline font-weight-medium">Sachanon <span class="light-green--text font-weight-bold">Textile</span></v-toolbar-title>
        <img src="./assets/leaves.png" alt="Smiley face" height="35" width="35">

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn to="/" flat style="font-family: 'Prompt', sans-serif;font-size:15px" class="subheading font-weight-bold">หน้าหลัก</v-btn>
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on }">
            <v-btn v-on="on" style="font-family: 'Prompt', sans-serif;font-size:15px" flat class="font-weight-bold">สินค้า<v-icon dark>arrow_drop_down</v-icon></v-btn>
            </template>
            <v-list>
              <v-list-tile
                v-for="(item, index) in products"
                :key="index"
                @click=""
              >
                <v-list-tile-title><router-link class="black--text" style="text-decoration: none;font-family: 'Prompt', sans-serif;font-size:15px" :to="item.url">{{ item.title }}</router-link></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn to="/aboutus" style="font-family: 'Prompt', sans-serif;font-size:15px" flat class="font-weight-bold">เกี่ยวกับเรา</v-btn>
          <v-btn style="font-family: 'Prompt', sans-serif;font-size:15px" to="/contact" flat class="font-weight-bold">ติดต่อ</v-btn>
        </v-toolbar-items>
      </v-toolbar>

<!--     <v-content>
      <HelloWorld/>
    </v-content> -->
      <router-view></router-view>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        grey
        temporary
        
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
  
            <v-list-tile-content class="mb-3">
              <span class="headline pl-2 font-weight-black">เมนู</span>
<!--               <v-list-tile-title class="headline pb-4 mt-3">เมนู</v-list-tile-title> -->
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
  
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile to="/" @click="">
            <v-list-tile-action class="pl-3">
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="pr-5">
              <v-list-tile-title style="font-family: 'Prompt', sans-serif;font-size:15px">หน้าหลัก</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-group :value="false">
            <template v-slot:activator>
              <v-list-tile @click="">
                <v-list-tile-action class="pl-3">
                  <v-icon>assignment</v-icon>
                </v-list-tile-action>
              <v-list-tile-content class="pr-5">
                <v-list-tile-title style="font-family: 'Prompt', sans-serif;font-size:15px">สินค้า</v-list-tile-title>
              </v-list-tile-content>  
              </v-list-tile>
            </template>
            <v-list-tile to="/towel" @click="">
              <v-list-tile-action class="pl-4">
              </v-list-tile-action>
              <v-list-tile-title style="font-family: 'Prompt', sans-serif;font-size:15px" class="pl-3">ผ้าขนหนู</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/bedsheet" @click="">
              <v-list-tile-action class="pl-4">
              </v-list-tile-action>
              <v-list-tile-title style="font-family: 'Prompt', sans-serif;font-size:15px" class="pl-3">ผ้าปูที่นอน</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/bathmat" @click="">
              <v-list-tile-action class="pl-4">
              </v-list-tile-action>
              <v-list-tile-title style="font-family: 'Prompt', sans-serif;font-size:15px" class="pl-3">ผ้าเช็ดเท้า</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/pillow" @click="">
              <v-list-tile-action class="pl-4">
              </v-list-tile-action>
              <v-list-tile-title style="font-family: 'Prompt', sans-serif;font-size:15px" class="pl-3">ปลอกหมอน</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/bathrobe" @click="">
              <v-list-tile-action class="pl-4">
              </v-list-tile-action>
              <v-list-tile-title style="font-family: 'Prompt', sans-serif;font-size:15px" class="pl-3">เสื้อคลุมอาบน้ำ</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
          <v-list-tile to="/aboutus" @click="">
            <v-list-tile-action class="pl-3">
              <v-icon>favorite</v-icon>
            </v-list-tile-action>
            <v-list-tile-content  class="pr-5">
              <v-list-tile-title style="font-family: 'Prompt', sans-serif;font-size:15px">เกี่ยวกับเรา</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/contact" @click="">
            <v-list-tile-action class="pl-3">
              <v-icon>call</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="pr-5">
              <v-list-tile-title style="font-family: 'Prompt', sans-serif;font-size:15px">ติดต่อ</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
      </v-navigation-drawer>
      <v-footer
        height="auto"
        class="primary"
      >
        <v-card
          class="flex primary white--text"
          flat
          tile
        >
          <v-card-title class="teal primary">
            <img class="mb-3" height="100px" :src="require('./assets/qr_code.jpg')" />
                        <v-spacer></v-spacer>

            <strong class="primary text-xs-center">&copy;2019.— Sachanon Textile <br/> All Rights Reserved.</strong><br/> 
            
                         <v-spacer></v-spacer>
            
            <strong style="font-family: 'Prompt', sans-serif;font-size:14px"><img height="20px" width="20px" src="http://www.logospng.com/images/12/original-lrm-svg-nominally-256-215-pixels-12481.png" />  ติดต่อ โทร: 089-788-5439, 085-755-8581 (คุณหมู)<br/>&nbsp&nbsp&nbsp&nbsp&nbsp02-463-5085 (คุณเพ็ญ)<br/>
            <img height="20px" width="20px" src="http://thinkanddothailand.com/wp-content/uploads/2016/03/LINE-Free-Calls-Messages-Icon.png" />  Line: @scntextile<br/>
            <img class="mt-1" height="22px" width="22px" src="http://www.iconarchive.com/download/i43972/custom-icon-design/pretty-social-media-2/Email.ico" />  Email: sachanontextile1@gmail.com
            </strong>
          </v-card-title>
    
<!--           <v-card-actions class="primary">
                 &copy;2019 — <strong>  Sachanon Textile</strong>
            <v-spacer></v-spacer>
            <strong class="body-1 font-weight-bold">ติดต่อ: 089-788-5439, 085-755-8581 (คุณหมู)</strong>
          </v-card-actions> -->
        </v-card>
      </v-footer>
  </v-app>
</template>

<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Mitr|Prompt');
  v-app{
    background-image: url('https://backgroundcheckall.com/wp-content/uploads/2017/12/blur-photo-background-3.jpg');
    height: 500px; 
  },
  v-btn{
    font-family: 'Prompt', sans-serif;
  }
</style>

<script>
import HelloWorld from './components/Home'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      drawer: null,
      items: [
        { title: 'หน้าหลัก', icon: 'home'},
        { title: 'สินค้า', icon: 'assignment' },
        {title: 'เกี่ยวกับเรา', icon: 'favorite'},
        { title: 'ติดต่อ', icon: 'call' }
      ],
      icons: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtoHK5SCWj0gK1v2c6uPMDBgutBnEiD1EqoVlmpQYOYdtu2_IhQ',
      ],
      products: [
        { title: 'ผ้าขนหนู', url: '/towel' },
        { title: 'ผ้าปูที่นอน', url: '/bedsheet' },
        { title: 'ผ้าเช็ดเท้า', url: '/bathmat'},
        { title: 'ปลอกหมอน', url: '/pillow' },
        { title: 'เสื้อคลุมอาบน้ำ', url: '/bathrobe'}
      ],
      icons: [
        'fas fa-lock',
        'fas fa-lock',
        'fas fa-lock',
        'fas fa-lock',
        'fas fa-lock'
      ]
    }
  }
}
</script>
