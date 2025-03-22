import Config from "../assets/configuration/config.json";
export const environment = {
  production: true,
  apiUrl: Config.HostConfig.filter(x=>x.hostPath==(location.host)) [0].apiUrl+'api/',
  hideControl: Config.HostConfig.filter(x=>x.hostPath==(location.host))[0].hideControl,
  homelogoUrl: Config.HostConfig.filter(x=>x.hostPath==(location.host))[0].homelogoUrl,
  defaultPageUrl: Config.HostConfig.filter(x=>x.hostPath==(location.host))[0].homePageUrl,
  notificationPath: Config.HostConfig.filter(x=>x.hostPath==(location.host))[0].apiUrl+'notify',
  blogUrl:'https://blog.talentonlease.com/index.php/wp-json/wp/v2/posts'
};
