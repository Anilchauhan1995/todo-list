class test {

    constructor(a){
      this.a = a;
    }
    static abc (o1){
        console.log("this is abc" + " " + o1.a);
    }
}
var o1 = new test(5);
test.abc(o1);

