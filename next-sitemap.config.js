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
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // Service pages get high priority
    if (path === '/our-services' || path === '/request-appointment') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // About and contact pages
    if (path === '/about-us' || path === '/testimonials' || path === '/faq') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // Blog posts get medium priority and updated weekly
    if (path.includes('/blogs/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // Default for other pages
    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
};
