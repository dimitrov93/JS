<<<<<<< HEAD
function phoneShop(arr) {
    let phonesList = arr.shift().split(", ")
    arr.pop()
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(" - ");
        let command = current.shift();
        let phone = current.shift();

        if (command === "Add") {
            let flag = false;
            for (let i = 0; i < phonesList.length; i++) {
                let el = phonesList[i];
                if (el === phone) {
                    flag = true;
                    break;
                } 
            }
            if (flag) {
                continue;
            } else {
                phonesList.push(phone)
            }
        } else if (command === "Remove") {
            let flag = false;
            let index = 0;
            for (let i = 0; i < phonesList.length; i++) {
                let el = phonesList[i];
                if (el === phone) {
                    index = i;
                    flag = true;
                    break;
                } 
            }
            if (flag) {
                phonesList.splice(index,1)
            } else {
                continue;
            }
        } else if (command === "Bonus phone") {
            let thePhone = phone.split(":")
            let oldPhone = thePhone.shift()
            let newPhone = thePhone.shift();
            let flag = false;
            let index = 0;
            for (let i = 0; i < phonesList.length; i++) {
                let el = phonesList[i];
                if (el === oldPhone) {
                    index = i;
                    flag = true;
                    break;
                }
            }
            if (flag) {
                phonesList.splice(index+1,0,newPhone)
            }
        } else if (command === "Last") {
            let flag = false;
            let index = 0;
            for (let i = 0; i < phonesList.length; i++) {
                let el = phonesList[i];
                if (el === phone) {
                    index = i;
                    flag = true;
                    break;
                } 
            }
            if (flag) {
               let lastPosition = phonesList.splice(index,1).join(" ");
               phonesList.push(lastPosition)
            } else {
                continue;
            }
        }
    }
    console.log(phonesList.join(", "));
}

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])





=======
function phoneShop(arr) {
    let phonesList = arr.shift().split(", ")
    arr.pop()
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(" - ");
        let command = current.shift();
        let phone = current.shift();

        if (command === "Add") {
            let flag = false;
            for (let i = 0; i < phonesList.length; i++) {
                let el = phonesList[i];
                if (el === phone) {
                    flag = true;
                    break;
                } 
            }
            if (flag) {
                continue;
            } else {
                phonesList.push(phone)
            }
        } else if (command === "Remove") {
            let flag = false;
            let index = 0;
            for (let i = 0; i < phonesList.length; i++) {
                let el = phonesList[i];
                if (el === phone) {
                    index = i;
                    flag = true;
                    break;
                } 
            }
            if (flag) {
                phonesList.splice(index,1)
            } else {
                continue;
            }
        } else if (command === "Bonus phone") {
            let thePhone = phone.split(":")
            let oldPhone = thePhone.shift()
            let newPhone = thePhone.shift();
            let flag = false;
            let index = 0;
            for (let i = 0; i < phonesList.length; i++) {
                let el = phonesList[i];
                if (el === oldPhone) {
                    index = i;
                    flag = true;
                    break;
                }
            }
            if (flag) {
                phonesList.splice(index+1,0,newPhone)
            }
        } else if (command === "Last") {
            let flag = false;
            let index = 0;
            for (let i = 0; i < phonesList.length; i++) {
                let el = phonesList[i];
                if (el === phone) {
                    index = i;
                    flag = true;
                    break;
                } 
            }
            if (flag) {
               let lastPosition = phonesList.splice(index,1).join(" ");
               phonesList.push(lastPosition)
            } else {
                continue;
            }
        }
    }
    console.log(phonesList.join(", "));
}

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])





>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
