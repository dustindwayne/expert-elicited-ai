# Expert-Elicited AI

*AI systems built from structured knowledge elicited from domain experts.*

## Overview
Most modern AI systems learn from massive unstructured text corpora. This project explores an alternative approach: AI systems that learn structured domain knowledge directly from human experts through guided knowledge elicitation.

This repository presents a technical architecture proposal and minimal scaffold for building expert-elicited, domain-aware AI systems with transparent reasoning.

## Thesis
Most modern AI systems learn from massive unstructured text corpora. This project explores an alternative approach: AI systems that learn structured domain knowledge directly from human experts through guided knowledge elicitation.

## Problem
Current large-scale AI approaches are powerful, but they have practical limits in domain-specific settings:

- knowledge comes from noisy internet text
- reasoning is often opaque
- domain expertise is difficult to verify
- incorporating authoritative expert knowledge is difficult

## Core Architecture
```text
Domain Experts
      ↓
AI Knowledge Interviewer
      ↓
Structured Knowledge Extraction
      ↓
Domain Knowledge Graph
      ↓
Reasoning Engine
      ↓
Natural Language Interface
```

## Why Now
This approach is increasingly feasible because:

- LLMs can automate knowledge elicitation
- hybrid symbolic + neural systems are more practical
- structured domain models can be maintained incrementally

## Key Concepts
### Knowledge Elicitation
An AI interviewer asks structured questions, probes exceptions, and extracts explicit concepts, relationships, rules, and evidence.

### Domain Graph
Concepts and relationships are represented in machine-readable structures to enable traceability, updates, and deterministic access.

### Multi-Expert Consensus
Multiple experts can contribute to the same statement with per-expert confidence and provenance, allowing disagreement to remain visible.

### Structured Reasoning
Reasoning can combine multiple techniques, including:

- knowledge graphs
- probabilistic rules
- example-based reasoning
- small domain models

## Non-goals
- not replacing large language models
- not claiming universal intelligence
- not eliminating bias entirely

## Repository Layout
- `docs/`: architecture, whitepaper, elicitation process, consensus model, limitations, and roadmap.
- `examples/`: illustrative domain graph data and sample elicitation transcripts.
- `src/`: minimal TypeScript scaffold for interviewer, reasoning, domain module, and runtime loader.
- `diagrams/`: text-based architecture and flow diagrams.

## Future Work
- automated expert interview system
- domain module format
- reasoning engine prototype
- consensus modeling
- cross-domain knowledge composition

## Prior Work

This project builds on earlier research including expert systems, knowledge engineering, knowledge graphs, and human feedback methods used in modern AI.  
The goal is not to replace these approaches but to combine them into a modern architecture for expert-driven AI systems.

See docs/prior-art.md for additional context.

## Status
This repository is currently a research proposal and early scaffold. It clarifies architecture and implementation direction without claiming benchmark superiority or complete novelty.
