import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('load and toString convert buffer to json string', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());

  expect(converter.toString()).toBe(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
  );
});

test('toString result can be parsed as JSON', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  const data = JSON.parse(converter.toString());

  expect(data).toEqual({
    data: {
      user: {
        id: 1,
        name: 'Hitman',
        level: 10,
      },
    },
  });
});

test('getBuffer returns ArrayBuffer', () => {
  expect(getBuffer()).toBeInstanceOf(ArrayBuffer);
});
