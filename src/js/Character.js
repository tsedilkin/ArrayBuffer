export default class Character {
  constructor(attack = 100) {
    this._attack = attack;
    this._stoned = false;
    this.distance = 1;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let attack = this._attack * (1 - (this.distance - 1) * 0.1);

    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }

    return attack > 0 ? attack : 0;
  }

  set attack(value) {
    this._attack = value;
  }
}
