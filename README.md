# eSong - `with React.js n' Electron.js`

> This is a small personal project, all the frontend and login / signup was made by me and the songs i get from a public API. How to use / test it:

* [Install Dependencies](#install-dependencies)
* [User database](#user-database)
* [Launch Frontend](#launch-frontend)


## 🔨｜Install Dependencies
> infos:
1. This one is really simple, let's go for it.

Install all Dependencies:
```sh
yarn
```
And you're ready to go.

---

## 📥｜User database
> infos:
1. The database is the db.json on base folder.
2. You can add data manually or sign up by front.
3. If you don't start the json server you get an error but can use a default account (email: teste@gmail.com; pass: 123).

Start Json Server:
```sh
json-server --watch db.json --port 8000
```
And json server will be launched on http://localhost:8000

---

## 💻｜Launch Frontend
> infos:
1. On compile it will start React.js and Electron.js.
2. You can acess the front end on Electron.js window or on React.js (http://localhost:3000).

![menu-esong](https://pbs.twimg.com/media/FAfthE4XIAAh7Jr?format=jpg&name=large) ![player-esong](https://pbs.twimg.com/media/FAema_HX0AQOBce?format=jpg&name=large)

Start React.js n' Electron.js:
```sh
yarn start
```

---

## 📝｜License

Copyright © 2021 [Júlio Carvalho Gonçalves](https://github.com/ImaKrp).<br />
This project is [GNU General Public License v3.0](https://github.com/ImaKrp/eSong---Electron-React/blob/master/LICENSE) licensed.
