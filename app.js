console.log('Hello js!');
try {
    // if all goes well
    console.log(JSON.parse("{'foo': 1}"));
    //console.log(JSON.parse('{"foo": 1}'));
}
catch (e) {
    // if Error--
    console.log('I CATCHED the error!!!');
    console.log(e)
}
console.log('life goes on!');

add(2, 3)
add_(2, 3) // error

function add(x, y) {
    return x +  y
}

const add_ = (x, y) => {
    return x +  y
}
const add__ = function (x, y) {
    return x +  y
}

add_(2, 3)
add__(2, 3)