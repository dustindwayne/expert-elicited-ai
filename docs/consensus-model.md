# Multi-Expert Consensus Model

This project models expert contributions as layered evidence rather than a forced single truth.

## Core Pattern

knowledge statement  
→ expert votes  
→ confidence score

## Representation
Each knowledge statement stores:
- statement identifier
- statement text or structured rule form
- expert-specific vote or support value
- expert confidence
- provenance metadata (source, time, context)
- optional evidence notes

## Disagreement Handling
Disagreement is preserved explicitly. The system should:
- keep multiple competing statements active
- compute aggregate confidence without deleting minority views
- expose disagreement to downstream reasoning and human reviewers
- support context-dependent activation (e.g., greenhouse vs. field conditions)

## Aggregation Strategy (Prototype)
A simple prototype may compute weighted confidence from expert reliability priors and statement-level confidence. This aggregate is advisory; raw per-expert signals remain available for auditability.
