const request = require('request');
const cheerio = require('cheerio');

request('http://codedemos.com/sampleblog/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        // enables you to use jQuery like sytax
        const $ = cheerio.load(html);

        /**
         * BASICS
         */
        // const siteHeading = $('.site-heading');
        // Very large object...
        // console.log(siteHeading);

        // HTML 
        // console.log(siteHeading.html());

        // Text
        // console.log(siteHeading.text());

        // Using find...
        // const output = siteHeading.find('h1').text();

        // Using children...
        // const output = siteHeading.children('h1').text();

        // Nesting children with next
        // const output = siteHeading.children('h1').next().text();

        // Child of parent = same
        // const output = siteHeading.children('h1').parent().text();

        // console.log(output);

        /**
         * LOOPING
         */

        $('.nav-item a').each((i, el) => {
            // whatever your second parameter is plug it in with $
            // all nav items text
            // const item = $(el).text();

            // all nav items urls!!
            // const link = $(el).attr('href');

            // console.log(link);
        });

    }
});