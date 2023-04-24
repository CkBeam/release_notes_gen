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
<h3>Release Notes:</h3>
<p></p>
<h4>Purpose:</h4>
<p>${purpose.value}</p>
<p></p>
<h4>Jira Task:</h4>
<p>${task.value}</p>
<p></p>
<h4>Deployment:</h4>
<p>Added backup to tmp → copied to wp-content/ai1wm-backups → Changed Ownership to Daemon:Daemon</p>
<p>Time: ${deploy.value} EDT</p>
<p></p>
<h4>QA Steps:</h4>
<p>${qa.value}</p>
`;

	output.innerHTML = releaseNotes;
});
