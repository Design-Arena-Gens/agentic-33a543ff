import { NextResponse } from 'next/server'

// Insurance keywords database for USA audience
const insuranceTopics = [
  {
    primary: 'cheapest car insurance',
    secondary: ['affordable auto insurance', 'low cost car insurance', 'budget car insurance', 'save money car insurance', 'car insurance deals USA'],
    hook: "Still paying $200+ for car insurance? You're getting ripped off.",
    problem: 'Most Americans overpay for car insurance because they do not know these simple tricks.',
  },
  {
    primary: 'how does health insurance work',
    secondary: ['health insurance explained', 'understanding health insurance', 'health insurance basics', 'beginner health insurance', 'health insurance USA'],
    hook: 'Health insurance confusing? This 5-minute guide makes it crystal clear.',
    problem: 'Health insurance feels like a maze of deductibles, copays, and premiums that nobody explains.',
  },
  {
    primary: 'life insurance for beginners',
    secondary: ['life insurance explained', 'do I need life insurance', 'life insurance basics', 'life insurance USA', 'term vs whole life'],
    hook: 'Life insurance sounds scary. But it is actually super simple.',
    problem: 'Most people avoid life insurance because they think it is complicated or expensive.',
  },
  {
    primary: 'insurance for low income families',
    secondary: ['affordable insurance', 'low income health insurance', 'medicaid explained', 'government insurance help', 'free insurance USA'],
    hook: 'Low income? Here is how to get insurance for almost free.',
    problem: 'Many families do not know about affordable insurance programs designed specifically for them.',
  },
  {
    primary: 'what is a deductible in insurance',
    secondary: ['insurance deductible explained', 'how deductibles work', 'understanding deductibles', 'insurance terms explained', 'deductible vs premium'],
    hook: 'Deductibles explained in 60 seconds. No confusing jargon.',
    problem: 'Most people sign up for insurance without understanding what a deductible is or how it affects their bills.',
  },
]

function selectTopic() {
  return insuranceTopics[Math.floor(Math.random() * insuranceTopics.length)]
}

function generateScript(topic: typeof insuranceTopics[0]) {
  const keyword = topic.primary

  return `[HOOK - 0:00-0:03]
${topic.hook}

[INTRO - 0:03-0:20]
Hey, it is Insurance Decoded. ${topic.problem} But today, I am breaking down ${keyword} in the simplest way possible—no jargon, no confusion. By the end of this video, you will know exactly what to do. Let us go.

[SECTION 1: THE BASICS - 0:20-1:30]
So, what is ${keyword}? Let me explain.

[Simple definition in 2-3 sentences - use American examples like dollar amounts, state references]

For example, in states like Texas or Florida, ${keyword} can look very different from California or New York. It all depends on a few key factors.

[SECTION 2: WHY IT MATTERS - 1:30-2:45]
Now, why should you care about ${keyword}?

Because understanding ${keyword} can save you hundreds—even thousands—of dollars every year. A lot of people skip this step and end up paying way more than they should.

[Give 2-3 practical reasons why this matters to everyday Americans]

[SECTION 3: HOW IT WORKS - 2:45-4:30]
Let me walk you through how ${keyword} actually works.

[Step-by-step breakdown in plain English]
[Use real-world USA scenarios: families, workers, students, immigrants]
[Mention typical costs in dollars, timelines, application processes]

This is the part that trips people up, but once you get it, it is super straightforward.

[SECTION 4: PRO TIPS - 4:30-5:30]
Here are my top 3 tips for ${keyword}:

Tip #1: [Practical action they can take today]
Tip #2: [Common mistake to avoid]
Tip #3: [Money-saving hack specific to USA]

These tips alone can save you serious money.

[OUTRO - 5:30-6:00]
And that is ${keyword} explained. Super simple, right?

If this helped you, hit that subscribe button—we post new insurance tips every week to help you save money and avoid getting ripped off.

Drop a comment if you have questions, and I will answer them personally.

See you in the next one. Peace.

[END SCREEN: Subscribe button + 2 recommended videos]`
}

function generateVideoPrompt(topic: typeof insuranceTopics[0]) {
  return `Create a professional, engaging YouTube video for "Insurance Decoded" channel:

VIDEO STYLE:
- Clean, modern motion graphics style
- Warm, trustworthy color palette (blues, whites, orange accents)
- Fast-paced editing with smooth transitions
- Text animations for key points
- Stock footage of diverse Americans (families, workers, young adults)

SCENES:
1. Hook (0-3s): Bold text animation + attention-grabbing visual
2. Intro: Host avatar or voiceover with channel branding
3. Main Content: Mix of:
   - Animated infographics explaining concepts
   - Split screens comparing options
   - On-screen text highlighting key terms
   - Real-life scenario animations (car, hospital, family scenes)
4. Tips Section: Numbered list animations (1, 2, 3)
5. Outro: Call-to-action graphics (subscribe button, like animation)

ON-SCREEN TEXT:
- Display keyword "${topic.primary}" prominently
- Highlight dollar amounts in bold
- Show key terms in simple language
- Use American spelling throughout

VOICEOVER:
- Male or female American English accent
- Friendly, conversational tone
- Speak at moderate pace (clear for ESL learners)
- Emphasize money-saving tips
- Sound trustworthy, not salesy

BACKGROUND MUSIC:
- Upbeat but not overwhelming
- Corporate/inspirational style
- Medium energy
- Fade during voiceover

END SCREEN:
- Subscribe button animation (left)
- 2 related video thumbnails (right)
- Social media links (bottom)

DURATION: 5:30 - 6:30 minutes
ASPECT RATIO: 16:9 (YouTube standard)
RESOLUTION: 1080p minimum`
}

function generateThumbnailPrompt(topic: typeof insuranceTopics[0]) {
  const thumbnailVariants = [
    {
      text: 'SAVE $$$',
      emotion: 'excited person pointing',
      colors: 'bright yellow background, green accents',
      style: 'Bold white text with black outline, money symbols'
    },
    {
      text: 'TOO EASY',
      emotion: 'person with satisfied smile',
      colors: 'blue gradient background',
      style: 'Large bold text, checkmark icon'
    },
    {
      text: 'STOP PAYING',
      emotion: 'shocked face',
      colors: 'red and white contrast',
      style: 'Warning style, hand gesture'
    },
    {
      text: 'WATCH THIS',
      emotion: 'person making eye contact',
      colors: 'orange and dark blue',
      style: 'Arrow pointing to text'
    }
  ]

  const variant = thumbnailVariants[Math.floor(Math.random() * thumbnailVariants.length)]

  return `HIGH-CTR YOUTUBE THUMBNAIL for "${topic.primary}":

TEXT ON THUMBNAIL (2-4 words max):
"${variant.text}"

VISUAL ELEMENTS:
- ${variant.emotion}
- ${variant.colors}
- ${variant.style}

LAYOUT:
- Text: 40% of thumbnail (top or side)
- Face/Person: 40% of thumbnail (if applicable)
- Icon/Symbol: 20% of thumbnail

DESIGN REQUIREMENTS:
- BOLD fonts (readable on mobile)
- High contrast (passes visibility test)
- No clutter - clean and focused
- Emotion: curiosity/urgency/value
- American context (diverse representation)

STYLE:
- Professional but attention-grabbing
- Not clickbait - trustworthy feel
- Consistent with "Insurance Decoded" branding

COLOR PSYCHOLOGY:
- Primary: ${variant.colors.split(',')[0]} (attention)
- Accent: ${variant.colors.split(',')[1] || 'white'} (contrast)

MOBILE TEST: Text must be readable at 320px width

INSPIRATION: Educational finance channels (Graham Stephan, Andrei Jikh style but insurance-focused)`
}

function generateSEO(topic: typeof insuranceTopics[0]) {
  const title = `${topic.primary.charAt(0).toUpperCase() + topic.primary.slice(1)} - Explained in 5 Minutes`

  const description = `${topic.problem} Learn about ${topic.primary} with this simple guide. ${topic.secondary.slice(0, 2).join(', ')} and more explained in plain English. Perfect for beginners!

⏱️ Timestamps:
0:00 - Hook
0:03 - Why ${topic.primary} matters
0:20 - The basics explained
1:30 - How it works
4:30 - Pro tips to save money
5:30 - Recap

💰 Get the best ${topic.primary} deals and save hundreds every year. This video covers everything you need to know about ${topic.primary} in the USA.

Subscribe to Insurance Decoded for more simple insurance guides!

#${topic.primary.replace(/ /g, '')} #insurance #moneysavingtips`

  const tags = [
    topic.primary,
    ...topic.secondary,
    'insurance explained',
    'insurance USA',
    'insurance for beginners',
    'save money insurance',
    'insurance tips',
    'insurance decoded',
    'affordable insurance',
    'insurance guide',
    'insurance 101'
  ]

  const hashtags = [
    '#' + topic.primary.replace(/ /g, ''),
    '#insurance',
    '#moneytips',
    '#savemoney',
    '#financetips',
    '#insurancetips',
    '#USAinsurance'
  ]

  const chapters = [
    '0:00 - Hook',
    '0:03 - Introduction',
    '0:20 - What is ' + topic.primary + '?',
    '1:30 - Why it matters',
    '2:45 - How it works',
    '4:30 - Pro tips',
    '5:30 - Recap & CTA'
  ]

  return { title, description, tags, hashtags, chapters }
}

export async function POST() {
  try {
    // Step 1: Topic & Keyword Research
    const topic = selectTopic()

    // Step 2: Script Creation
    const script = generateScript(topic)

    // Step 3: AI Video Prompt
    const videoPrompt = generateVideoPrompt(topic)

    // Step 4: Thumbnail Prompt
    const thumbnailPrompt = generateThumbnailPrompt(topic)

    // Step 5: YouTube SEO
    const seo = generateSEO(topic)

    // Step 6: Package everything
    const videoData = {
      primaryKeyword: topic.primary,
      secondaryKeywords: topic.secondary,
      script,
      videoPrompt,
      thumbnailPrompt,
      title: seo.title,
      description: seo.description,
      tags: seo.tags,
      hashtags: seo.hashtags,
      chapters: seo.chapters,
    }

    return NextResponse.json(videoData)
  } catch (error) {
    console.error('Error generating video:', error)
    return NextResponse.json(
      { error: 'Failed to generate video content' },
      { status: 500 }
    )
  }
}
