# Expert-Elicited AI
*AI systems built from structured knowledge elicited from domain experts.*



## Overview
Most modern AI systems rely heavily on massive unstructured datasets gathered from broad corpus scraping. This project explores an alternative approach: AI systems that learn structured, inspectable domain knowledge directly from human experts through guided knowledge elicitation.

Rather than treating expert insight as incidental training signal, this repository treats expert reasoning as a first-class input to system design.

## Motivation
Brute-force training approaches have produced powerful general models, but they also introduce persistent challenges:

- extremely large training datasets
- noisy information
- weak reasoning transparency
- difficulty incorporating verified expert knowledge

This proposal investigates a complementary architecture focused on explicit domain models and expert-grounded reasoning.

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

## Key Concepts
### Knowledge Elicitation
An AI interviewer engages domain experts with structured prompts and follow-up questions, then extracts explicit concepts, relationships, rules, and diagnostic signals.

### Domain Graph
Concepts and relationships are represented in machine-readable form (e.g., graph and rule structures) to support traceability and targeted updates.

### Multi-Expert Consensus
Multiple experts can contribute to the same knowledge statements, with provenance and confidence values preserved instead of collapsed into a single opaque result.

### Structured Reasoning
Reasoning components may combine multiple methods, including:

- knowledge graphs
- probabilistic rules
- example-based reasoning
- small domain models

## Non-goals
- not replacing large language models
- not claiming universal intelligence
- not eliminating bias entirely

## Why This Matters

Many domain problems require reasoning that is transparent, auditable, and directly grounded in expert knowledge. This architecture explores whether structured expert knowledge combined with modern AI interfaces can provide more interpretable and maintainable domain intelligence systems.

## Repository Layout
- `docs/`: proposal documentation, architecture notes, elicitation workflow, consensus modeling, and limitations.
- `examples/`: illustrative domain graph data and an example elicitation session.
- `src/`: minimal TypeScript scaffold for interviewer, reasoning, domain module, and runtime loader components.
- `diagrams/`: text-based system and workflow diagrams.

## Status
This repository is currently a research proposal and early scaffold. It is intended to clarify architecture and implementation direction, not to report validated performance claims or completed production software.
