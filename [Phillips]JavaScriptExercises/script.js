
1.
var num= prompt("Enter a number");
var total=0;
for(var i=0; i<=num; i++){
  total = total + i;
}
console.log(total);

2.
var word = [];
var answer = prompt("Do you want to play?");
do
  {
  do{
          word.push(prompt("Enter a word."));
          var answer=prompt("Do you want to play again?");
    }while(answer == "yes");

  }while(answer == "yes");

console.log(word);

3.
var str = "";
var flag = false;
var ans = prompt("Would you like to print your name?");
while(ans == "yes")
  {
    while(ans == "yes")
      {
        if (flag)
        {
          str += "!";
          console.log(str);
        }

        else
          {
            var name = prompt("Enter your name");
            str = "Hello my name is " + name;
            console.log(str);
            flag = true;
          }
        ans = prompt("Do you want to print your name again?");
      }
  }


4.
var time = prompt("What time of day is it?(morning,noon,evening)");
if(time=="morning"){
  console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.")
}
else if (time=="noon") {
  console.log("Since it is noon, you should be eating lunch. We suggest a salad.")
}
else if{time=="evening"){
  console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.")
}
