/*
1)Опишіть своїми словами як працює метод forEach.
2)Як очистити масив?
3)Як можна перевірити, що та чи інша змінна є масивом?

1) метод forEach - вызывает для каждого елемента массива колбек функцию в порядке возрастания.
Она не будет вызвана для удалённых или пропущенных элементов массива.

2) Чтобы очистить массив от элементов нужно установить его длину на ноль. 
Эта операция удалит все элементы массива, а также их значения.

3)Нужно воспользоваться методом includes().Метод includes() может принимать два параметра. 
Первым параметром всегда будет искомый элемент, а вторым позиция в массиве с которой начинать поиск элемента 
После выполнения вернет true или false
*/

const arr = ['hello', 'world', 23, '23', null, undefined, 44, 5.7, {}, true, false, 9007199254740991n]

const filterBy = (arr, typeArr) =>{
  const result = arr.filter(item => typeof item === typeArr)
  return result 
}
console.log(filterBy(arr, 'string'))