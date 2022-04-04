function main(input) {
    const numPasswords = parseInt(`${input[0]}`);
  
    const regex = /^(.+)>(.{3})|(.{3})|(.{3})|(.{3})<(\1)$/;
  
    for (let i = 0; i < numPasswords; i++) {
      const password = input[i + 1];
      const match = password.match(regex);
      if (match) {
        console.log(`Password: ${match.slice(2, 6).join("")}`);
      } else {
        console.log("Try another password!");
      }
    }
  }

  
      

  main(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])

