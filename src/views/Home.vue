<template>
  <div class="container">
    <div class="body">
      <transition name="fade" mode="out-in">
        <img class="ss" :src="appSs[ssIndex]" :key="appSs[ssIndex]" alt="">
      </transition>
      <div class="back-beer">
        <div>
          <div class="beer-top">
          </div>
          <div class="appinfo">
            <div class="appinfo-right">
              <div class="appinfo-right-top">
                <div class="appinfo-title">
                  <img class="appinfo-icon" :src="appIcon" alt="">
                  <p class="appinfo-name">{{ appName }}</p>
                  <p class="appinfo-price">{{ appPrice }}</p>
                </div>
                <p class="appinfo-description">ToDo機能を使ってゆるーくお酒管理しましょう</p>
                <a :href="appLink">
                  <img class="appinfo-storelinkbutton" src="../assets/appstoreButton.png" alt="" width=220 height=75>
                </a>

              </div>
              <div class="appinfo-right-features">
                <div class="features-left">
                  <div class="features-left-circle">
                    <font-awesome-icon class="fonticon" icon="tasks" />
                    <h3 class="features-left-text-top">ToDo<br>機能</h3>
                  </div>
                  <p class="symbol">×</p>
                  <div class="features-left-circle">
                    <font-awesome-icon class="fonticon" icon="cocktail" />
                  <h3 class="features-left-text-bottom">お酒管理<br>機能</h3>
                  </div>
                </div>
                <p class="symbol">=</p>
                <div class="features-right">
                  <h1>頑張った分だけ<br>お酒が飲める</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="beer-hendle"></div>
      </div>
    </div>
    <footer>
      <p>Made By <a class="link" href="https://twitter.com/kaitoshibaura">kitanokaito</a></p>
      <router-link class="link" to="/alcoToDo-dev/privacy">プライバシーポリシー</router-link>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  async created () {
    await this.getAppInfo()
  },
  mounted () {
    setInterval(() => {
      this.ssIndex = this.ssIndex < this.appSs.length - 1 ? this.ssIndex + 1 : 0
    }, 5000)
  },
  data () {
    return {
      headerName: '',
      appID: '1547798687',
      appName: '',
      appPrice: 0,
      appIcon: '',
      appLink: '',
      appSs: [],
      ssIndex: 0
    }
  },
  methods: {
    async getAppInfo () {
      const axiosBase = axios.create({
        baseURL: 'https://kitanokaito.github.io/alcoToDo-dev',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: true,
        responseType: 'json'
      })
      const { data } = await axiosBase.get(`https://itunes.apple.com/lookup?id=${this.appID}&country=jp`)
      if (data.results && data.results.length) {
        const appData = data.results[0]
        this.appName = appData.trackName
        this.appPrice = appData.formattedPrice
        this.appLink = appData.trackViewUrl
        this.appIcon = appData.artworkUrl60
        this.appSs = appData.screenshotUrls
      }
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding-bottom: 100px;
}
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  margin: 5vw
}
@media screen and (max-width: 800px){
  .body {
    display: block;
    padding-bottom: 60px;
    margin: 5vw
  }
}
.back-beer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
}
.beer-top {
  height: 150px;
  max-width: 950px;
  background-color: rgb(255, 255, 255);
  border-radius: 30px 30px 0 0;
}
.beer-hendle {
  border: 3vw solid rgba(251, 218, 3, 0.985);
  border-radius:0 8vw 8vw 0;
  height: 20vw;
  width: 8vw;
}
.appinfo {
  background: rgba(251, 218, 3, 0.985);
  background-position: top;
  border-radius: 0px 0px 60px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ss {
  margin-right: 4vw;
  border-radius: 20px;
  width: 30vw;
}
.appinfo-right {
  text-align: center;
  vertical-align: center;
  margin: 50px;
}
.appinfo-right-top {
  background:  rgba(100, 100, 99, 0.355);
  border-radius: 20px;
  color: white;
  padding: 30px;
}
.appinfo-title {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.appinfo-icon {
  height: 60px;
  width: 60px;
  border-radius: 10px;
}
.appinfo-name {
  text-align: left;
  margin: 10px;
  padding-left: 20px;
  font-size: 2.0vw;
}
.appinfo-price {
  text-align: left;
  margin: 10px;
  padding: 10px;
  background:  rgba(100, 100, 99, 0.355);
  border-radius: 10px;
  color: white;
  font-size: 1.3vw;
}
.appinfo-description {
  max-width: 350px;
  padding-top: 10px;
  font-size: 0.7vw;
}
.appinfo-storelinkbutton {
  padding-top: 10px;
  text-decoration: none;
  cursor: pointer;
  height: auto;
  width: 15vw
}
.appinfo-right-features {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3vw;
}
.features-left-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(111, 219, 111, 0.355);
  width: 8vw;
  height: auto;
  padding: 10px;
  border-radius: 8vw;
}

.fonticon {
  color: blue;
  width: 3vw
}
.features-left-text-top {
  text-align: center;
  font-size: 1.5vw;
  line-height: 1.5vw;
}
.features-left-text-bottom {
  text-align: center;
  font-size: 1.2vw;
  line-height: 1.2vw;
}
.symbol {
  text-align: center;
  font-size: 3vw;
  line-height: 3vw;
  margin: 0px;
  /* width: 3vw */
}
.features-right {
  font-size: 1vw;
  padding-left: 50px;
}
.link {
    color: #1d63ea;
    text-decoration: none;
    cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0.2;
}
</style>
