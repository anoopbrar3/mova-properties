# MOVA Properties Website
### Built with Claude · Hosted on Vercel · movaproperties.ca

---

## Quick Start (30 minutes, one time only)

### Step 1 — Prerequisites
- Install **Node.js**: https://nodejs.org (download LTS version)
- Install **Claude Code**: `npm install -g @anthropic-ai/claude-code`
- Create a free **GitHub** account: https://github.com
- Create a free **Vercel** account: https://vercel.com (sign up with GitHub)

### Step 2 — Launch Claude Code in this folder
```bash
cd ~/Desktop/mova-properties
claude
```

### Step 3 — Push to GitHub (paste this into Claude Code)
```
Initialize a git repository, create a public GitHub repo called "mova-properties",
commit all files with message "Initial launch", and push to GitHub.
Give me the repo URL when done.
```

### Step 4 — Deploy to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select `mova-properties`
4. Click **Deploy**
5. Your site is live at `mova-properties.vercel.app` ✓

### Step 5 — Connect your domain (movaproperties.ca)
1. In Vercel: Project → Settings → Domains → Add `movaproperties.ca`
2. Copy the 2 DNS records Vercel shows you
3. In Squarespace: Settings → Domains → DNS Settings → paste the records
4. Wait 24 hours → your domain is live ✓

---

## Adding Photos

Drop photos into the `images/` folder, then use Claude Code to connect them.

**Example:**
```
I've added DSC_5309.jpg to the images folder.
Add it as the hero image on navigator.html — replace the placeholder div
with: <img src="images/DSC_5309.jpg" alt="The Navigator — Bear Mountain" class="hero-image">
```

### Photo placement guide
| File | Where it goes |
|------|--------------|
| DSC_5309.jpg | navigator.html → hero full-width |
| DSC_5178.jpg | navigator.html → kitchen section |
| DSC_5190.jpg | navigator.html → great room left panel |
| DSC_5210.jpg | navigator.html → great room right panel |
| DSC_5405.jpg | navigator.html → kitchen alt angle |
| DSC_5554.jpg | navigator.html → media room |
| Navigator_Marketing_Photo.jpg | index.html → hero right panel |
| Navigators_Rise_-_Real_Estate_Photos-74.jpg | navigator.html → ensuite tub |
| Navigators_Rise_-_Real_Estate_Photos-78.jpg | navigator.html → shower |
| Navigators_Rise_-_Real_Estate_Photos-64.jpg | navigator.html → powder room |

---

## Everyday Claude Code Prompts

### Update content
```
Update The Hockley page: change the draw status from #3 to #4.
Also update the construction timeline — move "Concrete Foundation" to June 2026.
```

### Add a new project page
```
Create a new project page called goldstream.html for The Goldstream project.
Copy the structure from navigator.html but adapt the content:
- 78 units, Langford BC
- In development, no photos yet (use placeholders)
- CMHC MLI Select financing
- $45M value
Match the exact visual style.
```

### Fix mobile layout
```
The navigation menu doesn't work properly on mobile.
Fix it so the links collapse into a hamburger menu on screens under 768px wide.
```

### Add a new section
```
Add a "Process" section to the Vision page between the philosophy section and the team section.
It should have 5 steps: Site Selection, Financing, Design, Construction, Operations.
Each step gets a number, title, and 2-sentence description.
Use the same visual style as the pillars section on the homepage.
```

### Change a colour or font
```
Change the brass accent colour from #C8A96E to #D4B870 throughout the entire site.
Update the CSS variable --brass in style.css and make sure it propagates everywhere.
```

### Add the investor portal page
```
Build a full investors.html page. It should include:
1. A hero section explaining MOVA's investment thesis
2. A draw tracker showing The Hockley at Draw #3 of 12
3. A project metrics table (Arncote $15M, Hockley $40M, Goldstream $45M)
4. A locked "Investor Documents" section with a contact form to request access
5. Footer and nav matching the other pages
Use the same design system as index.html.
```

---

## File Structure
```
mova-properties/
├── index.html          ← Homepage
├── navigator.html      ← The Navigator project page
├── hockley.html        ← (create with Claude Code)
├── goldstream.html     ← (create with Claude Code)
├── arncote.html        ← (create with Claude Code)
├── investors.html      ← (create with Claude Code)
├── contact.html        ← (create with Claude Code)
├── projects.html       ← (create with Claude Code)
├── vision.html         ← (create with Claude Code)
├── css/
│   └── style.css       ← All styles — edit this for design changes
├── js/
│   └── main.js         ← Navigation, scroll effects
├── images/             ← Drop all photos here
│   └── (your photos)
└── README.md           ← This file
```

---

## Colours & Fonts (for reference)
| Variable | Value | Used for |
|----------|-------|---------|
| `--linen`    | `#F5F0E8` | Page background |
| `--linen-2`  | `#EDE6D9` | Section backgrounds |
| `--linen-3`  | `#D4C9B4` | Borders, dividers |
| `--charcoal` | `#2C2820` | Dark sections, text |
| `--brass`    | `#C8A96E` | Accent, CTAs, eyebrows |
| `--stone`    | `#9A8F7E` | Muted labels |
| `--serif`    | Cormorant Garamond | Headlines, project names |
| `--sans`     | Inter | Body text, navigation |

---

## Deployment

Every time you save a file and Claude Code commits to GitHub, **Vercel auto-deploys in ~30 seconds**.
You never need to manually deploy.

To check your deploy status: https://vercel.com/dashboard

---

*Built by MOVA Properties with Claude · Last updated May 2026*
