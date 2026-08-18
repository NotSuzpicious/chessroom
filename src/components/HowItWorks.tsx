const steps = [
  {
    number: '01',
    title: 'Upload',
    description:
      'Add your chess book as a PDF and keep it right beside your board.',
  },
  {
    number: '02',
    title: 'Explore',
    description:
      'Move through positions on the interactive board as you read.',
  },
  {
    number: '03',
    title: 'Study',
    description:
      'Pause, replay, and understand the ideas behind every position.',
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          {/* Heading */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
              How it works
            </p>

            <h2 className="mt-4 max-w-md font-[var(--font-display)] text-4xl leading-tight text-[var(--color-text-primary)] sm:text-5xl">
              Everything you need to study in one place.
            </h2>
          </div>

          {/* Steps */}
          <div className="divide-y divide-[var(--color-border)]">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[80px_1fr]"
              >
                <span className="text-sm tracking-[0.15em] text-[var(--color-accent)]">
                  {step.number}
                </span>

                <div>
                  <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks