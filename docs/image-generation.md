# Image Generation Process

This document explains how OG images, favicons, and other assets are generated for this portfolio using only HTML/CSS and Chrome's headless screenshot feature. No design tools required.

## Prerequisites

- Google Chrome installed
- macOS (for `sips` resizing) or any OS with Chrome

## How It Works

1. Design the image as a regular HTML/CSS page at the exact pixel dimensions needed
2. Use Chrome headless mode to screenshot it as a PNG
3. Optionally resize using `sips` (macOS) or any image tool

## OG Image (1200x630)

The social sharing preview image shown on WhatsApp, LinkedIn, Twitter, Slack, etc.

### Step 1: Create the HTML template

Create a file like `og-image.html` with exact dimensions:

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
    width: 1200px;
    height: 630px;
    background: #0a0a0b;
    display: flex;
    align-items: center;
    justify-content: center;
}
/* Your design here */
</style>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;900&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

### Step 2: Screenshot with Chrome headless

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless \
  --disable-gpu \
  --screenshot="og-image.png" \
  --window-size=1200,630 \
  --hide-scrollbars \
  "file:///path/to/og-image.html"
```

### Step 3: Add to HTML

```html
<meta property="og:image" content="https://your-domain.com/assets/images/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:image" content="https://your-domain.com/assets/images/og-image.png">
```

## Favicon (192px + 32px)

### Step 1: Create HTML at 192x192

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
    width: 192px;
    height: 192px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #e8e8e8;
    border-radius: 38px;
    overflow: hidden;
}
span {
    font-size: 170px;
    font-weight: 700;
    color: #222;
    font-family: 'JetBrains Mono', monospace;
    margin-left: 12px;
}
</style>
</head>
<body><span>P</span></body>
</html>
```

### Step 2: Screenshot at 192px

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless \
  --disable-gpu \
  --screenshot="favicon-192.png" \
  --window-size=192,192 \
  --hide-scrollbars \
  "file:///path/to/favicon.html"
```

### Step 3: Downscale to 32px

Chrome can't render text well at 32px directly, so screenshot at 192px and downscale:

```bash
sips -z 32 32 favicon-192.png --out favicon-32.png
```

### Step 4: Add to HTML

```html
<link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
<link rel="icon" type="image/png" sizes="192x192" href="assets/images/favicon-192.png">
<link rel="apple-touch-icon" href="assets/images/favicon-192.png">
```

## Chrome Headless Flags Reference

| Flag | Purpose |
|---|---|
| `--headless` | Run without visible browser window |
| `--disable-gpu` | Disable GPU acceleration (needed for headless) |
| `--screenshot="file.png"` | Save screenshot to this file |
| `--window-size=W,H` | Set viewport dimensions |
| `--hide-scrollbars` | Remove scrollbars from screenshot |
| `--default-background-color=00000000` | Transparent background (hex RGBA) |

## Transparent Background

To get a transparent PNG background, add:

```bash
--default-background-color=00000000
```

And make sure the HTML body has no background color set (or `background: transparent`).

## Tips

- Use Google Fonts via `<link>` tag in the HTML for consistent typography
- Design at 2x size and downscale for crisper results on retina displays
- Preview the HTML in a browser first before screenshotting
- For SVG favicons, create a matching `.svg` file manually for the best small-size rendering
