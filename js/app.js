// Homework Terminal Loop // 

// 1. String interpolation is a way to construct a new String value from a mix of constants, variables, literals, and expressions"
  'this is string interpolation'
  // "Concatenation allows you to combine to strings together."
  const newString = 'stringA' + 'stringB'

// 2. DRY code is to reduce repitition of code. We should pay attention to it because we can reduce the amount of code we write by using certain loops or other methods to do more than one task.
  // You can use a for loop to write DRY code as an example. 

// SECTION 2 // 
const a = 4; 
const b = 53; 
const c = 57; 
const d = 16; 
const e = 'Kevin'; 

console.log(a < b); 
console.log( c > d); 
console.log('name' === 'name'); 
console.log(a < b < c); 
console.log(a * a = d); 
console.log(e === 'Kevin');
console.log(48 === '48'); 


// SECTION 3 // 
// 1. This is an infinite loop, there is no value set to end the loop. 
// 2. No, because runProgram is set = false. 
// 3. The code gave me the predicted response of 'AAAAAAAAAAAAAAA', as long as 'i' is < 20 the while loop will continue to pront the letters 'A'. 


// SECTION 4 //
// For Loop
// A for loop runs a selected number of iterations. A while loop allows code to be run repeatedly based on a given boolean condition. 

// For Loop I // 
for(let k = 0; k < 1000; k++){
  console.log(k); 
} 

// For Loop Control Statement // 
// The first part of a control statement is the intializer. 
// The second part of the control statement is the comparison. 
// The third part of the control statement is the switch. 

// For Loop in reverse // 
for(let e = 999; e >= 0; e--){
  console.log(e); 
}

// More Counting // 
for (let i = 0; i < 10; i++){
  console.log('the value of i is: ' + i + ' of 10');
}


// SECTION 5 // 

// Part 1: Set The Scene // 
/* 
cd documents/funky-ducks/06_11_2018_Command_Line
mkdir homework_part_2
cd homework_part_2
mkdir death_star
cd death_star
touch darth_vader.txt
touch princess_leia.txt
touch storm_trooper.txt
cd .. 
-- in homework_part_2 top level -- 
mkdir galaxy_far_far_away
cd galaxy_far_far_away
mkdir tatoonie
cd tatoonie
touch luke.txt
touch ben_kenobi.txt
mkdir millenium_falcon
cd millenium_falcon
touch han_solo.txt
touch chewbaca.txt
cd .. 
cd ..
-- in top level of homework_part_2 -- 

// Part II: mv - rename // 
cd tatoonie 
mv ben_kenobi.txt/ obi_wan.txt
ls - list changes 

// Part II: cp - copy 
cd death_star 
cp storm_tropper.txt/ tatoonie


// Part IV: mv - move // 
cd galaxy_far_far_away
cd tatoonie
mv luke.txt/ millenium_falcon
mv obi_wan.txt/ millenium_falcon 
mv tatoonie/millenium_falcon death_star/ 
mv death_star/ princess_leia.txt galaxy_far_far_away/millenium_falcon/
*/

// Part V: rm - remove

/*
rm -rf galaxy_far_far_away/ millenium_falcon/obi_wan.txt
*/

// Part VI: all together

/*
mkdir galaxy_far_far_away/ yavin_4
mv galaxy_far_far/millenium_falcon galaxy_far_far_away/yavin_4
mkdir galaxy_far_far_away/yavin_4/x_wing
mv galaxy_far_far_away/yavin_4/millenium_falcon/princess_leia.txt galaxy_far_far_away/yavin_4
mv galaxy_far_far_away/yavin_4/millenium_falcon/luke.txt galaxy_far_far_away/yavin_4/x_wing
mv galaxy_far_far_away/yavin_4 galaxy_far_far_away
mv galaxy_far_far_away/yavin_4/millenium_falcon galaxy_far_far_away
mv galaxy_far_far_away/yavin_4/x_wing galaxy_far_far_away
mkdir death_star/tie_fighter_1 death_star/tie_fighter_2 death_star/tie_fighter_3
mv death_star/tie_fighter_1 galaxy_far_far_away
mv death_star/tie-fighter_2 galaxy_far_far_away
mv death_star/tie_fighter_3 galaxy_far_far_away
*/

// Part VII: rm -r - remove directories

/*
rm -r galaxy_far_far_away/tie_fighter_2
rm -r galaxy_far_far_away/tie_fighter_3
*/

// Part VIII: 

/*
touch galaxy_far_far_away/x_wing/the_force.txt
rm -rf death_star
mv galaxy_far_far_away/millenium_falcon galaxy_far_far_away/yavin_4
mvgalaxy_far_far_away/x_wing galaxy_far_far_away/yavin_4
*/
















