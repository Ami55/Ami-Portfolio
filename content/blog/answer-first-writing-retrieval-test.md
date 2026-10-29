---
title: 'Does Answer-First Writing Improve Retrieval? Results from My Controlled Test'
status: draft
publishedDate: 2026-10-29
metaTitle: 'Answer-First Writing vs Short Sections: My Retrieval Test'
description: 'I compared five rewrite approaches across ten pages, 49 questions and four retrieval methods. Short self-contained sections performed more consistently than answer-first writing alone in this controlled test.'
category: FIELD NOTES
targetQuery: answer-first writing passage retrieval experiment
---

“Put the answer first” is easy advice to apply. It is also easy to repeat without asking what outcome it is supposed to improve.

Does it help a reader find the answer? Does it improve retrieval of the page? Does it help a system select the right passage? Does it increase the chance of a citation in a generated answer?

Those are different questions. I wanted to test one part of the process rather than treat them as interchangeable.

In my controlled retrieval study, answer-first rewrites did not show a statistically significant retrieval-score improvement over a plain paraphrase control. Short self-contained sections produced more consistent gains within the same experiment.

That does not mean a clear opening answer is bad writing. It means the result I measured was narrower than the claim often attached to the advice. Moving a sentence to the top and making a passage independently useful are not necessarily the same intervention.

![A document divided into separate passage cards, with one mint passage highlighted through a magnifying glass.](/blog/images/passage-retrieval.png)

*Conceptual illustration of selecting a passage from a document. It does not depict the experiment’s measured scores.*

## Why I wanted to separate writing advice from retrieval evidence

Much of the discussion around AI-readable content combines several ideas: direct answers, short paragraphs, explicit entities, helpful headings and self-contained sections.

Those ideas can work together editorially, but combining them makes it difficult to tell which change affected a measured outcome. If I rewrite everything at once and the result improves, I still do not know which part mattered.

Olaf Kopp’s discussion of [LLM readability and chunk relevance](https://www.kopp-online-marketing.com/llm-readability-chunk-relevance-the-most-influential-factors-to-become-citation-worthy-by-llms) helped frame the questions I wanted to investigate. I treated that framework as a source of testable ideas, rather than proof that any individual formatting rule guarantees a citation.

The distinction matters because a retrieval test and a live AI-search test are different experiments. A retriever can choose a useful passage without a model citing it. A generated answer can cite a page for reasons a small local retrieval setup does not reproduce.

I designed this study to examine passage retrieval under controlled conditions. The full report is [Built to Be Retrieved](/research/built-to-be-retrieved). Its results should be read within that scope.

## What I compared

I used ten pages: five of my SEO Girl blog posts and five related Wikipedia pages. Each page received five rewrite versions, producing 50 rewrites in total.

The versions were:

- An answer-first rewrite.
- A rewrite using short self-contained sections.
- A rewrite making entities more explicit.
- A rewrite combining those approaches.
- A plain paraphrase control.

The control matters. Rewriting can change wording, emphasis and vocabulary even when the intended intervention is structural. Comparing against a paraphrase is more informative than assuming every difference from the original came from a special optimization technique.

I tested 49 questions with four retrieval methods: MiniLM, bge-small, e5-small and BM25. The inclusion of both embedding-based methods and BM25 let me see whether a pattern appeared across different retrieval approaches, rather than relying on one configuration.

This was a closed ten-page corpus. For a target page’s rewrite, its passages competed against passages from the other nine original pages. It was not a web-scale index, and it did not reproduce a commercial AI search engine.

## Chunking was part of the setup

The test split material by headings with a 200-word cap. The short-section rewrite instruction aimed for self-contained sections of approximately 100–250 words with question-style headings.

Those two numbers describe different parts of the setup. A rewritten section could still be split by the chunking cap. I would not describe the test as proving that a 250-word chunk, or any other fixed length, is optimal.

The more useful variable was whether the material supplied a coherent answer within the text available to the retriever. If a section depended heavily on earlier paragraphs to identify the subject or explain a condition, a retrieved fragment could be less useful on its own.

At the same time, the question-style headings created a possible confound. A heading resembling an evaluation question can improve matching. The study cannot fully separate the effect of self-contained explanation from the effect of that wording alignment.

This is one reason I prefer describing what the rewrite did over giving the result a universal label such as “the ideal AI content structure.” The implementation details affect how far the conclusion can travel.

## Short sections performed more consistently than answer-first writing alone

Compared with the plain paraphrase control, short-section retrieval scores improved for 84–92% of the questions, depending on the retrieval method.

The rate at which the top selected passage contained the answer improved by 20–29 percentage points. That is an absolute percentage-point change, not a relative percentage increase.

The combined rewrite performed similarly to the short-section approach. Adding explicit entities on its own produced smaller and more mixed effects on answer selection.

Answer-first rewriting did not show a statistically significant retrieval-score lift in the paired tests; the reported p-values ranged from .18 to .77. The study used paired Wilcoxon signed-rank tests to compare conditions.

I would not translate those p-values into “answer-first writing has no effect.” A non-significant result in a small experiment does not establish that an effect is impossible. It tells me that this study did not provide strong enough evidence for the specific improvement under these conditions.

What the comparison does support is a more focused next question: are the benefits coming from passages that preserve their subject, scope and answer when separated from the rest of the page?

## Finding the page and finding the useful passage are different outcomes

The original pages were already appearing in the top three at rates of roughly 98–100% in this small corpus. That left very little room to improve a simple top-three presence metric.

The more revealing outcome was which passage appeared first and whether it contained the answer. A page can be easy to retrieve while the selected fragment is not the most useful part of it.

That distinction changed how I interpreted the rewrite results. I was not watching a previously invisible site gain search rankings. I was looking at passage choice within a constrained collection where page-level retrieval was already near its ceiling.

For content work, this creates two separate diagnostic questions. Can the relevant document be found? And does the material likely to be selected contain enough context to answer the question accurately?

A site audit that stops at topical coverage may miss the second problem. The right information can exist somewhere on the page while being awkwardly divided, ambiguously referenced or separated from an important qualification.

My earlier article on [a paragraph losing its context](/blog/when-your-best-paragraph-loses-context) discusses that editorial issue. This experiment gives me a controlled way to investigate it, without pretending to measure the entire path to an AI citation.

## A self-contained passage does more than announce an answer

Here is an illustrative example. These sentences are not presented as the exact before-and-after material used in the experiment.

Imagine a hotel page saying: “Yes, it is included. However, this does not apply to all bookings. Check your confirmation for details.”

The answer appears first, but the passage does not identify what is included, which hotel offer it describes or which bookings qualify. A reader arriving from another section might understand it. A fragment retrieved independently might not.

A clearer version would identify the subject and condition: “Breakfast is included in the Family Weekend rate at Example Hotel. Room-only bookings do not include breakfast. The rate name appears in the booking confirmation.”

That version is more independently understandable because it names the offer, states the relevant fact and preserves the exception. The improvement is not simply the position of the first answer.

For a tour, the equivalent might be defining the departure point, the transport arrangement and the eligibility condition together. For a technical explanation, it might mean keeping a claim and its limitation in the same section.

These examples are editorial applications, not hotel or tour results from my retrieval study. They show the kind of passage-level question I would bring to a real audit.

## Why “lost in the middle” does not settle the article-length debate

The [Lost in the Middle paper](https://arxiv.org/abs/2307.03172) reported sensitivity to where relevant information appeared in long contexts in its tested question-answering and key-value retrieval tasks.

That finding is useful context for thinking about information access. It does not establish a universal word limit for blog posts, or show that every current search system processes an entire long article in the same way.

My own study also cannot settle whether long or short articles are generally better for AI visibility. It tested rewrite approaches and retrieval within a small corpus. A long page can contain excellent self-contained sections. A short page can still be vague, incomplete or poorly matched to a question.

I would decide page length from the information need and the relationship between its parts. If several sections support one coherent decision, they may belong together. If they serve substantially different decisions, separate pages may make sense.

The test encourages me to inspect section quality before using article length as a shortcut. It does not justify splitting a useful guide into dozens of thin pages.

## How I would audit an existing article now

I would begin with the questions the article is intended to answer and identify the section that supplies each answer. Then I would read each section as if I had not seen the rest of the page.

Can I tell what entity, product or process it describes? Are the conditions and exceptions attached to the claim? Does a pronoun depend on an earlier paragraph? Does the heading describe the actual content? Are figures accompanied by their units, timeframe and source?

I would also look for repetition introduced by the attempt to make every section independent. Repeating the full company name in every sentence can make an article cumbersome without adding useful clarity. Independence should preserve meaning, not produce mechanical prose.

Next, I would check whether the page still works for a human reader moving through it in order. Passage-level clarity should improve the article’s explanation, not turn it into a disconnected catalogue of answer blocks.

Only after that review would I decide which changes to test. Keeping the intervention narrow makes the result easier to interpret. A structural rewrite, a new evidence source and a changed title should not all be treated as one invisible “GEO improvement.”

## What could have influenced these results

Several limitations matter to the interpretation.

The corpus contained only ten pages. The questions and rewrites came from a limited setup, and the question-style headings may have aligned closely with the evaluation wording. That can favour retrieval even when the explanation itself is not the only reason.

The combined rewrites were approximately 9–23% longer. More text can introduce additional matching opportunities, so length is a potential confound. A follow-up experiment should compare versions with more tightly matched lengths.

The five blog pages and five Wikipedia pages also produced small source groups: 25 and 24 questions respectively. Differences between those groups are exploratory, not a reliable generalization about either type of source.

The report does not include the raw lab files needed to independently reconstruct every run. I can explain the reported setup and results, but I should not present a newly written example as recovered experimental material.

Finally, there was no live ChatGPT, Google AI Mode or Perplexity citation test, no answer-generation evaluation, and no traffic or conversion experiment. Retrieval performance is one part of a larger system. The next stage needs its own measurement.

## What I would test next

I would expand the corpus, use held-out questions and compare headings that differ more substantially from the evaluation prompts. I would also separate section independence from section length and keep the amount of text more closely matched.

For a live-site experiment, I would first measure ordinary variation across repeated prompts. My [repeated-run query study](/research/same-question-different-searches) explains why a single before-and-after answer is not a sufficient baseline.

Then I would test a clearly documented change on a limited set of pages, preserve the previous versions, and track whether any new citations actually supported the changed information. I would report retrieval, citation, brand mention and business outcomes separately.

That is the practical value of this result for me. It turns a broad instruction—make content easier for AI—into a narrower question I can inspect and test: does this passage preserve enough meaning to answer the question when it is selected on its own?

I will still put a direct answer near the beginning when it helps the reader. But I will not treat that sentence placement as evidence that retrieval or citations must improve. The stronger lesson from this experiment is to make the answer, its subject and its conditions travel together.

## Read the study

Visit [Built to Be Retrieved](/research/built-to-be-retrieved) for the report, methods and limitations. For the broader editorial discussion, see [long guides versus specialized pages](/blog/long-guides-specialized-pages-ai-search) and [LLM readability factors](/blog/llm-readability-7-factors-ai-citations).
