import { config } from '../config.js';

export const fetchLandingPageContent = (pageUri) => {
  //consider using nlogger
  return fetch(config.STRAPI_BASE_URI + pageUri)
    .then(async res => { 
      if (res.status === 200) {
        console.log("response from fetch home ", res.status);
        return await res.json();
      } else {
        console.log("response status ", res.status)
      }
    }).catch(err => { console.log(err); });
}

export const fetchMainMenuItems = () => {
  return fetch(config.STRAPI_BASE_URI + config.MENU_URI_STUB)
    .then(async res => {

      if (res.status === 200) {
        
        return await res.json();
      } else {
        console.log("response from fetch menu ", res.status);
      }
      
    } )
}