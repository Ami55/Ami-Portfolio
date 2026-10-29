---
title: 'No Citation, No Credit? What My 18-Answer Study Could Actually Tell Me'
status: draft
publishedDate: 2026-10-29
metaTitle: 'AI Citation Tracking Limits: Findings from My 18-Answer Study'
description: 'I compared six outdoor-gear questions across three AI search surfaces. The visible citation patterns changed—but they could not tell me which uncited pages had influenced an answer.'
category: FIELD NOTES
targetQuery: what AI citation tracking can and cannot measure
---

I called one of my studies “Absorbed, Not Credited?” because the concern is easy to recognize: a business publishes useful knowledge, an assistant gives a similar explanation, and no source link appears.

But the title contains a question for a reason. Looking at an uncited answer does not let me identify the pages that influenced it. It does not establish whether a particular guide was in the model’s training data, whether retrieval occurred, or whether a source was used without a visible link.

That distinction became the most important part of interpreting the study.

I compared six outdoor-gear prompts across ChatGPT, Google AI Mode and Google AI Overviews. The report recorded 18 answers and 53 visible credited sources. Some questions produced different citation patterns across the three surfaces. Others produced similar source types.

The observations were useful. The explanations I could confidently attach to them were much narrower.

![“No Citation, No Credit?” beside an answer card and a source document connected by a partly visible mint thread.](/blog/images/citation-limits.png)

Conceptual illustration of the limits of visible attribution. A missing link does not reveal an answer’s hidden source history.

## What I recorded

The study was collected on October 24, 2026, from Vancouver. I used ChatGPT in a temporary chat, Google AI Mode on a signed-in account, and the AI Overview displayed for a regular Google search.

The six prompts covered different information needs:

- How to choose a waterproof hiking jacket.
- Whether down or synthetic insulation is better in wet weather.
- The best waterproof hiking jacket under $300 in Canada.
- Hiking jackets on sale that week in Canada.
- Whether the Arc’teryx Beta AR was worth its price in 2026.
- What people were saying about the Patagonia Torrentshell 3L on Reddit.

For each answer, I recorded the displayed source links and grouped them by type. That is an interface-level observation. I did not have browsing traces or access to the systems’ training data.

The complete report is [Absorbed, Not Credited?](/research/absorbed-not-credited). Its charts show where links appeared. They should not be read as a map of every source the system considered.

## The general questions exposed a difference between surfaces

For the two general advice prompts, ChatGPT and Google AI Mode displayed no citations. That made four uncited answers across those two tools.

The AI Overviews displayed seven sources for each of the same two prompts.

It would be easy to tell a simple story from that contrast: one surface retrieved information while the others answered entirely from memory. The visible answers alone do not establish that mechanism.

The defensible observation is that citation display differed. A source was visibly credited in one surface and not visibly credited in another. That affects what a publisher can observe, but it does not identify an uncredited source.

This is an important correction to the way the original report sometimes phrases its findings. Descriptions such as “absorbed” or “answered from memory” go beyond what a screenshot of an uncited answer can prove.

I would keep the observation and revise the inference. That is part of making independent research useful: a compelling interpretation should remain open to challenge, including from the person who wrote it.

## Price and recency questions showed citations in every sampled tool

The under-$300-in-Canada prompt and the on-sale-this-week prompt produced visible citations in all three tools.

For the price-constrained question, the displayed source counts were two in ChatGPT, three in AI Mode and six in the AI Overview. For the current-offers question, they were two, five and four respectively.

That pattern suggests a useful hypothesis: requests involving specific purchasing constraints may create different evidence needs from general advice. A current price or offer needs verification if the answer is to be reliable.

But I did not run a controlled experiment isolating recency, geography and price. Several things changed together between the prompts. I cannot say which constraint caused a search, or even establish search execution solely from the displayed links.

I would therefore use the pattern to design a follow-up test. Vary one condition at a time, repeat the questions, and collect tool-reported search metadata where it is available. That would provide stronger evidence than a single comparison of final answers.

The distinction between a useful hypothesis and an established mechanism is where much of the practical value sits.

## A year in the prompt was not a guarantee of visible sourcing

The brand-value question named the Arc’teryx Beta AR and included the year 2026. ChatGPT displayed no sources in that recorded answer. The two Google surfaces each displayed seven.

That is a useful counterexample to an overly simple testing rule. Adding a date to a prompt did not guarantee visible citations in every surface I checked.

It does not follow that the uncited answer was out of date, or that the cited answers were current and accurate. Those judgments require checking the actual claims and evidence.

I would separate the presence of a date in the prompt, the presence of source links, and the freshness of the underlying facts. They are related questions, but none is a reliable substitute for the others.

For a business tracking AI answers, that means “current-information prompt” should be a test category, not a label that automatically certifies the result.

## The source type changed with the request

For the brand-value prompt, eight of the 14 displayed links across the two cited answers were classified in the report as independent reviewers. That was an observation of the source mix, not a finding that their testing caused the recommendation.

For the prompt explicitly asking what Reddit users said, all three tools credited Reddit and no other site.

The latter result has an obvious design constraint: I named the community in the question. It would be misleading to interpret the result as an unprompted preference for Reddit across all shopping searches.

The more general lesson is to keep the information request beside the source count. A community-opinion question, a current-price question and a technical explanation can call for different kinds of evidence.

I would inspect the role each source played before proposing a channel strategy. Was it used for a specification, an opinion, a local purchasing option or a comparison? A list of domains alone cannot answer that.

## What a visible citation does establish

A displayed source link establishes that the interface credited that URL or source in the recorded answer. Depending on the interface, its placement may also indicate which statement it is intended to support.

That is valuable evidence, but it is not the end of the audit.

The research paper [Evaluating Verifiability in Generative Search Engines](https://aclanthology.org/2023.findings-emnlp.467/) distinguishes citation coverage from whether a cited source actually supports the associated statement. It studied particular systems in 2023; its results should not be presented as current error rates for today’s products. The distinction remains useful for defining an audit.

I would check the supporting passage, its date and its scope. Does a general product review support the exact current-price claim? Does a policy page describe the selected variant? Has an important qualification been omitted?

My article on [why an AI citation is not proof of correctness](/blog/ai-citation-does-not-prove-answer-correct) covers that process. This study asks the earlier measurement question: what can I infer when a link is present or absent at all?

## What an absent citation cannot establish

Without a visible citation, I cannot work backwards from familiar wording and confidently identify a source.

Common explanations can resemble one another because they describe the same topic. A model may have encountered many similar sources. A retrieved source may not be displayed. The available interface may simply not expose the information I need to resolve the question.

Those are possibilities, not a diagnosis of any answer in the study.

I would mark the provenance as unknown unless I had stronger evidence. Unknown is a useful outcome in research. It prevents a missing observation from turning into an unsupported narrative about content theft, training influence or lost credit.

The same principle applies to business impact. No visible link does not measure a lost visit. A visible link does not measure a click. A brand mention does not establish a sale. Each requires its own data and a method suited to the question.

## Information gain is a content principle, not a conclusion from a missing link

I still want content to contribute something useful: original measurements, a well-documented comparison, first-hand observations or a clearer explanation of a difficult decision.

But this study does not prove that general guides are absorbed while original evidence earns citations. I did not compare controlled versions of the same page, measure their information gain, or isolate the factors behind source selection.

The report’s source patterns can inform a test of that idea. They cannot complete the test for me.

For a buying guide, I would ask what a reader learns that helps them choose, whether the evidence can be checked, and which facts need updating. Those are worthwhile editorial questions even if the page never appears as a visible AI citation.

Turning them into a guaranteed citation recipe would weaken the work. It would replace a useful content standard with a promise the study cannot support.

## How I would redesign the monitoring report

I would give each prompt a row with its purpose, platform, date, account context and saved answer. Beside it, I would record brand presence, visible links and the claims those links appear to support.

Where a tool exposes search metadata, I would keep it in a separate field. A reported query is different from a visible citation, and neither is a complete account of internal reasoning.

I would distinguish “no visible sources,” “source inaccessible,” “source checked” and “support uncertain.” Combining those states into one zero would erase information the team needs.

Then I would repeat the prompts under recorded conditions. My [study of repeated query runs](/research/same-question-different-searches) shows why a single answer is a fragile baseline for interpreting a change.

The report would finish with a small number of actions tied to observed problems. An outdated source fact needs a correction. An unsupported generated claim needs documentation and follow-up. A missing citation without an identifiable source needs further investigation, not an invented attribution.

## A practical application for travel content

Imagine an assistant answering a hotel cancellation question without a source. I would not assume it learned the answer from the hotel’s policy page. I would first check what the answer says and whether the actual booking conditions support it.

If it displays a link, I would still check whether that link covers the rate, dates and conditions in question. A link to a general hotel page may not establish a particular refund rule.

For tours, the same issue appears with pickup, accessibility or return-to-ship timing. The consequential part is often a condition attached to the promise.

These are hypothetical applications, not travel results from this study. They illustrate why accurate source material and careful answer review belong together. Counting citations cannot replace either task.

## What I would keep from the experiment

Six prompts, three surfaces and one day cannot establish a universal rule about attribution. The account conditions differed, and the AI Overview source positions were not recorded. There were no traffic, conversion or training-data observations.

What I would keep is the habit of separating the visible result from the explanation I want to attach to it.

The study showed that citation display changed across question types and surfaces. It helped me formulate better tests about source roles, current facts and product decisions. It did not identify uncredited training sources or quantify lost publisher value.

That narrower conclusion is still useful. It gives a team a report they can act on without asking them to believe more than the evidence shows.

Read [Absorbed, Not Credited?](/research/absorbed-not-credited) for the original record. For a separate experiment that collected reported searches as well as sources, see [The Follow-Up Gap](/research/the-follow-up-gap) and its [Follow-Up Query Studio](/apps/follow-up-query-studio).
