const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">interests</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm C Maheshwar Rao. I’m a 20 year old B.Tech final year student currently living in Visakhapatnam,India.<br>I spark joy in leading people and guiding them to be successful. To accomplish this, I focus on key results, build amazing teams and quickly adapt to new insights. I enjoy meeting new people and hearing new perspectives.",
  skills:
    '<span class="code">Languages:</span> C++, Python, HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, SQL',
  education:
    "Gitam Deemed to be University, India<br>Bachelor of Technology — Computer Science",
  resume: "<a href='assets/resume.pdf' target='_blank' class='success link'>resume.pdf</a>",
  experience: "No Experience😥",
  interests: 'Sports, Reading Cosmic Books, Music',
  contact:
    "You can contact me on any of following links:<br><a href='https://www.facebook.com/maheshwar.rao.165' target='_blank' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/rawhseham' target='_blank' class='success link'>Instagram</a>, <a href='https://twitter.com/MaheshwarRao19' target='_blank' class='success link'>Twitter</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};


const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);

