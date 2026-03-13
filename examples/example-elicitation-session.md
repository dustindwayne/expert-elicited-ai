# Example Elicitation Session (Plants Domain)

**AI Interviewer:** A tomato plant has yellow leaves. What are the first hypotheses to consider?  
**Plant Expert:** Start with nutrient deficiency, especially nitrogen, and watering-related root stress.

**AI Interviewer:** What observations help separate these possibilities?  
**Plant Expert:** Check which leaves yellow first, soil moisture, drainage, and root appearance.

**AI Interviewer:** If lower leaves yellow first and growth is slow, what diagnosis is more likely?  
**Plant Expert:** Nitrogen deficiency becomes more likely.

**AI Interviewer:** What evidence supports overwatering with root rot?  
**Plant Expert:** Persistently wet soil, poor drainage, and brown-black mushy roots.

**AI Interviewer:** How should confidence be recorded?  
**Plant Expert:** Assign confidence per statement and annotate context, like climate and soil type.

## Structured Notes Extracted
- `yellow_leaves -> nitrogen_deficiency` (confidence: 0.72)
- `overwatering -> root_rot` (confidence: 0.81)
- `root_rot -> yellow_leaves` (confidence: 0.68)
- Required evidence fields: leaf pattern, soil moisture, root condition, fertilization history
