#!/usr/bin/env nodeModuleNameResolver
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
const sleep = () => new Promise((res, rej) => setTimeout(res, 1000));
// Welcome
async function welcome() {
    let rainbowtitle = chalkAnimation.rainbow("Lets Start the Game  !!!");
    await sleep();
    rainbowtitle.stop();
}
let playerLife = 3;
async function askQuestion() {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    do {
        playerLife--;
        console.log(chalk.rgb(90, 233, 240) `Player Life Left ${playerLife}`);
        var que = await inquirer.prompt([
            {
                type: "number",
                name: "usr_num",
                message: chalk.rgb(233, 242, 106)(`Select any number between 1-10:`),
                // validate:(answers:number)=>{
                //  if(isNaN(answers)){
                //     return chalk.red(`Please Enter a valid number`);
                //  }
                //  return true;
                // }
            },
        ]);
        if (que.usr_num === randomNumber) {
            console.log(chalk.green(`Congratulation!! You guess the right Number`));
        }
        else if (que.usr_num < randomNumber) {
            console.log(chalk.rgb(219, 90, 239)(`Our number${que.usr_num} is less than guess number`));
        }
        else if (que.usr_num > randomNumber) {
            console.log(chalk.rgb(219, 90, 239)(`Our number${que.usr_num} is Greater than guess number`));
        }
    } while (playerLife > 0 && randomNumber !== que.usr_num);
    if (playerLife == 0 && randomNumber !== que.usr_num) {
        console.log(chalk.rgb(255, 178, 102)(`Game is over`));
    }
}
async function startAgain() {
    do {
        console.clear();
        await welcome();
        playerLife = 3;
        await askQuestion();
        var restart = await inquirer.prompt([
            {
                type: "input",
                name: "Start_again",
                message: chalk.rgb(255, 0, 127)(`Do you want to play again : Press Y or N:`),
            },
        ]);
    } while (restart.Start_again === 'Y' || restart.Start_again === 'y');
}
startAgain();
