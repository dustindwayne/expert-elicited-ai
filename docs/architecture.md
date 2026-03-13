# Architecture Overview

This project defines a modular architecture for expert-elicited domain intelligence.

## Components

### 1. AI Knowledge Interviewer
Orchestrates structured interviews with domain experts, asks clarifying questions, and collects candidate statements.

### 2. Structured Extraction Layer
Transforms interview transcripts into machine-readable artifacts:
- concepts
- relationships
- rules
- examples/counterexamples
- confidence and provenance metadata

### 3. Domain Knowledge Graph
Stores structured knowledge as entities and edges with typed relationships and weighted confidence.

### 4. Reasoning Engine
Evaluates graph and rule data to generate ranked conclusions and explanation paths.

### 5. Natural Language Interface
Accepts user questions and returns concise responses grounded in structured reasoning outputs.

## Data Flow
1. Experts provide knowledge via interviews.
2. Extractor converts responses into structured statements.
3. Statements are persisted in domain modules.
4. Runtime loader assembles active domain modules.
5. Reasoning engine computes candidate conclusions.
6. NL interface renders user-readable answers with rationale.

## Design Priorities
- transparency of reasoning
- provenance tracking
- incremental updates
- multi-expert disagreement support
