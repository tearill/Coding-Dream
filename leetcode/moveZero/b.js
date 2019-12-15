let obj = {
    name: '林家豪',
    lettcode: 90
}

const changeLettcode = (o) => {
    o.lettcode = 100;
}
changeLettcode(obj); //引用式赋值 o obj内存空间一致
console.log(obj); 