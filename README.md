
# compteWebReact

program to handle your account

### Prerequisites

first you need a mysql database "mydb" and run the starter.mysql script attached at the root of the project.

if your database is not named mydb, you have to change the mysql configuration on :
src/backend/config.js
in database key


### Installing

after clonning or downloadig projet

install all dependencies by using :

```
npm install
```

on root folder, he will install the node_modules of the root folder and node_modules for sub folders frontend and backend.

root folder need to install his own node_modules to use eslint, to lint backend and frontend when you commit on git hub with husky.
See package.json root folder:

```
...
"husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  },
...
```

if you only want to install frontend or backend, do :

```
npm install
```
in sub folder frontend or backend.

### launch

on root folder, use :
```
npm run dev
```

to launch frontend and backend in dev mode.

for backend, be sure to have port 4202 free, or you can change it in :
/src/backend/config.js

for frontend : 
- be sure to have port 50001 free for bundle analyzer or feel free to change it on :
/src/frontend/webpack.dev.config.front
```
new BundleAnalyzerPlugin({analyzerPort: 50001})
```

- dev server is running on port 9001, as well you need it free also but feel free to change it in :
/src/frontend/webpack.dev.config.front
```
devServer: {
        contentBase: path.resolve(__dirname, './dist/front'),
        index: 'index.html',
        port: 9001
    },

```


if you only want to run frontend, use in root directory :
```
npm run dev:frontend
```
or 
```
npm run dev
```
in frontend subfolder.


if you only want to run backend, use in root directory :
```
npm run dev:backend
```
or 
```
npm run dev
```
in backend subfolder.


## mysql

if you need to configure your mysql database please check at :
/src/backend/config.js


## Authors

* **sinouhe FOUQUEAU** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

