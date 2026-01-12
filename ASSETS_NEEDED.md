# Kinetic AI Website - Assets Still Needed

## Images & Logos to Add

### 1. ElevenLabs Grants Logo
- **Location**: "Backed by" section (near top of page)
- **Source**: https://elevenlabs.io/brand
- **Format**: PNG preferred
- **Notes**: Display the official "ElevenLabs Grants" logo
- **Current status**: Placeholder text showing

### 2. How It Works - Process Diagrams (4 images)

#### Step 01: Connect
- **Concept**: Initial network scan visualization
- **Suggestion**: Network topology diagram, nodes connecting

#### Step 02: Find
- **Concept**: AI reconnaissance process
- **Suggestion**: AI agent scanning multiple attack surfaces, vulnerability detection

#### Step 03: Collaborate
- **Concept**: Tidbit feeding & collaboration
- **Suggestion**: Human-AI interaction, question/answer flow, context sharing

#### Step 04: Monitor
- **Concept**: Monitoring mode dashboard
- **Suggestion**: 24/7 surveillance dashboard, real-time alerts, threat detection

### 3. Scrolling Process Animation
- **Location**: Below the 4-step process cards
- **Concept**: Shows full workflow from tidbit request → response → continued scan → monitoring mode
- **Format**: Could be animated SVG or sequence of images
- **Size**: Full width of content area (approx 1200px wide, 256px tall)

### 4. Night Landscape Background
- **Location**: Final CTA section at bottom of page
- **Concept**: Similar to Veria Labs footer background, but nighttime scene
- **Suggestions**:
  - Dark mountain landscape at night
  - Starry sky over landscape
  - City skyline at night
  - Dark forest/wilderness scene
- **Format**: High-res JPG or WebP
- **Dimensions**: At least 1920x800px
- **Style**: Moody, professional, matches black & white aesthetic

## Company Website Links
Already added and functional:
- Locus → https://locus.sh
- FastShot → https://fastshot.ai
- MOSS → https://getmoss.com
- Velvet → https://velvet.app
- Metorial → https://metorial.com
- Exonic → https://exonic.ai
- SkillSync → https://skillsync.app
- 21st.ai → https://21st.ai

## Image Search Resources

For security/network diagrams:
- Unsplash (https://unsplash.com) - search "network security", "cybersecurity diagram"
- Pexels (https://pexels.com) - free stock photos
- AWS Security Blog diagrams (https://aws.amazon.com/blogs/security/)

For night landscape:
- Unsplash - search "night landscape", "dark mountains", "starry night"
- Pexels - "night sky landscape"

## Implementation Notes

Once you have the images:

1. Place images in `/public/images/` directory
2. Update references in `app/page.tsx`:
   - Replace `[Add diagram: ...]` placeholders with `<Image>` components
   - Replace `[Add night landscape image...]` with actual background image
   - Replace ElevenLabs logo placeholder with actual logo

Example code for adding images:
```tsx
import Image from 'next/image';

<Image
  src="/images/your-image.png"
  alt="Description"
  width={400}
  height={300}
  className="..."
/>
```

For background images:
```tsx
<div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: 'url(/images/night-landscape.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
/>
```
