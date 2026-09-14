import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Mail, FileText } from 'lucide-react'
import type { ReactNode, SVGProps } from 'react'

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.093.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.952 0-1.094.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.678.922.678 1.858 0 1.34-.012 2.42-.012 2.75 0 .268.18.58.688.482A10.025 10.025 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
import {
  about,
  contact,
  education,
  experience,
  links,
  projects,
  site,
  skills,
} from './content'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string
  title: string
  id: string
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs tracking-[0.18em] text-sea uppercase">
        {eyebrow}
      </p>
      <h2 id={id} className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  if (!href) return null
  return (
    <a
      href={href}
      target={href.startsWith('#') || href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('#') || href.startsWith('mailto:') ? undefined : 'noreferrer'}
      className={className}
    >
      {children}
    </a>
  )
}

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${id}`)
}

function InPageLink({
  to,
  children,
  className = '',
}: {
  to: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        scrollToId(to)
      }}
    >
      {children}
    </a>
  )
}

export default function App() {
  const reduceMotion = useReducedMotion()

  const socials = [
    { href: `mailto:${links.email}`, label: 'Email', icon: Mail, show: !!links.email },
    { href: links.github, label: 'GitHub', icon: GithubIcon, show: !!links.github },
    { href: links.linkedin, label: 'LinkedIn', icon: LinkedinIcon, show: !!links.linkedin },
    { href: links.resume, label: 'Resume', icon: FileText, show: !!links.resume },
  ].filter((s) => s.show)

  return (
    <div className="site-backdrop relative min-h-screen">
      <div className="grid-overlay pointer-events-none absolute inset-0 h-[110vh]" aria-hidden />

      <header className="relative z-20 mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
        <InPageLink to="top" className="font-mono text-sm tracking-wide text-ink-soft">
          {site.name.split(' ')[0].toLowerCase()}
          <span className="text-sea">.dev</span>
        </InPageLink>
        <nav className="hidden items-center gap-7 text-sm text-ink-soft sm:flex">
          <InPageLink to="about" className="transition-colors hover:text-ink">
            About
          </InPageLink>
          <InPageLink to="experience" className="transition-colors hover:text-ink">
            Experience
          </InPageLink>
          <InPageLink to="projects" className="transition-colors hover:text-ink">
            Projects
          </InPageLink>
          <InPageLink to="contact" className="transition-colors hover:text-ink">
            Contact
          </InPageLink>
        </nav>
        {links.resume ? (
          <ExternalLink
            href={links.resume}
            className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white/60 px-3 py-1.5 text-sm text-ink-soft backdrop-blur transition hover:border-sea hover:text-sea"
          >
            Resume
            <ArrowUpRight className="size-3.5" />
          </ExternalLink>
        ) : (
          <InPageLink
            to="contact"
            className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white/60 px-3 py-1.5 text-sm text-ink-soft backdrop-blur transition hover:border-sea hover:text-sea"
          >
            Contact
            <ArrowUpRight className="size-3.5" />
          </InPageLink>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-5xl flex-col justify-center px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-6">
          <div
            className="hero-sheen pointer-events-none absolute inset-x-0 top-0 h-full opacity-70"
            aria-hidden
          />

          <motion.div
            initial={reduceMotion ? false : 'hidden'}
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12, delayChildren: 0.05 },
              },
            }}
            className="relative"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 font-mono text-xs tracking-[0.2em] text-sea uppercase sm:text-sm"
            >
              {site.location}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.75rem,12vw,6.5rem)] leading-[0.92] font-extrabold tracking-tight text-ink"
            >
              {site.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl font-display text-xl font-semibold text-ink-soft sm:text-2xl"
            >
              {site.headline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft/90 sm:text-lg"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <InPageLink
                to="projects"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-fog transition hover:bg-sea"
              >
                {site.primaryCta.label}
              </InPageLink>
              <InPageLink
                to="contact"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-white/50 px-5 py-2.5 text-sm font-medium text-ink-soft backdrop-blur transition hover:border-ink hover:text-ink"
              >
                {site.secondaryCta.label}
              </InPageLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%] overflow-hidden sm:h-[60%]"
            aria-hidden
          >
            <div className="absolute inset-0 bg-gradient-to-t from-fog via-transparent to-transparent" />
            <svg
              className="absolute right-[-8%] bottom-[-10%] h-[120%] w-[85%] text-sea/25 sm:right-0 sm:w-[70%]"
              viewBox="0 0 640 420"
              fill="none"
            >
              <rect
                x="40"
                y="60"
                width="180"
                height="110"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="260"
                y="40"
                width="160"
                height="90"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="460"
                y="90"
                width="140"
                height="100"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="120"
                y="220"
                width="200"
                height="120"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="380"
                y="240"
                width="180"
                height="100"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M130 170v50M340 130v110M530 190v50M220 280h160"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="130" cy="170" r="4" fill="#c45c3e" fillOpacity="0.55" />
              <circle cx="340" cy="130" r="4" fill="#149494" fillOpacity="0.7" />
              <circle cx="530" cy="190" r="4" fill="#c45c3e" fillOpacity="0.55" />
              <text x="56" y="92" fill="#0f1c24" fillOpacity="0.28" fontFamily="IBM Plex Mono, monospace" fontSize="11">
                systems
              </text>
              <text x="276" y="72" fill="#0f1c24" fillOpacity="0.28" fontFamily="IBM Plex Mono, monospace" fontSize="11">
                build
              </text>
              <text x="476" y="122" fill="#0f1c24" fillOpacity="0.28" fontFamily="IBM Plex Mono, monospace" fontSize="11">
                ship
              </text>
            </svg>
          </motion.div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="section-anchor mx-auto max-w-5xl border-t border-line/80 px-5 py-20 sm:px-8 sm:py-24"
        >
          <SectionHeading eyebrow="01" title={about.title} id="about-heading" />
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div>
              <p className="mb-4 font-mono text-xs tracking-[0.16em] text-sea uppercase">
                Education
              </p>
              <ul className="space-y-6">
                {education.map((ed) => (
                  <li key={ed.school}>
                    <p className="font-display text-lg font-semibold text-ink">{ed.school}</p>
                    <p className="text-ink-soft">{ed.degree}</p>
                    <p className="mt-1 font-mono text-xs text-ink-soft/70">{ed.dates}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft/90">{ed.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="section-anchor mx-auto max-w-5xl border-t border-line/80 px-5 py-20 sm:px-8 sm:py-24"
        >
          <SectionHeading eyebrow="02" title="Experience" id="experience-heading" />
          <ul className="space-y-10">
            {experience.map((job) => (
              <li
                key={`${job.org}-${job.role}`}
                className="grid gap-3 border-l-2 border-sea/40 pl-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{job.role}</h3>
                  <p className="text-ink-soft">{job.org}</p>
                  <ul className="mt-3 space-y-2 text-ink-soft/90">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-[0.95rem] leading-relaxed">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-sea" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-mono text-xs tracking-wide text-ink-soft/70 sm:pt-1 sm:text-right">
                  {job.dates}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="section-anchor mx-auto max-w-5xl border-t border-line/80 px-5 py-20 sm:px-8 sm:py-24"
        >
          <SectionHeading eyebrow="03" title="Projects" id="projects-heading" />
          <ul className="divide-y divide-line/80 border-y border-line/80">
            {projects.map((project, i) => (
              <li
                key={project.name}
                className="group grid gap-4 py-8 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8"
              >
                <span className="font-mono text-xs text-sea/80 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-sea">
                    {project.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-ink-soft">{project.description}</p>
                  <p className="mt-4 font-mono text-xs tracking-wide text-ink-soft/80">
                    {project.tags.join('  ·  ')}
                  </p>
                </div>
                <div className="flex gap-3 sm:pt-1">
                  <ExternalLink
                    href={project.links.live}
                    className="inline-flex items-center gap-1 text-sm text-ink-soft transition hover:text-sea"
                  >
                    Live <ArrowUpRight className="size-3.5" />
                  </ExternalLink>
                  <ExternalLink
                    href={project.links.source}
                    className="inline-flex items-center gap-1 text-sm text-ink-soft transition hover:text-sea"
                  >
                    Code <ArrowUpRight className="size-3.5" />
                  </ExternalLink>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="skills-heading"
          className="mx-auto max-w-5xl border-t border-line/80 px-5 py-20 sm:px-8 sm:py-24"
        >
          <SectionHeading eyebrow="04" title={skills.title} id="skills-heading" />
          <div className="grid gap-10 sm:grid-cols-3">
            {skills.groups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 font-mono text-xs tracking-[0.16em] text-sea uppercase">
                  {group.label}
                </p>
                <ul className="space-y-2 text-ink-soft">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="section-anchor mx-auto max-w-5xl border-t border-line/80 px-5 py-20 sm:px-8 sm:py-24"
        >
          <SectionHeading eyebrow="05" title={contact.title} id="contact-heading" />
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{contact.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <ExternalLink
                key={label}
                href={href}
                className="inline-flex items-center gap-2 rounded-md border border-line bg-white/55 px-4 py-2.5 text-sm text-ink-soft backdrop-blur transition hover:border-sea hover:text-sea"
              >
                <Icon className="size-4" />
                {label}
              </ExternalLink>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-line/80 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm text-ink-soft/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-xs">
            Edit <span className="text-sea">src/content.ts</span> to personalize
          </p>
        </div>
      </footer>
    </div>
  )
}
