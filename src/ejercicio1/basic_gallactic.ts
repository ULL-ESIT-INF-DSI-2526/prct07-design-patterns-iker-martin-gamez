import { Affiliation, BaseEntity, GalacticRegistry } from "./interfaces";

/**
 * Class BasicGalacticCollection
 */
export abstract class BasicGalacticCollection<T extends BaseEntity> implements GalacticRegistry<T> {
  protected items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(id: string): boolean {
    const initialLength = this.items.length;
    this.items = this.items.filter(item => item.id !== id);
    return this.items.length !== initialLength;
  }

  searchByName(name: string): T[] {
    const lowerName = name.toLowerCase();
    return this.items.filter(item => item.name.toLowerCase().includes(lowerName));
  }

  abstract displayCollection(): void;
}