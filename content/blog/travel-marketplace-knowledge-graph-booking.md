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

## Test the graph with a traveller’s question

Before investing in a complex implementation, I would choose ten realistic booking questions.

Could our information answer them without borrowing a feature from a different room, departure, or rate?

That is the first test.

A second test would deliberately change one condition: add a child, select another date, switch the language, or choose a refundable rate. The answer should change only where the underlying offer changes.

The value of a travel knowledge graph is the ability to preserve those distinctions. A diagram full of destinations and suppliers is only useful if the relationships help somebody make a correct booking decision.
