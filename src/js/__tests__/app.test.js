import getCharecter from '../app';

test('tests', () => {
  const character = {
    name: "Лучник",
    type: "Bowman",
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон",
      },
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://...",
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  const findID = getCharecter(character,8);
  const result = {
    id: 8,
    name: "Двойной выстрел",
    icon: "http://...",
    description: "Двойной выстрел наносит двойной урон",
  }
  expect(findID).toEqual(result);
});
