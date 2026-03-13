# Knowledge Elicitation Process

This document describes how an AI interviewer can extract domain knowledge from human experts in a structured form.

## Step-by-Step Process

1. **Identify domain concepts**  
   Establish key entities, terms, and observable conditions used by experts.

2. **Extract relationships**  
   Capture causal, correlational, hierarchical, and temporal links between concepts.

3. **Gather diagnostic rules**  
   Elicit if-then style reasoning patterns and threshold-based heuristics.

4. **Capture examples and counterexamples**  
   Request representative cases where a rule applies and where it fails.

5. **Assign confidence scores**  
   Ask experts to estimate confidence for statements and note uncertainty conditions.

6. **Track provenance of expert contributions**  
   Record contributor identity (or pseudonymous ID), timestamp, and context of each statement.

## Sample Interview Transcript

**AI Interviewer:** In tomato plants, what does yellowing in lower leaves usually indicate?  
**Expert:** Commonly nitrogen deficiency, but watering and root health must be checked.

**AI Interviewer:** What evidence increases confidence in nitrogen deficiency?  
**Expert:** Uniform chlorosis in older leaves, slow growth, and lack of recent fertilization.

**AI Interviewer:** What is a key counterexample?  
**Expert:** If soil is saturated and roots are dark or mushy, yellowing may come from root rot caused by overwatering.

**AI Interviewer:** Please assign confidence to these statements.  
**Expert:** Nitrogen deficiency explanation: 0.72 in typical garden conditions. Root-rot-overwatering explanation: 0.68 when waterlogging evidence is present.
