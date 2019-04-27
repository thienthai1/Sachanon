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
          <v-btn to="/" flat class="subheading font-weight-bold">หน้าหลัก</v-btn>
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat class="subheading font-weight-bold">สินค้า<v-icon dark>arrow_drop_down</v-icon></v-btn>
            </template>
            <v-list>
              <v-list-tile
                v-for="(item, index) in products"
                :key="index"
                @click=""
              >
                <v-list-tile-title><router-link class="black--text" style="text-decoration: none;" :to="item.url">{{ item.title }}</router-link></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn to="/aboutus" flat class="subheading font-weight-bold">เกี่ยวกับเรา</v-btn>
          <v-btn to="/contact" flat class="subheading font-weight-bold">ติดต่อ</v-btn>
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
              <v-list-tile-title>หน้าหลัก</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-group :value="false">
            <template v-slot:activator>
              <v-list-tile @click="">
                <v-list-tile-action class="pl-3">
                  <v-icon>assignment</v-icon>
                </v-list-tile-action>
              <v-list-tile-content class="pr-5">
                <v-list-tile-title>สินค้า</v-list-tile-title>
              </v-list-tile-content>  
              </v-list-tile>
            </template>
            <v-list-tile to="/towel" @click="">
              <v-list-tile-action class="pl-4">
              </v-list-tile-action>
              <v-list-tile-title class="pl-3">ผ้าขนหนู</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/bedsheet" @click="">
              <v-list-tile-action class="pl-4">
              </v-list-tile-action>
              <v-list-tile-title class="pl-3">ผ้าปูที่นอน</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/bathmat" @click="">
              <v-list-tile-action class="pl-4">
              </v-list-tile-action>
              <v-list-tile-title class="pl-3">ผ้าเช็ดเท้า</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/pillow" @click="">
              <v-list-tile-action class="pl-4">
              </v-list-tile-action>
              <v-list-tile-title class="pl-3">ปลอกหมอน</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/bathrobe" @click="">
              <v-list-tile-action class="pl-4">
              </v-list-tile-action>
              <v-list-tile-title class="pl-3">เสื้อคลุมอาบน้ำ</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
          <v-list-tile to="/aboutus" @click="">
            <v-list-tile-action class="pl-3">
              <v-icon>favorite</v-icon>
            </v-list-tile-action>
            <v-list-tile-content  class="pr-5">
              <v-list-tile-title>เกี่ยวกับเรา</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/contact" @click="">
            <v-list-tile-action class="pl-3">
              <v-icon>call</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="pr-5">
              <v-list-tile-title>ติดต่อ</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
      </v-navigation-drawer>
  </v-app>
</template>

<style type="text/css">
  v-app{
    background-image: url('https://backgroundcheckall.com/wp-content/uploads/2017/12/blur-photo-background-3.jpg');
    height: 500px; 
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
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
      products: [
        { title: 'ผ้าขนหนู', url: '/towel' },
        { title: 'ผ้าปูที่นอน', url: '/bedsheet' },
        { title: 'ผ้าเช็ดเท้า', url: '/bathmat'},
        { title: 'ปลอกหมอน', url: '/pillow' },
        { title: 'เสื้อคลุมอาบน้ำ', url: '/bathrobe'}
      ]
    }
  }
}
</script>
