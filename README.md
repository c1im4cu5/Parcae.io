# Parcae.io – Your Gateway to Comprehensive News and AI Analysis  

**🚨 Operational as of April 6, 2025**  
*Note: This site will be taken down at an unspecified future date.*

Parcae.io is a fully functional news platform that delivers curated RSS news feeds, enhanced with AI-powered analysis. Using the OpenAI API, the site provides real-time insights into the **bias**, **tone**, and **integrity** of news content — empowering users to critically assess the information they read.

---

## 📰 RSS News Feeds

The platform pulls content from a selection of mainstream and independent RSS feeds. Feed data is queried, filtered, and normalized by a backend script:

```
/googleCompile.js
```
---

## 🤖 AI Analysis

Every article displayed is analyzed through the OpenAI API to determine:

- **Bias** (e.g. Left / Center / Right)
- **Tone** (e.g. emotional, neutral, sensational)
- **Integrity** (e.g. citation quality, factual consistency)

Example output and be found at: https://parcae.io/aicommentary

Prompt logic:

```
const prompt = `Analyze the news reporting style of ${companyName} based on these articles:\n\n${descriptions.join("\n\n")}\n\nProvide a 6-8 paragraph commentary with unique, truthful (perhaps a bit disruptive) insights into their tone and rhetorical style. Also provide a 0-100 rating for Biad/Integrity and Depth/Quality of analysis. Provide in html format. `;

const response = await openai.chat.completions.create({
  model: "gpt-4-0613",
  messages: [{ role: "system", content: "You are a philosopher and extremely wise." },
             { role: "user", content: prompt }],
    temperature: 0.6,
    max_tokens: 1000
});

```


---

## 💸 Monetag Ads

The site includes **Monetag** ad placements.


Ads are minimal, non-invasive, and cookie-light. No personalization is used beyond Monetag's own system.

---

## 🛠 Tech Stack

- **Frontend**: React, Next.js, HTML
- **Backend**: Node.js, Express
- **AI Integration**: OpenAI API (GPT-4)  
- **RSS Parsing**: Feedparser

---

## ⚠️ Disclaimer

This project is experimental and not intended for commercial use. AI results are provided for informational purposes only. Parcae.io may be discontinued at any time without notice.

---

## 📬 Contact

For questions or collaboration inquiries, reach out to:

**[Climacus](mailto:thebrotherscain@gmail.com)**

