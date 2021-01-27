<template>
  <header>
    <router-link class="link" to="/alcoToDo-dev"><img class="topicon" :src="appIcon" alt=""></router-link>
    <h2 class="title">{{ appName }}</h2>
    <h2 class="subtitle">〜 ToDo&お酒管理で素敵なdrinking lifeを 〜</h2>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  async created () {
    await this.getAppInfo()
  },
  data () {
    return {
      appID: '1547798687',
      appName: '',
      appIcon: ''
    }
  },
  methods: {
    async getAppInfo () {
      const axiosBase = axios.create({
        baseURL: 'https://kitanokaito.github.io/alcoToDo-dev/',
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
        this.appIcon = appData.artworkUrl60
      }
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  height: 80px;
  width: auto;
  background-color: rgb(255, 255, 255);
  padding: 20px;
}
.topicon {
  border-radius: 10px;
}
.title {
  padding-left: 20px;
}
.subtitle {
  padding-left: 20px;
  font-weight: lighter;
}
@media screen and (max-width: 800px){
  header {
    display: flex;
    height: 80px;
    width: auto;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    justify-content: center;
    align-items: center;
  }

  .subtitle {
    display: none;
  }
}
</style>
