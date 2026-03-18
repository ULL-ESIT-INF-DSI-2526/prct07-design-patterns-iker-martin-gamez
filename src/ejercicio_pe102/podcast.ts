import { Reproducible } from "./reproducible";

/**
 * New datatype that represents Podcast data
 */
export type PodcastData = {programName: string; numberEpisode: number};

/**
 * Class Podcast that implements Reproducible with T
 */
export class Podcast implements Reproducible<PodcastData> {
  private readonly _programName: string;
	private readonly _numberEpisode: number;
	private readonly _temathic: string;
	private readonly _host: string;
	private readonly _initDate: Date;
	private readonly _endDate: Date;
	// Constructor
	constructor(programName: string, numberEpisode: number, temathic: string, host: string, initDate: Date, endDate: Date) {
		if (programName.trim() === "") throw new Error("Program name cannot be empty");
		if (numberEpisode <= 0) throw new Error("Episode number cannot be 0 or less");
		if (endDate < initDate) throw new Error("Init date cannot be bigger than end date");
		this._programName = programName;
		this._numberEpisode = numberEpisode;
		this._temathic = temathic;
		this._host = host;
		this._initDate = initDate;
		this._endDate = endDate;
	}
	// Getters
	get programName(): string { return this._programName; }
	get numberEpisode(): number { return this._numberEpisode; }
	get temathic(): string { return this._temathic; }
	get host(): string { return this._host; }
	get initDate(): Date { return this._initDate; }
	get endDate(): Date { return this._endDate; }
	/**
	 * @returns A PodcastData object, with the program name and the episode number
	 */
	data(): PodcastData {
		return {
			programName: this._programName,
			numberEpisode:  this._numberEpisode
		};
	}
	/**
	 * @returns Duration of the podcast in seconds (getTime() returns miliseconds)
	 */
	duration(): number {
		return Math.floor((this._endDate.getTime() - this._initDate.getTime()) / 1000);
	}
}