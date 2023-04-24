const currentEnv = document.getElementById("current-env");
const targetEnv = document.getElementById("target-env");
const date = document.getElementById("date");
const purpose = document.getElementById("purpose");
const task = document.getElementById("task");
const qa = document.getElementById("qa");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generate");
const deploy = document.getElementById("deploy");

generateBtn.addEventListener("click", () => {
	const releaseNotes = `
<h2>${currentEnv.value} TO ${targetEnv.value} Release Notes ${date.value}</h2>
<h3 style="font-style: italic;">Release Notes:</h3> 
<h4>Purpose:</h4>
<ul><li>${purpose.value}</li></ul> 
<h4>Jira Task:</h4>
<ul><li>${task.value}</li></ul> 
<h4>Deployment:</h4>
<ul><li>Added backup to tmp → copied to wp-content/ai1wm-backups → Changed Ownership to Daemon:Daemon</li></ul>
<p>Time: ${deploy.value} EDT</p>
<h4>QA Steps:</h4>
<ul><li>${qa.value}</li></ul>
`;

	output.innerHTML = releaseNotes;
});
