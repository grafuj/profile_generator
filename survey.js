const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = "";

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Thank you for answering, ${answer}`);
  profile += answer;
  // rl.close();
  // });


  rl.question("What's an activity you like doing? ", (answer) => {
    profile += (`, it sounds like you like to:, ${answer}. `);
    console.log(`It sounds like you like to: ${answer}`);
    // });
    rl.question("What do you listen to while doing that? ", (answer) => {
      profile += (`You listen to: ${answer}. `);
      console.log(`Preference: ${answer}`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        profile += (`Your favourite meal is: ${answer}. `);
        console.log(`Meal preference: ${answer}`);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile += (`Your favourite dish is: ${answer}. `);
          console.log(`Dish preference: ${answer}`);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            profile += (`Your favourite sport is: ${answer}. `);
            console.log(`Sport preference: ${answer}`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profile += (`Your favourite superpower would be or is: ${answer}.`);
              console.log(`Your thoughts: ${answer}`);
              console.log(`Your beautiful profile: ${profile}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});