import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import discoverImg from '@/images/illustrations/discover.svg'
import buildImg from '@/images/illustrations/build.svg'
import deliverImg from '@/images/illustrations/deliver.svg'
import { RootLayout } from '@/components/RootLayout'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: discoverImg, alt: "UpthriveWork Academic Project Discovery Phase" }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We start by understanding your{' '}
          <strong className="font-semibold text-neutral-950">requirements</strong> in
          detail — the subject, topic, deadline, academic level, and any
          specific instructions provided by your institution.
        </p>
        <p>
          You share your brief with us and we assign the most suitable{' '}
          <strong className="font-semibold text-neutral-950">expert</strong>{' '}
          from our team — whether that's a developer, data scientist, academic
          writer, or subject specialist.
        </p>
        <p>
          Once we have a clear picture of your needs, we confirm the{' '}
          <strong className="font-semibold text-neutral-950">plan</strong>,
          timeline, and scope before moving forward.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Requirement gathering</TagListItem>
        <TagListItem>Expert matching</TagListItem>
        <TagListItem>Deadline confirmation</TagListItem>
        <TagListItem>Academic level assessment</TagListItem>
        <TagListItem>Scope definition</TagListItem>
        <TagListItem>Plagiarism policy review</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: buildImg, alt: "UpthriveWork Academic Project Building Phase" }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once requirements are confirmed, our assigned expert begins working on
          your{' '}
          <strong className="font-semibold text-neutral-950">deliverable</strong> —
          following your institution's guidelines, formatting standards, and
          academic integrity requirements throughout.
        </p>
        <p>
          You are kept in the loop at every stage. Your dedicated{' '}
          <strong className="font-semibold text-neutral-950">support manager</strong>{' '}
          provides regular progress updates and is always available to
          incorporate any additional instructions or changes you may have.
        </p>
        <p>
          Every piece of work goes through a thorough internal{' '}
          <strong className="font-semibold text-neutral-950">quality check</strong> —
          reviewed for accuracy, originality, and compliance with your
          requirements before it moves to delivery.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        UpthriveWork Hub kept me updated at every step. My project was
        delivered ahead of schedule and exceeded my expectations completely!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: deliverImg, alt: "UpthriveWork Academic Project Quality Check and Delivery Phase" }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the quality check is complete, we deliver your work well within
          the agreed{' '}
          <strong className="font-semibold text-neutral-950">
            deadline
          </strong>
          . You receive the final deliverable directly and have time to review
          it before submission.
        </p>
        <p>
          If you need any{' '}
          <strong className="font-semibold text-neutral-950">revisions</strong>{' '}
          after reviewing, we are happy to make adjustments quickly and
          efficiently — your satisfaction is our priority.
        </p>
        <p>
          We stand behind every deliverable we produce. Our{' '}
          <strong className="font-semibold text-neutral-950">
            post-delivery support
          </strong>{' '}
          ensures you are fully confident and prepared before you submit your
          work.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Quality Review">
          Every deliverable is checked for accuracy, originality, and
          compliance with your academic institution's requirements.
        </ListItem>
        <ListItem title="Plagiarism Check">
          All written work is run through plagiarism detection tools to
          ensure 100% original and authentic content.
        </ListItem>
        <ListItem title="Revision Support">
          We offer free revisions after delivery to ensure you are fully
          satisfied before you submit your work.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="The values that drive everything we do"
      >
        <p>
          Every decision we make at UpthriveWork Hub is guided by a set of
          core values that ensure every student receives the best possible
          experience and outcome.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Quality First">
            Every deliverable is held to the highest academic standards —
            thoroughly reviewed before it ever reaches your hands.
          </GridListItem>
          <GridListItem title="On-Time Delivery">
            We treat your deadlines as our own. Our team plans and executes
            every project to ensure timely delivery, every single time.
          </GridListItem>
          <GridListItem title="Confidentiality">
            Your privacy matters. All work and personal information shared
            with us is handled with complete discretion and security.
          </GridListItem>
          <GridListItem title="Transparency">
            We keep you informed at every stage of the process — no
            surprises, no hidden steps, just clear and open communication.
          </GridListItem>
          <GridListItem title="Student Focused">
            Everything we do is designed around your needs, your timeline,
            and your academic success — nothing else.
          </GridListItem>
          <GridListItem title="Expert Team">
            Our diverse team of developers, researchers, and academics ensures
            you always get the most qualified expert for your specific need.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'At UpthriveWork Hub we follow a simple, transparent process to deliver high quality academic work on time, every time.',
}

const processSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'How UpthriveWork Delivers Academic Projects',
  'description': 'Our simple three-step process designed to deliver outstanding academic work on time, every time.',
  'step': [
    {
      '@type': 'HowToStep',
      'name': 'Discover',
      'text': 'We gather project requirements, match students with appropriate academic specialists, and confirm details before starting work.',
      'url': 'https://upthrive-work.vercel.app/process#discover'
    },
    {
      '@type': 'HowToStep',
      'name': 'Build',
      'text': 'Our academic experts execute tasks in line with university rubrics, providing progress updates and performing internal quality review.',
      'url': 'https://upthrive-work.vercel.app/process#build'
    },
    {
      '@type': 'HowToStep',
      'name': 'Deliver',
      'text': 'We run plagiarism and authenticity checks, deliver the final code or document on time, and offer revision and post-delivery support.',
      'url': 'https://upthrive-work.vercel.app/process#deliver'
    }
  ]
}

export default function Process() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <PageIntro eyebrow="Our process" title="How we deliver your work">
        <p>
          We follow a simple, transparent three-step process to ensure every
          deliverable meets your requirements, academic standards, and deadline
          — without any stress on your end.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
