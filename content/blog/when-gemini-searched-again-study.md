---
title: 'When Gemini Searched Again: Findings from 18 Conversational Answers'
status: draft
publishedDate: 2026-10-29
metaTitle: 'Conversational AI Search: My 18-Answer Follow-Up Study'
description: 'I tested three conversations in my Follow-Up Query Studio to see when Gemini searched again, how earlier context appeared in reported queries, and what changed in the cited sources.'
category: FIELD NOTES
targetQuery: conversational AI search follow-up questions study
---

A follow-up question can be only six words long and still contain a complicated search brief.

“Where can I buy or rent it in Vancouver?”

On its own, that sentence tells us almost nothing about the product. In the conversation I tested, “it” meant bear spray, and the earlier questions concerned a first multi-day hike in British Columbia. Understanding the final question required carrying that context forward.

That was the part I wanted to examine. We talk about AI search as if each prompt starts a new, independent search journey. But a useful answer may depend on decisions made several turns earlier. I wanted to see what the system reported doing when the question became shorter and the context became more important.

So I used my own Follow-Up Query Studio to run three outdoor-gear conversations twice, with three predefined turns in each conversation. That gave me 18 answers to inspect.

The result was more uneven than a simple “AI searches at every turn” explanation would suggest. Nine answers reported searches and citations; nine reported neither. When follow-ups did trigger reported searches, the queries retained the earlier topic, while much of the cited website set changed.

![Three conversation cards connected to a magnifying glass and a fresh cluster of source nodes on a navy and purple background.](/blog/images/follow-up-search.png)

*Conceptual illustration of a conversation leading to another search. The illustration does not represent measured query counts or a platform architecture.*

## Why I wanted to move beyond simulated searches

There is an important distinction between asking a model what it might search and recording the searches exposed by a search-enabled tool.

The first approach can be useful for planning. A model can suggest plausible questions, comparison criteria and sources. But those suggestions are not evidence that an AI search system actually issued those queries or retrieved those pages.

An earlier version of my workflow imagined queries and sources. For this study, I used an upgraded app that collected reported grounding queries and citations. That gave me a narrower but more defensible question: what did this particular configuration report searching and citing during these runs?

Google’s [Gemini grounding documentation](https://ai.google.dev/gemini-api/docs/google-search) describes metadata that can expose search queries and supporting sources when Google Search grounding is used. That metadata is observable output. It is not a transcript of hidden reasoning, and I do not treat it as one.

This change in measurement matters. A plausible explanation can sound convincing enough to become an optimization recommendation. I wanted the recommendation to come after the observation, with the boundary between them still visible.

## What I tested

The study used Gemini 3.1 Flash-Lite with Google Search grounding available through the app. I ran the tests on October 28, 2026, in Vancouver.

The conversations covered three different decisions:

- Choosing a waterproof hiking jacket in Canada, then asking whether Gore-Tex justified its cost, then narrowing the choice to a budget under $300 CAD.
- Packing for a first multi-day hike in British Columbia, then asking about bear spray, then asking where to buy or rent it in Vancouver.
- Comparing down and synthetic insulation for wet Canadian conditions, then asking about hydrophobic down, then asking which brands were best.

Each conversation had three predefined turns and was run twice. The follow-ups were my test inputs, not questions collected from actual customers. The app passed short summaries of earlier context rather than an unrestricted transcript of a long conversation.

I recorded the reported queries, citations and cited websites, along with suggested next questions. The distinction between those fields is important: an issued search query, a cited source and a suggested future question are three different observations.

The full methods and findings are in [The Follow-Up Gap study](/research/the-follow-up-gap). You can also read about the [Follow-Up Query Studio](/apps/follow-up-query-studio) or [open the app](https://seogirl-follow-up-query-studio.vercel.app/).

## Search was available throughout, but not reported throughout

Across the 18 answers, I recorded 25 reported searches and 115 citations. Those totals do not mean every answer used search.

Only nine answers reported queries and citations. The remaining nine reported neither. Broken down by conversation stage, searches appeared in:

- Four of the six opening answers.
- Three of the six first follow-up answers.
- Two of the six second follow-up answers.

In this sample, reported search became less frequent later in the conversation. With only six observations at each stage, I would not turn that pattern into a general rule about Gemini or conversational search.

The more useful lesson is about how I describe the evidence. “Grounding was enabled” is not equivalent to “this answer reported a fresh search.” And “no search was reported” does not establish exactly how the answer was produced. The available metadata cannot answer every question about internal processing.

For content strategy, this means I should not assume that each follow-up creates another fresh opportunity to be retrieved. Some turns may produce a new reported source set; others may not expose one at all. A useful monitoring setup needs room for both outcomes.

## The follow-up queries carried the earlier topic

All 15 reported searches associated with follow-up answers retained earlier topic context.

The question about whether Gore-Tex was worth the additional cost produced a reported query about the benefits of Gore-Tex compared with other waterproof membranes for hiking. The budget follow-up produced a query about value waterproof shells under $300 CAD. The Vancouver follow-up produced a query about stores renting bear spray in the city.

These are concrete examples of why a short prompt is not always a short information need. The visible wording becomes smaller while the accumulated decision becomes more specific.

That changes how I would organize a content brief. A page aimed at “hiking jacket Canada” may answer the opening question adequately but leave the next decision unresolved. The follow-up may need a comparison between membrane technologies, a price boundary or evidence that a particular option is available locally.

It does not follow that I need a separate page for every possible follow-up. Some questions belong together. The practical task is to identify where the evidence changes enough to require a distinct section, comparison or page.

I would rather map those dependencies explicitly than produce a large collection of loosely related FAQs. “Which one?” needs a clear product referent. “Is it worth it?” needs a defined trade-off. “Can I get it here?” needs a location and current availability.

## New questions brought in many new cited websites

Among follow-up answers that searched, 86% of the cited sites were new to that conversation run.

That figure describes source turnover within this small experiment. It is not a probability that any particular website will be replaced, and it does not show that the new sources were better.

Still, it challenged the idea that the opening answer establishes a stable set of sources for the rest of the journey. A general explanation, a product comparison and a local purchasing question can require different evidence. The underlying topic remains connected while the sources supporting the answer change.

I find that distinction useful for separating two visibility questions. Was a website cited at one stage? And was it useful across the stages that mattered to the decision? Those are different measures.

A site might provide a strong general guide but have little to contribute when the conversation reaches a local stock question. Another might appear only when a user asks where to buy something. Counting both as one undifferentiated “AI mention” would hide that difference.

My existing article on [follow-up questions in multi-turn AI search](/blog/follow-up-questions-multi-turn-ai-search) covers the broader concept. This experiment adds a small observed example of how context continuity and source turnover can coexist.

## What the Reddit pattern does—and does not—tell me

Reddit appeared in eight of the nine answers that reported sources.

That is a noticeable pattern in these outdoor-gear conversations. It is not enough to conclude that posting on Reddit will make a brand visible in AI answers. I did not test a Reddit campaign, compare source quality or isolate why a source was chosen.

What I can do is use the observation as a research lead. I would inspect the cited discussions and ask what job they performed: practical trade-offs, product ownership experience, local advice, disagreement or something else. That inspection would help distinguish a content gap from a distribution opportunity.

Copying the surface format would miss the point. A brand publishing a paragraph that sounds conversational has not necessarily supplied the independent experience or specific evidence that made a discussion useful.

The unit I want to understand is the contribution to the answer. A domain count alone cannot tell me what that contribution was.

## Suggested next questions are hypotheses about demand

The app also recorded suggested next questions. Care or re-waterproofing appeared after 12 of the 18 answers. British Columbia bear-safety themes appeared in 13 of the 18 suggestions recorded in the report.

Those are separate recorded categories, and they should not be combined into a single demand estimate. More fundamentally, they are model-generated suggestions. They are not search volumes, customer interviews or observed user behaviour.

I would use them to expand a research checklist. For example, a recurring care question could justify checking Search Console, on-site search, support tickets and customer conversations. If those sources also show uncertainty about maintenance, there is a stronger reason to improve the content.

That is a useful role for an app: help me notice questions I should investigate. It becomes less useful when its suggestions are presented as proof of what customers want.

## How I would apply this to a travel marketplace

The following is an application of the findings, not a travel-marketplace result from this experiment.

Imagine a traveller starting with “Find me a private tour for my cruise stop.” The next questions might concern walking distance, the meeting point, transport and the return-to-ship buffer. A hotel conversation could move from a neighbourhood recommendation to room occupancy, cancellation conditions or the total cost for specific dates.

I would map the journey as a sequence of unresolved decisions. For each decision, I would identify the evidence a marketplace can actually provide, its owner and how quickly it changes.

A general destination guide can explain the area. A tour page can specify duration and meeting arrangements. A booking system may be needed to confirm availability. Those sources should agree, but they do different jobs.

This is where content and operations meet. A polished explanation cannot compensate for a missing pickup policy. A statement about flexible cancellation is not useful if the conditions are unclear. A claim about accessibility needs concrete detail rather than a reassuring adjective.

I would test representative conversations, record the source set at each stage, and look for repeated unresolved questions. Only then would I decide whether the gap requires clearer copy, better internal links, verified product attributes or a live data connection.

## What I would change in the next experiment

This was a small exploratory study: three topics, two runs per conversation, one model configuration and one evening of testing.

The predefined follow-ups made the runs comparable, but they also limited the range of possible conversations. Passing summaries of earlier context introduced another constraint. The results do not establish what would happen in a consumer interface with a different memory strategy, tool policy or model.

My next version would increase the number of conversations and repeat them over several dates. I would preserve the exact prompts and context payloads, record the model configuration, and separate queries, citation URLs and distinct sites in the export. I would also classify follow-ups by decision type before inspecting the results.

Most importantly, I would keep the content-change test separate. This study observed search behaviour. It did not demonstrate that rewriting a page caused more citations, traffic or bookings.

The question it helped me ask more precisely is this: when a conversation moves forward, what new evidence does the answer need? That is a much better starting point for a content plan than assuming the first prompt describes the entire journey.

## Explore the research

Read [The Follow-Up Gap](/research/the-follow-up-gap) for the study report, methodology and limitations. The [Follow-Up Query Studio page](/apps/follow-up-query-studio) explains the tool used to collect these observations.

For the next part of the measurement problem, read [Same Prompt, Different Searches](/blog/same-prompt-different-searches-experiment): my separate experiment on variation across repeated runs of the same question.
