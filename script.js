const currentEnv = document.getElementById("current-env");
const targetEnv = document.getElementById("target-env");
const date = document.getElementById("date");
const purpose = document.getElementById("purpose");
const task = document.getElementById("task");
const qa = document.getElementById("qa");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generate");
const deployTime = document.getElementById("deploy");

generateBtn.addEventListener("click", () => {
	const releaseNotes = `${currentEnv.value} TO ${targetEnv.value} Release Notes ${date.value}
Release Notes:

Purpose:

${purpose.value}

Jira Task:

${task.value}

Deployment:

Added backup to tmp → copied to wp-content/ai1wm-backups → Changed Ownership to Daemon:Daemon

Time: ${deployTime.value} EDT

${qa.value}
`;

	output.value = releaseNotes;
});
