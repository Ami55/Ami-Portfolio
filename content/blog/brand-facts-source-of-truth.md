---
title: Your Brand Facts Agree. But Which Source Owns the Truth?
status: draft
publishedDate: 2026-10-01
metaTitle: 'Brand Fact Governance: Evidence, Ownership, and Updates'
description: >-
  Consistent brand facts can still be wrong. How I would track evidence, assign
  owners, separate dates, and keep business information accurate across
  channels.
category: ENTITY SEO
targetQuery: brand fact governance and source of truth
---
The About page, company profile, and structured data all say the same thing. That looks like progress.

Then someone asks where the information came from.

The answer is an old presentation. Nobody knows who approved it. The person who last checked the figures has left the company.

Now the information is consistent, but we still do not know whether it is correct.

In [my article about brand facts and AI visibility](https://www.seogirl.ca/blog/ai-visibility-might-be-brand-fact-problem), I looked at conflicting descriptions. The next question is what happens after those descriptions agree. Who can verify the facts, and who updates them when the business changes?

## Agreement can come from copying the same mistake

Imagine a fictional business whose website says it serves 25 countries. A directory copies that number. A sales presentation uses it. Six months later, a new writer finds the same figure in three places and treats that agreement as confirmation.

But all three versions came from one unverified statement.

I would want to trace the claim back to something that can establish it: an approved list of operating markets, a defined service boundary, and someone responsible for confirming what “serves” means.

Does it mean customers can purchase there? That the company has offices there? That it has completed a project there at some point?

Until that definition is clear, even the correct number can communicate the wrong thing.

## A source of truth needs evidence and an owner

“We need a single source of truth” sounds sensible. It becomes useful when the team agrees what that means for each kind of fact.

The finance team might verify a published revenue figure. Operations might confirm service availability. Product might own feature descriptions. Marketing can manage how those facts are expressed without becoming the authority on every underlying detail.

I would distinguish the evidence source, the person accountable for verification, and the person responsible for updating the website. Sometimes one person handles all three. Sometimes they need a clear handoff.

The technical concept here is **provenance**: information about where data came from and the people and processes involved in producing it. The [W3C’s PROV overview](https://www.w3.org/TR/prov-overview/) explains that concept. A small content team can apply the principle without implementing an entire provenance standard.

## The fact register I would actually use

I would start with a shared register of facts that appear repeatedly or affect important decisions. Each entry should answer a few practical questions:

{% table %}
- Field
- What I would record
---
- Claim and scope
- The exact fact, what it describes, and any conditions.
---
- Evidence
- The record or document supporting the claim.
---
- Verification owner
- The person or team able to confirm it.
---
- Effective date
- When the fact became applicable.
---
- Last checked
- When someone verified it against the evidence.
---
- Published locations
- The pages, profiles, feeds, and documents using it.
---
- Review trigger
- The event or date that should prompt another check.
{% /table %}

This does not need to begin as a large database. A small register that someone maintains is more useful than a complete inventory that immediately becomes stale.

I would also keep internal evidence separate from public copy. Knowing which document supports a claim does not mean that document belongs on the website.

## The date you checked a fact is not the date it became true

Imagine a fictional service that expands into a new region on October 15. Marketing verifies the announcement on October 1.

The last-checked date is October 1. The effective date is October 15. Publishing “now available” on October 1 would still be wrong.

The reverse matters too. A page reviewed today might quote a customer count measured at the end of last year. The recent review does not turn that number into a current total.

I would keep those dates distinct and include the measurement period in the public claim when it affects interpretation. This is one reason [content decay can be fact decay](https://www.seogirl.ca/blog/content-decay-is-sometimes-fact-decay), even when the writing still reads well.

## A correction is a publishing task, not just a cell change

Once a fact changes, I would use the register to find the places that depend on it.

Update the approved record. Update the relevant public pages and structured data. Check controlled profiles, downloadable documents, and templates that may reproduce the old wording.

For third-party pages the business cannot edit, record the correction request and whether it was resolved. Do not mark the whole task complete because the company website is fixed.

I would also verify the rendered result after publication. An updated source field is not much help if a cached page or an old template still shows the previous value.

## What this means for AI visibility

I would treat this as information maintenance, not a promise of more citations.

Clear, supported facts give readers and systems better source material. They do not guarantee which sources an AI product will retrieve or when an external system will reflect a correction.

The immediate benefit is something the business can check: fewer unsupported claims, clearer ownership, and a repeatable way to correct information.

If an AI answer continues to repeat an old fact, the register also gives the team a starting point for investigation instead of another argument about which version is right.

## What I would check on Monday

- Choose ten frequently repeated or commercially important facts.
- Trace each one to supporting evidence.
- Assign a verification owner and a publishing owner.
- Separate effective dates from review dates.
- List the places that need updating when each fact changes.

A consistent brand description is useful. A team that can explain where its facts came from, when they apply, and who maintains them is in a much stronger position.

## Frequently Asked Questions

**What is a brand fact register?**

It is a maintained record of important claims about a business, including their evidence, scope, owners, dates, and published locations.

**Should marketing own every brand fact?**

Marketing can coordinate the register and publication process. Verification should involve the team that knows and controls the underlying information.

**Does consistent information prove a claim is correct?**

No. Several pages can repeat the same mistake. Trace the claim to evidence rather than treating repetition as independent confirmation.

**Will a fact register improve AI citations?**

It does not guarantee citation growth. Its purpose is to make the company’s information accurate, traceable, and easier to maintain.
