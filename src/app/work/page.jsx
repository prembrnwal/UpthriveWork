import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import arizonaDark from '@/images/clients/arizona/logomark-dark.svg'
import deakinDark from '@/images/clients/deakin/logomark-dark.svg'
import liverpoolDark from '@/images/clients/liverpool/logomark-dark.svg'
import illinoisDark from '@/images/clients/illinois/logomark-dark.svg'
import texasDark from '@/images/clients/texas/logomark-dark.svg'
import ucfDark from '@/images/clients/ucf/logomark-dark.svg'
import vitDark from '@/images/clients/vit/logomark-dark.svg'
import yorkDark from '@/images/clients/york/logomark-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function CaseStudies({ caseStudies }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt={`${caseStudy.client} Logo`}
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Arizona', arizonaDark],
  ['Deakin', deakinDark],
  ['liverpool', liverpoolDark],
  ['Illinois', illinoisDark],
  ['Texas', texasDark],
  ['UCF', ucfDark],
  ['VIT', vitDark],
  ['York', yorkDark],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Students from top universities trust us
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <Image
                    src={logo}
                    alt={client}
                    unoptimized
                    className="h-12 w-auto object-contain"
                  />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'Our Work',
  description:
    'Explore how UpthriveWork Hub has helped students deliver outstanding academic work across a wide range of subjects and disciplines.',
}

const workCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'UpthriveWork Case Studies',
  'description': 'Explore how UpthriveWork Hub has helped students deliver outstanding academic work across a wide range of subjects and disciplines.',
  'publisher': {
    '@type': 'Organization',
    'name': 'UpthriveWork',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://upthrive-work.vercel.app/icon.svg'
    }
  }
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workCollectionSchema) }}
      />
      <PageIntro
        eyebrow="Our work"
        title="Real results for real students."
      >
        <p>
          We take pride in every project we deliver. Here is a look at some
          of the academic work we have helped students accomplish — from full
          stack applications to research-grade AI/ML projects.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Texas', logo: texasDark }}
      >
        We approached <em>UpthriveWork Hub</em> for our final year project and
        they delivered a production-ready application ahead of our deadline.
      </Testimonial>

      <Clients />

      <ContactSection />
    </RootLayout>
  )
}
