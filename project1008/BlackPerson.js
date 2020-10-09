// 흑인을 정의한다. BlackPerson 클래스는 Person클래스의 코드까지 사용할 수 있도록 확장하겠다.
class BlackPerson extends Person{
    constructor(){
        super(5,10); //부모의 constructor(); 부모가 먼저 태어나야하니깐....
        this.name="nigro"; // 자식생성자가 먼저 호출이 되면 에러가뜬다. 
        // 부모의 생성자를 호출하는 이유? 생물학적으로도 당연!!
        //상태는 변수로 표현한다. , 속성(property)
        this.color="black";
        console.log("i am sub class(black person)");
    } 
}