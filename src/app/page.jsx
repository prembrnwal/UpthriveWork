import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import arizonaLight from '@/images/clients/arizona/logomark-light.svg'
import arizonaDark from '@/images/clients/arizona/logomark-dark.svg'

import deakinLight from '@/images/clients/deakin/logomark-light.svg'
import deakinDark from '@/images/clients/deakin/logomark-dark.svg'

import liverpoolLight from '@/images/clients/liverpool/logomark-light.svg'
import liverpoolDark from '@/images/clients/liverpool/logomark-dark.svg'

import illinoisLight from '@/images/clients/illinois/logomark-light.svg'
import illinoisDark from '@/images/clients/illinois/logomark-dark.svg'

import texasLight from '@/images/clients/texas/logomark-light.svg'
import texasDark from '@/images/clients/texas/logomark-dark.svg'

import ucfLight from '@/images/clients/ucf/logomark-light.svg'
import ucfDark from '@/images/clients/ucf/logomark-dark.svg'

import vitLight from '@/images/clients/vit/logomark-light.svg'
import vitDark from '@/images/clients/vit/logomark-dark.svg'

import yorkLight from '@/images/clients/york/logomark-light.svg'
import yorkDark from '@/images/clients/york/logomark-dark.svg'
import studentIllustration from '@/images/illustrations/student.svg'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const clients = [
  ['Arizona', arizonaLight],
  ['Deakin', deakinLight],
  ['Liverpool', liverpoolLight],
  ['Illinois', illinoisLight],
  ['Texas', texasLight],
  ['UCF', ucfLight],
  ['VIT', vitLight],
  ['York', yorkLight],
]
const invertLogos = ['Illinois', 'Liverpool']

function Clients() {
  return (
    <div className="mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by students across hundreds of universities worldwide
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    unoptimized
                    className={`h-12 w-auto object-contain ${invertLogos.includes(client) ? 'invert' : ''
                      }`}
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Helping students achieve more, stress less"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe every student deserves expert support. Whether it's a
          complex capstone or a last-minute assignment, our team delivers
          quality work — on time, every time.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you tackle every academic challenge with confidence."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From code to content, data models to dissertations — our experts
          handle it all so you can focus on what matters most.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={studentIllustration}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                alt="Student studying with expert academic support illustration"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Full Stack Project">
              We build complete, production-ready web applications tailored to
              your academic requirements — from frontend to backend, database
              to deployment.
            </ListItem>
            <ListItem title="AI/ML Project">
              Our data scientists and ML engineers craft intelligent models,
              data pipelines, and research-grade implementations for your AI/ML
              coursework and capstone projects.
            </ListItem>
            <ListItem title="Assignment">
              Get expertly written, 100% original, and plagiarism-free
              assignments across all subjects — delivered on time, every time.
            </ListItem>
            <ListItem title="Presentation">
              Stunning, well-structured presentations designed to impress your
              professors and ace your viva, seminar, or pitch.
            </ListItem>
            <ListItem title="Custom Academic Help">
              Research papers, dissertations, case studies, lab reports,
              exam preparation — whatever your academic challenge, we have the expert for it.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'UpthriveWork is a student-focused hub delivering full stack projects, AI/ML solutions, assignments, presentations, and custom academic help.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'UpthriveWork',
  'image': 'https://upthrive-work.vercel.app/icon.svg',
  '@id': 'https://upthrive-work.vercel.app/#service',
  'url': 'https://upthrive-work.vercel.app',
  'telephone': '',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Virtual Service',
    'addressLocality': 'Global',
    'addressCountry': 'US'
  },
  'priceRange': '$$',
  'description': 'UpthriveWork is a student-focused hub delivering full stack projects, AI/ML solutions, assignments, presentations, and custom academic help.',
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    'opens': '00:00',
    'closes': '23:59'
  }
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Academic excellence delivered — by experts who get it done.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are UpthriveWork — a student-focused hub helping you
            deliver outstanding academic work. From full stack projects to
            AI/ML, assignments to presentations, we've got you covered.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Arizona', logo: arizonaDark }}
      >
        The team at UpthriveWork went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
