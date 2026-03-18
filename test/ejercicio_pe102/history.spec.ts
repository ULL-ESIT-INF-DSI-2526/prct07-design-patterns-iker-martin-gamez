import { describe, test, expect, beforeEach } from 'vitest';
import { History } from '../../src/ejercicio_pe102/history';
import { Song } from '../../src/ejercicio_pe102/song';
import { Podcast } from '../../src/ejercicio_pe102/podcast';
import { Reproducible } from '../../src/ejercicio_pe102/reproducible';

describe('Class History', () => {
	let history: History<Reproducible<unknown>>;
	let song1: Song;
	let podcast1: Podcast;
	beforeEach(() => {
		history = new History();
		song1 = new Song("Woah", "Omar Courtz", "reggaeton", "musa", 160);
		const start = new Date("2026-03-09T10:00:00Z");
  	const end = new Date("2026-03-09T11:00:00Z");
		podcast1 = new Podcast("Chiringuito", 23, "deporte", "Pedrerol", start, end);
	})

	test('add() method', () => {
		expect(history.size()).toEqual(0);
		history.add(song1);
		history.add(podcast1);
		expect(history.size()).toEqual(2);
	});

	test('remove() method', () => {
		history.add(song1);
		history.add(podcast1);
		history.remove(1);
		expect(history.size()).toEqual(1);
	});

	test('get() method', () => {
		history.add(song1);
		history.add(podcast1);
		expect(history.get(1)).toBe(podcast1);
	});

	test('size() method', () => {
		history.add(song1);
		history.add(podcast1);
		expect(history.size()).toEqual(2);
	});

	test('duration() method', () => {
		history.add(song1);
		history.add(podcast1);
		expect(history.duration()).toEqual(3760);
	});
});


