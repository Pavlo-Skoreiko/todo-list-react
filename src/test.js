// функция для проверки является ли строка панграммой, если да то вернуть true, если нет то false
function isPangram(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const strArr = str.toLowerCase().split('');
  const result = alphabet.split('').every((letter) => strArr.includes(letter));
  return result;
}