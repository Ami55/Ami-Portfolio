---
Post: 1 of 30
Title (H1): Entity SEO 101: The Shift That Changed Everything, Explained the Way I Wish Someone Had Explained It to Me
Meta Title: Entity SEO 101: Strings vs. Things, Explained Simply (52 chars)
Meta Description: Ten years in, and entity SEO is still the concept most people half-understand. Here's the plain-English version, no jargon required. (132 chars)
URL Slug: /entity-seo-101-strings-to-things/
Target Query: what is entity SEO
Word Count: ~2,100
Schema: Article, FAQPage
---

# Entity SEO 101: The Shift That Changed Everything, Explained the Way I Wish Someone Had Explained It to Me

I've been doing SEO for over ten years, and "entity SEO" is one of those phrases I hear thrown around constantly, usually without anyone actually explaining what it means. So let me try to fix that, in plain language, the way I'd explain it to someone I work with over coffee instead of the way it usually gets explained in an industry conference talk.

Back in 2013, Google shipped an update called Hummingbird, and a Google engineer summed up the whole point of it in five words: not strings, but things. That phrase is basically the entire concept of entity SEO in a nutshell, and once it actually clicks, a huge amount of SEO advice that used to feel scattered starts to organize itself around one central idea.

## What Changed, In Plain Terms

Before Hummingbird, Google was mostly matching the literal words you typed into the literal words on a page. String matching. If you searched "capital of France" and a page had those exact words, great, it had a shot. If the page said "France's capital city" instead, using different words for the same idea, it had a much weaker shot, even though a human reader would obviously understand both meant the same thing.

After Hummingbird, Google started trying to figure out what you actually meant, and then finding pages about that same thing, even if the words didn't match exactly. "NYC," "New York City," and "the Big Apple" are three completely different strings of text. But they're one thing. One entity. And Google built an entire system, the Knowledge Graph, specifically to keep track of the fact that all three point to the same underlying place.

That's the whole shift. Keywords are strings. Entities are things. And once you see content through that lens, a lot of SEO advice that used to sound abstract suddenly makes a lot more sense.

### Why This Was Necessary At All

It's worth sitting with why string matching was ever a problem in the first place, because I think that's the part people skip. Language is genuinely messy. The same real-world thing can be referred to in dozens of different ways depending on who's talking, what region they're from, and what context they're in. A search engine that only matches literal text has no way of knowing that "doctor," "physician," and "MD" often point at the same underlying concept, or that a search for "the guy who directed Jaws" and a search for "Steven Spielberg" are, in a very real sense, asking for the same thing.

Entities solve that problem by giving every distinct real-world thing, a person, a place, a product, a concept, its own internal identity that search engines and AI tools can reason about, separate from whatever specific words happen to describe it in any given piece of text. Once a system has that internal identity, it can match a search to relevant content regardless of the exact phrasing on either side.

![An entity node and its connected relationships, showing the Colosseum linked to Rome, 80 AD, the Roman Forum, and Ancient Rome](images/knowledge-graph-nodes.png)

This is roughly what that looks like under the hood. An entity isn't just a name, it's a node with a web of specific, factual relationships attached to it. That's the "thing" Google is actually trying to build for every entity it recognizes, and it's the same basic structure every major AI search tool is working with today.

## A Quick Timeline, Because I Think It Actually Helps

I used to think this history was just trivia, until I realized how much it explains about why things work the way they do now. Here's the quick version, roughly in order:

- **2010, Freebase acquired.** Google bought a company called Freebase, which was basically a giant, community-built database of things and facts about them. This became the raw material for what came next.
- **2012, the Knowledge Graph launches.** Freebase became the seed for Google's own Knowledge Graph, an internal database mapping entities and how they relate to each other.
- **2013, Hummingbird.** This is the update that taught Google to actually understand entities inside search queries themselves, not just match keywords against a page. It reportedly affected around 90% of searches, which is a wild number when you actually sit with it.
- **2014, Knowledge Vault.** A follow-up project built to automatically pull in facts about less-famous entities at scale, not just the big, obvious ones with existing Wikipedia pages.
- **2015 onward, RankBrain, then BERT, then MUM.** Each one pushed Google further toward understanding meaning and context instead of just matching words, building directly on the entity foundation laid down years earlier.

None of this is ancient history that stopped mattering once the next update shipped. Every AI search tool that's come out since, AI Overviews, ChatGPT search, Perplexity, is built on this same foundation. They're not matching keywords either. They're working with entities and the relationships between them, because that's genuinely how you represent meaning if you're a machine trying to reason about the world instead of just counting word overlap.

## The Mistake I See All the Time

Here's the thing that trips up almost every company I've worked with, at least at first: they're still writing and optimizing purely for keywords, as if it's 2012. And I get it, keyword research still matters, don't get me wrong. But it's not the whole job anymore, and honestly it hasn't been for over a decade.

A few specific patterns I run into constantly, all rooted in the same underlying mistake:

- **Treating the keyword as the subject, instead of the entity.** A page gets built entirely around "best Rome tour" as a phrase, without ever clearly stating what specific thing, which tour, which company, which guide, the page is actually about.
- **Assuming synonyms are automatically understood.** Content swaps between five different phrasings of the same idea, trusting that a machine will smoothly connect them all, when a little explicit clarity would remove the guesswork entirely.
- **Optimizing the page instead of the entity across the whole site.** A business gets its main service page carefully optimized while every other mention of that same entity, on other pages, in other content, uses inconsistent language that dilutes the very clarity the main page worked so hard to build.

The question I now ask before almost anything else is: if I stripped this page down to its bones, would a machine know exactly what entity this is about, what type of thing it is, and how it connects to other things? If the answer is fuzzy, that's the actual problem, way before we start talking about keyword density or backlinks.

## What This Looks Like When You Actually Do It

I'm not going to pretend this is complicated. It's a handful of habits, and I've watched them make a real difference on real sites more times than I can count.

**Name the thing clearly, and keep naming it the same way.** If your main subject is a place, a product, a person, use one consistent name for it throughout the page, and ideally across your whole site. I've seen businesses lose real ground just from calling the same product three different names on three different pages, splitting whatever signal they were building instead of reinforcing it.

**Disambiguate the first time it shows up.** If your entity shares a name with something else, and a lot of them do, say so up front. "The Colosseum in Rome" instead of just "the Colosseum," especially if there's any real chance of confusion with a stadium, a venue, or another landmark somewhere else that happens to share the name.

**State facts, not adjectives.** "Paris has over 130 museums" tells a machine something concrete. "Paris has many wonderful museums" tells it almost nothing. I catch myself rewriting copy this exact way constantly, because the instinct to write pretty, vague sentences is strong, and it's genuinely working against you.

**Actually state how things relate to each other.** "The Louvre houses the Mona Lisa" is one clean sentence that connects two entities directly. A paragraph that just mentions both without ever saying how they relate does much less work, even if it feels similarly informative to write.

**Use schema markup to spell it out.** I know structured data has a reputation for being technical and boring, but the `about` and `mentions` properties, especially linked to Wikipedia or Wikidata through `sameAs`, are one of the clearest ways to just tell Google directly what your page is about, instead of hoping it figures it out on its own.

**Keep your entity's identity consistent off-site too.** The same name, the same key facts, described the same way on directories, review platforms, and any third-party mentions you have some influence over. Consistency off your own site reinforces the exact same signal you're building on it.

## A Simple Audit You Can Run This Week

If you want to check where your own site actually stands, here's the version of this I run on any site I'm looking at for the first time:

1. Pick your three or four most important pages.
2. Read only the first two sentences of each, pretending you know nothing else about the business.
3. Ask whether those two sentences alone would tell a machine exactly what entity the page is about, and what type of thing it is.
4. Search your own site for how many different ways your main entity's name gets written across different pages.
5. Check whether your key facts, founding details, locations, credentials, are stated identically everywhere they appear, or whether they drift slightly from page to page.

Most of the time, this takes under an hour, and it's consistently the highest-leverage hour I spend on a new site.

## The Bottom Line, From Someone Who's Watched This Play Out

Entity SEO isn't a replacement for keyword research. I still do keyword research on every project, every time. What's changed is that keyword research tells you what people are searching for, and entity work is what determines whether the content you build around those keywords actually gets understood correctly by the machines deciding whether to show it to anyone. Skip the second part, and the first part doesn't matter nearly as much as you'd hope.

## Frequently Asked Questions

**What's the actual difference between entity SEO and regular SEO?**
Regular, keyword-focused SEO tries to match the words in a search query. Entity SEO makes sure the underlying subject of your content, and how it relates to other things, is unmistakably clear to a machine, no matter what specific words someone used to search for it.

**When did this shift actually start?**
The clearest turning point was 2013's Hummingbird update, built on the Knowledge Graph that launched the year before. It reportedly touched around 90% of all searches, which tells you it wasn't a minor tweak.

**Do I really need schema markup if my writing is already clear?**
I'd still say yes. Clear writing helps a lot, but schema markup, particularly linking your entities to Wikipedia or Wikidata, removes ambiguity that even genuinely good writing can leave open to a machine.

**Does this matter for AI search tools too, or just Google?**
If anything, it matters more for AI tools. Every one of them represents your content as entities and relationships internally. The clearer you make that structure, the easier it is for them to understand, extract, and correctly cite you.

**How long does it take to see results from entity-focused changes?**
It varies, but in my experience, disambiguation and consistency fixes tend to show up faster than pure content or backlink changes, because you're removing a specific point of confusion rather than trying to build new authority from scratch.

**Is entity SEO only relevant for big, well-known brands?**
Not at all, and honestly it may matter more for smaller or newer entities, since they don't have an established Knowledge Graph presence doing some of this disambiguation work for them automatically. Clear, consistent, explicit entity signals are how a smaller business earns that same clarity on its own.
