# Knowledge Elicitation Process

This document outlines how an AI interviewer can extract high-quality, structured knowledge from domain experts.

## Detailed Pipeline

### Step 1 – Identify domain concepts
Define the core entities, conditions, and terminology experts use when describing decisions.

### Step 2 – Extract relationships
Capture causal, correlational, hierarchical, and temporal links between concepts.

### Step 3 – Capture reasoning rules
Document if-then patterns, thresholds, and decision heuristics used in practice.

### Step 4 – Gather examples and counterexamples
Collect representative cases where rules apply, and explicit cases where they fail.

### Step 5 – Assign confidence scores
Attach expert-provided confidence values and uncertainty notes to each statement.

### Step 6 – Track expert provenance
Record contributor identity (or pseudonymous ID), timestamp, domain context, and evidence source.

## Expert Interview Protocol
A practical protocol for AI-led elicitation sessions:

1. Start with scope and terminology alignment.
2. Move from broad concepts to specific diagnostic logic.
3. Probe for disambiguating evidence and failure modes.
4. Request confidence and context qualifiers for each statement.
5. Summarize extracted knowledge back to the expert for confirmation.

### Example AI Prompts
- "What factors influence this diagnosis?"
- "What evidence distinguishes these cases?"
- "What exceptions invalidate this rule?"

## Sample Interview Transcript

**AI Interviewer:** In tomato plants, what does yellowing in lower leaves usually indicate?  
**Expert:** Commonly nitrogen deficiency, but watering and root health must be checked.

**AI Interviewer:** What evidence increases confidence in nitrogen deficiency?  
**Expert:** Uniform chlorosis in older leaves, slow growth, and lack of recent fertilization.

**AI Interviewer:** What is a key counterexample?  
**Expert:** If soil is saturated and roots are dark or mushy, yellowing may come from root rot caused by overwatering.

**AI Interviewer:** Please assign confidence to these statements.  
**Expert:** Nitrogen deficiency explanation: 0.72 in typical garden conditions. Root-rot-overwatering explanation: 0.68 when waterlogging evidence is present.
