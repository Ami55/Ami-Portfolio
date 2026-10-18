---
title: The Relationship Audit I Would Run Before Adding More Content
status: published
publishedDate: 2026-10-18
metaTitle: An Entity Relationship Audit Before Adding More Content
description: >-
  How I would audit the relationships between entities, verify their conditions,
  and find the missing facts that stop customers getting clear answers.
category: SEMANTIC SEO
targetQuery: entity relationship content audit
---
A website can contain all the right facts and still leave an important question unanswered.

A company offers a service. A specialist has a qualification. A location serves a particular area. Those facts might appear on three different pages.

But does that qualified specialist deliver that service in that location?

That is a different claim. We cannot establish it simply because all three facts exist somewhere on the website.

This is where I would take an entity audit further. After checking which entities appear, I would check whether the relationships between them are actually supported.\
\
![An open guide with a highlighted passage connects to three focused articles, illustrating related content at different levels of detail.](/blog/images/relationship-audit-before-more-content/08-content-structure.png)

## Start with a question that crosses pages

Consider a hypothetical training provider.

Its website lists an advanced analytics course, an instructor with relevant experience, and a Vancouver training centre. A prospective student asks whether that instructor teaches the advanced course in Vancouver.

The course page links to a general team page. The team page links to the company’s locations. Everything is connected through navigation, but the teaching assignment remains unclear.

Adding another paragraph about analytics would not resolve that uncertainty. Neither would mentioning Vancouver more often.

The missing information is a specific relationship: who teaches which course, where, and during which session.

## Why GraphRAG makes this worth examining

Microsoft’s GraphRAG builds a graph from source text and uses entities, relationships, and community summaries to support retrieval. Its documentation distinguishes questions about specific entities from questions requiring an understanding of a wider collection. [Microsoft GraphRAG documentation](https://microsoft.github.io/graphrag/).

That gives me a useful way to examine content. It does not establish that Google uses this particular implementation or that a website needs its own graph database.

My practical question is simpler: could someone reconstruct the answer from our published evidence without supplying an assumption?

## The audit needs to include the conditions

I would take five important customer questions and map the relationships needed to answer each one.

For the training example:

{% table %}
- Relationship
- Evidence needed
---
- Instructor teaches course
- Confirmed teaching assignment
---
- Course runs at location
- Current session details
---
- Qualification belongs to instructor
- Verified professional information
---
- Assignment applies to this date
- Schedule or effective period
{% /table %}

The date matters. An instructor may have taught the course last year. A location may offer it only occasionally.

A relationship can be historically correct and currently misleading.

I would therefore record the supporting page, the person responsible for confirming the fact, and any condition that changes its meaning. An unsupported relationship stays marked as unknown until somebody can verify it.

## A link cannot carry the whole explanation

Internal links help a reader reach supporting information. The surrounding sentence should explain why that information is relevant.

“Meet our team” is useful navigation. It does not confirm a teaching assignment.

A sentence identifying the instructor for a particular session would establish much more—provided the assignment is true and maintained.

I would make that relationship clear where the customer needs it, then link to the supporting profile or schedule. The aim is to reduce the amount of interpretation required.

## What I would measure

The first test would be answerability.

Give a reviewer the five questions and the relevant pages. Can they produce an accurate answer? Can they identify the evidence? Do two reviewers reach the same conclusion?

After fixing the gaps, repeat the exercise.

That would demonstrate an improvement in the clarity of the information. Any change in AI citations would need separate observation.

Olaf Kopp’s discussion of graph-based retrieval is a useful starting point for this question. My proposed audit brings it down to a decision a content team can actually make: which missing relationship prevents somebody from understanding our offer? [Kopp’s Graph RAG article](https://www.kopp-online-marketing.com/ultimate-guide-to-graph-rag-why-it-matters-for-geo).
