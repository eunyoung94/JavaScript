/*
모든 인종을 아우를 수 있는 최상위 객체인 사람을 정의한다. 
상위 객체일수록 보편적인 특징을 갖고있다..
*/ 
class Person{
    constructor(eye,arm){
        this.eye=eye;
        this.arm=arm;
        this.speak=true; //말할 수 있다. 
        this.walk=true;//직립보행한다.
        console.log("I am supperClass");
        console.log("my eye %d , arm %d",this.eye, this.arm);
    }
    walk(){
        console.log("두발로걸어요");
    }
    speak(){
        console.log("말을해요");
    }
}