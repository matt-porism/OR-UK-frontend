//lets refactor this we can look at together but I have made this env var change because the url is likely to change
const BASE_URL  = "http://54.78.155.180:1337";
const LANDING_PAGE_URI = '/landing-page';
const MENU_URI = '/top-menus';

export const fetchLandingPageContent = () => {
  //consider using nlogger
  return fetch(BASE_URL + LANDING_PAGE_URI)
    .then(res => res.json()).catch(err => { console.log(err); });
}

export const fetchMainMenuItems = () => {
  return fetch(BASE_URL + MENU_URI)
    .then(res => res.json())
}