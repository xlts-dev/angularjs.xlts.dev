// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBetaxUzCLLriDtSiGfUakCRi5IAzw2wjI',
    authDomain: 'xlts-dev.firebaseapp.com',
    databaseURL: 'https://xlts-dev.firebaseio.com',
    projectId: 'xlts-dev',
    storageBucket: 'xlts-dev.appspot.com',
    messagingSenderId: '393492538637',
    appId: '1:393492538637:web:a9aa05265e2e330e053c44',
    measurementId: 'G-2S41M9MGTM',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
