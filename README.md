# TENG Theme for Typlog

A minimal blog theme inspired by Bear Blog aesthetic.

## Installation

### Step 1: Fork this repository

Click the **Fork** button on the top right of this page.

### Step 2: Connect to Typlog

1. Go to your Typlog dashboard → **Settings** → **Theme**
2. Click **"Use GitHub Theme"**
3. Connect your GitHub account
4. Select this repository: `your-username/typlog-teng-theme`
5. Click **"Save"**

### Step 3: Configure Site

Go to **Settings** → **General**:

| Setting | Value |
|---------|-------|
| Site Name | `TENG` |
| Description | `The universe reveals its secrets to those who dare to follow their hearts.` |

### Step 4: Set Navigation

Go to **Settings** → **Navigation**:

```
Home     → /
Article  → /archive/
Moments  → /moments/
Me       → /about/
```

## Theme Features

- **Fonts**: Bungee Shade (logo) + Bree Serif (body)
- **Colors**: Black & white, dark mode support
- **Pages**: Home, Article, Moments, About
- **Responsive**: Mobile-friendly

## File Structure

```
.
├── theme.json       # Theme metadata
├── index.j2         # Homepage
├── post.j2          # Single post
├── archive.j2       # Archive page
├── moments.j2       # Moments page
└── style.css        # Stylesheet
```

## Customization

Edit `style.css` to change colors:

```css
:root {
  --background-color: #fff;    /* Change background */
  --text-color: #000;          /* Change text color */
}
```

## License

MIT