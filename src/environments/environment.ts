// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    firebase : {
        apiKey: "AIzaSyDBey0fAntq6aML2iBwjhIT2yE-GhJC05Q",
        authDomain: "todoapp-1e2ba.firebaseapp.com",
        databaseURL: "https://todoapp-1e2ba.firebaseio.com",
        projectId: "todoapp-1e2ba",
        storageBucket: "todoapp-1e2ba.appspot.com",
        messagingSenderId: "687448591897"
    }

};
