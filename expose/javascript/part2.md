# Expose
## Part 2
### Going deeper
1. Line 12 will print out 3, since the loop increment counter `i` is declared with `var` and thus has function scope, so it is accessible anywhere within the `discountPrices` function. Since the function was called on a `prices` array of length 3, the for loop runs until `i` is incremented to 3, at which case the loop condition becomes false, and line 12 executes. As an aside, though it looks like a variable is being redeclared multiple times (`var discountPrice` is set every time the for loop runs), the code isn't erroring because JS hoists function scope declarations to the top of the function, so repeats of the same function scope var declaration are treated as a single declaration, and subsequent changes are just a reassignment.
2. Line 13 will print out 150, since that's the discounted price of the last item in the input list, and therefore what `var discountedPrice` will be updated to last.
3. Line 14 will print out 150 as well, since every time the loop executes (so far all items of the input list), `finalPrice` is also updated. The last value it will be updated to is the discounted price of 300 (150) multiplied by 100 and rounded to the nearest whole, then divided by 100, which will still be 150.
4. The function will resturn a list of the same length of the input list `prices`, containing each value from `prices` with the `discount` fraction applied.
5. The code will cause an error since line 12 is referring to `i` outside of the scope it was declared. `i` is only scoped to the for loop it is defined in the declaration of.
6. There will be an error, since `discountedPrice` has block scope and is thus only valid within the for loop (lines 6-10); it's undefined at line 13.
7. At line 14, the final price printed will be 150. This is because `finalPrice` is declared at the top of the function, so though it is block scoped, its block scope encompasses the whole function. When the funciton is called, `finalPrice` is updated by the for loop for each value of the input list, and the last value it is updated to is 150, so that's the value printed after the for loop.
8. This function will return the same thing described in 4. `discounted` is block scoped, with its block being the function becuase it too is declared at the top of the function, and for every number in the input `prices` list, the new result with the discount applied is pushed to `discounted`. This is the list that is returned from the function at the end.
9. The code will cause an error; after
10. Line 12 will print out a 3, since the input list `prices` when the function is called has 3 values, the `length` variable is block scoped to be accessible throughout the function (it's defined at the top of the function).
11. This code causes an error, because at line 7, after the first time the for loop executes, there is an attempt to reassign a constant to a new value, which is not allowed in javascript.
### Data Types
12. notations
    A. student.name  
    B. student['Grad Year']   
    C. student.greeting  
    D. student['Favorite Teacher'].name  
    E. student.courseLoad[0]
### Basic Operators & Type Conversion
13. Arithmetic
    A. '32' since in string integer addition integers map to their exact string representation, and its treated as concatenation.  
    B. 1 since there's no alternative string operation to subtraction, so if the string in the operation is convertible to an exact numerical representation, that will be forced.  
    C. 3 since null will be forced to its integer mapping, 0 to be compatible with integer addition.  
    D. '3null' since the plus is treated as string concatenation when the first value in the operation is a string.  
    E. 4 because the boolean value `true` is converted into its integer equivalent, 1, to be compatible in addition with an int.  
    F. 0, since it doesn't make sense to add a boolean and an object, but both the boolean `false` and `null` have integer representations of 0, which can be added.
    G. '3undefined', since the addition operator here is used for string concatenation because the firs value is a string.  
    H. `NaN`, since there is no numerical equivalent of undefined, so it will be switched to `NaN`, the numerical indicator of a non numerica value. Any arithmetic performed with a `NaN` value will be `NaN` (not a number).  
14. Comparison  
    A. True, since '2' is switched to its int representation to be ciompatible with the operation, and 2 is > 1.  
    B. True since strings are compared "letter" by "letter", and '2' is > '1'.  
    C. True because loose equality is evaluated after type coercion, so '2' is converted to its integer mapping, 2.  
    D. False since strict equality doesn't coerce type, and 2 and '2' are different types, so they cannot be euqal.  
    E. False because after type coercion for the comparison. true's integer mapping is 1, which is not equal to 2.  
    F. True because any integer greater than 0 has the boolean mapping true when it is converted to a boolean.
15. The `==` operator is the loose equality evaluation, which allows for type coercion before the evaluation is performed, so it returns true if the items have the same value, even if they are of different types. `===`, on the other hand, is strict equality, which doesn't allow type coercion and only returns true if the items being evaluated are also of the same type as well as value.
17\. The function will return the array [2,4,6]. When `modifyArray([1,2,3], doSomething)` is called, the `modifyArray` function is executed with input `array` parameter `[1,2,3]` and `callback` parameter `doSomething`. Then as we see in the for loop, for each value of the input array, we call `doSomething` with that value passed in, and append the result to the constant `newArr`. `doSomething` returns the numbers it is passed doubled, so `newArr` is populated with the doubled values of the input array, and that is what is returned.  
19\. The code outputs `1` followed immediately by `3` and then `4`, before finally printing out `2` after 1 second.