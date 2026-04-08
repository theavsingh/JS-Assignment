let base = Number(prompt("Enter base:"));
let distance = Number(prompt("Enter distance:"));
let minutesLate = Number(prompt("Enter minutes late:"));
let seed = Number(prompt("Enter seed:"));

let fare = base+(7*distance);

if (minutesLate > 15)
{
    fare += 20;
}

if (distance > 10)
{
    fare += Math.floor(0.10 * fare);
}

if (seed%2 !== 0)
{
    fare -= seed;
}

else
{
    fare += seed;
}

let fareRoundUP = Math.ceil(fare);

while (fareRoundUP%5 !== 0)
{
    fareRoundUP += 1;
}

alert("Final fare: " + fareRoundUP);