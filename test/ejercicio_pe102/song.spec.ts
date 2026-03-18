import { describe, test, expect } from 'vitest';
import { Song } from '../../src/ejercicio_pe102/song';

describe('Class Song', () => {
  test('Creation of an object and his properties', () => {
		const song = new Song("Navidad", "Pepe Benavente", "bachata", "Nueva Era", 190);
		expect(song.title).toBe("Navidad");
		expect(song.artist).toBe("Pepe Benavente");
		expect(song.musicalGen).toBe("bachata");
		expect(song.album).toBe("Nueva Era");
	});

	test('data() method from the interface', () => {
		const song = new Song("Navidad", "Pepe Benavente", "bachata", "Nueva Era", 190);
		expect(song.data()).toBe("Navidad - Pepe Benavente");
	});

	test('duration() method from the interface', () => {
		const song = new Song("Navidad", "Pepe Benavente", "bachata", "Nueva Era", 190);
		expect(song.duration()).toEqual(190);
	});

	test('negative duration', () => {
		expect(() => {
			new Song("Navidad", "Pepe Benavente", "bachata", "Nueva Era", -50);
		}).toThrowError("Duration cannot be negative");
	});

	test('empty title or artist', () => {
		expect(() => {
			new Song("", "Pepe Benavente", "bachata", "Nueva Era", 190);
		}).toThrowError("Title and artist cannot be empty");
	});
});