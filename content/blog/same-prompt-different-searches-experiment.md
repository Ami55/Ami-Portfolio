---
title: 'Same Prompt, Different Searches: What My Repeated Runs Revealed'
status: draft
publishedDate: 2026-10-29
metaTitle: 'Query Fan-Out Variability: My Repeated-Run Experiment'
description: 'Across 11 completed answers to four outdoor-gear questions, I recorded 33 reported queries and 167 citations. Here is what varied, what persisted, and how I would measure a content change.'
category: FIELD NOTES
targetQuery: query fan-out repeated runs experiment
---

If I change a page and an AI answer changes afterwards, did my edit cause the difference?

It is a tempting conclusion. The sequence looks persuasive: publish a clearer explanation, run the prompt again, find a new citation. But before I can interpret that result, I need to know how much the answer changes when I have not edited anything.

That is why I repeated the same questions in my Query Fan-Out Explorer. I wanted a baseline for variation: not a prediction of every hidden query, but a record of the search queries and citations returned by this particular tool setup.

I requested three runs for each of four outdoor-gear questions. Eleven of the 12 requested answers completed. Those answers returned 33 reported queries and 167 citations.

The exact query wording varied considerably. The cited websites varied too, but the amount of overlap depended on the question. A general jacket question and a down-versus-synthetic comparison did not produce the same kind of stability.

For me, that is the important finding. Variability is something to measure by question and outcome, rather than a vague excuse for why a visibility report changed.

![One query card branching along three purple paths into overlapping clusters of mint and lavender source tiles.](/blog/images/repeated-searches.png)

*Conceptual illustration of repeated searches producing different source combinations. The tiles are not a chart of the study results.*

## The question behind the test

My site already has an explanation of [query fan-out](/blog/query-fan-out-explained). This experiment asks a narrower question: what changes when I run the same test prompt more than once?

Google says its AI search features [may use query fan-out](https://developers.google.com/search/docs/appearance/ai-features) to issue related searches across subtopics and sources. That provides useful context for thinking about multiple information needs. It does not establish that my app reproduces Google AI Mode, or that every platform follows the same process.

The app’s reported queries are the evidence available here. I cannot infer an entire proprietary search architecture from them. I can compare what was exposed across completed runs and use that comparison to design better tests.

This is also why I separate a query simulator from an instrumented experiment. A model can generate an excellent list of plausible searches without performing them. In this study, I was interested in reported search activity and citations, with the tool’s limits kept visible.

## Four questions, three requested runs each

I chose four questions covering different levels of specificity:

- How to choose a waterproof hiking jacket in Canada.
- Whether down or synthetic insulation is better for wet conditions.
- Which waterproof jacket to choose under $300 CAD in Canada.
- What to pack for a first multi-day hike in British Columbia.

I requested three runs per question on October 28, 2026. One run for the general jacket question did not complete, leaving two answers for that question and three each for the others.

I excluded the missing run from the completed-answer analysis. It should not be treated as an answer with zero queries, zero citations or no visibility. A failed observation and a completed observation with no reported search are different things.

The app supplied Canada and English audience context, MEC as the target site, and REI, OutdoorGearLab and Arc’teryx as competitors. That context is part of the experiment. It may have influenced the searches, so these were not completely neutral, context-free questions.

The full report is [Same Question, Different Searches](/research/same-question-different-searches). The [Query Fan-Out Explorer page](/apps/query-fan-out-explorer) explains the tool, and the [live app is available here](https://seogirl-query-fanout-ai-coverage-auditor.vercel.app/).

## Exact wording was rarely repeated

Across the completed answers, I recorded 30 distinct query strings within the 33 reported query instances. Three distinct strings appeared in more than one run when differences in case and punctuation were ignored.

That is a result about exact wording. It is not evidence that the underlying intent changed just as often.

Two queries can ask for almost the same evidence while using different words. Conversely, a small wording change can introduce an important constraint, such as a Canadian price limit or a specific jacket model. Treating all non-identical strings as entirely different topics would exaggerate the strategic implications.

I would therefore use two layers of analysis. First, preserve exact queries so the observation remains auditable. Second, group them by the decision or evidence need they express. That semantic grouping needs a documented method; it should not silently replace the raw query log.

For a content plan, the second layer is usually more actionable. I do not need a new page for each wording variant. I need to understand which recurring questions require a distinct answer, and which variations belong to the same section.

The raw wording is still useful. It can reveal a model name, a location or an attribute I had overlooked. But it becomes an input to analysis rather than a list of phrases to insert into copy.

## The question changed the size of the search task

The budget jacket question produced four to seven reported searches per completed answer, averaging about 5.3. Across its three answers, there were 14 distinct queries, two of which repeated, and 36 distinct cited sites.

The other questions generated smaller search sets. The general jacket question averaged 2.5 reported searches across its two completed answers. The insulation comparison and British Columbia packing question each averaged two across their three answers.

I cannot isolate the reason for the difference from this small sample. Budget, product choice, geography and the app’s context all interact. But the observation suggests a useful research hypothesis: some decisions require assembling more kinds of evidence than others.

A budget-constrained product recommendation might involve product suitability, current pricing and Canadian availability. A conceptual comparison may rely on a more stable body of explanatory material. That is an interpretation I would test, not a mechanism this experiment proved.

For a marketplace, I would make that distinction explicit in the test set. “What should I consider?” and “Which available option fits these constraints?” should not be assumed to create equivalent retrieval tasks.

## Source overlap depended on the topic

The report compared distinct cited-site sets using average pairwise Jaccard overlap: the shared sites divided by the sites present in either set, averaged across the available pairs of runs.

The results were:

- General jacket choice: 17% overlap, based on two completed answers.
- Down versus synthetic insulation: 62% overlap.
- Jackets under $300 CAD: 31% overlap.
- First multi-day hike in British Columbia: 25% overlap.

These percentages describe overlap between cited website sets, not agreement between answers or overlap between exact citation URLs. A website can be present in two answers while different pages from that site support different claims.

The insulation question had the most stable cited-site set in this sample. The general jacket question had the least overlap, but also the smallest number of completed answers. I would not rank the inherent stability of those topics without more runs.

What I would change immediately is the reporting. A single overall stability figure could conceal this range. A useful visibility report needs the prompt-level detail behind its summary.

If a page appears in one run and disappears in another, I want to know whether the whole source set was unstable, whether a particular decision changed, or whether the page repeatedly failed to contribute. Those cases call for different responses.

## Geography appeared, but my proxy was imperfect

The share of cited sources using a .ca domain varied by question: 8% for general jacket choice, 0% for insulation, 53% for the budget jacket question and 46% for the British Columbia hike question.

A .ca domain is a limited proxy. It does not prove Canadian ownership, Canadian stock or relevance to every Canadian shopper. A global domain may provide highly relevant Canadian information, while a .ca page may still lack the facts a buyer needs.

I would use this measure to flag something for inspection, not to grade geographic quality automatically.

For example, the next step for the budget question would be to check whether the cited pages actually supplied Canadian prices, delivery information and availability. That would move the analysis from a domain suffix to the evidence needed for the decision.

This distinction becomes even more important for hotels and tours. A city name on a page does not confirm a room is available for the requested dates or that a tour starts near a particular cruise terminal. Geographic relevance has to reach the facts, not stop at the label.

## Product and organization names expanded the research brief

Reported queries included names such as Foray II, Patagonia Torrentshell 3L, Black Diamond StormLine, Marmot PreCip and Columbia OutDry. AdventureSmart and BC Parks also appeared in the broader query material.

Some names were not in the supplied competitor list. That makes them worth examining, but it does not make their appearance free from the influence of the overall prompt context.

I would classify these additions by function. A product name may indicate comparison or selection. A safety organization may supply guidance or verification. Those are different roles, even if both appear in a list of entities.

The content opportunity is not simply to mention every name. It is to understand which relationship helps answer the question: a product and its verified attributes, an organization and its guidance, or a location and its practical constraints.

That is where entity analysis becomes useful. It helps organize evidence instead of becoming another form of keyword stuffing.

## Why I would not use one before-and-after answer as proof

This experiment did not test an edited page. It measured variation across repeated runs of questions within one setup.

That baseline makes me more cautious about a common optimization story: an answer changed after a content update, so the update must have caused the change. There are several competing explanations, including the variation I observed here.

For a content experiment, I would preserve the prompt, model configuration, tool instructions and audience context. I would repeat the test before and after the change, keep failed runs separate, and record more than a binary “mentioned or not mentioned” outcome.

I would also inspect the role of the citation. Did the page support the fact I edited? Did it appear as a general reference? Was the brand recommended, merely mentioned, or linked for a different reason?

Those distinctions make the result more useful even before a causal claim is justified. A citation tied to the changed information is more relevant to the hypothesis than an unrelated link elsewhere in the answer.

My article on [testing content changes and AI visibility](/blog/testing-content-changes-ai-visibility) develops that measurement problem. This repeated-run study supplies a concrete reason to build variation into the design.

## A practical way to turn the findings into a content brief

I would start with a small set of questions representing real decisions. Then I would repeat them under recorded conditions and group the reported queries by evidence need.

For each recurring need, I would identify the page that should answer it, the facts required, and whether those facts are actually available. A comparison without verified attributes is incomplete. A purchasing recommendation without current availability may be unsuitable for the decision.

I would keep a separate column for uncertainty. A question appearing once in a small sample deserves less confidence than one recurring across several runs and supported by customer data. A suggested question should be marked as suggested, not silently promoted to observed demand.

The final brief would describe what the reader needs to resolve and what evidence the business can contribute. The reported query wording would remain attached as supporting material. That gives the writer a clearer task than “optimize for these 30 phrases.”

For a travel business, this could mean distinguishing destination discovery from selection under a budget, date or mobility constraint. That is a proposed application, not a result established by this outdoor-gear experiment.

## What this study cannot establish

Eleven completed answers from one evening are a starting point, not a universal model of AI search.

The app context may have steered the searches. One requested run was missing. Exact-string matching understates semantic similarity. Citation counts can include repeated sources, and distinct-site overlap cannot explain answer quality by itself.

The findings also do not transfer automatically to Google AI Mode, ChatGPT, Perplexity or a different Gemini configuration. The report does not document an exact model version that would justify adding one here.

My next test would repeat the questions over time, expand the topic set and compare exact wording with a transparent semantic classification. I would also distinguish changes in query formulation from changes in the final cited evidence.

What I can already take from this test is a better standard of evidence. Before celebrating a new citation or diagnosing a lost one, I need to understand the range of outcomes the same question can produce. Repetition is part of the measurement, not an inconvenience to remove from the report.

## Explore the research and tool

Read [Same Question, Different Searches](/research/same-question-different-searches) for the complete study, or visit the [Query Fan-Out Explorer](/apps/query-fan-out-explorer).

For a related question about what happens after the opening prompt, read [When Gemini Searched Again](/blog/when-gemini-searched-again-study), my separate study of conversational follow-ups.
