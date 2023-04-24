const currentEnv = document.getElementById("current-env");
const targetEnv = document.getElementById("target-env");
const date = document.getElementById("date");
const purpose = document.getElementById("purpose");
const task = document.getElementById("task");
const qa = document.getElementById("qa");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
	const releaseNotes = `${currentEnv.value} TO ${targetEnv.value} Release Notes ${date.value}
Release Notes:

Purpose:

${purpose.value}

Jira Task:

${task.value}

${qa.value}
`;

	output.value = releaseNotes;
});
