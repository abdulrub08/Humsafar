// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import Config from "../assets/configuration/config.json";
export const environment = {
  production: false,
  apiUrl: Config.HostConfig.filter(x=>x.hostPath==(location.host)) [0].apiUrl+'api/',
  hideControl: Config.HostConfig.filter(x=>x.hostPath==(location.host))[0].hideControl,
  homelogoUrl: Config.HostConfig.filter(x=>x.hostPath==(location.host))[0].homelogoUrl,
  defaultPageUrl: Config.HostConfig.filter(x=>x.hostPath==(location.host))[0].homePageUrl,
  notificationPath: Config.HostConfig.filter(x=>x.hostPath==(location.host))[0].apiUrl+'notify',
  blogUrl:'https://blog.talentonlease.com/index.php/wp-json/wp/v2/posts'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
