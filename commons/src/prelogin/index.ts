import * as changeCase from 'change-case';

export { preloginReducer } from './reducer';
export { getPreloginSelector } from './selectors';

export const getPrelogin = async (): Promise<any> => {

  try {
    let response = await fetch(
      'https://ihbnext-ads.cedacri.it/hb3-api/api/public/prelogin?abi=06085&canale=mobile',
    );
    let responseJson = await response.json();
    console.log('fetch', responseJson);
    console.log(changeCase.camelCase('grande francesco corvino'));
    //return responseJson.movies;
  } catch (error) {
    console.error(error);
  }

  /*
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      //console.log('xmlHttp', xmlHttp);
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        console.log(xmlHttp.responseText);
        console.log('mario scalas');
        console.log('grande corvino');
        console.log('moment', moment());
      }
    }
    xmlHttp.open("GET", 'https://ihbnext-ads.cedacri.it/hb3-api/api/public/prelogin?abi=06085&canale=mobile', true); // true for asynchronous 
    xmlHttp.send(null);

    */
}
