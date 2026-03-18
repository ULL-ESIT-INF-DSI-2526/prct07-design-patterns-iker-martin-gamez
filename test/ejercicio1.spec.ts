import { expect, test, describe, beforeEach } from 'vitest';
import { JediMasterCollection } from '../src/ejercicio1/jedi'; 
import { StarshipCollection } from '../src/ejercicio1/starship';
import { HolocronCollection } from '../src/ejercicio1/holocron';

describe('Galactic Registry - Testing SOLID Principles', () => {
  let jediRegistry: JediMasterCollection;
  let shipRegistry: StarshipCollection;
  let holocronRegistry: HolocronCollection;

  beforeEach(() => {
    jediRegistry = new JediMasterCollection();
    shipRegistry = new StarshipCollection();
    holocronRegistry = new HolocronCollection();

    jediRegistry.addItem({ id: 'j1', name: 'Yoda', affiliation: 'República', powerLevel: 1000, formationYear: 896, originPlanet: 'Desconocido' });
    jediRegistry.addItem({ id: 'j2', name: 'Obi-Wan Kenobi', affiliation: 'República', powerLevel: 850, formationYear: 57, originPlanet: 'Stewjon' });
    jediRegistry.addItem({ id: 'j3', name: 'Darth Vader', affiliation: 'Imperio', powerLevel: 950, formationYear: 41, originPlanet: 'Tatooine' });

    shipRegistry.addItem({ id: 's1', name: 'X-Wing', affiliation: 'República', shipClass: 'Caza estelar', constructionYear: 1 });
    shipRegistry.addItem({ id: 's2', name: 'TIE Fighter', affiliation: 'Imperio', shipClass: 'Caza estelar', constructionYear: 2 });
    shipRegistry.addItem({ id: 's3', name: 'Halcón Milenario', affiliation: 'Independiente', shipClass: 'Carguero', constructionYear: 60 });

    holocronRegistry.addItem({ id: 'h1', name: 'Holocrón Sith de Bane', affiliation: 'Sith', knowledgeLevel: 900, creationYear: 1000 });
    holocronRegistry.addItem({ id: 'h2', name: 'Holocrón Jedi de Luke', affiliation: 'República', knowledgeLevel: 800, creationYear: 15 });
  });

  describe('Base methods (from BasicGalacticCollection)', () => {
    test('Add and search elements by name', () => {
      const results = jediRegistry.searchByName('Yoda');
      expect(results.length).toBe(1);
      expect(results[0].id).toBe('j1');
    });

    test('Remove elements by ID', () => {
      const removed = shipRegistry.removeItem('s1');
      expect(removed).toBe(true);
      expect(shipRegistry.searchByName('X-Wing').length).toBe(0);
    });

    test('Return false if we try to remove a not-exist ID', () => {
      expect(holocronRegistry.removeItem('h999')).toBe(false);
    });
  });

  describe('JediMasterCollection', () => {
    test('search jedis by affiliation', () => {
      const republicJedis = jediRegistry.searchByAffiliation('República');
      expect(republicJedis.length).toBe(2);
    });

    test('search jedis by power', () => {
      const powerfulJedis = jediRegistry.searchByPowerLevel(900);
      expect(powerfulJedis.length).toBe(2); 
    });

    test('search jedis by planets', () => {
      const tatooineJedis = jediRegistry.searchByOriginPlanet('tatooine');
      expect(tatooineJedis.length).toBe(1);
      expect(tatooineJedis[0].name).toBe('Darth Vader');
    });
  });

  describe('StarshipCollection', () => {
    test('search ships by class', () => {
      const fighters = shipRegistry.searchByClass('Caza estelar');
      expect(fighters.length).toBe(3); 
    });

    test('search ships by construction years', () => {
      const oldShips = shipRegistry.searchByYear(60);
      expect(oldShips.length).toBe(1);
      expect(oldShips[0].name).toBe('Halcón Milenario');
    });
  });

  describe('HolocronCollection', () => {
    test('search holocrons by power', () => {
      const darkKnowledge = holocronRegistry.searchByPowerLevel(900);
      expect(darkKnowledge.length).toBe(1);
      expect(darkKnowledge[0].name).toContain('Bane');
    });
  });
});