const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(('Whats your name? Nicknames are also acceptable :'), (answer) => {
  const a1 = answer;
  //console.log(a1);
  rl.question("What's an activity you like doing?", (answer) => {
    const a2 = answer;
    //console.log(a1, a2);
    rl.question("What do you listen to while doing that?", (answer) => {
      const a3 = answer;
      //console.log(a3);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        const a4 = answer;
        //console.log(a4);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          const a5 = answer;
          //console.log(a5);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            const a6 = answer;
            console.log(`${a1} loves to ${a2}, devouring ${a5} for ${a4}, while listening to ${a3} and prefers ${a6} over any other sport.

            `);
            rl.close();
            
          });
        });
      });
    });
  });

});


