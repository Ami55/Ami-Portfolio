---
Post: 11 of 30
Title (H1): I Reverse-Engineered Why AI Cites Certain Pages. The Answer Was Simpler Than I Expected
Meta Title: Why AI Cites Certain Pages: What I Found (40 chars)
Meta Description: A study of 42,971 real AI citations backs up something I'd suspected for a while. Here's what it actually showed, and how to use it. (132 chars)
URL Slug: /eav-reverse-engineering-llm-citations/
Target Query: why do LLMs cite certain pages
Word Count: ~1,800
Schema: Article, FAQPage
---

# I Reverse-Engineered Why AI Cites Certain Pages. The Answer Was Simpler Than I Expected

Most advice about getting cited in AI search is vague. Write clearly. Be specific. Structure your content. All true, all frustratingly hard to actually act on. So when I came across a study that decoded 42,971 real AI Mode and Gemini citations, using a hidden bit of data every citation URL carries that encodes the exact sentence pulled from the source, I read the whole thing twice. It gave me something I could actually test against, not just another vague rule.

## What the Data Actually Showed

A few numbers stuck with me:

- **The median cited sentence was ten words long.**
- **Nothing over seventeen words got cited, not once, across the entire dataset.**
- **Sentences making one single, clear claim dominated**, while compound sentences juggling multiple ideas almost never got picked.
- **Pages using structure, lists, tables, clear headings, got matched far more often than plain paragraph text**, more than double, actually.
- **Citations clustered near the top of the page**, not buried deep in.

One more thing that genuinely surprised me: only about a quarter of the cited pages also ranked in the classic top ten for the same search. AI citation and normal ranking are measurably different games, not the same game wearing a new jersey.

![Key stats from the 42,971-citation study: 10-word median sentence length, 17-word longest ever cited, 92.4% falling in the 6-15 word range, and a 91.3% vs 39.3% match rate for structured versus plain content](images/citation-study-stats.png)

Those four numbers are basically the whole study in one glance, and they're the ones I keep coming back to whenever I'm deciding how to trim a sentence.

## Why This Matches Something I've Believed for Years

I've long pushed a version of the same idea I use for entity clarity: one clear fact per sentence, stated plainly. "The cathedral was completed in 1345" is exactly that, one entity, one fact, one value, and it's no surprise to me that it lands right in the word-count range this study found dominating citations. A clean, single-claim sentence just doesn't need many more words than that to say the whole thing.

A compound sentence carrying two or three claims at once is, structurally, two or three of those clean statements stitched together. And extraction systems seem to genuinely struggle with that. Even the framing of a sentence matters, systems built for this kind of retrieval are known to favor plain, declarative answers over anything phrased as a question or hedge. A multi-claim sentence has a related problem: the system has to guess which of the several claims packed into it is actually the point, and that guessing measurably hurts extraction.

The rule I now give everyone I work with is more specific than "be concise." One clear fact per sentence. Don't stretch it further with "and," "which," or "while" to sneak in a second point. Start a new sentence instead.

## Why Structure Wins by Such a Wide Margin

That gap between structured content and plain paragraphs isn't really about formatting preferences. It's about how much extra work a machine has to do before it can even find a clean fact to pull.

A list item or a short paragraph under a specific subheading arrives already broken into a piece, the system already knows where that chunk starts and ends before it even evaluates it. A long, undifferentiated paragraph forces the system to first figure out where one idea stops and another begins, and that guesswork fails more often than you'd think, at scale. Structure isn't decoration in my mind anymore. It's doing extraction work in advance, which is exactly why it correlates with citation rates more than double what plain prose gets.

## What Surprised Me Most About the Ranking Overlap

The finding that only about a quarter of cited pages also ranked in the classic top ten deserves more attention than it usually gets. It means the two systems are, at least partially, evaluating different things. Classic ranking still leans heavily on aggregate signals, backlinks, domain authority, historical performance. AI citation appears to lean much more heavily on the specific, sentence-level qualities this study measured, length, structure, single-claim clarity.

Practically, that means a page can be a legitimately weak classic-ranking candidate, newer domain, fewer backlinks, and still win AI citations on the strength of a handful of genuinely well-built passages. That's a real opportunity for smaller or newer sites, and it's part of why I don't treat AI visibility and classic SEO as the same project anymore, even though they obviously overlap.

## How I Actually Audit a Page for This Now

I go sentence by sentence and ask: what's the one clear fact here, and could a machine lift this sentence out on its own and have it still make complete sense? Anything over roughly seventeen words gets flagged as a likely candidate to split, usually because it's actually two facts pretending to be one sentence.

Then I check whether the strongest, most specific facts sit early in each section, since that's where citations cluster, rather than buried three sentences deep as an afterthought. And I check whether each fact could realistically become its own list item or short standalone paragraph, rather than staying embedded in the middle of a longer one.

## What This Doesn't Mean

It doesn't mean writing your whole page like a robot wrote it. This is about the specific sentences carrying your key facts, not every sentence on the page. Your content can still open sections with context, transition naturally, read well for an actual human. The real, practical takeaway is narrower than "write short sentences everywhere." Make sure the facts you most want pulled out are each sitting in their own clean, single-claim sentence, not buried inside a longer one carrying two ideas at once.

## A Real Rewrite, Using the Study's Own Numbers as a Guide

Here's a sentence I pulled from an actual review, before I'd internalized this study: "The guide has extensive experience leading tours throughout the region and is well-versed in the local history, culture, and cuisine, which makes for a genuinely well-rounded and informative experience for travelers of all backgrounds." That's forty-plus words, several claims stitched together, and reads as pleasant rather than extractable.

Split into single-claim sentences within the study's range: "The guide has led tours in the region since 2014. Tours cover local history, culture, and cuisine. Past travelers describe the pacing as well-suited to both first-time visitors and returning guests." Three sentences, each under seventeen words, each carrying exactly one clean, checkable claim. Same underlying content, dramatically different extractability.

## What I'd Tell Someone Auditing Their Own Content Against This Study

Don't try to rewrite an entire page in one pass chasing this. Start with the two or three sentences carrying your most important, most citable facts, a price, a date, a specific credential, and apply the seventeen-word test to those first. That's where the return on this specific effort is highest, since those are the sentences you'd most want a system to actually pull into an answer in the first place.

## Why I Trust This Study More Than Most SEO Research

A lot of SEO research is inferential, correlating outcomes with observed patterns and drawing reasonable but indirect conclusions. This study is different, because it's decoding something closer to ground truth, the actual sentence a real system pulled and cited, tens of thousands of times over. That's part of why it changed my checklist more than most similar research I've read, it's not a theory about what probably matters, it's a direct measurement of what actually got selected, at scale, across a huge number of real citations.

## Frequently Asked Questions

**What does that hidden bit of data in an AI citation URL actually show?**
It encodes the exact sentence or phrase the AI system pulled from the source page, which is what made a study like this, decoding tens of thousands of real citations, possible in the first place.

**Is there an ideal sentence length for getting cited by AI?**
Based on this dataset, the median cited sentence was ten words, and nothing over seventeen got cited at all. Six to fifteen words covered the vast majority.

**Does ranking well in Google guarantee I'll get cited in AI search?**
No, and this genuinely surprised me. Only about a quarter of cited pages in the study also ranked in the classic top ten for the same search, which tells you these are measurably different selection processes.

**How is this different from just telling someone to "write clearly"?**
"Write clearly" isn't something you can actually check. Going sentence by sentence and confirming each fact stands alone as one clean, direct statement under roughly seventeen words is something you can genuinely audit.

**Does this mean short pages beat long pages in AI search?**
Not exactly. Sentence length and page length are different things. A long, thorough page built from many short, single-claim sentences and clear structure can perform very well. What tends to hurt is long, compound sentences, not overall page length.

**Can I apply this same standard to every single sentence on a page?**
You could, but I wouldn't bother everywhere. I focus this level of scrutiny on the sentences actually carrying the key facts I want extracted and cited, and let more conversational, transitional sentences read a bit more naturally.

**Is a ten-word sentence always better than a fifteen-word one?**
Not automatically, the actual driver is single-claim clarity, not word count for its own sake. A clean fifteen-word sentence carrying one clear claim will still outperform an awkwardly chopped eight-word fragment that lost meaning in the edit. Length is a useful proxy, not the actual target.

**Does this study's methodology hold up, or is it just one dataset?**
It's one dataset, and I'd treat any single study with appropriate caution rather than as absolute proof. What makes it credible to me is the sheer scale, over 42,000 real citations, and the fact that it's measuring actual selected sentences rather than inferring behavior indirectly, which is a meaningfully stronger form of evidence than most SEO research I come across.

---

*Further reading: the citation study I'm referencing here is a fascinating, data-heavy read if you want the full methodology, and it pairs well with Olaf Kopp's writing on generative passage retrieval.*
