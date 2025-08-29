/** @type {import('next-sitemap').IConfig} */


module.exports = {
  siteUrl: 'https://www.mghcardio.com',
    generateRobotsTxt: true, 
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' }, 
            { userAgent: 'Googlebot', allow: '/' }, 
        ],
    },
};
