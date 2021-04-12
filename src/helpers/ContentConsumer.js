import { config } from '../config.js';

export const fetchLandingPageContent = (pageUri) => {
  //consider using nlogger
  return fetch(config.STRAPI_BASE_URI + pageUri)
    .then(res => res.json()).catch(err => { console.log(err); });
}

export const fetchMainMenuItems = () => {
  return fetch(config.STRAPI_BASE_URI + config.MENU_URI_STUB)
    .then(res => res.json())
}