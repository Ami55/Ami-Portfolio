---
Post: 2 of 30
Title (H1): Entity Types, Classes, and Attributes: The Framework That Changed How I Write Content
Meta Title: Entity Types, Classes & Attributes (The EAV Model) (50 chars)
Meta Description: A decade in, this is still the one framework I wish every content writer understood before they touch a keyboard. Here's why it matters. (136 chars)
URL Slug: /entity-types-classes-attributes-eav-model/
Target Query: entity attributes SEO
Word Count: ~1,900
Schema: Article, FAQPage
---

# Entity Types, Classes, and Attributes: The Framework That Changed How I Write Content

If you asked most SEOs what an "entity" is, you'd get a decent answer: a person, a place, a thing. Ask them how Google actually decides which facts about that entity are worth showing in a Knowledge Panel, and you usually get a shrug. I used to shrug too, honestly, until I actually dug into how this works, and it changed the way I brief every piece of content I've written since.

The concept is called the Entity-Attribute-Value model, EAV for short, and once it clicks, you can't unsee it. It shows up everywhere once you know to look for it, in how Knowledge Panels get built, in how AI systems pull facts to answer questions, and in why some genuinely well-written content still doesn't get understood correctly by a machine.

## The Three Pieces, Explained Simply

Take a person, say Larry Page, as the entity. Google isn't storing him as a name with a relevance score attached. It's storing him as a bundle of attributes, each with a value:

Occupation, value: entrepreneur, computer scientist. Birthplace, value: East Lansing, Michigan. Employer, value: Alphabet Inc. That's it. That's the whole model. Every entity is just a collection of attribute-value pairs, and those pairs are what actually populate a Knowledge Panel, not some vague overall "importance" score.

![Entity, Attribute, Value diagram using the Colosseum as an example: Entity, Attribute (location), Value (Rome, Italy)](images/eav-triple-diagram.png)

That's the whole model, laid out visually. One entity, one attribute at a time, each with a stated value. Simple enough to sketch on a napkin, and yet it's the exact structure I now brief every piece of content against.

### Why Breaking It Down This Way Actually Matters

Here's what I think most people miss about this model. It's not just a way of describing data, it's a way of thinking about what "good content" even means at the sentence level. A sentence that states one attribute-value pair clearly is doing real, extractable work. A sentence that describes the entity in vague, general terms, however nicely written, is doing almost none. Once you start reading your own content through that lens, you notice how much of it is actually empty calories.

## Why Grouping Matters More Than People Think

Here's the part that took me a while to really appreciate: attributes aren't assigned one at a time from scratch. They get inherited from the entity's type. Every entity classified as a "person" predictably comes with expected attributes like birthplace and date of birth, because the type itself sets the template.

This is what makes the whole system scale. Google doesn't need to guess what might matter for a brand-new entity. If it can slot that entity into an existing type, it already knows roughly what attributes to go looking for. I explain this using whatever industry I'm working in as the example: once Google knows a business is a "tour operator," it already has expectations about what attributes matter, service area, tour types, guide credentials, and content that states those clearly, plainly, gets rewarded for matching the pattern.

A few common entity types and the attributes they typically carry, just to make this concrete:

- **Person:** occupation, birthplace, employer, notable works, credentials
- **Organization:** founding date, headquarters location, industry, key people, service area
- **Product:** manufacturer, category, price range, key features, compatible use cases
- **TouristAttraction:** location, historical period, capacity or scale, notable features, visiting logistics

If you're writing content about any entity, the fastest way to figure out what to actually say is to ask which type it belongs to, and then check whether you've stated the attributes that type is expected to carry.

## Why Some Facts Show Up and Others Don't

This one genuinely surprised me the first time I learned it. Not every true fact about an entity makes it into a Knowledge Panel. Attribute relevance gets weighted based on actual demonstrated interest, meaning Google is tracking how often people search for a specific fact about an entity and using that frequency to decide what's worth surfacing.

In plain terms, if a lot of people searching "Larry Page" also search for his net worth, that attribute earns a prominent spot. If almost nobody searches for his elementary school, that fact might exist somewhere in Google's data and just never show up publicly. What you see in a Knowledge Panel is a ranked highlight reel, not the full file.

I bring this up because it reframes a common complaint I hear constantly: "why doesn't Google show this fact about us." Usually it's not that Google doesn't know it. It's that not enough people have demonstrated interest in that specific fact yet for it to earn a spot. That's a genuinely different problem than "Google doesn't understand my business," and it needs a different fix, building demand and awareness around that specific attribute, not just restating it more often.

## Where All This Data Actually Comes From

Three buckets, roughly in order of how much Google trusts them:

**Structured data.** Things like Wikidata entries and Google Business Profile fields, arrive already clean and organized. This is the highest-trust tier because there's little room for a machine to misinterpret it.

**Semi-structured sources.** Wikipedia being the big one, gives a consistent template per entity type even though the surrounding article is regular prose. The structure of the infobox does a lot of heavy lifting here.

**Unstructured content.** The open web, gets parsed with natural language processing, which is powerful but noisier and more error-prone. This is where most of any business's own website content actually lives, which is exactly why writing clearly matters so much.

This is exactly why writing clearly matters so much more than people assume. If your business's key facts only live in unstructured, meandering paragraphs, you're relying on the noisiest, least reliable extraction method Google has. Structured data and clean, explicit statements move you up the trust ladder.

## How I Actually Apply This to Content Now

Once EAV clicks, the writing brief changes completely. Instead of asking "have I covered this topic," I ask: for this specific entity, what are the attributes a reader, or a machine, would expect, and have I stated each one as an actual value, not a vague gesture at one?

I use a version of this template with almost every brief now:

- Entity name, stated consistently
- Type (person, place, organization, product)
- Attribute one, paired with a specific, stated value
- Attribute two, paired with a specific, stated value
- Attribute three, paired with a specific, stated value
- Related entities, and how they connect

Here's the difference in practice. Weak: "The Colosseum is a famous and impressive ancient landmark in Rome." Better: "The Colosseum, an ancient Roman amphitheatre in Rome's Rione Celio district, was completed in 80 AD and could hold an estimated 50,000 to 80,000 spectators."

The second version hands over a type, a location, a date, and a capacity, four real attributes, in one sentence. The first version hands over nothing extractable at all. I've rewritten more copy this exact way than I can count, across more industries than I can list, and it's almost always the single highest-leverage edit available on a page.

### A Quick Self-Test For Any Page You've Already Written

Pick any paragraph on your site describing your main entity. Count how many specific, checkable attribute-value pairs it states outright. If the honest count is zero, that paragraph is doing decorative work, not informational work, no matter how well it reads.

## The Thing I Tell Everyone I Work With

Mentioning your entity more often doesn't strengthen it. Attaching more of the right attributes, stated as real values, does. I'd rather see one sentence carrying three specific facts than a whole paragraph of enthusiastic, vague praise, and after ten years of watching what actually moves the needle, I mean that literally, not as a figure of speech.

## A Quick Reference for Common Entity Types

Since I reach for this constantly when briefing new content, here's a slightly longer version of the attribute list I actually keep handy:

| Entity type | Core attributes to state explicitly |
|---|---|
| Person | occupation, birthplace, employer, notable works, credentials |
| Organization | founding date, headquarters location, industry, key people, service area |
| Product | manufacturer, category, price range, key features, compatible use cases |
| TouristAttraction | location, historical period, capacity or scale, notable features, visiting logistics |
| Event | date, location, organizer, scale, notable participants |
| LocalBusiness | address, hours, service area, credentials, founding date |

I don't treat this as exhaustive, new entity types come up constantly depending on the industry, but having a starting template speeds up every brief I write, since it turns "what should this page say" into a much narrower, more concrete question.

## Frequently Asked Questions

**What is the EAV model, in one sentence?**
It's how Google represents any entity internally: as a set of attributes (properties like occupation or location), each holding a specific value, and content that states those values explicitly is far easier for Google to extract correctly.

**What's the difference between an entity type and an attribute?**
The type is the category an entity belongs to, like "person" or "organization." An attribute is a specific property entities of that type tend to share, like birthplace for a person or founding date for a company.

**Why doesn't every true fact about my business show up in search?**
Google weights attributes by demonstrated interest, using actual search behavior to decide what to surface. A fact can be accurate and still stay buried simply because not enough people have shown interest in that specific detail yet.

**Is this really worth the effort for a small business?**
In my experience, yes, more than almost anything else I recommend early on. It costs nothing but a rewrite, and it's usually the fastest way to help Google, and now AI tools, actually understand what you offer.

**How many attributes should a single page actually try to cover?**
There's no fixed number, but I'd rather see three or four attributes stated clearly and specifically than ten stated vaguely. Depth on the attributes that genuinely matter for that entity type beats breadth for its own sake.

**Does this apply to service businesses the same way it applies to products or places?**
Yes, and I'd argue it matters even more there, since services are inherently less tangible. Stating specific attributes, service area, credentials, methodology, turnaround time, gives a machine something concrete to work with where it would otherwise have almost nothing.

---

*If you want to go deeper on where this framework comes from, Olaf Kopp has written extensively about entity types, classes, and attributes on his site, kopp-online-marketing.com. It's genuinely worth the read if you like the research side of things.*
