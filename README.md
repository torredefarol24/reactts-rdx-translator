### React/Redux Translator App

 - Frontend JS Framework : React
 - Libraries :  Redux, Thunk, UUID
 - APIs : Yandex Translator API, JSONTypicode (Fake Rest API)
 - Design Framework : Bulma
 - Service Workers for PWA
 
React/Redux app written in **TypeScript**

To test this, 

 - Add Translator API Key

```sh
$ cd reactts-rdx-translator
$ touch src/keys/apiKeys.ts

# Update src/keys/apiKeys.ts
let keys = {
  YANDEX_TRANSLATOR_KEY : <YOUR_KEY>
}

export default keys
```

 - Install Dependencies & Start App
```sh
$ cd reactts-rdx-translator
$ yarn install
$ yarn start
```