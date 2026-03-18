import { Reproducible } from "./reproducible";

/**
 * Class Song that implements Reproducible with T = string
 */
export class Song implements Reproducible<string> {
  private readonly _title: string;
	private readonly _artist: string;
	private readonly _musicalGen: string;
	private readonly _album: string;
	private readonly _durationSong: number;
	// Constructor
	constructor(title: string, artist: string, musicalGen: string, album: string, durationSong: number) {
		if (durationSong < 0) throw new Error("Duration cannot be negative");
		if (title.trim() === "" || artist.trim() === "") throw new Error("Title and artist cannot be empty");
		this._title = title;
		this._artist = artist;
		this._musicalGen = musicalGen;
		this._album = album;
		this._durationSong = durationSong;
	}
	// Getters
	get title(): string { return this._title; }
	get artist(): string { return this._artist; }
	get musicalGen(): string { return this._musicalGen; }
	get album(): string { return this._album; }
	/**
	 * @returns An string with the song title and song artist
	 */
	data(): string {
		return `${this._title} - ${this._artist}`;
	}
	/**
	 * @returns Songs duration
	 */
	duration(): number {
		return this._durationSong;
	}
}