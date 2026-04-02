/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://luminexistechnologies.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'], // exclude server-side sitemap if you have one
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://luminexistechnologies.com/server-sitemap.xml', // optional
    ],
  },
}
