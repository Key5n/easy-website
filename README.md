# 使い方
```.env```ファイルを作成してfirebaseからとってきたapi keyなどを下のように入力する。
```
apiKey=**
authDomain=**
projectId=**
storageBucket=**
messagingSenderId=**
appId=**
```
そのあとターミナルに
```
npm run dev
```
を入力し、vscodeの拡張機能のGo Liveを押したら画面が構築される。

変更があるたびにターミナルにnpm run devを入力する。そうするとビルドしたものが更新される。

TO DO: ホットリロード機能をつける