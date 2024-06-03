// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  encdecKey: 'BOI$#@$^@1ERF',
  host: 'https://boi.sandbox.integreat.perfios.com/',
  hostTest: 'https://boi-api.sandbox.integreat.perfios.com/', 
  UI_BASE_URL: window['BASE_URL'] || 'https://boicustomerjourney.sandbox.integreat.perfios.com',  
  // host:'https://epl-staraks.test.bankofindia.co.in/',
  // hostTest:'https://epl-staraksapi.test.bankofindia.co.in',
  disableDevelopersTools: false,
  appiceJson:'manifest.webmanifest'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
