---
Post: 9 of 30
Title (H1): BM25: The Actual Math Reason Keyword Stuffing Never Worked as Well as People Thought
Meta Title: BM25 Explained: Why Keyword Stuffing Fails, for Real (52 chars)
Meta Description: "Don't stuff keywords" gets said without explanation constantly. Here's the actual math reason, explained without a computer science degree. (140 chars)
URL Slug: /bm25-vs-vector-search-keyword-stuffing/
Target Query: BM25 SEO
Word Count: ~1,800
Schema: Article, FAQPage
---

# BM25: The Actual Math Reason Keyword Stuffing Never Worked as Well as People Thought

"Don't stuff keywords" has been repeated in this industry for so long that most people, myself included for a good chunk of my career, just accept it as a rule without really knowing why. Turns out there's an actual, provable mathematical reason, not a Google policy decision, and once I understood it, it changed how I think about keyword placement entirely.

The function behind it is called BM25, and it's been quietly running relevance scoring for decades, including inside a lot of the hybrid systems powering AI search today.

## What BM25 Actually Does

It's a formula that scores how relevant a document is to a search, based on three things.

**Term frequency.** How often the search terms show up in the document, with a very specific mathematical behavior I'll get into below.

**Inverse document frequency.** How rare, and therefore how informative, those terms are across all documents. Common words like "tour" or "visit" get discounted because they don't tell you much, while a rare, specific term carries more weight when it does appear.

**Document length normalization.** A correction so a longer page doesn't automatically win just by containing more words, or more repetitions of the target term, than a shorter, tighter page.

## The Part That Actually Kills Keyword Stuffing

Here's the piece that finally made this click for me. The term frequency part of BM25 isn't a straight line. It's a curve that flattens out fast. The first couple mentions of your target term genuinely help. Every mention after that helps less and less, and the gain basically disappears well before most keyword-stuffed content stops piling the word in.

Mentioning "private tour Rome" three times instead of zero produces a real, measurable bump. Mentioning it fifteen times instead of three does almost nothing. That's not a penalty being applied after the fact. It's the scoring function itself simply refusing to keep paying out for something it's already gotten enough signal from.

Picture it as a curve on a graph: it climbs steeply at first, from zero mentions to a handful, and then flattens out almost completely. Everything past that flat part of the curve is effort spent for close to zero additional return, mathematically, regardless of how the content otherwise reads.

## Why I Stopped Recommending Keyword Density Targets

For years, part of my process involved recommending a rough keyword density, hit the term this many times per however many words. I don't do that anymore, because BM25's actual behavior makes it clear that's the wrong lever to pull. A small number of well-placed mentions, title, opening sentence, one subheading, captures nearly all the available benefit. Everything past that is close to wasted effort, and honestly, past a certain point it starts reading as manipulative to an actual human too.

## BM25 vs. TF-IDF, Quickly

BM25 grew out of an older, simpler formula called TF-IDF. TF-IDF treats term frequency more like a straight line, rewarding repetition more consistently, and it generally doesn't correct for document length the way BM25 does. BM25 improves on both, which is why it became the standard, especially for real websites where document length varies wildly from page to page.

A quick side-by-side, since I still get asked about this constantly:

| | TF-IDF | BM25 |
|---|---|---|
| Term frequency | Roughly linear, more repetition keeps helping | Saturates quickly, diminishing returns kick in fast |
| Document length | Generally not well corrected for | Explicitly normalized so length alone doesn't win |
| Rare term weighting | Present, but simpler | Present, and tuned more precisely |

## Where Vector Search Fits In

None of this means BM25 is the whole story anymore, it isn't. Vector search measures how semantically similar a query and a document are using embeddings, not exact word matching, and it can connect a search to relevant content even when the exact words never overlap at all, something pure keyword matching can never do on its own.

Most modern search systems, including the ones behind AI-powered search, run both at once, in what's usually called hybrid retrieval. Which means both things genuinely matter at the same time: enough exact-term relevance for the keyword-matching side to score you well on specific terms, and enough semantic coverage of the broader topic for the vector side to surface you even on searches that never use your exact phrasing.

## What I Actually Do Now

Mention the target term a small number of times, in the spots that matter, title, opening line, a subheading, and then I stop actively engineering for repetition. That gain curve has already flattened out by that point, so I redirect the rest of the effort toward semantically related terms and entities instead. Specific attraction names, specific traveler-type language, related concepts, things that actually expand the page's coverage instead of just repeating the same phrase in different sentences.

And I've stopped padding length to try to out-document a competitor. Document length normalization means a longer page doesn't automatically win, and extra length that isn't adding genuinely new information just dilutes the relevance you already had.

A practical version of this I now use on new content:

1. State the target term clearly in the title, opening sentence, and at least one subheading.
2. Stop deliberately repeating it beyond that. Let it appear naturally where it belongs and no further.
3. Spend the remaining effort on related entities, specific attributes, and semantically adjacent concepts instead.
4. Keep the page as long as the topic genuinely needs, and not a word longer just to appear more comprehensive.

## A Worked Example, With Rough Numbers

I find this sinks in better with an actual illustration, even a simplified one. Imagine a page mentioning "private tour Rome" and tracking the relevance gain from each additional mention, roughly:

| Mentions | Roughly how much relevance gain |
|---|---|
| 0 to 1 | Large jump, the term goes from absent to present |
| 1 to 3 | Solid additional gain, confirming relevance |
| 3 to 6 | Small additional gain |
| 6 to 15 | Marginal, close to flat |
| 15+ | Essentially zero further gain |

The exact numbers vary by term, document, and corpus, and I'm not claiming this table reflects a precise formula output. What it illustrates is the shape of the curve, steep, then flat, which is the part that actually matters for how you should spend your effort. Once you're past the steep part, every additional mention is competing with genuinely better uses of that same sentence, a related entity, a specific attribute, a fact nobody else stated.

## The Behavioral Change This Produced in My Own Writing

Understanding this curve shape changed a habit I didn't even realize I had: instinctively reaching for the target phrase again whenever a sentence felt like it needed "more SEO." Now, when I catch myself wanting to add the phrase a fourth or fifth time, I treat that instinct as a signal to add a genuinely new, related fact instead, since that's where the actual remaining relevance gain is sitting, mathematically, not in another repetition of something the scoring function has already fully credited.

## Why I Still Think This Is Worth Explaining, Even to Non-Technical People

I could just tell someone "don't stuff keywords" and leave it there, and for years that's basically what I did. But I've found that people follow advice they actually understand the mechanism behind far more consistently than advice they're just told to trust. Once someone genuinely gets that the scoring curve flattens, not that Google "penalizes" repetition, but that the formula itself simply stops paying out, they stop needing to be reminded, because the old instinct no longer makes intuitive sense to them either.

## Frequently Asked Questions

**What is BM25, without the jargon?**
It's a formula search engines use to score how relevant a document is to a search, based on how often your terms appear, how rare and informative those terms are, and correcting for how long the document is so length alone can't win.

**Why doesn't repeating a keyword more keep helping rankings?**
The term frequency part of the formula flattens out fast. A few mentions help meaningfully. Mentions after that add almost nothing, mathematically, well before most people stop adding them.

**Does BM25 still matter now that AI search uses vector embeddings?**
Yes, from what I've seen. Most modern systems run both together, exact-term matching and semantic similarity, rather than one replacing the other.

**What's the actual difference between BM25 and TF-IDF?**
TF-IDF is the older, simpler version, treating repetition more like a straight-line benefit and generally not correcting well for document length. BM25 fixes both of those, which is why it performs better across real websites with varying page lengths.

**Is there a specific number of keyword mentions I should aim for?**
I don't use a fixed number anymore, since the exact saturation point varies by term and context. What I aim for instead is natural placement in the title, opening, and at least one heading, then letting the rest happen organically rather than engineering it.

**Does hybrid retrieval mean keyword matching doesn't matter as much as it used to?**
Not exactly, it means it matters alongside semantic matching rather than alone. A page still benefits from clear, natural keyword placement, it just no longer needs to lean on repetition to win, since the semantic side of hybrid retrieval can pick up relevant matches that never use the exact phrase at all.

**Is there any situation where more keyword repetition genuinely still helps?**
Rarely, and I'd treat it as an edge case rather than a strategy. If a term is genuinely rare and highly specific to a niche topic, a few additional natural mentions can help reinforce relevance slightly further than usual. That's a long way from stuffing, and it only applies to unusually rare, high-value terms, not everyday phrases.

**Does BM25 apply to how AI systems evaluate content, or is it strictly a classic search engine concept?**
It shows up in AI search too, as part of the keyword-matching half of hybrid retrieval systems. Even fully vector-based retrieval setups often keep a BM25-style component running alongside the semantic side, since exact-term matching still catches cases embeddings alone can miss.
