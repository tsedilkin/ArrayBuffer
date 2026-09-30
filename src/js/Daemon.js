import Character from './Character';

export default class Daemon extends Character {
  constructor(attack = 100) {
    super(attack);
    this.type = 'Daemon';
  }
}
