## Build a Real-World JavaScript Tracker Application

At this juncture, you have learned enough to build a solid JavaScript web application. Don't be afraid to ask questions from the Instructor, TAs and on Stack Overflow.

You are building a JavaScript tracker web application (you will use HTML and CSS as well) that will function as follows:

It is a simple tracker where the user can enter the start time of an activity, the end time, and a description. This general format allows the user to use your tracker app as an 1) exercise tracker or 2) food tracker or 3) time tracker or basically any kind of diary where something needs to be tracked.

- [ ] Decide what your tracker will track. E.g. will it be a calory tracker? Time tracker? Money tracker? Will it record your sets and reps from your workout? Your inventory of shoes :)? Your inventory of DVDs? Etc. Pick something you would enjoy tracking.
- [ ] The tracker should be able to hold any number of entries. 
- [ ] An entry should have a 4 fields: start time (including date) an end time (including date), a description, and comma separated tags. 
- [ ] Add a "SAVE" button that will save the user's input, and offer a new row ready to accept another entry. Make sure you don't put your JavaScript in your HTML, so don't use `<button onclick="myCoolFunction()">` but instead work inside the `.js` files to add the event listener to your button!

Tally the user's time tracked 
- [ ] 1) next to each entry
- [ ] 2) total per day
- [ ] 3) month to day (MTD)
- [ ] 4) per tag

You can decide where to place these tally's on the page to make it visually readable.

- [ ] Dynamically (with document.getElementById) allow the user to edit/delete their entry and update the tallies if needed.

- [ ] Use an array to store all the entries. 

- [ ] Each entry, along with its start time, end time, a description and tags should be stored in an object. 

The array of entries should look similar to this 

(Notice that only one entry is in this example array; you will add many entries):

```js
var entries = [
  { start: "May 13, 2015 11:13:00", 
    end: "May 13, 2015 12:45:00", 
    description: "shavasana",
    tags: ["yoga", "moderate"]
  }
];
```


##Improve Your Tracker

You should be very comfortable with JavaScript, probably feeling like a Jedi. No, you are not. Not yet. You must keep using your newly acquired knowledge and skills as often as possible to keep learning and improving. You will need to learn about jQuery, JSON, and cookies to complete this section.

- [ ] Add client-side data validation: make sure the user enters a valid date and time, and valid tags in each entry.

- [ ] Use jQuery to add animation: fade out the current tally and fade in the updated tally, fade out deleted entries.

- [ ] Add user friendly features: allow the user to click into a field to modify it.

- [ ] Test the tracker on IE 9, and fix any bugs. This will give you a good workout ;)

- [ ] Store the entries in an external JSON file.

- [ ] Add user authentication: allow users to log in, and save their login credentials to local storage (HTML5 browser storage).

- [ ] Use cookies to remember the user, and show a “Welcome, ‘First Name'” message when the user returns to the quiz.

## Refactor your Tracker

- [ ] Use a front-end css framework like Bootstrap to make the application appealing.

- [ ] Refactor the code so that all DOM manipulation is done with jQuery

## Coding best practices

Go through the three samples provided.

`tracker00` is naive, native JavaScript implementation which gets most of the job done but has a lot of repeating code in it, which is a big no-no and also includes HTML inside the JS file which is bad.

`tracker01` is a "quick and dirty" native JavaScript implementation. You will notice that as long as the file extension is .html the file is valid in the browser and is processed properly without the DOCTYPE, html or even body tags! JS is still in a script tag, but it gets the job done.

`tracker02` is a better version of native JavaScript with separation of JS and HTML. It's worth seeing how functions are broken out, and helper functions reused.