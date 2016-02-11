/*
Template strings introduce a way to define strings with domain-specific languages (DSLs). It provides improved string interpolation, embedded expressions, multiline strings, formatting, and tagging for safe HTML.

Template Strings

Template strings are string literals allowing embedded expressions.
We can use multi-line strings and string interpolation features with them.

Multiline Strings

Any new line characters inserted in the source are part of the template string.
SAMPLE CODE

console.log(`The HackerRank team is on a mission to flatten the world by restructuring
the DNA of every company on the planet. We rank programmers based on
their coding skills, helping companies source great programmers and reduce
the time to hire.`);
OUTPUT

The HackerRank team is on a mission to flatten the world by restructuring
the DNA of every company on the planet. We rank programmers based on
their coding skills, helping companies source great programmers and reduce
the time to hire.
String Interpolation

We can embed expressions within template strings by making use of its syntactic sugar.
SAMPLE CODE

var contestant = "DOSHI";
var score = "20";

console.log(`Congratulations ${contestant}!, Your score is ${score}.`);
OUTPUT

Congratulations DOSHI!, Your score is 20.
Task

Your task is to create a template string and assign it to the variable my_template_string.

The template string should contain the following data only:

My name is ${my_name}.
My id is ${my_id}.
My address is ${my_address}.
Note

Do not create any variable other than my_template_string.
Do not print anything on the console.
Replace the blank (_______________________) with the template string.
*/

var my_template_string = `My name is ${my_name}.
My id is ${my_id}.
My address is ${my_address}.`;
