/**
 * New datatype
 */
export type Affiliation =  'República' | 'Imperio' | 'Sith' | 'Independiente';

/**
 * Base Interface
 */
export interface BaseEntity {
  id: string;
  name: string;
}

/**
 * Generic interface
 */
export interface GalacticRegistry<T> {
  addItem(item: T): void;
  removeItem(id: string): boolean;
  searchByName(name: string): T[];
}

/**
 * Interface to search by affiliation
 */
export interface SearchByAffiliation<T> {
  searchByAffiliation(affiliation: Affiliation): T[];
}

/**
 * Interface to search by power
 */
export interface SearchByPowerLevel<T> {
  searchByPowerLevel(level: number): T[];
}

/**
 * Interface to search by class
 */
export interface SearchByClass<T> {
  searchByClass(className: string): T[];
}

/**
 * Interface to search by year
 */
export interface SearchByYear<T> {
  searchByYear(year: number): T[];
}

/**
 * Interface to search by planet
 */
export interface SearchByOriginPlanet<T> {
  searchByOriginPlanet(planet: string): T[];
}