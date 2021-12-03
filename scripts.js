function sum(x) {
    let result = 0
    return function(y) {
        result = x + y
        return result
    }
}

const sum1 = sum(1);
sum1(2);
sum(1)(2);

for (var i = 1; i <= 10; i++) {           //1. Изменить i = 1 и i <= 10
    (function(e) {
        setTimeout(function() {
            console.log(e);
        }, 0);                    //2. console.log напечатает цифру 10 десять раз,потому что ссылка i
    })(i);                               // берет значение из цикла когда он уже отработает и значение будет равно 10
}                                      // здесь создаем анонимную фунцию-оболочку, которая вызывается сразу и получает копию
                                       //значения в i в качестве аргумента e.

