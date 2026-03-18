import { Affiliation, BaseEntity, SearchByAffiliation, SearchByClass, SearchByOriginPlanet, SearchByPowerLevel, SearchByYear } from "./interfaces";
import { BasicGalacticCollection } from "./basic_gallactic";

/**
 * Interface extended for Starships
 */
export interface Starship extends BaseEntity {
  affiliation: Affiliation;
  shipClass: string;
  constructionYear: number;
}

/**
 * Extended class for starships
 */
export class StarshipCollection extends BasicGalacticCollection<Starship> implements SearchByAffiliation<Starship>, SearchByClass<Starship>, SearchByYear<Starship> {
  searchByAffiliation(affiliation: Affiliation): Starship[] {
    return this.items.filter(ship => ship.affiliation === affiliation);
  }

  searchByClass(className: string): Starship[] {
    return this.items.filter(ship => ship.shipClass.toLowerCase === className.toLowerCase);
  }

  searchByYear(year: number): Starship[] {
    return this.items.filter(ship => ship.constructionYear === year);
  }

  displayCollection(): void {
    console.table(this.items, ['name', 'affiliation', 'shipClass', 'constructionYear']);
  }
}