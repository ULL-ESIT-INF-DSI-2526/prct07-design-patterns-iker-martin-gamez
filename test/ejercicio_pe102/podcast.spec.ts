import { describe, test, expect } from 'vitest';
import { PodcastData, Podcast } from '../../src/ejercicio_pe102/podcast';

describe('Class Podcast', () => {
  test('Creation of an object and his properties', () => {
		const start = new Date("2026-03-09T10:00:00Z");
  	const end = new Date("2026-03-09T11:00:00Z");
		const podcast = new Podcast("Wild Project", 150, "terror", "Jordi Wild", start, end);
		expect(podcast.programName).toBe("Wild Project");
		expect(podcast.numberEpisode).toEqual(150);
		expect(podcast.temathic).toBe("terror");
		expect(podcast.host).toBe("Jordi Wild");
		expect(podcast.initDate).toBe(start);
		expect(podcast.endDate).toBe(end);
	});

	test('data() method from the inferface', () => {
		const start = new Date("2026-03-09T10:00:00Z");
  	const end = new Date("2026-03-09T11:00:00Z");
		const podcast = new Podcast("Wild Project", 150, "terror", "Jordi Wild", start, end);
		expect(podcast.data()).toEqual({ programName: "Wild Project", numberEpisode: 150});
	});

	test('duration() method from the interface', () => {
		const start = new Date("2026-03-09T10:00:00Z");
  	const end = new Date("2026-03-09T11:00:00Z");
		const podcast = new Podcast("Wild Project", 150, "terror", "Jordi Wild", start, end);
		expect(podcast.duration()).toEqual(3600);
	})

	test('program name cannot be empty', () => {
		const start = new Date("2026-03-09T10:00:00Z");
  	const end = new Date("2026-03-09T11:00:00Z");
		expect(() => {
			new Podcast("", 150, "terror", "Jordi Wild", start, end);
		}).toThrowError("Program name cannot be empty");
	});

	test('episode number cannot be 0', () => {
		const start = new Date("2026-03-09T10:00:00Z");
  	const end = new Date("2026-03-09T11:00:00Z");
		expect(() => {
			new Podcast("Wild Project", -2, "terror", "Jordi Wild", start, end);
		}).toThrowError("Episode number cannot be 0 or less");
	});

	test('init date < end date', () => {
		const start = new Date("2026-03-09T10:00:00Z");
  	const end = new Date("2026-03-08T11:00:00Z");
		expect(() => {
			new Podcast("Wild Project", 150, "terror", "Jordi Wild", start, end);
		}).toThrowError("Init date cannot be bigger than end date");
	});
});