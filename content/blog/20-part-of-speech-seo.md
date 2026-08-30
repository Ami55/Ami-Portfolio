---
Post: 20 of 30
Title (H1): Part of Speech and SEO: The Grammar Lesson Nobody Told Me Mattered This Much
Meta Title: Part of Speech and SEO: A Bigger Deal Than I Thought (52 chars)
Meta Description: I ignored grammar tagging for years as too technical to matter. That was a mistake. Here's why verb choice is basically an SEO decision. (136 chars)
URL Slug: /part-of-speech-and-seo/
Target Query: part of speech SEO
Word Count: ~1,800
Schema: Article, FAQPage
---

# Part of Speech and SEO: The Grammar Lesson Nobody Told Me Mattered This Much

For a long time, I filed "part of speech tagging" under too technical to matter for actual SEO work. It sounded like something for linguists, not marketers. I was wrong, and the more I learned about how machines actually process text, the more I realized this unglamorous grammar step happens before literally anything else, entity recognition, triple extraction, salience scoring, and it shapes how reliably all of it works.

## What Part-of-Speech Tagging Actually Does

Before a system can pull a fact out of your sentence, it has to first tag every single word by grammatical category, noun, verb, adjective, and so on, along with details like tense and number, and map out how each word relates structurally to the others.

The categories are pretty intuitive once you see them laid out:

- **Nouns** are your entities and objects.
- **Verbs** are actions and relationships, the predicates I've written about elsewhere on this blog.
- **Adjectives** modify nouns with attributes.
- **Adverbs** modify verbs or adjectives.
- **Pronouns** stand in for something mentioned earlier, and need to be correctly traced back to it.
- **Prepositions, determiners, and conjunctions** mostly do structural, connecting work.

Every word gets sorted before any higher-level meaning gets extracted. A machine can't correctly figure out a sentence's subject, predicate, and object until it's already correctly tagged which words are acting as nouns and which are acting as verbs, in that specific sentence, which is genuinely tricky, because plenty of words do double duty depending on context. "Book" as a noun versus "book" as a verb. "Well" as an adverb versus "well" as a noun.

![Part-of-speech tagging example: "The guide specializes in Roman history" broken down word by word into DET, NOUN, VERB, PREP, ADJ, NOUN](images/part-of-speech-tagging.png)

Every single word gets a tag before any of the higher-level extraction I've written about elsewhere on this blog, entities, triples, salience, can even begin.

## Why This Matters More Than It Sounds Like It Should

Two things follow from how this actually works, and both changed how I edit.

**Ambiguous grammar breaks everything downstream.** Take a sentence that genuinely allows two different readings, and the tagger has to guess, and a wrong guess there ripples through every step after it, wrong entity, wrong predicate, wrong fact. This is really the mechanical reason behind advice I've given for years about avoiding nested clauses and long pronoun chains. Those recommendations exist specifically because they cut down the exact kind of ambiguity that makes this first tagging step less reliable.

**Nouns and verbs carry the actual weight. Everything else is mostly scaffolding.** This connects straight back to the triple structure I've written about, nouns give you entities, verbs give you the predicates connecting them, adjectives give you attributes. Adverbs, prepositions, and connecting words matter for grammar and flow, but they're not where the extractable, factual content of a sentence actually lives. A sentence loaded with hedging adverbs, arguably, generally, somewhat, relatively, while under-specifying its actual nouns and verbs, is grammatically fine and weak in exactly the dimension that decides whether it's worth citing.

## Verb Choice Is a Real Decision, Not an Afterthought

I've come to see verb choice as directly a claim about part of speech, not just a stylistic pick. The verb a sentence uses determines which whole neighborhood of related expectations that sentence gets filed under. "The guide covers Roman history" and "the guide specializes in Roman history" share the same noun subject and object, but different verbs place the claim at completely different levels of specificity and commitment. Once "content" is decided, the verb isn't a finishing touch. In a real sense, the verb is largely the content, since it's the specific claim being made about how subject and object relate.

## My Actual Editing Pass, Word Type by Word Type

I check nouns first. Are they specific entities and attributes, or vague placeholders, things, stuff, aspects? Vague nouns get tagged correctly and still hand a machine almost nothing extractable underneath.

Then verbs. Is each one the sharpest, most specific option, or a generic default, is, has, involves, provides? Swapping a lazy verb for a precise one is, more often than any other single edit I make, the highest-leverage change available in an otherwise fine sentence.

Then adjectives, checking for specificity over subjectivity. "A beautiful cathedral" is subjective and unverifiable. "A 14th-century cathedral" is a specific, checkable attribute. Same grammatical slot, completely different informational value.

Then adverb density. A sentence stacking several hedges in a row, arguably, somewhat, relatively, fairly, is usually telling me the underlying claim is under-specified, and the fix is almost always to just state the fact more precisely rather than hedge around it more carefully.

## A Quick Before-and-After, Word Class by Word Class

Weak version: "The guide is somewhat experienced and has done this for a while, and generally provides good tours." Vague noun ("this"), weak verb ("has done," "provides"), hedging adverbs ("somewhat," "generally"), subjective adjective ("good").

Stronger version: "The guide has led tours since 2012 and specializes in Roman history." Specific noun phrase, sharp verbs ("led," "specializes"), a concrete date doing the work an adjective used to do, and zero hedging language left standing.

Same underlying claim, dramatically different extractability, and the difference traces back almost entirely to which part of speech carried the actual information in each version.

## How This Connects to Everything Else I've Written About Language

Part-of-speech tagging sits underneath basically every other language-processing concept I've covered on this blog, even though it rarely gets mentioned directly. Named entity recognition depends on correctly identifying nouns first. Semantic triples depend on correctly identifying which word is the verb, since that's the predicate. Dependency parsing, the step right after tagging, depends entirely on knowing each word's grammatical category before it can map how those words relate to each other. Get the tagging wrong, even subtly, and every one of those later steps inherits that error.

That's part of why I've come to see this as the genuine foundation of the whole pipeline, not a minor technical detail. It's the least visible step and the one nobody talks about at conferences, and it's also the one everything else is quietly built on top of.

## A Habit I've Built Around This

I now do a quick mental part-of-speech pass on any sentence I'm not fully happy with, even before I can articulate exactly what's bothering me about it. More often than not, the actual issue turns out to be a weak verb, a vague noun, or a stack of unnecessary adverbs, exactly the pattern this whole framework predicts. Naming the specific word class doing the damage makes the fix faster than vaguely rewriting the sentence a few times and hoping it improves.

## One More Distinction Worth Making

People sometimes ask whether this means every sentence needs a dramatic, punchy verb. It doesn't, and chasing that would actually backfire, since forced, unnatural verb choices read worse to a human than a plain, accurate one. The actual goal is specificity, not drama. "Specializes in" beats "has knowledge of" not because it sounds more exciting, but because it makes a narrower, more precise, more checkable claim. A quiet, accurate verb will always beat a flashy, vague one, and I'd rather see someone reach for precision than reach for style points that don't actually carry more information.

## Frequently Asked Questions

**Do I need to know grammar terminology to write good SEO content?**
Not formally. What's actually useful is understanding that nouns and verbs carry most of a sentence's extractable meaning, while adjectives, adverbs, and connecting words carry comparatively less, even without memorizing the formal categories.

**Why does verb choice matter more than adjective choice?**
Verbs carry the predicate, the relationship between subject and object, which is the core structure extraction systems are built to identify. A weak verb undermines the whole fact. A weak adjective usually just weakens one attribute attached to it.

**How does this connect to named entity recognition?**
Entity recognition depends on correctly identifying which words are nouns, and specifically proper nouns, in a sentence. Part-of-speech tagging happens first, and mistakes there carry straight through into entity recognition and everything built on top of it.

**Can I actually test how a machine tags my own writing?**
Yes. Google's public Natural Language API returns part-of-speech tags and full dependency parses for any text you feed it, which I cover in more detail in an earlier post on this blog about testing content directly.

**Is adverb density really worth worrying about, or is that overthinking it?**
In my experience it's a genuinely useful diagnostic, not overthinking. A cluster of hedging adverbs is rarely the actual problem, it's a symptom of an under-specified underlying claim, and fixing the claim itself tends to be more valuable than just trimming the adverbs around it.

**Does this apply differently across languages, or is it mostly an English-language concern?**
The general principle, that nouns and verbs carry the core extractable meaning while other word classes do more structural work, holds across most languages I'm aware of, though the specific grammar and tagging challenges vary. I work primarily in English, so that's where my own direct experience with this is strongest.

**Is there a fast way to spot a weak verb without running any tool at all?**
Read the sentence and ask whether the verb could be swapped for "is," "has," or "does" without losing any real meaning. If it could, that's usually a sign the verb isn't doing much actual work, and a more specific one is available.

**Does part-of-speech tagging accuracy vary between different content management systems or page formats?**
Not really, tagging happens on the extracted text itself, largely independent of the underlying CMS. What does affect it indirectly is anything that breaks up natural sentence flow in the rendered text, oddly inserted line breaks, text split awkwardly across separate HTML elements, which can occasionally confuse extraction even when the underlying grammar is fine.

**Is this something a non-native English writer needs to worry about more than a native speaker?**
Not necessarily more, but the specific weak spots can differ. I've noticed non-native writers sometimes lean more heavily on hedging phrases carried over from another language's conventions, while native writers more often default to vague, generic verbs out of habit. Both end up in the same place, a weakened predicate, just by slightly different paths.
