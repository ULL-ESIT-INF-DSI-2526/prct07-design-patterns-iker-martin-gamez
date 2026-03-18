import { Affiliation, BaseEntity, SearchByAffiliation, SearchByClass, SearchByOriginPlanet, SearchByPowerLevel, SearchByYear } from "./interfaces";
import { BasicGalacticCollection } from "./basic_gallactic";

/**
 * Extended interface for Holocrons
 */
export interface Holocron extends BaseEntity {
  affiliation: Affiliation;
  knowledgeLevel: number;
  creationYear: number;
}

/**
 * Extended class for Holocrons
 */
export class HolocronCollection extends BasicGalacticCollection<Holocron> implements SearchByAffiliation<Holocron>, SearchByPowerLevel<Holocron>, SearchByYear<Holocron> {
  searchByAffiliation(affiliation: Affiliation): Holocron[] {
    return this.items.filter(hol => hol.affiliation === affiliation);
  }

  searchByPowerLevel(level: number): Holocron[] {
    return this.items.filter(hol => hol.knowledgeLevel === level);
  }

  searchByYear(year: number): Holocron[] {
    return this.items.filter(hol => hol.creationYear === year);
  }

  displayCollection(): void {
    console.table(this.items, ['name', 'affiliation', 'knowledgeLevel']);
  }
}