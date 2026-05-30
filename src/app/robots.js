export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://upthrive-work.vercel.app/sitemap.xml',
  }
}
