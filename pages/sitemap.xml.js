const strftime = require("strftime")

const ROOT_URL = 'dartdengue.org'
const SITES = ["", "team", "publications", "news"]

function generateSiteMap(sites) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${sites
      .map((href) => {
        return `
       <url>
           <loc>https://${`${ROOT_URL}/${href}`}</loc>
           <lastmod>${strftime("%Y-%m-%d")}</lastmod> 
          <changefreq>weekly</changefreq>
       </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(SITES);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;