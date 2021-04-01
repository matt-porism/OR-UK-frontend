const BASE_URL = 'http://54.78.155.180:1337';
const LANDING_PAGE_URI = '/landing-page';
const MENU_URI = '/top-menus';
const SUB_MENU_URI = '/sub-menus/';

export const fetchLandingPageContent = () => {
  return fetch(BASE_URL + LANDING_PAGE_URI)
    .then(res => res.json())
}

export const fetchMainMenuItems = () => {
  return fetch(BASE_URL + MENU_URI)
    .then(res => res.json())
}

export const fetchSubMenuItems = subMenuId => {
  return fetch(BASE_URL + SUB_MENU_URI + subMenuId)
    .then(res => res.json());
}