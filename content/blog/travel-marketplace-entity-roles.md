---
title: Who Actually Runs the Tour? The Entity Clarity Problem on Travel Marketplaces
status: published
publishedDate: 2026-09-21
metaTitle: 'Travel Marketplace Entity Clarity: Who Runs the Tour?'
description: >-
  How I would clarify the roles of marketplaces, operators, and guides so
  travellers—and AI systems—can understand who sells, delivers, and supports a
  tour.
category: ENTITY SEO
targetQuery: travel marketplace entity clarity
---
A marketplace description says:

> We offer local experiences with expert guides around the world.

It sounds straightforward. But what does “we” mean?

Does the company employ the guides? Operate the tours? Connect travellers with independent suppliers? Handle payments? Set cancellation terms?

Those distinctions matter to a traveller. They also matter when a machine extracts a short description and uses it to explain the business.

I would start a marketplace’s entity audit by checking whether its sentences make those roles clear.

## Name the organisation and the relationship

Consider a fictional company called Example Travel.

“Example Travel connects travellers with independent tour operators” describes a relationship.

“Example Travel operates every tour on its platform” describes a different business.

If the second statement is untrue, it should not appear because somebody shortened the first one for a directory listing or generated a more confident marketing paragraph.

I would use explicit subjects and verbs when describing responsibilities:

- The marketplace lists the experience.
- The named operator supplies the tour.
- The selected offer states the cancellation terms.
- The booking confirmation identifies the relevant support contact.

Each sentence should match the actual business arrangement.

## Entity recognition does not establish the relationship

Finding a company name in a paragraph is one task. Determining what that company does is another.

A text-analysis tool might identify a marketplace, a hotel, and a city. That alone does not prove that it has correctly understood who owns the hotel, who sells the room, or who manages the reservation.

This is how I would read entity graphs produced by text-analysis tools: as representations produced by a particular analysis, useful for inspection. They are not evidence that Google stores the same graph or has accepted every relationship as true.

The labels on the connecting lines deserve as much scrutiny as the entities themselves.

## Watch the scope of each claim

A marketplace may list some accessible experiences. That does not make every listing accessible.

A hotel group may offer airport transfers at selected properties. That does not make transfers available at every location or included in every rate.

I would review sentences for words that accidentally broaden a claim: “all,” “every,” “our,” and an ambiguous “they.”

Where a condition matters, I would keep it close to the statement it qualifies.

A qualification buried three sections later may be missed when somebody quotes, summarizes, or extracts the earlier sentence.

## Use NLP as a diagnostic

I would take a sample of About pages, supplier profiles, and listing introductions and ask an analysis tool to identify:

- The organisations and people mentioned.
- Their stated roles.
- The relationships asserted between them.
- The evidence sentence supporting each relationship.
- Any ambiguity or missing qualification.

Then I would review the output against the actual operating model.

A neat graph with the wrong operator relationship is a failed result. A system that flags the relationship as uncertain may be giving us a useful editing task.

## Keep prose, markup, and operations aligned

Clear natural language and structured data can complement each other.

Google advises that structured data should match visible content. Its AI-search guidance does not require special AI markup. [Google’s AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).

I would therefore resolve disagreements before adding more markup. If the About page implies that the marketplace operates the tours while supplier profiles describe independent operators, the underlying explanation needs attention.

My final test would be to ask someone unfamiliar with the business three questions:

Who sells this? Who delivers it? Who helps if something changes?

If our pages cannot support clear answers, that is a concrete problem worth fixing before we talk about making the brand more understandable to AI.
