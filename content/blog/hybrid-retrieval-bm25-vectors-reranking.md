---
title: 'Beyond BM25 vs. Vectors: Why Retrieval Often Needs More Than One Method'
status: published
publishedDate: 2026-10-26
metaTitle: 'Hybrid Retrieval: BM25, Vectors, and Reranking Explained'
description: >-
  Why lexical search, vector retrieval, and reranking can work together—and how
  I would test whether a hybrid approach improves the answers people find.
category: SEMANTIC SEO
targetQuery: hybrid retrieval and reranking explained
---
“Should we focus on keywords or meaning?”

I understand why that question comes up. Once a team learns about embeddings and semantic search, keyword matching can start to sound like something we are supposed to leave behind.

But a product code still matters. So does a policy name. So does the difference between a general question and a request for one particular document.

The useful question is which retrieval approach helps the system find the right evidence for the task.

## Different questions expose different weaknesses

In [my article about BM25](https://www.seogirl.ca/blog/bm25-vs-vector-search-keyword-stuffing), I explained why repeating a phrase is an incomplete way to think about relevance. The next step is understanding why lexical and semantic retrieval can complement each other.

Lexical retrieval can be useful when exact terminology matters. Dense vector retrieval can help connect differently worded questions and passages. Hybrid search combines results from multiple methods; it does not require choosing one permanently. [Elastic’s hybrid search documentation](https://www.elastic.co/docs/solutions/search/hybrid-search) describes one implementation.

Imagine a fictional equipment supplier with these three searches:

- “AX-240 replacement filter”
- “How do I reduce dust in a small workshop?”
- “Does the AX-240 filter work with the older extractor?”

The first makes the identifier central. The second describes a problem. The third needs the identifier and an explicit compatibility relationship.

I would test all three types before deciding that one retrieval method is enough.

## Combining results is its own decision

Suppose lexical search returns one ranked list and vector search returns another. The system still needs a way to combine them.

It cannot assume that a score of 12 from one method means the same thing as 0.8 from another.

One approach is **reciprocal rank fusion**, or RRF. It combines lists using each document’s position rather than directly comparing their original scores. A document placed highly by multiple methods can receive a stronger combined score. [Elastic documents the method and its parameters](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion).

That is a way to combine evidence about relevance. It is not proof that every hybrid configuration will beat either method on its own.

## Reranking gives the shortlist another review

After retrieval and fusion, a system may apply a reranker to a smaller set of candidates.

A cross-encoder reranker, for example, processes the query and candidate text together to assess relevance. Because this requires additional computation, it is commonly applied to a shortlist. [Elastic’s reranking overview](https://www.elastic.co/docs/solutions/search/ranking/semantic-reranking) explains this stage.

For our hypothetical compatibility question, I would want to inspect whether the final results favour an explicit compatibility explanation over a page that merely mentions the two products.

That would be an evaluation question, not a result I would assume in advance.

A reranker that only reorders its input cannot recover a useful document that never reached the shortlist. This is why I would inspect the candidates before blaming the final order.

## The test I would run before recommending a change

I would take a fixed collection of documents and a set of realistic questions. For each question, someone familiar with the subject would identify which documents actually answer it.

Then I would compare four configurations:

1. Lexical retrieval alone.
1. Vector retrieval alone.
1. Hybrid retrieval using a documented fusion method.
1. The same hybrid setup with a reranker.

I would keep the document collection and access filters consistent, record the candidate limits, and reserve some questions for evaluation after tuning.

The checks would be practical: did we retrieve the relevant evidence, how high did it appear, which question types failed, and how much time and cost did the extra stage add?

I would also include questions the collection cannot answer. Finding a thematically similar page is not the same as finding sufficient evidence.

## What this changes in a content brief

This gives me a more specific way to brief content.

Use the real product name, identifiers, policy terms, and other details readers need to distinguish one thing from another. Explain the problem in the language customers use. State relationships explicitly: which part fits which model, which policy applies to which service, and what the exceptions are.

For the supplier example, a page saying “premium filtration for demanding environments” leaves a lot unresolved. A verified compatibility table and a clear explanation of the relevant workshop conditions give the reader more to work with.

That is an editorial recommendation based on clarity. It is not a claim that Google uses the same pipeline as the system we tested.

## What I would check on Monday

- Collect questions involving exact names, everyday language, and explicit constraints.
- Identify the documents that genuinely answer them.
- Compare retrieval methods before tuning the final ranking.
- Inspect missing candidates as well as poorly ordered results.
- Fix content that names a topic without answering the actual question.

The useful outcome is knowing which failure we are trying to fix. “We need semantic search” is a much weaker recommendation than “people cannot find compatibility information unless they use our internal terminology.”

## Frequently Asked Questions

**What is hybrid retrieval?**

It combines results from more than one retrieval method, commonly lexical and vector search, to build a candidate set or ranked list.

**Is reciprocal rank fusion the same as semantic reranking?**

No. RRF combines ranked lists using positions. A semantic reranker evaluates candidate relevance with a model. A system can use both at different stages.

**Does hybrid search always perform better?**

No. Results depend on the documents, questions, models, and configuration. Test it against simpler alternatives and include latency and cost in the decision.

**Does this reveal how Google ranks my website?**

No. It explains documented retrieval techniques and a way to evaluate a system you control. It does not establish Google’s production implementation.
