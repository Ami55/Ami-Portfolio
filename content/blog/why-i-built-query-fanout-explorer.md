---
title: "Why I Built a Query Fan-out Explorer"
status: "published"
publishedDate: "2026-07-04"
metaTitle: "Why I Built a Query Fan-out Explorer"
description: "One natural language prompt can hide several information needs. I built a practical tool to help content teams see those needs without turning briefs into theory papers."
category: "APP ORIGINS"
targetQuery: "query fan out content planning"
---

A person can type one simple question while expecting an answer that depends on several smaller questions.

“What should a first time traveller know before visiting Montreal?” may involve weather, neighbourhoods, transport, language, safety, tipping, accessibility, and seasonal events. A useful answer needs more than a page repeating the original phrase.

I understood the concept of query fan out through technical research, including work shared by people such as Olaf Kopp. The practical question for me was simpler: How can a content team use this idea without needing to become search system researchers?

## The mistake is turning every sub question into another generic heading

Once teams discover fan out, there is a risk of producing enormous checklists. Every possible question enters the brief. The article becomes complete on paper and exhausting in reality.

I use fan out as a discovery method, not a word count target. Which sub questions are essential to the user’s decision? Which require reliable evidence? Which belong on another page? Which reveal an entity or relationship the site has ignored?

## Coverage needs ownership and evidence

A destination page cannot own every travel question. Some needs belong to an attraction, transport guide, tour page, FAQ, or local expert contribution.

The useful output is a coverage map. It shows the likely questions, where answers should live, what evidence is available, and where the current site has a genuine gap.

That is why I built the [Query Fan-out Explorer](https://seogirl-query-fanout-ai-coverage-auditor.vercel.app/). It turns one prompt into a structured research space, then helps a person decide what deserves content.

## The tool should make the brief smaller, not larger

This may sound strange. The app generates more possible paths, but its value comes from prioritization. A strong brief excludes ideas as deliberately as it includes them.

The final question is not “Did we cover everything?” It is “Did we answer the needs that matter, with the right page and trustworthy evidence?”

## What changed when I started measuring reported searches

A simulator helps me explore plausible information needs. It cannot establish that a search engine actually issued those queries or used the suggested sources.

That distinction became more important as I began using my tools for independent research. I upgraded Follow-Up Query Studio from a simulator into a Gemini workflow with Google Search grounding available, collecting the searches and citations reported in the output. Query Fan-out Explorer also let me preserve repeated runs for comparison.

Those are still bounded observations. A reported query is not hidden reasoning, and the metadata does not reproduce Google AI Mode or another commercial interface. The change was from imagined paths to recorded tool output, not from uncertainty to a complete view of the system.

The [Follow-Up Query Studio](/apps/follow-up-query-studio) and [Query Fan-out Explorer](/apps/query-fan-out-explorer) pages explain the tools and link the studies they support.

## Repeated runs changed the question I asked of an audit

In [Same Question, Different Searches](/research/same-question-different-searches), I requested twelve answers and received eleven completed results. Those completed answers reported 33 searches.

Only three of thirty distinct query strings repeated across runs after case and punctuation differences were ignored. That is wording variation; similar needs can be expressed differently. I would not present it as a measure of how often intent changed.

The missing run was also an observation about collection, not an answer with zero visibility. If I had put it in the denominator as a failed brand appearance, I would have confused a tool failure with an output outcome.

That experience makes me want an audit to preserve completed-run status and repeated outputs, not simply a clean dashboard total. I want to know the variation around a result before describing a subsequent difference as an effect of optimization.

## A no-search answer was not the same as a missing result

[The Follow-Up Gap](/research/the-follow-up-gap) recorded 18 answers across three conversations run twice. Nine answers reported searches and citations. Nine returned answers but reported neither.

Those are completed answers, unlike the missing result in the repeated-query study. I can record that the search metadata was absent; I cannot infer every step used to produce the text.

The distinction affects implementation. An empty queries field needs a reason or status where the tool can provide one. The export should preserve whether the answer completed, whether search was available, what was reported and what remains unknown.

It also affects the language in a research report. “Search-enabled workflow” is not equivalent to “a fresh search occurred on every turn.” I now want that boundary visible before the tool's output is turned into advice.

## Automation changed the collection work, not the need for judgment

The tools can preserve queries, sources and answer text. I still need to decide whether two strings represent the same need, whether a citation supports a claim and whether a gap belongs in content at all.

A reported search about a current Canadian price may point to product-data ownership rather than a new article. A local availability question may require an inventory source. An ambiguous pronoun may be resolved correctly in a conversation while a standalone passage still needs a clearer subject.

That is why I would not hand an unreviewed list of branches to a writer as a brief. I would classify the evidence needs, inspect the existing pages and identify the operational dependencies first.

I would also preserve cases where my interpretation changed. A tool is more useful when its output can challenge my initial explanation than when it merely gives that explanation an impressive-looking format.

## The audit output I want now

For a small research engagement, I would want a reproducible prompt set, recorded conditions, raw outputs, collection status, query and source fields, an explicit coding method and a short list of decisions.

Each recommendation should identify its supporting observation and its uncertainty. If the evidence supports only a hypothesis, the next task is a test—not a claim that the platform works a particular way.

This makes the app a research instrument and a planning aid. It does not make it an oracle for every private search process. The useful result is a better question, a traceable observation and a more specific task for the team.

## What I would check on Monday

- Choose one real audience and decision, not only a keyword.
- List the questions required to complete that decision.
- Separate essential coverage from optional curiosity.
- Assign each question to the right page type.
- Identify where first hand or authoritative evidence is needed.
- Remove sections that do not improve the user’s next action.

## Frequently Asked Questions

**What is query fan out in simple terms?**
It is the expansion of one broad request into smaller searches or information needs that help a system construct a useful answer.

**Should content answer every possible sub question?**
No. Prioritize the needs relevant to the audience, page purpose, and decision. Other questions may belong on separate pages.

**Does the Query Fan-out Explorer predict Google’s exact searches?**
No. It supports structured research and coverage planning. It should not be treated as a record of a search system’s private process.

**How is this different from a keyword list?**
A fan out map focuses on connected information needs, entities, evidence, and page ownership rather than only variations of a phrase.
