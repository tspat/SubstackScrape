import Axios from "axios"
import Cheerio from "cheerio"


const url = 'https://scottpatterson.substack.com/p/string-of-beginnings';
let postContents = [];

    
function scrape() {

    Axios.get("https://scottpatterson.substack.com/p/string-of-beginnings")
        .then(response => {
            const html = response.data;
            const $ = Cheerio.load(html);
            const post = $('div .body ');
            

            post.each(function () {
                const contents = $(this).find('p').text();

                postContents.push({
                    contents,
                });
            });

            console.log(postContents);
        })
        .catch(console.error);
    };