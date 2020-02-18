let template = '我是{{name}}, 年龄{{age}}, 性别{{sex}}'; // 待编译的模板

let data = {
    name: '蔡徐坤',
    age: 18,
    sex: 'male'
}

// vue 第一个功能 render() --- 渲染模板
function render(template, data) {
    // 正则 + replace {{}}
    // 1. 匹配{{(?)+}}
    // 2. $1 去 data 中取到 data[$1]
    // 3. replace
    const reg = /\{\{(\w+)\}\}/; // 不做贪婪匹配
    if (reg.test(template)) { // 退出条件
        // vue 源码里模板编译用的正则方法
        const key = reg.exec(template)[1]; // 第二项就是{{}}中对应的 key 
        // console.log(key);
        template = template.replace(reg, data[key]);
        return render(template, data);
    }
    return template;
}

console.log(render(template, data));