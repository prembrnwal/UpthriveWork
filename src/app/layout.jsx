import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL('https://upthrive-work.vercel.app'),
  title: {
    template: '%s - UpthriveWork',
    default: 'UpthriveWork - Your trusted academic help hub',
  },
  description: 'UpthriveWork is a student-focused hub delivering full stack projects, AI/ML solutions, assignments, presentations, and custom academic help.',
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'UpthriveWork - Your trusted academic help hub',
    description: 'UpthriveWork is a student-focused hub delivering full stack projects, AI/ML solutions, assignments, presentations, and custom academic help.',
    url: 'https://upthrive-work.vercel.app',
    siteName: 'UpthriveWork',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UpthriveWork - Your trusted academic help hub',
    description: 'UpthriveWork is a student-focused hub delivering full stack projects, AI/ML solutions, assignments, presentations, and custom academic help.',
  },
}

const orgWebsiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://upthrive-work.vercel.app/#organization',
      'name': 'UpthriveWork',
      'url': 'https://upthrive-work.vercel.app',
      'logo': {
        '@type': 'ImageObject',
        '@id': 'https://upthrive-work.vercel.app/#logo',
        'url': 'https://upthrive-work.vercel.app/icon.svg',
        'caption': 'UpthriveWork Logo'
      },
      'sameAs': [
        'https://twitter.com/upthrivework',
        'https://github.com/upthrivework'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://upthrive-work.vercel.app/#website',
      'url': 'https://upthrive-work.vercel.app',
      'name': 'UpthriveWork',
      'publisher': {
        '@id': 'https://upthrive-work.vercel.app/#organization'
      }
    }
  ]
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgWebsiteSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
