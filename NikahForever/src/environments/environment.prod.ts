import  { config } from "../app/config";
export const environment = {
  production: true,
  apiUrl: config.HostConfig.filter(x=>x.hostPath==(location.host)) [0].apiUrl+'api/',
  hideControl: config.HostConfig.filter(x=>x.hostPath==(location.host))[0].hideControl,
  homelogoUrl: config.HostConfig.filter(x=>x.hostPath==(location.host))[0].homelogoUrl,
  defaultPageUrl: config.HostConfig.filter(x=>x.hostPath==(location.host))[0].homePageUrl,
  notificationPath: config.HostConfig.filter(x=>x.hostPath==(location.host))[0].apiUrl+'notify',
  blogUrl:'https://blog.talentonlease.com/index.php/wp-json/wp/v2/posts'
};
