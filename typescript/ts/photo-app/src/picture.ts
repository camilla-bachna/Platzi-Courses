import { Item } from "./item";
import { PhotoOrientation } from "./photo-orientation";

export class Picture extends Item {
  constructor(
    id: number,
    title: string,
    private _date: string,
    private _orientation: PhotoOrientation
  ) {
    super(id, title);
  }

  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`;
  }
}
