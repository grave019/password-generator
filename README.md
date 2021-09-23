# Creating a Password Generator

### 1. Overview

### 2. Project Goals

### 3. Implementation

### 4. Reflection

### 5. Image of Web Page

### 6. Link to Website

### 7. Credits

## 1. Overview

In this hypothetical scenerio a employer has asked me to create a password generator into starter code so employees can generate a password based on the criteria of their they select.This allows the employee a new secure password to be created.

## 2. Project Goals

When the Generate Password is clicked on the page the user will go through a series of prompts . First the user will be asked to pick the number of characters between 8 and 128. If they choose more or less the directions will be restated to them. They then must choose at least one of the following parameters for their password to be generated: uppercase, lowercase, numbers, and special characters. All of these will be chosen at random by the password generator. When the user chooses at least one of the prompts then the password is generated. 

## 3. Implementation

To accomplish this project I used javascript code. The HTML and CSS were already constructed. I first listed my 4 arrays of characters as variables. Then I declared objects such as length (length of password to be generated), uppercase, lowercase, numeric, special characters and the rawpassword. Because the user is choosing to add a character to the password as a yes or no these  objects are being defined as Booleans. The rawPassword object is created by adding any combination of length with the four Boolean objects previously stated as uppercase, lowercase, special characters and numbers. Once the objects are chosen the Math.floor and Math.random are critcal functions used to provide randomness to the the combination Boolean objects. As each object is chosen they are added to the rawpassword object distribution. If they are not chosen then the password generator will omit that array of characters. Finally, the password is written to the page. I chose to do this because the number of prompts is tedious enough as it is.

### Reflection

This exercise is an excellent practice of thinking logically to build a application that is functional and useful to companies and individuals. If I were given a task to make this code more useful I would display the boolean objects as clickable checkboxes that would cut down on the number of prompts the user would have to go through to generate the password. This would make the interface more user friendly and provide a more asthetically pleasing interface in general.

## 4. Image of the Web Page

![password generator](/password-generator/images/password-generator.png)

## 5. Click the link below to visit the Password Generator Website.

https://grave019.github.io/password-generator/

## 6. Credits 

To complete this password generator project I used Eloquent JavaScript. I also viewed studytonight.com to get ideas on how to think logically with building this password generator. Feel free to submit a pull request if you would like to improve upon my code. Thanks for taking the time to view my password generator.

https://eloquentjavascript.net/Eloquent_JavaScript.pdf

https://www.studytonight.com/post/building-a-password-generator-with-javascript