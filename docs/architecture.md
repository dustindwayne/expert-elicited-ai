# Architecture Overview

This document describes the proposed system architecture for expert-elicited AI. The design focuses on structured knowledge acquisition, explicit representation, and explainable inference.

## System Components

### 1. Expert Interviewer
Coordinates AI-led interviews with domain experts. It asks scoped questions, requests clarifications, and captures uncertainty and exceptions.

### 2. Knowledge Parser
Converts interview responses into normalized artifacts such as concepts, relationships, and rules with confidence and provenance metadata.

### 3. Domain Knowledge Graph
Stores domain concepts and their typed relationships in a machine-readable form that can be versioned, reviewed, and updated incrementally.

### 4. Reasoning Engine
Runs inference over graph and rule data to generate candidate conclusions, confidence scores, and rationale traces.

### 5. Natural Language Interface
Translates user questions into structured reasoning inputs and renders understandable responses grounded in the domain model.

## Data Flow
```text
User Question
↓
Language Parsing
↓
Domain Knowledge Graph
↓
Reasoning Engine
↓
Response Generation
```

## Hybrid Reasoning Options
The architecture is designed to support multiple reasoning strategies depending on domain needs:

- rule systems
- probabilistic reasoning
- example-based reasoning
- small domain models

In practice, implementations may combine these methods to balance interpretability, coverage, and uncertainty handling.

## Design Priorities
- transparent reasoning paths
- provenance tracking for all expert assertions
- incremental domain updates without full retraining
- support for multi-expert disagreement
