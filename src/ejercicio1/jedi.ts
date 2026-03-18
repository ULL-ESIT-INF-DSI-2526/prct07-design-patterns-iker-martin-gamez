import { Affiliation, BaseEntity, SearchByAffiliation, SearchByClass, SearchByOriginPlanet, SearchByPowerLevel, SearchByYear } from "./interfaces";
import { BasicGalacticCollection } from "./basic_gallactic";

/**
 * Interface extended for Jedis
 */
export interface JediMaster extends BaseEntity {
  affiliation: Affiliation;
  powerLevel: number;
  formationYear: number;
  originPlanet: string;
}

/**
 * Extended class for Jedis
 */
export class JediMasterCollection extends BasicGalacticCollection<JediMaster> implements SearchByAffiliation<JediMaster>, SearchByPowerLevel<JediMaster>, SearchByYear<JediMaster>, SearchByOriginPlanet<JediMaster> {
  searchByAffiliation(affiliation: Affiliation): JediMaster[] {
    return this.items.filter(jedi => jedi.affiliation === affiliation);
  }

  searchByPowerLevel(level: number): JediMaster[] {
    return this.items.filter(jedi => jedi.powerLevel >= level);
  }

  searchByYear(year: number): JediMaster[] {
    return this.items.filter(jedi => jedi.formationYear === year);
  }

  searchByOriginPlanet(planet: string): JediMaster[] {
    return this.items.filter(jedi => jedi.originPlanet.toLowerCase() === planet.toLowerCase());
  }

  displayCollection(): void {
    console.table(this.items, ['name', 'affiliation', 'powerLevel', 'originPlanet']);
  }
}
