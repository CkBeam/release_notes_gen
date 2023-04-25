const currentEnv = document.getElementById("current-env");
const targetEnv = document.getElementById("target-env");
const date = document.getElementById("date");
const purpose = document.getElementById("purpose");
const task = document.getElementById("task");
const qa = document.getElementById("qa");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generate");
const deploy = document.getElementById("deploy");
const showDeployNotes = document.getElementById("show-deploy-notes");
const copyOutputBtn = document.getElementById("copy-output");
const copyMessage = document.getElementById("copy-message");
const themeToggle = document.getElementById("theme-toggle");

function saveThemePreference() {
	localStorage.setItem("darkMode", themeToggle.checked);
}

function loadThemePreference() {
	const darkMode = localStorage.getItem("darkMode");
	if (darkMode === "true") {
		document.body.classList.add("dark-mode");
		themeToggle.checked = true;
	} else {
		document.body.classList.remove("dark-mode");
		themeToggle.checked = false;
	}
}

document.addEventListener("DOMContentLoaded", loadThemePreference);

themeToggle.addEventListener("change", () => {
	document.body.classList.toggle("dark-mode");
	saveThemePreference();
});

copyOutputBtn.addEventListener("click", () => {
	const range = document.createRange();
	range.selectNode(output);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();

	// Show copy confirmation message
	copyMessage.style.display = "inline";

	// Hide the message after 3 seconds
	setTimeout(() => {
		copyMessage.style.display = "none";
	}, 3000);
});

generateBtn.addEventListener("click", () => {
	const deploySection = showDeployNotes.checked
		? `
<h4>Deployment:</h4>
<ul><li>Added backup to tmp → copied to wp-content/ai1wm-backups → Changed Ownership to Daemon:Daemon</li></ul>
<p>Time: ${deploy.value} EDT</p>
<h4>QA Steps:</h4>
<ul><li>${qa.value}</li></ul>`
		: "";

	const releaseNotes = `
<h2>${currentEnv.value} TO ${targetEnv.value} Release Notes ${date.value}</h2>
<h3 style="font-style: italic;">Release Notes:</h3> 
<h4>Purpose:</h4>
<ul><li>${purpose.value}</li></ul> 
<h4>Jira Task:</h4>
<ul><li>${task.value}</li></ul> 
${deploySection}
<p><strong>Time: </strong>${deploy.value} EDT</p>
`;

	output.innerHTML = releaseNotes;
});
