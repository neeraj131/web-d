const request = require('request');
const cheerio= require('cheerio')

request('https://www.worldometers.info/coronavirus/', cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }
    else
    handlehtml(html)
} 

function handlehtml(html){
    let seltool= cheerio.load(html)
    let contentarr= seltool('.maincounter-number span')
    let data= seltool(contentarr[0]).text();
    let deaths = seltool(contentarr[1]).text();
    let recovery = seltool(contentarr[2]).text();
    console.log("Total no. of Covid cases : " + data);
    console.log("Total no. of Deaths cases : "  + deaths);
    console.log("Total no. of Recovery cases : " + recovery);

}