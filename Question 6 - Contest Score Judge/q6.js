let a = Number(prompt("Enter number of correct answers (a):"));
let b = Number(prompt("Enter number of partially correct answers (b):"));
let c = Number(prompt("Enter number of wrong answers (c):"));

let score = (3*a)+b-(2*c);

if (score < 0)
{
    score = 0;
}

if ((a+b+c) > 50)
{
    score -= 10;
}

let finalStatus = "";

if (score >= 60)
{
    finalStatus = "PASS";
}

else
{
    finalStatus = "FAIL";
}

alert(score + ", " + finalStatus);