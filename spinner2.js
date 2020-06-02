const speChars = "|/-\\|/-\\*";

const spinner2 = function(speChars) {
  let delay = 300;
  let newSent = speChars + ("\n ");
  for (const char of newSent) {
    delay += 300;
    setTimeout(() => {
      process.stdout.write("\r" + char + "   ");

    }, delay); //

  }
};

spinner2(speChars);