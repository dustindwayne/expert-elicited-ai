/**
 * Domain Module Definition
 *
 * Defines the structure of a domain knowledge module.
 * Purpose:
 * - Define the shape of a domain knowledge package.
 * - Bundle concepts, relationships, and optional rules.
 * - Preserve provenance and confidence metadata for statements.
 */

export interface DomainConcept {
  id: string;
  label: string;
}

export interface DomainRelationship {
  source: string;
  target: string;
  type: string;
  confidence: number;
}

export interface DomainModule {
  name: string;
  concepts: DomainConcept[];
  relationships: DomainRelationship[];
}
