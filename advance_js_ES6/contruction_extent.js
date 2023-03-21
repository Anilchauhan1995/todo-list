class a{
    myfun(){
        console.log("test");
    }
}

class b extends a{


    userfun(){
        console.log("hello");
    }
}

let c = new b();
c.userfun();
c.myfun();