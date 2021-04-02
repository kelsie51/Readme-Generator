const fs = require("fs"); //standard node pkg file
const inquirer = require("inquirer");//dependency pkg used for input genertion in README
const generateReadme = require("./util/generateReadme")//Generated ReadMe file
const writeFileAsync = util.promisify(fs.writeFile); //Promise response fx
const apiCall = require("./api")
const util = require("util");// pkg file

function promptUser(){/////Prompts User questions as inputs in the README.md
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the Project Title?",
        },
        {
            type: "input",
            name: "description",
            message: "Include a short description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: " Installation Instructions ",
        },
        {
            type: "input",
            name: "usage",
            message: " Project Usage?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose from these licenses for your project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
                ""
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who Contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Are tests included?"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub Username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email: "
        }
    ]);
} 

Function async Iniating 
  async function init() {
    try {
      const answers = await promptUser();
      const results = await apiCall(answers.username);
      answers.email = results.email;
      answers.avatar_url = results.avatar_url;
      const generateContent = generateReadme(answers);

      console.log(results);
      await writeFileAsync('./dist/README.md', generateContent);

      console.log('Successfully wrote to README.md');
    } catch(err) {
      console.log(err);

//async function init() {//// Async function promise 
    //try {
        //const answers = await promptUser();// Ask user questions and generate responses
       // const generateContent = generateReadme(answers);
   // await writeFileAsync('./dist/README.md', generateContent);// Write new README.md to dist directory
       // console.log('✔️  Successfully wrote to README.md');
    //}catch(err) {
       // console.log(err);
    //}
  //}
  init();  