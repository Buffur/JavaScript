const obj = {
    multi: 2,
    numbers: [1, 2, 3, 4, 5],
    multiplyNum() {
        this.numbers.forEach(function(num) {
            console.log(num * this.multi);
        }, this);
    }
};

obj.multiplyNum();