# 03 JavaScript: Password Generator
_Created by John Cannon, 03/04/20_
## Purpose
Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password:

WHEN I click the button to generate a password, THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria, THEN I select which criteria to include in the password

WHEN prompted for the length of the password, THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password,THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt, THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered, THEN a password is generated that matches the selected criteria

WHEN the password is generated, THEN the password is either displayed in an alert or written to the page
```
## Pseudo-code
1.  Create datasets for the characters to be used (letters, numbers, special characters).
2.  Get the user's choice for password length and confirm that it is between 8 and 128 characters.
    *   Create a function
    *   Check the length provided
    *   If the length doesn't meet the stated conditions, prompt for a new length
    *   Return the length
3.  Get the user's choice(s) for the criteria for the characters and save them in an variable.
    *   Create a function for this purpose
    *   Prompt for the new password length
    *   Iterate through the 4 availabe criteria
    *   Store the chosen criteria to an array
    *  Confirm that at least 1 criterion was chosen.   
4.  Create an empty string to hold the new password of the specified length.
5.  Use a loop to iterate "length" number of times to generate the new characters.
7.  Generate a random number to be used to determine which criteria is used for each new character.
8.  During each iteration, use a second random number to determine the value of that criterion.
9.  Save the character generated to the string for the new password.
10.  Write the new password to the specified HTML element.

### _Notes_
*   The application meets the acceptance criteria.
*   Some styling was added to provide a better appearance and focus the user's attention to the text area.
*   The generate button changes colors and text when the password is generated.  The outline for the button that appears when it has focus was removed.