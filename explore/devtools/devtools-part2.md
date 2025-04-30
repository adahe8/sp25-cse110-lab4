# Debugging
1. The numbers being taken in by the `calculateSum` method were in string form, so instead of being added as numbers, they were concatenated together as strings.
2. To fix this, I would force type conversion, converting the inputs to the text fields into numbers or throwing an error/ printing it for users to see if they enter in incompatible values.