function main(input) {
    const numPasswords = parseInt(${input[0]});
  
    const regex = /^(.+)>(.{3})|(.{3})|(.{3})|(.{3})<(\1)$/;
  
    for (let i = 0; i < numPasswords; i++) {
      const password = input[i + 1];
      const match = password.match(regex);
      if (match) {
        console.log(Password: ${match.slice(2, 6).join("")});
      } else {
        console.log("Try another password!");
      }
    }
  }
solve