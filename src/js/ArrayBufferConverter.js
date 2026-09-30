export default class ArrayBufferConverter {
  constructor() {
    this.buffer = undefined;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    let result = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}
