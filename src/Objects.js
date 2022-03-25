/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender == 'female') {
        if (data.age) {
            delete data.age;
        }
    }
    if (data.gender == 'male') {
        if (!data.income) {
            data.income = 100000;
        }
    }
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let str = [];
    for (let i in obj1) {
        str.push(i);
    }
    for (let k in obj2) {
        str.push(k);
    }
    for (let j in obj3) {
        str.push(j);
    }
    return str.sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let arr = [];
    for (let a = 0; a < count; a++) {
        arr[a] = { ...deepClone(obj), id: a };
    }
    return arr;
    function deepClone(obj) {
        const clObj = {};
        for (const i in obj) {
            if (obj[i] instanceof Object) {
                clObj[i] = deepClone(obj[i]);
                continue;
            }
            clObj[i] = obj[i];
        }
        return clObj;
    }
}
