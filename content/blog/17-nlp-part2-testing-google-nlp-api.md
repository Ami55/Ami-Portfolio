---
Post: 17 of 30
Title (H1): I Stopped Guessing How Machines Read My Content and Started Actually Testing It
Meta Title: How to Test Your Content With Google's NLP API (46 chars)
Meta Description: You don't have to guess whether your writing reads clearly to a machine. Here's the free tool I actually use to check, and how I use it. (136 chars)
URL Slug: /testing-content-google-natural-language-api/
Target Query: Google Natural Language API SEO
Word Count: ~1,850
Schema: Article, FAQPage
---

# I Stopped Guessing How Machines Read My Content and Started Actually Testing It

I wrote an earlier post on this blog about the theory behind NLP for SEO, short sentences, clear entities, minimal pronoun chains. Good advice, but for years I was just applying it on instinct, hoping it worked, with no real way to check. Then I started actually running content through Google's public Natural Language API, and it turned "I think this reads clearly to a machine" into something I could genuinely verify instead of guess at.

## What You Actually Get Back

Feed it a piece of text and it hands you back a few distinct things:

- **Entity analysis.** Every named entity it found, what type it thinks each one is, and a salience score for each, basically how central that entity is to the overall meaning, not just how often it's mentioned.
- **Entity sentiment.** Scoring how positive or negative the tone is toward each specific entity, not the document as a whole.
- **Syntax analysis.** The grammatical role of every single word, which subject connects to which verb, what's a modifier versus a core part of the sentence.
- **Content category classification.** A rough label for what topic area the text falls into overall.

## The One I Check First: Salience

This is the most immediately useful piece for an actual audit, because it answers something that's genuinely hard to verify any other way: does this page actually read, to a machine, as being about the entity I meant it to be about?

Run a page through and look at the salience scores. If your primary entity, the one in your H1, meant to anchor the whole page, doesn't come out with the highest score, or it's basically tied with something you only meant to mention in passing, that's a real, measurable sign your structure is diluting focus, whatever the page looks like to a human skimming it.

Here's a pattern I catch constantly. A secondary entity gets mentioned in the opening sentence, while the actual primary entity doesn't get properly established until a few sentences in. That positional imbalance shows up directly in the salience score, because salience isn't purely about how often something's mentioned, position and how much context surrounds it both weigh in. So the fix, once I've spotted this, is usually just re-anchoring the primary entity's name earlier, and more often, right in the opening section.

## Using Entity Sentiment on Reviews and Comparisons

For anything involving opinions or comparisons, entity sentiment shows you something document-level sentiment completely misses, which specific entities are actually getting the positive or negative treatment.

I've caught this exact issue on comparison content before. A page reads as broadly positive overall, but entity sentiment shows the sentiment toward Option B specifically sitting neutral, or genuinely mixed, something a single overall tone score would never reveal. If the goal was a fair comparison that still favors Option A, this is the actual way to check whether the writing achieves that at the entity level, not just in its general vibe.

## Using Syntax Analysis to Catch Weak Verbs

I've written about how much the verb, the predicate, matters for building clean, extractable facts. Syntax analysis makes this checkable directly, the dependency parse shows exactly which word the system identified as the core of a clause and how everything else connects back to it.

If I'm unsure whether a sentence is producing a clean subject-predicate-object structure, I run it through and check how the parser actually resolved it, instead of assuming based on how I intended it to read. When the parser's structure doesn't match what I meant, that's a specific, concrete signal to rewrite, usually by shortening the sentence or swapping a vague verb for a sharper one.

## The Actual Process I Use

I take the opening two or three paragraphs of whatever I'm auditing, since that's the section carrying the most weight for establishing what the page is even about. From there:

1. Run entity analysis, confirm the intended primary entity has the top salience score, and if it doesn't, figure out which entity is beating it and why.
2. For anything with opinions or comparisons, run entity sentiment and confirm it matches the actual intent, not just the overall tone.
3. For any sentence I'm unsure about, run syntax analysis and check the structure against what I meant to say.
4. Revise based on what actually came back, not on my own read of the text.
5. Re-test the revision to confirm it worked, rather than assuming the fix landed.

This doesn't replace editorial judgment. It replaces guessing, for the specific parts of good SEO writing, salience, sentiment, sentence structure, that are otherwise genuinely hard to verify from the outside.

## A Few Things I've Learned From Running This Constantly

A couple of patterns have shown up often enough across different pieces of content that I think they're worth calling out on their own. Salience problems cluster heavily in opening paragraphs, since that's where writers often lead with context or a secondary detail before actually establishing the main subject. And entity sentiment issues show up most often not from deliberate bias, but from which supporting details got included, since even a fair-minded writer tends to unconsciously include more favorable specifics about whichever option they personally prefer.

## What a Real Test Run Looks Like

To make this concrete, here's roughly how a real session goes when I'm testing a new destination guide's opening section. I paste the first three paragraphs into the tool and check entity analysis first. Say the destination name comes back with a salience score of 0.31, while a secondary attraction mentioned in the second sentence comes back at 0.28, uncomfortably close for something that's supposed to be the clear main subject.

I go back to the text and find the destination is introduced in a subordinate clause, "Known for its temples, Kyoto offers..." while the attraction gets a full, direct sentence. I rewrite so the destination gets the direct sentence instead, re-test, and the salience gap widens to something like 0.44 versus 0.19, a much clearer signal. That loop, test, diagnose, rewrite, re-test, is the actual habit, not a one-time audit I run and forget about.

## Why I Stopped Trusting My Own Read-Through Alone

The uncomfortable lesson underneath all of this is that I'm not a reliable judge of my own writing's clarity to a machine, no matter how experienced I am. I know what I meant when I wrote a sentence, which makes it nearly impossible to read that sentence the way something with zero prior context would. Running actual tests removed a blind spot I didn't fully appreciate I had until I started catching my own salience and structure mistakes, over and over, on content I would have sworn was already clear.

## A Caveat Worth Stating Plainly

None of this makes the tool infallible, and I don't treat its output as gospel. It's a public, general-purpose version of the underlying technology, and any specific ranking or citation system likely has its own tuning on top of it. What I trust it for is directional signal, confirming whether a rewrite moved salience or sentiment in the direction I intended, not as a precise predictor of how any single specific system will behave. Treating it as a compass rather than a verdict has kept me from over-indexing on small score fluctuations that probably don't mean much on their own.

## Frequently Asked Questions

**Is this the exact same system Google uses for actual rankings?**
It's a public version of the same underlying technology, not necessarily an identical copy of every internal system. I treat it as a strong, directionally reliable stand-in, not a guaranteed match to live ranking behavior.

**What is entity salience, exactly?**
A score showing how central a given entity is to a text's overall meaning, separate from simple mention count. Position and surrounding detail both factor in, which is why an entity mentioned earlier with more context usually scores higher than one mentioned more but more thinly.

**How's entity sentiment different from regular sentiment analysis?**
Regular sentiment scores a whole document's tone. Entity sentiment scores the tone toward each individual named entity separately, which reveals patterns a single overall score can hide completely.

**Do I need to test every single page I publish?**
Not in my experience. I reserve it for pages where getting the primary entity right really matters, competitive pages, comparison or review content where fairness matters, and any specific sentence I'm genuinely unsure reads clearly to a machine.

**Is Google's Natural Language API free to use for this kind of testing?**
It offers a free usage tier that's more than enough for periodic spot-checks on individual pages. For high-volume, ongoing testing across a large site, costs can add up, so I tend to use it selectively rather than on every single page automatically.

**What should I do if salience keeps coming back wrong even after I edit the opening paragraph?**
Check the rest of the page too, not just the opening. Sometimes a secondary entity is mentioned so frequently throughout the body that it out-competes the primary entity on salience even with a strong opening. In that case, the fix is usually reducing unnecessary repetition of the secondary entity, not just strengthening the primary one further.

**Do I need any technical background to actually use this tool?**
No. It's a web interface where you paste in text and read back the results, no coding required for the kind of spot-checking I'm describing here. Some familiarity with the terminology, salience, entity type, dependency parse, helps you interpret what comes back, but that's learnable from the tool's own documentation.

**Can I use this to test a competitor's content and not just my own?**
Yes, and it's a genuinely useful comparison exercise. Running a competitor's top-performing page through the same checks can reveal whether their salience or entity clarity is actually stronger than yours in a way that explains a ranking or citation gap, rather than guessing at the reason from the outside.

**Should I run this before or after a normal editorial review?**
After, in my process. I want a human editorial pass to settle the actual substance and voice first, then I run the NLP checks on the near-final draft, since testing an early, still-changing draft just means re-testing it again later anyway once the content itself has moved.
