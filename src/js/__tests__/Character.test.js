import Character from '../Character';
import Magician from '../Magician';
import Daemon from '../Daemon';

describe('Character attack without stoned', () => {
  test.each([
    [1, 100],
    [2, 90],
    [3, 80],
    [4, 70],
    [5, 60],
  ])('distance %i => attack %i', (distance, expected) => {
    const character = new Character(100);
    character.distance = distance;

    expect(character.attack).toBe(expected);
  });
});

describe('Character attack with stoned', () => {
  test('distance 2 with stoned returns 85', () => {
    const character = new Character(100);
    character.distance = 2;
    character.stoned = true;

    expect(character.attack).toBe(85);
  });

  test('distance 1 with stoned returns 100', () => {
    const character = new Character(100);
    character.distance = 1;
    character.stoned = true;

    expect(character.attack).toBe(100);
  });

  test('attack cannot be negative', () => {
    const character = new Character(10);
    character.distance = 5;
    character.stoned = true;

    expect(character.attack).toBe(0);
  });
});

describe('get/set stoned and attack', () => {
  test('stoned getter/setter', () => {
    const character = new Character();

    expect(character.stoned).toBe(false);

    character.stoned = true;
    expect(character.stoned).toBe(true);

    character.stoned = false;
    expect(character.stoned).toBe(false);
  });

  test('attack setter stores base value', () => {
    const character = new Character();
    character.attack = 200;
    character.distance = 1;

    expect(character.attack).toBe(200);
  });
});

describe('Magician and Daemon', () => {
  test('Magician inherits attack logic', () => {
    const magician = new Magician();
    magician.attack = 100;
    magician.distance = 2;
    magician.stoned = true;

    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(85);
  });

  test('Daemon inherits attack logic', () => {
    const daemon = new Daemon();
    daemon.attack = 100;
    daemon.distance = 2;

    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(90);
  });

  test('Magician and Daemon use default attack', () => {
    expect(new Magician().attack).toBe(100);
    expect(new Daemon().attack).toBe(100);
  });
});
