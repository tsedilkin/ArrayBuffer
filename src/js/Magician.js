import Character from './Character';

export default class Magician extends Character {
  constructor(attack = 100) {
    super(attack);
    this.type = 'Magician';
  }
}
