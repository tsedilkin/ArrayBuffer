import Magician from './Magician';
import Daemon from './Daemon';
import ArrayBufferConverter from './ArrayBufferConverter';
import getBuffer from './getBuffer';

const magician = new Magician();
magician.attack = 100;
magician.distance = 2;
magician.stoned = true;
console.log(magician.attack); // 85

const daemon = new Daemon();
daemon.attack = 100;
daemon.distance = 2;
console.log(daemon.attack); // 90

const converter = new ArrayBufferConverter();
converter.load(getBuffer());
console.log(converter.toString());
