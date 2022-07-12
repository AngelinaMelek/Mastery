/**
 * Сортировка объектов
 *
 * Напишите код, который отсортирует массив объектов people по полю age.
 * Выведите список имён в массиве после сортировки.
 */
const vasya = { name: "Вася", age: 23 };
const masha = { name: "Маша", age: 18 };
const vovochka = { name: "Вовочка", age: 6 };

const people = [vasya, masha, vovochka];
const clone = people.slice().sort(function (a, b) {
  return a.age - b.age;
});
console.log(clone);

// теперь people: [vovochka, masha, vasya]
console.log(clone[0].age); // 6

console.log("");

/**
 * Добавить класс в строку
 *
 * В объекте есть свойство className,
 * которое содержит список «классов» – слов, разделенных пробелом. Например, className: 'open menu'
 *
 * Создайте функцию addClass(obj, cls), которая добавляет в список класс cls,
 * но только если его там еще нет. Функция не должна добавлять лишних пробелов.
 *
 */
const obj = {
  className: "open menu",
};

function addClass(obj, item) {
  const a = obj.className.split(" ");
  if (!a.includes(item)) {
    obj.className = obj.className + " " + item;
  }
}

addClass(obj, "new"); // obj.className='open menu new'
addClass(obj, "open"); // без изменений (класс уже существует)
addClass(obj, "me"); // obj.className='open menu new me'

console.log(obj.className); // "open menu new me"
console.log("");

/**
 * Напиши функцию pluck, которая берет массив объектов и
 * возвращает массив значений определенного поля.
 * Функция не должна изменять исходный массив.
 */
const characters = [
  { name: "Михаил", age: 36 },
  { name: "Фёдор", age: 40 },
];

function pluck(arr, name) {
  return arr.map(function (el) {
    return el[name];
  });
}

console.log(pluck(characters, "name")); // ['Михаил', 'Фёдор']
console.log("");

/**
 * Напиши функцию, считающую число свойств в объекте.
 * Функция не должна изменять исходный объект и
 * должна работать с различными объектами(строки, массивы, собственные объекты)
 */

function count(item) {
  return Object.keys(item).length;
}
const foo = { a: 1, b: 2 };
console.log(count(foo)); // 2

const bar = [];
console.log(count(bar)); // 0

const baz = [1, 2, 3];
console.log(count(baz)); // 3

const xyz = [];
xyz[100] = 1;
console.log(count(xyz)); // 1

const abc = "string";
console.log(count(abc)); // 6

console.log("");

/**
 * Даны следующие исходные данные.
 * Используя методы типа Array, необходимо выполнить некие операции с массивом данных,
 * чтобы получился результат, описанный над каждой переменной.
 * Результат должен храниться в данной переменной
 */
const students = [
  {
    name: "John",
    age: 17,
    gender: "M",
    grade: 8,
    state: "Florida",
  },
  {
    name: "Sarah",
    age: 19,
    gender: "F",
    grade: 9,
    state: "Alaska",
  },
  {
    name: "Peter",
    age: 21,
    gender: "M",
    grade: 5,
    state: "California",
  },
  {
    name: "Bred",
    age: 19,
    gender: "M",
    grade: 8,
    state: "Florida",
  },
  {
    name: "Garry",
    age: 24,
    gender: "M",
    grade: 9,
    state: "Tennessee",
  },
  {
    name: "Samantha",
    age: 14,
    gender: "F",
    grade: 7,
    state: "California",
  },
  {
    name: "Garold",
    age: 16,
    gender: "M",
    grade: 8,
    state: "Washington",
  },
];

/**
 *
 * Записать выражения для подсчета и присвоения следующий данных
 *
 */

/**
 * [Number] количество совершеннолетних (возвраст >= 18)
 */
function adultsCount(arr) {
  return arr.filter(function (el) {
    return el.age >= 18;
  }).length;
}
console.log(adultsCount(students));
console.log("");

/**
 * [Number] Средний бал среди всех учащихся
 */

const meanGrade = function (arr) {
  return (
    arr.reduce(
      (previousValue, currentValue) => previousValue + currentValue.grade,
      0
    ) / arr.length
  ).toFixed(2);
};
console.log(meanGrade(students));
console.log("");

/**
 * [Number] Средний бал среди несовершеннолетних (возраст < 18)
 */
const teenMeanGrade = function (arr) {
  return meanGrade(
    arr.filter(function (el) {
      return el.age < 18;
    })
  );
};
console.log(teenMeanGrade(students));
console.log("");

/**
 * [Number] Средний бал среди совершеннолетних парней
 */
const menMeanGrade = function (arr) {
  return meanGrade(
    arr.filter(function (el) {
      return el.gender === "M" && el.age >= 18;
    })
  );
};

console.log(menMeanGrade(students));
console.log("");

/**
 * [Array<Student>] Массив учащихся, отсортированных по возрастанию балов.
 */
const tempArr = students.slice();
const studendsByGrades = tempArr.sort((a, b) => a.grade - b.grade);
console.log(studendsByGrades);
console.log("");

/**
 * [Array<String>] Массив имен всех учащихся
 */

function studentName(arr) {
  return arr.map(function (el) {
    return el.name;
  });
}

const studentNames = studentName(students);
console.log(studentNames);
console.log("");
/**
 * [Array<String>] Массив имен всех девушек
 */
const girlNames = function (arr) {
  return arr
    .filter(function (el) {
      return el.gender === "F";
    })
    .map((el) => el.name);
};

console.log(girlNames(students));
console.log("");

/**
 * [Array<String>] Имена всех штатов, в которых живут учащиеся (без повторений!)
 */

const states = function (arr) {
  return arr
    .map((el) => el.state)
    .filter((el, index, initArr) => initArr.indexOf(el) === index);
};
console.log(states(students));
console.log("");

/**
 * [Array<String>] Имена всех совершеннолетних из штата California
 */
const california = function (arr) {
  return arr
    .filter(function (el) {
      return el.state === "California" && el.age >= 18;
    })
    .map((el) => el.name);
};
console.log(california(students));
console.log("");

/**
 * [Number] Средний бал учащихся из Аляски, с именем начинающимся на 'S'
 */

const alaska = function (arr) {
  const a = arr.filter(function (el) {
    return el.state === "Alaska" && el.name.startsWith("S");
  });
  return (
    a.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.grade;
    }, 0) / a.length
  );
};
console.log(alaska(students));
