---
Post: 29 of 30
Title (H1): What Is Entity Schema, Actually? A Plain-English Breakdown
Meta Title: What Is Entity Schema? A Plain-English Guide (44 chars)
Meta Description: Entity schema explained without the jargon: what "about" and "mentions" actually do, and why sameAs is the piece most people skip. (130 chars)
URL Slug: /what-is-entity-schema/
Target Query: what is entity schema
Word Count: ~1,800
Schema: Article, FAQPage
---

# What Is Entity Schema, Actually? A Plain-English Breakdown

Entity schema is one of those terms I hear used loosely enough that I think it's worth actually defining properly. It's structured data, usually written in JSON-LD, that explicitly tells search engines and AI systems which real-world entities a page is about, rather than leaving them to infer it from unstructured text alone. I use it constantly now, and I think most people using the term have only seen half of what it actually does.

## The Format It Usually Takes

JSON-LD is the format Google recommends, a block of structured data sitting in a page's `<head>`, written as a set of key-value pairs describing the page and what it's about. It's not visible to a person reading the page. It exists purely for machines.

A basic version looks something like this, describing a page about a tour guide:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "about": {
    "@type": "Person",
    "name": "Example Guide Name",
    "sameAs": "https://www.wikidata.org/wiki/Q000000"
  }
}
```

That's a genuinely small amount of code doing real, specific work. It's declaring, in a format a machine doesn't have to guess about, exactly what entity this page is centered on.

![Diagram showing the chain: WebPage, about, Entity (Colosseum), sameAs, Wikidata record](images/entity-schema-chain-diagram.png)

## The Two Properties That Actually Matter Most

**`about`** declares the primary entity, the one main thing the whole page is centered on. A page about the Colosseum uses `about` to explicitly name the Colosseum as a `TouristAttraction`, removing any ambiguity a machine might otherwise have to resolve by parsing the surrounding prose.

**`mentions`** declares secondary entities, things referenced on the page that aren't the main subject. That same Colosseum page might use `mentions` for the Roman Forum, Ancient Rome, or the Flavian Dynasty, entities that come up in the content without being what the page is fundamentally about.

This distinction matters more than it might look like on the surface. Without it, a machine has to infer primary versus secondary importance purely from position and frequency in the text, the salience work I've written about elsewhere on this blog. `about` and `mentions` state that distinction directly instead of leaving it to inference.

## The Piece Almost Everyone Skips: sameAs

`sameAs` links your declared entity to an external, independently maintained record of that same entity, usually a Wikidata or Wikipedia URL. This is the disambiguation piece, and I think it's the single most undervalued part of entity schema.

Here's why it matters so much. A name alone can be ambiguous. There's more than one "Michael Jordan," more than one place called "Springfield." Without `sameAs`, a machine has to guess which specific entity your content actually refers to, using whatever context clues it can find. With `sameAs` pointing at a specific, unique external record, that ambiguity disappears. You're not just declaring "this page is about a person named X." You're declaring "this page is about this exact, specific, externally verified entity," and handing over a direct way to confirm it.

I've seen entity schema implemented correctly on the `about` and `mentions` side while skipping `sameAs` entirely, and it's a genuinely weaker implementation, technically valid, but missing the piece that actually resolves ambiguity rather than just asserting a name.

## The Three Properties, Side by Side

| Property | What it declares | Why it matters |
|---|---|---|
| `about` | The one primary entity the page is centered on | Tells a machine what the page fundamentally is, removing guesswork |
| `mentions` | Secondary entities referenced but not the main subject | Prevents secondary mentions from diluting or confusing the primary focus |
| `sameAs` | A link to an external, independently verified record of the entity | Resolves naming ambiguity directly, rather than leaving it to inference |

## What Entity Schema Doesn't Do

I want to be direct about this, because I've written a full post elsewhere on this blog about the mistake of treating schema as a fix on its own. Entity schema declares identity. It does not generate content. It cannot make a vague paragraph specific, and it's not, by itself, a confirmed ranking factor. What it does is remove ambiguity for whatever's trying to parse your page, machine verification, disambiguation, faster and more confident matching against external, trusted sources like the Knowledge Graph.

That's genuinely valuable. It's also not the whole job.

## How I Actually Implement This

I identify the one true primary entity for the page first, whatever the page is fundamentally about, and mark that with `about`. Then I list the genuinely relevant secondary entities that come up in the content and mark those with `mentions`, without going overboard, listing every passing reference dilutes the signal rather than strengthening it.

Then, critically, I find the correct Wikidata entry, or Wikipedia article if one exists, for each entity and link it with `sameAs`. If no Wikidata entry exists yet for a smaller or newer entity, creating one is often worth the effort, since it gives you an external, independently verifiable record to link back to that didn't exist before.

Finally I validate the whole thing with Google's Rich Results Test or the Schema.org validator, checking for errors, but I don't stop there, because valid schema sitting on top of vague content is still a page with vague content.

### The Full Checklist I Work Through

1. Identify the single true primary entity the page is about.
2. Mark it with `about`, using the correct schema.org type.
3. List the genuinely relevant secondary entities and mark those with `mentions`.
4. Find or create a Wikidata entry for each entity and link it with `sameAs`.
5. Validate the markup with Google's Rich Results Test.
6. Confirm the surrounding content actually states specific facts matching what the schema declares.

## A Common Mistake Worth Naming Directly

I sometimes see `mentions` used so liberally that a page ends up declaring a dozen secondary entities, half of which are barely referenced in a single sentence. That's not disambiguation, it's noise, and it can actually work against the primary entity by diluting what the schema is signaling as important. I try to keep `mentions` limited to entities that genuinely play a meaningful role in the content, not every proper noun that happens to appear once.

## A Small Implementation Detail That Trips People Up

One thing I check constantly that isn't obvious from the schema.org documentation alone: when an entity has both an `about` declaration and appears again inside `mentions` on a different page, the naming needs to stay identical between them. I've seen a business declare an entity as "ToursByLocals" via `about` on one page and list it as "Tours By Locals, Inc." inside `mentions` on another. Technically both are valid schema, but the inconsistency undercuts the exact disambiguation benefit the markup is supposed to provide, since it's reintroducing the same naming-variance problem structured data is meant to solve in the first place.

## A Note on Keeping This Maintained

Entity schema isn't a set-it-and-forget-it asset any more than the content it describes is. When a business changes its service area, rebrands, or adds a new offering, the schema needs to be revisited alongside the content update, not left pointing at outdated facts. I've inherited sites where the visible content had been updated for years while the schema quietly kept declaring an old address or an outdated organizational structure, a mismatch that actively works against the disambiguation benefit this markup is supposed to provide in the first place.

## Frequently Asked Questions

**What's the difference between `about` and `mentions`?**
`about` names the one primary entity the whole page is centered on. `mentions` names secondary entities that come up in the content without being the main subject. The distinction helps a machine understand what actually matters most on the page, rather than inferring it from position and frequency alone.

**Why is `sameAs` so important?**
It links your entity to an independently maintained external record, usually Wikidata, which resolves naming ambiguity directly instead of leaving a machine to guess which specific entity you mean from context alone.

**Do I need a Wikipedia page to use entity schema properly?**
No. Wikidata has a much lower bar for creation than Wikipedia and works perfectly well as a `sameAs` target. Most of the entities I mark up this way don't have a Wikipedia article.

**Will adding entity schema improve my rankings directly?**
Not confirmed as a direct ranking factor on its own, in my experience. What it reliably does is remove ambiguity and speed up machine verification of what your content is about, which supports everything else you're doing, rather than replacing it.

**Can I use entity schema for entities that don't have any external record at all yet?**
Yes, `about` and `mentions` still work without a `sameAs` target, they're just weaker without it. My usual approach is implementing the schema now with whatever's available, then creating a Wikidata entry as a follow-up step so the `sameAs` link can be added once that record exists.

**Is JSON-LD the only format for implementing entity schema?**
It's the format Google explicitly recommends and the one I default to, but Microdata and RDFa are technically valid alternatives embedded directly in HTML markup. I stick with JSON-LD in practice, since it's easier to maintain as a standalone block and doesn't require weaving structured attributes throughout the visible HTML itself.

**Should every page on a site carry its own entity schema, or just the important ones?**
I prioritize the pages where entity clarity actually matters most, ambiguous names, comparison content, key commercial pages, rather than treating it as an all-or-nothing rollout. A thoughtful, prioritized implementation beats a rushed, site-wide one that's more likely to contain errors.

**How many entities should I mark up with `mentions` on a typical page?**
Only the ones that genuinely matter to the content, not every proper noun that appears. I generally keep it to a handful of entities that play a real role in the page, since listing too many dilutes the signal rather than strengthening it.

**What happens if I get the entity type wrong in my schema, like tagging a person as an organization?**
It weakens the whole declaration, since the type is part of what disambiguates the entity in the first place. A mismatched type can confuse verification rather than help it, so it's worth double-checking against schema.org's actual type definitions rather than guessing.
