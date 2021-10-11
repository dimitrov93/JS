function solve(arr) {
    let account = arr.shift().split(" ");

    for (let i = 0; i < arr.length; i++) {
        let empty = arr[i].split(" ");
        if (empty[0] === "Install") {
            account.push(empty[1]);
        } else if (empty[0] === "Uninstall") {
            for (let i = 0; i < account.length; i++) {
                if (empty[1] === account[i]) {
                    account.splice(i, 1)
                    break;
                }
            }
        } else if (empty[0] === "Update") {
            for (let i = 0; i < account.length; i++) {
                if (empty[1] === account[i]) {
                    account.splice(i, 1)
                    account.push(empty[1]);
                    break;
                }
            }
        } else if (empty[0] === "Expansion") {
            let expan = empty[1].replace("-",":");
            let game = empty[1].split("-");
            game = game[0];
            for (let i = 0; i < account.length; i++) {
                if (game === account[i]) {
                    account.splice(i + 1, 0, expan);
                    break;
                }
                
            }
        } else {
            break;
        }
        
    }

    console.log(account.join(" "));
}

solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])
solve(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
)