---
title: >-
  A Hotel Is Not a Booking: How I Would Model a Travel Marketplace’s Knowledge
  Graph
status: published
publishedDate: 2026-10-14
metaTitle: 'Knowledge Graphs for Travel Marketplaces: Model the Booking'
description: >-
  How I would connect hotels, rooms, rates, tours, and dated offers in a travel
  knowledge graph—and test whether those relationships support a correct
  booking.
category: ENTITY SEO
targetQuery: travel marketplace knowledge graph
---
A traveller asks for a quiet hotel near the station, with a room for three people, breakfast included, and free cancellation.

That sounds like one request.

For a marketplace, it is a question about several different things: a property, a location, a room configuration, a rate plan, a set of dates, and a cancellation policy.

The difficult part is keeping those things connected correctly.

A hotel might serve breakfast without including it in the selected price. A room might accommodate three people while the displayed offer covers only two. Free cancellation might apply to one rate and disappear when the traveller chooses another.

This is why I would start a travel knowledge graph with the booking decision.\
\
![Hotel connected to a room, key, calendar, and booking ticket, illustrating relationships in a travel knowledge graph.](/blog/images/travel-marketplace-knowledge-graph-booking/01-knowledge-graph.png)

## Decide which facts belong to which entity

Consider a hypothetical hotel called Harbour House.

Its address belongs to the property. The number of beds belongs to a room type or specific accommodation. Breakfast inclusion belongs to an offer. Availability depends on the requested stay and occupancy.

Putting everything into one hotel description makes it easy to lose those distinctions.

Even Schema.org makes an important distinction here: describing an accommodation’s amenity does not establish whether that amenity is included in an offer or costs extra. [Schema.org’s HotelRoom documentation](https://schema.org/HotelRoom).

I would therefore separate the information before deciding how to publish it:

{% table %}
- Entity
- Example information
---
- Property
- Address, facilities, check-in arrangements
---
- Room type
- Beds, capacity, physical features
---
- Rate plan
- Meal inclusion, cancellation terms
---
- Dated offer
- Stay dates, occupancy, price, availability
---
- Supplier
- Who provides and maintains the inventory
{% /table %}

The graph becomes useful when those entities have explicit relationships.

A dated offer applies to a particular room type, under a particular rate plan, at a particular property. Changing one part can change the answer.

## Tours need the same care

For tours, I would distinguish the itinerary from the departure.

A tour description might say that an experience is offered in English and French. That does not establish that tomorrow’s 10 a.m. departure is available in both languages.

Similarly, a guide profile may list several languages without confirming who will lead a particular booking.

The relationships I would want to preserve include:

- Which operator supplies the tour.
- Which departure follows which itinerary.
- Which language is confirmed for that departure.
- Which ticket option includes transport.
- Which cancellation terms apply to that offer.

Otherwise, a system could combine accurate facts into an inaccurate recommendation.

## Give relationships a source and a time

A graph does not become trustworthy simply because it looks structured.

If an operator changes the meeting point, the old relationship may remain perfectly readable and completely wrong.

For facts that affect a booking, I would record where the information came from, when it was checked, and who owns the update. For rapidly changing information, I would retrieve current data when needed rather than treating a previously stored value as permanently valid.

I would also preserve “unknown.”

If step-free access has not been verified, the graph should not turn an empty field into either “accessible” or “inaccessible.”

## A worked shore-excursion graph

Consider this hypothetical request: “Find a private tour that fits my cruise stop and works for someone who cannot walk far.”

I would model a tour product, its itinerary, the supplying operator, a dated departure, a meeting point and the relevant port terminal as separate records. The departure would follow an itinerary, have a start time, use a confirmed language and be associated with an offer for a particular party.

The itinerary would describe route conditions such as walking distance, gradients, steps and opportunities to sit. Transport inclusion would belong to the actual option being sold. A general statement that a company offers transport would not establish pickup for this booking.

The port relationship also needs precision. “Near the port” is not the same as meeting at the traveller's terminal. I would attach coordinates or an unambiguous meeting description to the confirmed location, preserve the source of that information, and require verification of any transfer assumption.

The ship's boarding deadline would be an input for this traveller's visit, rather than a permanent attribute of the destination. The candidate departure would need to fit the usable time window. If the information is incomplete, the system should ask a question or request confirmation instead of producing a confident suitability claim.

This is a proposed data model. I have not implemented or evaluated this integration for a client.

## Relationship ownership is part of the architecture

The graph needs a way to resolve who can establish each relationship.

Supplier operations might confirm which operator supplies a departure and where pickup occurs. The inventory system might establish the dated offer, party eligibility and available capacity. Editorial may manage the explanation while an operational owner verifies the underlying facts.

For a route condition, I would record its source, verification date, applicable itinerary version and any important exception. For a cancellation deadline, I would attach the policy to the offer, record the relevant time zone and distinguish an exact cutoff from a general summary.

I would not put every fact on the same review schedule. A descriptive relationship may be relatively stable; a meeting point can change; availability may need checking at request time. The relevant update trigger should follow the fact.

If two sources disagree, I would preserve the conflict until an authorized owner resolves it. Silently choosing the newest-looking page can conceal a more important distinction between a general itinerary and a departure-specific arrangement.

## A knowledge graph and GraphRAG do different jobs

A booking graph organizes entities and relationships. GraphRAG is a retrieval and answer-generation approach over a corpus. They can interact, but implementing one does not automatically implement the other.

Microsoft's [original GraphRAG research](https://www.microsoft.com/en-us/research/publication/from-local-to-global-a-graph-rag-approach-to-query-focused-summarization/) describes extracting an entity graph from documents, generating community summaries and combining responses for broad questions about the corpus. Its reported evaluation concerns that research setup, not travel reservations or public search visibility.

For a marketplace knowledge base, I might test a similar approach for a question such as “What accessibility-related information gaps recur across our itinerary documents?” That is a different task from confirming whether one departure is available next Tuesday.

The second task needs authoritative, current offer data and an action interface. A generated summary of past availability is not an inventory check. I would keep booking constraints and validation outside an unsupported inference from narrative documents.

Publishing relationships on a website may make information clearer, but it does not guarantee that Google or another assistant will ingest the graph or cite the page.

## A small architecture I would test first

I would start with a limited set of verified itineraries and their departures, not the whole marketplace.

The content layer would explain the experience and link the supporting evidence. The relationship layer would preserve identifiers, scope, ownership and provenance. A current-data layer would validate changeable offer facts when needed.

For a test question, I would inspect the evidence path: the proposed departure, its itinerary version, the route conditions, the relevant meeting point and the applicable offer. Every condition in the answer should be traceable to the correct record.

I would then try a deliberately difficult case: an itinerary with unknown walking distance, a changed pickup point or two options with different cancellation terms. A useful system should preserve uncertainty and avoid borrowing a fact from the wrong option.

That test produces more useful implementation requirements than a large diagram of connected destinations. The graph earns its complexity by preventing a specific class of booking mistake.

## Test the graph with a traveller’s question

Before investing in a complex implementation, I would choose ten realistic booking questions.

Could our information answer them without borrowing a feature from a different room, departure, or rate?

That is the first test.

A second test would deliberately change one condition: add a child, select another date, switch the language, or choose a refundable rate. The answer should change only where the underlying offer changes.

The value of a travel knowledge graph is the ability to preserve those distinctions. A diagram full of destinations and suppliers is only useful if the relationships help somebody make a correct booking decision.
