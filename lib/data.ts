// Habits Habibti — seed content.
//
// The product's value is the TRANSLATION LAYER: each elite routine ships as
// Principle -> Pro version -> Your version (a 10-30 min scaled-down constant).
// Everything here is "inspired by publicly reported habits" — never a claim
// that a real person endorses or follows exactly this.

export type DomainId =
  | "athletic"
  | "creative"
  | "builder"
  | "beauty"
  | "spiritual";

export interface Constant {
  id: string;
  /** Short, actionable name of the scaled-down daily constant. */
  title: string;
  /** The timeless lesson behind the elite routine. */
  principle: string;
  /** What the elite figure reportedly does. */
  proVersion: string;
  /** The version scaled to a normal life (the check-off target). */
  yourVersion: string;
  /** Estimated minutes for the "your version". */
  minutes: number;
}

export interface Exemplar {
  id: string;
  name: string;
  domain: DomainId;
  /** What they're known for, one line. */
  tagline: string;
  /** A sentence or two of context. */
  blurb: string;
  /** Legal/accuracy framing — always shown. */
  sourceNote: string;
  constants: Constant[];
}

export interface Archetype {
  id: DomainId;
  name: string;
  emoji: string;
  /** The identity a user is chasing. */
  identity: string;
  description: string;
  /** Accent color (hex). */
  accent: string;
}

export const ARCHETYPES: Archetype[] = [
  {
    id: "athletic",
    name: "Athletic",
    emoji: "🏋️",
    identity: "I am someone who trains and recovers like a pro.",
    description: "Physical mastery — conditioning, fuel, and recovery held constant.",
    accent: "#ff6b4a",
  },
  {
    id: "creative",
    name: "Creative",
    emoji: "🎨",
    identity: "I am someone who shows up for the craft every day.",
    description: "The maker's discipline — observation, practice, and finishing.",
    accent: "#a78bfa",
  },
  {
    id: "builder",
    name: "Builder",
    emoji: "🛠️",
    identity: "I am someone who builds with focus and first principles.",
    description: "Intellect and output — deep work, learning, and shipping.",
    accent: "#38bdf8",
  },
  {
    id: "beauty",
    name: "Beauty & Self-Care",
    emoji: "✨",
    identity: "I am someone who takes care of how I look and feel.",
    description: "Skin, grooming, and self-care done with quiet consistency.",
    accent: "#f472b6",
  },
  {
    id: "spiritual",
    name: "Spiritual & Mental",
    emoji: "🧘",
    identity: "I am someone who tends to my mind every day.",
    description: "Stillness and reflection — presence, gratitude, and calm.",
    accent: "#34d399",
  },
];

export const EXEMPLARS: Exemplar[] = [
  // ---------------------------------------------------------------- ATHLETIC
  {
    id: "mayweather",
    name: "Floyd Mayweather",
    domain: "athletic",
    tagline: "Undefeated discipline",
    blurb:
      "Reported for relentless, oddly-timed training and an obsessive focus on conditioning over his entire career.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "may-cardio",
        title: "Daily roadwork",
        principle: "Non-negotiable daily conditioning beats sporadic heroics.",
        proVersion: "Runs several miles at unusual hours, sometimes after midnight.",
        yourVersion: "20-minute brisk walk or jog — same slot every day, rain or shine.",
        minutes: 20,
      },
      {
        id: "may-recover",
        title: "Protect recovery",
        principle: "Work is only as good as the recovery that absorbs it.",
        proVersion: "Long sleep blocks and recovery treatment around hard sessions.",
        yourVersion: "Lights out at a fixed time; no screens for the last 15 minutes.",
        minutes: 15,
      },
      {
        id: "may-mobility",
        title: "Move & stretch",
        principle: "Stay loose to stay durable; small maintenance prevents big breaks.",
        proVersion: "Constant shadow-work, bag work, and mobility throughout the day.",
        yourVersion: "10 minutes of mobility or stretching to start the day.",
        minutes: 10,
      },
    ],
  },
  {
    id: "ronaldo",
    name: "Cristiano Ronaldo",
    domain: "athletic",
    tagline: "Longevity by design",
    blurb:
      "Reported for an extreme focus on sleep, nutrition, and recovery that has extended an elite career well past the norm.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "ron-sleep",
        title: "Sleep on a schedule",
        principle: "Sleep is the highest-leverage performance input there is.",
        proVersion: "Reportedly sleeps in several short, scheduled blocks.",
        yourVersion: "Fixed wake time 7 days a week — even weekends.",
        minutes: 5,
      },
      {
        id: "ron-fuel",
        title: "Fuel clean once",
        principle: "Consistency in fuel beats occasional perfect meals.",
        proVersion: "Multiple precise, lean meals planned around training.",
        yourVersion: "Make one genuinely clean, protein-forward meal today.",
        minutes: 20,
      },
      {
        id: "ron-hydrate",
        title: "Hydrate early",
        principle: "Small daily basics, held forever, compound into longevity.",
        proVersion: "Strict hydration and no alcohol across the season.",
        yourVersion: "Drink a full glass of water before your first coffee.",
        minutes: 2,
      },
    ],
  },
  {
    id: "rock",
    name: "Dwayne Johnson",
    domain: "athletic",
    tagline: "The early grind",
    blurb:
      "Reported for pre-dawn fasted cardio and a famously consistent training schedule no matter the filming or travel chaos.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "rock-rise",
        title: "Early rise",
        principle: "Win the morning before the world can negotiate with you.",
        proVersion: "Wakes around 4am for fasted cardio before anything else.",
        yourVersion: "Wake 30 minutes earlier and move your body first.",
        minutes: 30,
      },
      {
        id: "rock-cardio",
        title: "Fasted movement",
        principle: "Start the day with effort to set the tone for it.",
        proVersion: "30-50 minutes of cardio before breakfast.",
        yourVersion: "15 minutes of any cardio before you eat.",
        minutes: 15,
      },
      {
        id: "rock-log",
        title: "Log the work",
        principle: "What gets tracked gets repeated.",
        proVersion: "Meticulous tracking of training and meals.",
        yourVersion: "Write one line about today's training.",
        minutes: 3,
      },
    ],
  },

  // ---------------------------------------------------------------- CREATIVE
  {
    id: "davinci",
    name: "Leonardo da Vinci",
    domain: "creative",
    tagline: "Relentless observer",
    blurb:
      "Filled thousands of notebook pages with observations, questions, and sketches — curiosity practiced as a daily discipline.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "dv-observe",
        title: "Observe one thing",
        principle: "Genius starts as deliberate, daily observation.",
        proVersion: "Studied light, anatomy, and water with obsessive attention.",
        yourVersion: "Sketch or describe one ordinary object in detail.",
        minutes: 10,
      },
      {
        id: "dv-questions",
        title: "Write your questions",
        principle: "Curiosity is a muscle — list what you wonder about.",
        proVersion: "Kept running 'to-learn' lists in his notebooks.",
        yourVersion: "Write down 3 questions you're curious about today.",
        minutes: 5,
      },
      {
        id: "dv-notebook",
        title: "Keep the notebook",
        principle: "Capture everything; let ideas cross-pollinate.",
        proVersion: "Carried a notebook at all times for any stray idea.",
        yourVersion: "Jot one idea or observation in a notebook.",
        minutes: 3,
      },
    ],
  },
  {
    id: "angelou",
    name: "Maya Angelou",
    domain: "creative",
    tagline: "Showing up to write",
    blurb:
      "Reported for a strict daily writing ritual — a dedicated room, a set time, and the discipline to begin whether inspired or not.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "ang-ritual",
        title: "Same time, same seat",
        principle: "A fixed ritual removes the daily debate about starting.",
        proVersion: "Wrote in a rented room from early morning, every day.",
        yourVersion: "Sit in the same spot at the same time to create.",
        minutes: 5,
      },
      {
        id: "ang-pages",
        title: "Make something rough",
        principle: "Volume first; permission to be bad is the engine.",
        proVersion: "Produced pages daily, editing ruthlessly later.",
        yourVersion: "Create one rough thing — 200 words, a sketch, a verse.",
        minutes: 20,
      },
      {
        id: "ang-readback",
        title: "Read it aloud",
        principle: "The ear catches what the eye forgives.",
        proVersion: "Read her work aloud to test its rhythm.",
        yourVersion: "Read today's work aloud once.",
        minutes: 5,
      },
    ],
  },
  {
    id: "tharp",
    name: "Twyla Tharp",
    domain: "creative",
    tagline: "The creative habit",
    blurb:
      "The choreographer credits her output to a single non-negotiable morning ritual that makes the rest of the work automatic.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "th-trigger",
        title: "One starting ritual",
        principle: "The ritual is the habit — the work follows the trigger.",
        proVersion: "Begins each day by hailing a cab to the gym, no decision needed.",
        yourVersion: "Do one tiny fixed action that signals 'work starts now'.",
        minutes: 2,
      },
      {
        id: "th-box",
        title: "Feed the box",
        principle: "Collect raw material before you need it.",
        proVersion: "Keeps a box of notes and references for every project.",
        yourVersion: "Add one reference or clipping to a project folder.",
        minutes: 5,
      },
      {
        id: "th-move",
        title: "Move to think",
        principle: "The body unlocks the creative mind.",
        proVersion: "Treats physical practice as inseparable from creative work.",
        yourVersion: "Stretch or move for 10 minutes before creating.",
        minutes: 10,
      },
    ],
  },

  // ----------------------------------------------------------------- BUILDER
  {
    id: "franklin",
    name: "Benjamin Franklin",
    domain: "builder",
    tagline: "The original habit tracker",
    blurb:
      "Ran his days on a fixed schedule and literally tracked his virtues on a daily chart — the spiritual ancestor of this app.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "fr-morning",
        title: "Ask the morning question",
        principle: "Intent set in the morning steers the whole day.",
        proVersion: "Asked each morning: 'What good shall I do this day?'",
        yourVersion: "Write your one intention for today.",
        minutes: 3,
      },
      {
        id: "fr-deep",
        title: "One deep block",
        principle: "Scheduled focus is how real work gets done.",
        proVersion: "Blocked his day rigidly between work, meals, and study.",
        yourVersion: "Protect one 25-minute block of undistracted work.",
        minutes: 25,
      },
      {
        id: "fr-review",
        title: "Ask the evening question",
        principle: "A daily review turns experience into improvement.",
        proVersion: "Asked each night: 'What good have I done today?'",
        yourVersion: "Write one line on what went well today.",
        minutes: 3,
      },
    ],
  },
  {
    id: "musk",
    name: "Elon Musk",
    domain: "builder",
    tagline: "First principles & time-boxing",
    blurb:
      "Reported for dividing his day into tight time blocks and reasoning from first principles rather than analogy.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "mu-block",
        title: "Time-box the day",
        principle: "Assigning time to tasks beats a vague to-do list.",
        proVersion: "Reportedly schedules the day in 5-minute blocks.",
        yourVersion: "Plan your top 3 tasks into specific time slots.",
        minutes: 5,
      },
      {
        id: "mu-firstprinc",
        title: "Question one assumption",
        principle: "Reason from what's true, not from what's done.",
        proVersion: "Breaks problems down to physics-level fundamentals.",
        yourVersion: "Pick one task and ask: why is it done this way?",
        minutes: 10,
      },
      {
        id: "mu-ship",
        title: "Ship something small",
        principle: "Bias toward output; iterate in the real world.",
        proVersion: "Pushes rapid iteration and shipping over polish.",
        yourVersion: "Finish and send one small thing today.",
        minutes: 20,
      },
    ],
  },
  {
    id: "einstein",
    name: "Albert Einstein",
    domain: "builder",
    tagline: "Walks & thought experiments",
    blurb:
      "Credited daily walks and protected, unhurried thinking time for his most important breakthroughs.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "ein-walk",
        title: "Thinking walk",
        principle: "Movement loosens the mind's hardest knots.",
        proVersion: "Took long daily walks to think through problems.",
        yourVersion: "Take a 15-minute walk with no phone, just thinking.",
        minutes: 15,
      },
      {
        id: "ein-experiment",
        title: "Run a thought experiment",
        principle: "Imagination, structured, is a tool — not a distraction.",
        proVersion: "Reasoned through vivid imagined scenarios.",
        yourVersion: "Spend 10 minutes imagining how to solve one problem.",
        minutes: 10,
      },
      {
        id: "ein-protect",
        title: "Protect quiet focus",
        principle: "Deep thought needs uninterrupted, unhurried space.",
        proVersion: "Guarded long stretches of solitude for thinking.",
        yourVersion: "Take 10 minutes of silence — no inputs at all.",
        minutes: 10,
      },
    ],
  },

  // ------------------------------------------------------------------ BEAUTY
  {
    id: "kardashian",
    name: "Kim Kardashian",
    domain: "beauty",
    tagline: "Skincare discipline",
    blurb:
      "Reported for a meticulous, consistent skincare routine and strict sun protection above all the trends.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "kk-spf",
        title: "SPF every morning",
        principle: "The boring basics protect more than any luxury product.",
        proVersion: "Daily sun protection treated as non-negotiable.",
        yourVersion: "Apply SPF to your face every morning.",
        minutes: 2,
      },
      {
        id: "kk-cleanse",
        title: "Cleanse before bed",
        principle: "Consistency at night does the real work.",
        proVersion: "A full multi-step cleanse and treatment routine nightly.",
        yourVersion: "Wash your face and moisturize before sleep.",
        minutes: 5,
      },
      {
        id: "kk-water",
        title: "Hydrate the skin",
        principle: "Glow is mostly hydration and consistency.",
        proVersion: "Strict hydration and treatments throughout the day.",
        yourVersion: "Drink water on waking; moisturize after cleansing.",
        minutes: 3,
      },
    ],
  },
  {
    id: "kerr",
    name: "Miranda Kerr",
    domain: "beauty",
    tagline: "The morning ritual",
    blurb:
      "Reported for a calm, deliberate morning self-care ritual centered on hydration and gentle routine.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "mk-warmwater",
        title: "Warm water first",
        principle: "Begin the day by caring for the body, gently.",
        proVersion: "Starts mornings with warm water and lemon.",
        yourVersion: "Drink a glass of warm water before anything else.",
        minutes: 2,
      },
      {
        id: "mk-ritual",
        title: "Unhurried self-care",
        principle: "Self-care is a calm ritual, not a rushed chore.",
        proVersion: "A slow, deliberate skincare and wellness routine.",
        yourVersion: "Do your skincare slowly, with full attention.",
        minutes: 5,
      },
      {
        id: "mk-gratitude",
        title: "Glow from within",
        principle: "Inner calm shows on the outside.",
        proVersion: "Pairs beauty routine with meditation and gratitude.",
        yourVersion: "Name one thing you're grateful for while you get ready.",
        minutes: 3,
      },
    ],
  },
  {
    id: "aniston",
    name: "Jennifer Aniston",
    domain: "beauty",
    tagline: "Wellness as upkeep",
    blurb:
      "Reported for treating hydration, movement, and skincare as steady daily upkeep rather than occasional fixes.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "ja-hydrate",
        title: "Hydrate relentlessly",
        principle: "The simplest habit, done daily, outperforms the fancy one.",
        proVersion: "Known for steady hydration throughout the day.",
        yourVersion: "Finish a full bottle of water before noon.",
        minutes: 2,
      },
      {
        id: "ja-move",
        title: "Move every day",
        principle: "Daily movement keeps body and skin alive.",
        proVersion: "A consistent daily movement and workout practice.",
        yourVersion: "Move your body for 20 minutes, any way you like.",
        minutes: 20,
      },
      {
        id: "ja-meditate",
        title: "Settle the mind",
        principle: "Stress shows on the face; calm is skincare.",
        proVersion: "Starts the day with meditation before the rush.",
        yourVersion: "Sit quietly and breathe for 5 minutes.",
        minutes: 5,
      },
    ],
  },

  // --------------------------------------------------------------- SPIRITUAL
  {
    id: "aurelius",
    name: "Marcus Aurelius",
    domain: "spiritual",
    tagline: "The stoic journal",
    blurb:
      "A Roman emperor whose private journal, Meditations, became a foundational text on reflection and self-command.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "ma-premed",
        title: "Prepare for the day",
        principle: "Expect friction and you disarm it.",
        proVersion: "Began the day reminding himself he'd meet difficult people.",
        yourVersion: "Name one challenge today and how you'll meet it calmly.",
        minutes: 5,
      },
      {
        id: "ma-journal",
        title: "Write to yourself",
        principle: "Journaling turns reaction into reflection.",
        proVersion: "Wrote private reflections to steady his own mind.",
        yourVersion: "Write 3 lines to yourself about today.",
        minutes: 5,
      },
      {
        id: "ma-control",
        title: "Sort what you control",
        principle: "Peace comes from acting on what's yours alone.",
        proVersion: "Constantly separated what was in his power from what wasn't.",
        yourVersion: "Name one worry and decide: in my control or not?",
        minutes: 3,
      },
    ],
  },
  {
    id: "tnh",
    name: "Thich Nhat Hanh",
    domain: "spiritual",
    tagline: "Mindful presence",
    blurb:
      "A Zen teacher who taught that ordinary moments — breathing, walking, washing dishes — are the whole practice.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "tnh-breath",
        title: "Conscious breaths",
        principle: "The breath is the anchor to the present moment.",
        proVersion: "Returned to mindful breathing throughout the day.",
        yourVersion: "Take 10 slow, fully-attended breaths.",
        minutes: 3,
      },
      {
        id: "tnh-walk",
        title: "Walk mindfully",
        principle: "Arrive in each step instead of rushing to the next.",
        proVersion: "Practiced slow, deliberate walking meditation.",
        yourVersion: "Walk for 5 minutes noticing each step.",
        minutes: 5,
      },
      {
        id: "tnh-task",
        title: "One mindful task",
        principle: "Any chore becomes practice when done with full attention.",
        proVersion: "Treated washing dishes as meditation itself.",
        yourVersion: "Do one routine task slowly and fully present.",
        minutes: 5,
      },
    ],
  },
  {
    id: "dalailama",
    name: "The Dalai Lama",
    domain: "spiritual",
    tagline: "Compassion at dawn",
    blurb:
      "Reported for rising very early for hours of meditation and beginning each day by setting a compassionate intention.",
    sourceNote: "Inspired by publicly reported habits. Not an endorsement.",
    constants: [
      {
        id: "dl-rise",
        title: "Rise with intention",
        principle: "The first thought of the day colors all the rest.",
        proVersion: "Wakes around 3am for meditation and prayer.",
        yourVersion: "On waking, set one kind intention before reaching for your phone.",
        minutes: 2,
      },
      {
        id: "dl-meditate",
        title: "Sit in stillness",
        principle: "A trained mind is the source of lasting calm.",
        proVersion: "Hours of daily analytical and calming meditation.",
        yourVersion: "Meditate for 10 minutes.",
        minutes: 10,
      },
      {
        id: "dl-compassion",
        title: "Wish others well",
        principle: "Compassion practiced daily reshapes the mind.",
        proVersion: "Centers his practice on compassion for all beings.",
        yourVersion: "Silently wish one person well today.",
        minutes: 2,
      },
    ],
  },
];

// ---- selectors ------------------------------------------------------------

export function exemplarsByDomain(domain: DomainId): Exemplar[] {
  return EXEMPLARS.filter((e) => e.domain === domain);
}

export function getExemplar(id: string | null): Exemplar | undefined {
  if (!id) return undefined;
  return EXEMPLARS.find((e) => e.id === id);
}

export function getArchetype(id: DomainId): Archetype {
  return ARCHETYPES.find((a) => a.id === id)!;
}
