# ⌨ KEYDIR.exe — India Mechanical Keyboard Directory

> **Community-maintained directory of Indian mechanical keyboard vendors, builders, and brand stores.**
> No ads. No affiliate links. Just raw data for the keeb community.

[![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-111?style=flat-square&logo=github)](https://shadow269.github.io/keydir.in/)
[![Vendors](https://img.shields.io/badge/Vendors-19-FAFF00?style=flat-square&labelColor=111)](https://shadow269.github.io/keydir.in/vendors.html)
[![Categories](https://img.shields.io/badge/Categories-13-00FF6A?style=flat-square&labelColor=111)](https://shadow269.github.io/Keyboard-Lab/vendors.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

---

## 🗺 What's Inside

| Section | Description |
|---|---|
| [**Vendors**](vendors.html) | 19 verified Indian keyboard vendors, filterable by 13 categories |
| [**DIY Builders**](builders.html) | Custom cable makers, artisan keycap crafters, bespoke build services |
| [**Brand Stores**](brands.html) | Official India storefronts — Keychron, Redragon, TVS, and more |
| [**Marketplace**](marketplace.html) | Amazon India & Flipkart keyboard search links |
| [**Beginner's Guide**](guide.html) | Keyboard modding guide for new enthusiasts |

---

## 📦 Categories

The vendor directory supports filtering across **13 categories**:

`Pre-built` · `Barebone` · `Switches` · `Keycaps` · `Parts/Tools` · `Accessories` · `Mouse` · `Deskpad` · `PC Parts` · `Hall Effect` · `Alice` · `Split` · `Low Profile`

---

## 🛠 Tech Stack

- **HTML / CSS / Vanilla JavaScript** — zero frameworks, zero build steps
- **Data lives in `shared.js`** — edit this file to add/update vendors
- **Hosted on GitHub Pages** — free, static, fast
- **NeoBrutalist design system** — custom CSS, `Space Grotesk` + `JetBrains Mono`

---

## 🤝 How to Contribute

All contributions welcome! Here's how to add or update a vendor:

### 1. Fork the repo

```
https://github.com/SHADOW269/keydir.in/fork
```

### 2. Edit `shared.js`

Vendor entries live in the `VENDORS` array. Each entry looks like:

```js
{
  name: "YourVendor",
  url:  "https://yourvendor.com/",
  cats: ["Pre-built", "Switches", "Keycaps"]   // use exact category IDs from CAT_META
}
```

For builders, edit `DIY_BUILDERS`. For brand stores, edit `BRANDS`.

#### Vendor entry with a warning flag:
```js
{
  name: "SomeVendor",
  url:  "https://somevendor.in/",
  cats: ["Pre-built"],
  warning: true,
  warning_message: "Community-reported concerns about after-sales support."
}
```

### 3. Follow the data guidelines

- ✅ Only list vendors actually operating in India
- ✅ Use `warning: true` for community-reported issues
- ✅ Keep descriptions factual and neutral
- ✅ Verify the URL is live before submitting
- ❌ No affiliate or paid placements — ever

### 4. Submit a Pull Request

Open a PR with a clear title like:
```
feat: add XYZ vendor (Switches, Keycaps)
fix: update ABC vendor URL
warn: flag DEF vendor — community reports of poor support
```

A maintainer will review and merge.

---

## 📁 File Structure

```
keydir.in/
├── index.html          # Home page
├── vendors.html        # Filterable vendor directory
├── builders.html       # DIY builders listing
├── brands.html         # Official brand stores
├── marketplace.html    # Amazon & Flipkart links
├── guide.html          # Beginner's modding guide
├── about.html          # Project info & contributors
├── shared.js           # 🔑 All data lives here — edit this
├── style.css           # NeoBrutalist design system
└── README.md           # This file
```

---

## 🐛 Reporting Issues

Found a dead link? Incorrect info? Know a vendor we're missing?

👉 [Open an issue](https://github.com/SHADOW269/keydir.in/issues/new)

Please include:
- Vendor name
- What's wrong / what should change
- Source or evidence (if flagging a warning)

---

## 📄 License

MIT — free to fork, adapt, and redistribute. Attribution appreciated but not required.

---

<div align="center">

**Made with ❤ by the India keeb community**

[Website](https://shadow269.github.io/keydir.in/) · [Issues](https://github.com/SHADOW269/keydir.in/issues) · [Fork](https://github.com/SHADOW269/keydir.in/fork)

</div>
