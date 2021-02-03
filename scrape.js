const fetch = require('node-fetch');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const scrape = async () => {
    
    /*‚±‚±‚©‚ç**/ 
    // const res = await fetch('https://www.jma.go.jp/jp/week/319.html');
    const res = await fetch('https://oosaka-nenkin.jp/benefits/');
    const html = await res.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    /*‚±‚±‚Ü‚Å‚Í•Ï‚¦‚È‚¢**/ 

    // const nodes = document.querySelectorAll('#infotablefont tr:nth-child(9) td');
    // const tokyoWeathers = Array.from(nodes).map((td) => td.textContent.trim());

    const node = document.querySelectorAll('#lower > h4.lazy-show');
    const tokyoWeathers = Array.from(nodes).map((td) => td.textContent.trim());

    console.log(tokyoWeathers);
};
scrape();