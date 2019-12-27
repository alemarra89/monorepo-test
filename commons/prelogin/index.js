export const getPrelogin = () => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      //console.log('xmlHttp', xmlHttp);
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        console.log(xmlHttp.responseText);
        console.log('mario scalas');
      }
    }
    xmlHttp.open("GET", 'https://ihbnext-ads.cedacri.it/hb3-api/api/public/prelogin?abi=06085&canale=mobile', true); // true for asynchronous 
    xmlHttp.send(null);
}
