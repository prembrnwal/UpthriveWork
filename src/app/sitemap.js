import { loadArticles, loadCaseStudies } from '@/lib/mdx'

export const baseUrl = 'https://upthrive-work.vercel.app'

export default async function sitemap() {
  const staticRoutes = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/process`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]

  const articles = await loadArticles()
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}${article.href}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const caseStudies = await loadCaseStudies()
  const caseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}${caseStudy.href}`,
    lastModified: new Date(caseStudy.date ? `${caseStudy.date}-01` : Date.now()),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...articleRoutes, ...caseStudyRoutes]
}
