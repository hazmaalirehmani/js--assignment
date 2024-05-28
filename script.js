// write a program  to print all natural number from 1 to n 
var i=1;
var n=0;
while(n+i){
    console.log(i)
    i++
}

// write a program  to print all natural number from 1 to n in reverse order
var i=10
while(i>0)
    {
     console.log(i)
     i--
}
// write a program to print all alphabet number from a to z using while loop
for(var i=65; i<=90;i++){
    var letter=String.fromCharCode(i);
console.log(letter);
}
// write a program to print all even number between 1 to 100 using while loop
var h=1
while(h<=100){
    if(h%2==0){
        console.log(h)
    }
    h++;
}
// write a program to print all odd number between 1 to 100
var k=1;
while(k<=100){
    if(k%2!=0){
        console.log(k)
    }
    k++;
}
// write a program to print sum of all natural number between 1 to n 
var i=1
var sum=0

{
while(i<=10){
    console.log(i)
sum=sum+i;
i=i+1;
    
}
console.log( "your sum is",sum)
}
// write a program to find sum of all even number between 1 to n
var i=1
var sum=0
{
    for(i=1;i<=10;i++)
        {
            if(i%2==0){
                sum=sum+i;
                console.log(i)
            }
        }
       
        console.log( "your sum is",sum)
}
// write prigram to print sum of all odd number from 1 to n
var i=10;
var sum=0;
{
    for(i=1;i<=10;i++)
        {
           if(i%2!=0){
            sum=sum+i;
            console.log(i)}
        
    }
    console.log("your sum of odd number is",sum)
}
// write a program to find maximum number b/w to numbers
var n1=10;
var n2=35;
{
    if(n1>n2){
        console.log(n1)
    }
    else
    console.log(n2)
}
// write a program to find maximum number b/w three number
var n1=15;
var n2=25;
var n3=1;
{
    if(n1>n2&&n1>n3){
        console.log( "N1 is greater than all number",n1)
    }
    else if(n2>n1&&n2>n3){
        console.log( "N2 is greater than all given number",n2)
    }
    else
    console.log( "N3 is greater than all given number",n3)
}
// write a js programe to check whether the given number is posssitive negative or zeero
var i=-15;
{
    if(i>0){
        console.log("the number is possitive",i)
    }
    else if(i<0){
        console.log("the number is negative ",i)
    }
    else
    console.log("the number is equal to the zero",i)
}
// write a program to check the wether the number is divisbile to 5 and 11 or not
var num=1552;
{
    if(num%5==0){
        console.log("The   number is divisible  on 5",num)
    }
    else if(num%11==0){
        console.log("The number is divisible on 11",num)
    }
    else
     console.log("the number is not divisble on 5,11",num)
}
// write a programe to check wether the given number is even or odd
var num=-35;
{
    if(num%2==0){
        console.log("The number is even",num)
    }
    else if(num%2==1){
        console.log("The number is odd",num)
    }
    else console.log("invalid number",num)
}
// write a program to check wether a year is leap year or not
var year=2023;
{
    if(year%4==0){
        console.log("The year is leap year",year)
    }
    else console.log("not a leap year",year)

}
// write a js program to check the wether a character is alphabet digits or special charcter
var i='$';
var charCode=i.charCodeAt(0);
{
 
    if(charCode>=48 && charCode<=57){
        console.log("the given charcter is a number",i)
    }
    else if(charCode>=65 && charCode<=90){
        console.log("the given charcter is capital alphabet ",i)
    }
    else if(charCode>=97 && charCode<=122){
        console.log("The given charcter is smal alphabet",i)
    }
    else if(charCode>=33 && charCode<=47){
        console.log("the given charcter is special charcter",i)
    }

    else console.log("invalid input",i)
}
// write a program to check whether a charcter is alphabet or not
var i='a'
var charCode=i.charCodeAt(0)
{
    if(charCode>=65 && charCode<=90){
        console.log("your charcetr is capital alphabet",i)
    }
    else if(charCode>=97 && charCode<=122){
        console.log("your charcter is small alphabet",i)
    }
    else console.log("invalid input",i)
}
// write a program to input a week number and print week day
var i=6;
{
    if(i==1){
        console.log("sunday",i)
    }
     else if(i==2){
        console.log("monday",i)
    }
     else if(i==3){
        console.log("tuesday",i)
    }
     else if(i==4){
        console.log("wednesday",i)
    }
     else if(i==5){
        console.log("thursday",i)
    }
     else if(i==6){
        console.log("friday",i)
    }
     else if(i==7){
        console.log("sturday",i)
    }
    else console.log("invalid number",i)
}
// write a program to input month number and print number of days in month
var i=1;
{
    if(i==1){
        console.log("31 days in",i,"month")
    }
   
    else if(i==2){
        console.log("28 days in",i,"month")
    } 
    else if(i==3){
        console.log("31 days in",i,"month")
    }
    else if(i==4){
        console.log("30 days in",i,"month")
    }
    else if(i==5){
        console.log("31 days in",i,"month")
    }
    else if(i==6){
        console.log("30 days in",i,"month")
    }
    else if(i==7){
        console.log("31 days in",i,"month")
    } 
    
    else if(i==8){
        console.log("31 days in",i,"month")
    } 
    else if(i==9){
        console.log("30 days in",i,"month")
    }
     else if(i==10){
        console.log("31 days in",i,"month")
    } 
    else if(i==11){
        console.log("30 days in",i,"month")
    } 
    else if(i==12){
        console.log("31 days in",i,"month")
}
else console.log("inavlid month no",i)
}
// write a program to count total number of notes in given amount
var i=125000;
var notes=0
{
    if(i>=10){
        notes=notes+i/10;
        console.log("your 10 rupees notes is",notes)
    }
     else if(i>=20){
        notes=notes+i/20;
        console.log("your 20 rupees notes is",notes)
     }
      else if(i>=50){
        notes=notes+i/50;
        console.log("your 50 rupees notes is",notes)
      }
     else if(i>=100){
        notes=notes+i/100;
        
        console.log("your 100 rupees notes is",notes)
     }
     else if(i>=500){
        notes=notes+i/500;
        
        console.log("your 500 rupees notes is",notes)
     }
     else if(i>=1000){
        notes=notes+i/1000;
        
        console.log("your 1000 rupees notes is",notes)
     }
     else if(i>=5000){
        notes=notes+i/5000;
        
        console.log("your 5000 rupees notes is",notes)
     }
    else console.log("enter a proper value to find notes",notes)
}
// write a program to input all sides of triangle to check wether triangle is valid or not
// write a program to calculate profit and loss
var sp=180;
var cp=200;
var profit=0
var loss=0
{
    if(sp>cp){
profit=sp-cp;
console.log( "your profit is",profit)
    }
    if(sp<cp){
        loss=cp-sp;
        console.log( "your loss is",loss)
    }

}
// write a program to input marks of five subjects physics,chemisrty biology , Math, and computer
// calculate percentage and grade according to the following
// percentage>=90%:grade A
// percentage>=80%: grade B
// percentage>=70%:grade C
// percentage>=60%;grade D
// percentage>=40%:grade E
// percentage<=40% :grade F
var m1=50
var m2=40
var m3=60
var m4=45
var m5=55
var sum=0;
var percentage=0;
{
sum=m1+m2+m3+m4+m5;
percentage=sum/375*100;
if(percentage>=90 && percentage<=100)
    {
    console.log("your grade is A",percentage)
}
 else if(percentage>=80&& percentage<=89){
    console.log("your grade is ",percentage)
 }
 else if(percentage>=70 && percentage<=79){
    console.log("your grade is C",percentage)
 }
 else if(percentage>=60 && percentage<=69){
    console.log("your grade is D",percentage)
 }
 else if(percentage>=40 && percentage<=49){
    console.log("your grade is E",percentage)
 }
 else console.log("your grade is F",percentage)
}
