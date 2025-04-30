# Expose
## Part 1
### Variable Scoping Practice
1. Line 9 prints out `values added: 20`
2. Line 13 prints out `final result: 20`
3. As seen from problems one at 2, though the variable result was only declared within the if statement body, because the keyword `var` has function scope, the variable is accessible in every block of the function. This raises complications if you want to name a new result variable later, or you only want to change the variable's value within one block, and work with its unchanged value outside. You can lose track of where you declared the variable and set its value, and unintentionally change it to something you don't want to work with elsewhere, for instance.
4. Line 9 will print out `values added: 20`
5. Line 13 will return an error, because the variable `result` was declared with `let` so it only has block scope, and is thus only valid within the if statement body from lines 4-10. `result` is undefined when its called in line 13.
6. The code will return an error before executing line 9, since at line 7 there is an attempt to reassign the value of `const` variable `result`, which is not allowed for constants.
7. Line 13 won't execute either because of a scope error: `const` variables only have block scope, so `result` is undefined outside of the if statement it's declared in.