const ideas = [
  {
    title: "Ranked chaos: the clip you wish you hit live",
    format: "Short clip",
    hook: "“I thought this play was cooked… then it flipped.”",
    angle: "Show the moment → rewind → explain the mistake.",
    cta: "Ask chat for the next ranked dare.",
    tags: ["Twitch", "Kick"],
  },
  {
    title: "Two-sentence hot take on today’s meta",
    format: "Daily tweet + TikTok",
    hook: "“The real secret isn’t aim — it’s timing.”",
    angle: "Opinion, then one proof clip.",
    cta: "Invite duet stitches with counter clips.",
    tags: ["TikTok", "Shorts"],
  },
  {
    title: "Viewer court: chat decides the loadout",
    format: "Live segment",
    hook: "“Chat, you pick. I live with it.”",
    angle: "Poll → lock-in → 20-min proof run.",
    cta: "Screenshot the poll results for socials.",
    tags: ["Twitch", "Kick"],
  },
];

const thread = [
  { day: "Mon", focus: "Hook lab", deliverable: "3 cold open variants", intent: "Find the fastest scroll-stopper." },
  { day: "Tue", focus: "Signature play", deliverable: "One hero clip + breakdown", intent: "Build a repeatable format." },
  { day: "Wed", focus: "Collab bait", deliverable: "Duet-ready prompt", intent: "Earn stitches and reply clips." },
  { day: "Thu", focus: "Audience ritual", deliverable: "Chat poll segment", intent: "Turn viewers into co-creators." },
  { day: "Fri", focus: "Lore drop", deliverable: "Storytime + lesson", intent: "Humanize the creator voice." },
  { day: "Sat", focus: "Challenge run", deliverable: "High stakes run", intent: "Create long watch time." },
  { day: "Sun", focus: "Week recap", deliverable: "Top 3 moments", intent: "Close the loop and tease Monday." },
];

const insights = [
  { label: "Tone", value: "Fast, playful, clipped delivery with dry humor." },
  { label: "Hook density", value: "Open every 7 seconds with a new beat." },
  { label: "Audience pull", value: "Use chat votes as creative constraints." },
  { label: "Format fit", value: "Shorts + live segments outperform long edits." },
];

const steps = [
  {
    title: "Ingest creator data",
    description: "Pull recent clips, chat logs, and stream beats into one brief.",
  },
  {
    title: "Generate JSON-ready output",
    description: "Deliver 3 ideas, 7-day thread, and tasks in a single schema.",
  },
  {
    title: "Ship with daily rhythm",
    description: "Schedule, post, and iterate with a consistent creator cadence.",
  },
];

const stats = [
  { label: "Minutes to plan", value: "6.4" },
  { label: "Ideas per week", value: "21+" },
  { label: "Platforms synced", value: "3" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-48 right-[-6rem] h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl motion-safe:animate-[float-slow_14s_ease-in-out_infinite]" />
          <div className="absolute left-[-8rem] top-[220px] h-[360px] w-[360px] rounded-full bg-sky-300/30 blur-3xl motion-safe:animate-[float-slow_16s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-8rem] right-[10%] h-[320px] w-[320px] rounded-full bg-cyan-200/30 blur-[120px]" />
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-8 lg:px-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground">
                RL
              </span>
              <div>
                <p className="text-base font-semibold">RealLive</p>
                <p className="text-xs text-muted-foreground">Streamer content copilot</p>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
              <a className="transition hover:text-foreground" href="#product">
                Product
              </a>
              <a className="transition hover:text-foreground" href="#output">
                Output
              </a>
              <a className="transition hover:text-foreground" href="#workflow">
                Workflow
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary/60 hover:text-foreground md:inline-flex">
                View demo
              </button>
              <button className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:bg-foreground/90">
                Start free
              </button>
            </div>
          </nav>

          <header className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6 opacity-0 motion-safe:animate-[reveal-up_0.9s_ease-out_forwards] motion-reduce:opacity-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Twitch · Kick · TikTok
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl font-[var(--font-display)]">
                RealLive turns creator data into a daily content feed and a 7-day red thread.
              </h1>
              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                Paste your chat, clips, and creator stats. RealLive infers tone, hooks, and concept, then
                returns JSON-ready plans you can ship in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                  Generate my 7-day plan
                </button>
                <button className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition hover:border-primary/60 hover:text-foreground">
                  See example output
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border/60 bg-card/70 px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 top-10 hidden h-36 w-36 rounded-full border border-dashed border-primary/40 lg:block" />
              <div
                className="rounded-[28px] border border-border/60 bg-card/80 p-6 opacity-0 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] motion-safe:animate-[reveal-up_0.9s_ease-out_forwards] motion-reduce:opacity-100"
                style={{ animationDelay: "0.15s" }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Live output</p>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    JSON-ready
                  </span>
                </div>
                <pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-background/70 p-4 text-xs leading-5 text-muted-foreground">
{`{
  "headline": "Rapid fire highlights for streamers",
  "concept": { "title": "Chat-led episodes", "tagline": "Let chat write the arc." },
  "ideas": [...],
  "thread": [...]
}`}
                </pre>
                <div className="mt-5 grid gap-4">
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Daily feed</p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      3 fresh ideas with hooks, angles, and CTAs
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full border border-border/60 px-2 py-1">Hook density</span>
                      <span className="rounded-full border border-border/60 px-2 py-1">Clip-first</span>
                      <span className="rounded-full border border-border/60 px-2 py-1">Duet-ready</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Red thread</p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      7-day sequence with daily focus and intent
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Mon → Sun</span>
                      <span>Cadence locked</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      <section id="product" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Creator signals</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-[var(--font-display)]">
              Built for new streamers who need momentum, not more tabs.
            </h2>
            <p className="text-base text-muted-foreground">
              RealLive blends creator data with live chat sentiment, then extracts the hooks and angles that
              drive watch time. No templates, just tailored output.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {insights.map((insight) => (
                <div
                  key={insight.label}
                  className="rounded-2xl border border-border/60 bg-card/70 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {insight.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{insight.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[28px] border border-border/60 bg-card/80 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Input stack</p>
              <div className="mt-4 space-y-3 text-sm text-foreground">
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                  <span>Creator data</span>
                  <span className="text-xs text-muted-foreground">stats · cadence · goals</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                  <span>Chat transcript</span>
                  <span className="text-xs text-muted-foreground">tone · memes · Qs</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                  <span>Clip library</span>
                  <span className="text-xs text-muted-foreground">moments · peak beats</span>
                </div>
              </div>
            </div>
            <div className="rounded-[28px] border border-border/60 bg-primary/10 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Output guarantee</p>
              <p className="mt-3 text-lg font-semibold text-foreground">
                Always 3 ideas, 7 thread steps, and 3-5 tasks. Always valid JSON.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                If a field is missing, the response is rejected and regenerated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="output" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Daily feed</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-[var(--font-display)]">
              Ideas that sound like you, not like a template.
            </h2>
          </div>
          <button className="hidden rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary/60 hover:text-foreground md:inline-flex">
            Download sample JSON
          </button>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {ideas.map((idea, index) => (
            <div
              key={idea.title}
              className="flex h-full flex-col justify-between rounded-[26px] border border-border/60 bg-card/80 p-6 opacity-0 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.6)] motion-safe:animate-[reveal-up_0.8s_ease-out_forwards] motion-reduce:opacity-100"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{idea.format}</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground font-[var(--font-display)]">
                  {idea.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{idea.hook}</p>
                <p className="mt-3 text-sm text-muted-foreground">{idea.angle}</p>
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">CTA</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{idea.cta}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {idea.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
        <div className="rounded-[32px] border border-border/60 bg-card/90 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">7-day red thread</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-[var(--font-display)]">
                A daily arc that keeps viewers coming back.
              </h2>
            </div>
            <div className="rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Mon → Sun cadence
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {thread.map((item) => (
              <div key={item.day} className="rounded-2xl border border-border/60 bg-background/70 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.day}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {item.focus}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">{item.deliverable}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.intent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto w-full max-w-6xl px-6 pb-20 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Workflow</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-[var(--font-display)]">
              From messy input to a clean daily plan.
            </h2>
            <p className="text-base text-muted-foreground">
              RealLive follows your system prompt exactly: headline, concept, insights, ideas, thread, and
              tasks. Every response is validated so you can publish immediately.
            </p>
          </div>
          <div className="grid flex-1 gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border/60 bg-card/70 p-5 opacity-0 motion-safe:animate-[reveal-up_0.8s_ease-out_forwards] motion-reduce:opacity-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-base font-semibold text-foreground">{step.title}</p>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10">
        <div className="relative overflow-hidden rounded-[36px] border border-border/60 bg-foreground px-8 py-12 text-background">
          <div className="absolute right-0 top-0 h-52 w-52 translate-x-20 -translate-y-16 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-background/70">Ready to ship?</p>
              <h2 className="text-3xl font-semibold tracking-tight text-background sm:text-4xl font-[var(--font-display)]">
                Launch your RealLive workspace and lock in a week of content today.
              </h2>
              <p className="text-base text-background/70">
                Built to deploy on Cloudflare Pages and go live fast with GitHub.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <button className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-background/90">
                Connect GitHub
              </button>
              <button className="rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background transition hover:border-background/60">
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
