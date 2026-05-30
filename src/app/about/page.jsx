import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
const imageSatyamSingh = 'https://api.dicebear.com/9.x/avataaars/svg?seed=Aiden'
const imageAdityaYadav = 'https://api.dicebear.com/9.x/avataaars/svg?seed=Katherine'
const imageVijayKumar = 'https://api.dicebear.com/9.x/avataaars/svg?seed=Aidan'
const imageAnviKumari = 'https://api.dicebear.com/9.x/avataaars/svg?seed=Robert'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Built by experts, driven by your academic success."
        invert
      >
        <p>
          We are a team of academics, developers, and specialists united by one goal — helping students succeed.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Quality" invert>
            Every deliverable goes through rigorous review to ensure it meets
            the highest academic standards before reaching you.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We handle your academic work with complete confidentiality — your
            privacy and security are always our top priority.
          </GridListItem>
          <GridListItem title="On-Time Delivery" invert>
            Deadlines are sacred to us. We plan, execute, and deliver your
            work well within your timeline, every single time.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Aditya Yadav',
        role: 'Co-Founder / CEO',
        image: { src: imageAdityaYadav },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Satyam Singh',
        role: 'Senior Developer',
        image: { src: imageSatyamSingh },
      },
      {
        name: 'Vijay Kumar',
        role: 'Senior Designer',
        image: { src: imageVijayKumar },
      },
      {
        name: 'Anvi Kumari',
        role: 'Front-end Developer',
        image: { src: imageAnviKumari },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt={person.name}
                            src={person.image.src}
                            width={400}
                            height={400}
                            unoptimized
                            className="h-64 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="p-6 border-t border-neutral-200">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-neutral-950">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-neutral-600">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'UpthriveWork Hub is a student-focused academic help platform built by experts committed to quality, confidentiality, and on-time delivery.',
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'mainEntity': {
    '@type': 'Organization',
    'name': 'UpthriveWork',
    'description': 'UpthriveWork Hub is a student-focused academic help platform built by experts committed to quality, confidentiality, and on-time delivery.'
  }
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <PageIntro eyebrow="About us" title="Your academic success is our mission">
        <p>
          We believe that our strength lies in our student-first approach, which
          puts your academic success at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            UpthriveWork Hub was founded by a group of academics and tech
            enthusiasts who saw students struggling to meet the ever-growing
            demands of modern education. We built a team of real experts —
            developers, researchers, and subject specialists — to bridge that gap.
          </p>
          <p>
            At UpthriveWork Hub, we treat every student's work as our own
            responsibility. Our commitment to quality, confidentiality, and
            on-time delivery has made us the trusted choice for students
            across hundreds of universities worldwide.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="500+" label="Students helped" />
          <StatListItem value="98%" label="On-time delivery rate" />
          <StatListItem value="20+" label="Subjects covered" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experts shares insights, tips, and guides to help students navigate academic challenges — from acing assignments to building impressive final year projects."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
