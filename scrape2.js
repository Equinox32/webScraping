const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("post.csv");

// Write the headers
writeStream.write(`Title,Link,Date \n`);

request("http://codedemos.com/sampleblog/", (error, response, html) => {
	if (!error && response.statusCode == 200) {
		// enables you to use jQuery like sytax
		const $ = cheerio.load(html);

		$(".post-preview").each((i, el) => {
			// Gets all the titles without the shitload of whitespace
			// Don't ask why you have to use regex, I thought this library was good
			const title = $(el)
				.find(".post-title")
				.text()
				.replace(/\s\s+/g, "");

			// Get the link
			const link = $(el)
				.find("a")
				.attr("href");

			// Get the Date
			const date = $(el)
				.find(".post-date")
				.text()
				.replace(/,/, "");

			// Write Row to CSV
			writeStream.write(`${title}, ${link}, ${date} \n`);
		});
		console.log("Scraping Done...");
	}
});
