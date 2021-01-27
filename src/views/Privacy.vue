<template>
  <div>
    <div class="fontTitle">
      プライバシーポリシー
    </div>
    <div class="privacy_body">
      <br>
      <br>
      <br>
      <font class="fontSubTitle">
        利用者情報の取得
      </font>
      <br>
      <br>
      <font class="fontText">
      本アプリでは、広告配信ツールとしてAdMob(Google Inc.)を使用しており、AdMobがご利用者の情報を自動取得する場合がございます。取得する情報、利用目的、第三者への提供等につきましては、以下の広告配信事業者のアプリケーション・プライバシーポリシーのリンクよりご確認ください。
      <br>
      <br>
      <a href="https://policies.google.com/technologies/ads?hl=ja" target="_self">Google 広告に関するポリシー</a>
      </font>
      <br>
      <br>
      <br>
      <font class="fontSubTitle">
        利用者情報の利用
      </font>
      <br>
      <br>
      <font class="fontText">
        本アプリでは、今後の開発の参考とするため、アプリの利用状況データを収集するツールとしてFirebase(Google Inc.)を使用しており、Firebaseがご利用者の情報を自動取得する場合がございます。取得する情報、利用目的、第三者への提供等につきましては、以下のGoogleプライバシーポリシーのリンクよりご確認ください。
        <br>
        <br>
        <a href="https://policies.google.com/privacy?hl=ja" target="_self">Google プライバシーポリシー</a>
      </font>
      <br>
      <br>
      <br>
      <font class="fontSubTitle">
        使用ツール
      </font>
      <br>
      <br>
      <font class="fontText">
        AdMob(Google Inc.)
      </font>
      <br>
      <font class="fontText">
        Firebase(Google Inc.)
      </font>
      <br>
      <br>
      <br>
      <font class="fontSubTitle">
        お問い合わせ先
      </font>
      <br>
      <br>
      <font class="fontText">
        ご不明点ございましたら<a href="https://twitter.com/kaitoshibaura" target="_self">こちら</a>からお願いします
      </font>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<style scoped>
  .privacy_body {
    padding: 30px;
    border-radius: 30px;
    background-color:rgba(252, 253, 252, 1.0);
  }
  body {
    padding: 50px;
    background-color:rgba(43, 255, 0, 0.3);
  }
  .fontTitle {
    font-size: 40px;
    text-align: center;
    padding: 60px;
  }
  .fontSubTitle {
    font-size: 35px;
    border-bottom: solid 2px yellow;
  }
  .fontText {
    font-size: 20px;
  }
</style>
