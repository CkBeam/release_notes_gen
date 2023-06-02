const currentEnv = document.getElementById("current-env");
const targetEnv = document.getElementById("target-env");
const date = document.getElementById("date");
const purpose = document.getElementById("purpose");
const qa = document.getElementById("qa");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generate");
const deploy = document.getElementById("deploy");
const showDeployNotes = document.getElementById("show-deploy-notes");
const copyOutputBtn = document.getElementById("copy-output");
const copyMessage = document.getElementById("copy-message");
const themeToggle = document.getElementById("theme-toggle");
const jiraTicket = document.getElementById("jira-ticket");

function saveThemePreference() {
	localStorage.setItem("darkMode", themeToggle.checked);
}

function loadThemePreference() {
	const darkMode = localStorage.getItem("darkMode");
	if (darkMode === "true") {
		document.body.classList.add("dark-mode");
		themeToggle.checked = true;
		loadCSS("https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/dark.css");
	} else {
		document.body.classList.remove("dark-mode");
		themeToggle.checked = false;
		unloadCSS("https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/dark.css");
	}
}

document.addEventListener("DOMContentLoaded", loadThemePreference);

themeToggle.addEventListener("change", () => {
	document.body.classList.toggle("dark-mode");
	if (document.body.classList.contains("dark-mode")) {
		// dark mode is enabled
		loadCSS("https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/dark.css");
	} else {
		// dark mode is disabled
		unloadCSS("https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/dark.css");
	}
	saveThemePreference();
});

function loadCSS(url) {
	let link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = url;
	document.head.appendChild(link);
}

function unloadCSS(url) {
	let links = document.head.getElementsByTagName("link");
	for (let i = 0; i < links.length; i++) {
		if (links[i].href === url) {
			document.head.removeChild(links[i]);
			break;
		}
	}
}

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
<ul><li>Added backup to tmp → copied to wp-content/ai1wm-backups → Changed Ownership to Daemon:Daemon</li></ul><ul><li>Saved Hyperlinks.\n</li></ul><ul><li>Cleared Cache.\n</li></ul>
<p><strong>Time: </strong> ${deploy.value} EDT</p>
<h4>QA Steps:</h4>
<ul><li>${qa.value}</li></ul>
<ul><li>Checked mobile and tablet view. -</li></ul>
<ul><li>Checked badges. - </li></ul>
<ul><li>Checked DB string. - </li></ul>
<ul><li>Checked Modal - </li></ul>`
		: "";
	const jiraUrl = `https://frontlineinsurance.atlassian.net/jira/software/c/projects/OI/issues/OI-${jiraTicket.value}`;
	const releaseNotes = `
	<h2>${currentEnv.value} TO ${targetEnv.value} Release Notes ${date.value}</h2>
	<h3 style="font-style: italic;">Release Notes:</h3> 
	<h4>Purpose:</h4>
	<ul><li>${purpose.value}</li></ul> 
	<h4>Jira Task:</h4>
	<ul><li><a href="${jiraUrl}">${jiraTicket.value}</a></li></ul> 
	${deploySection}
	`;

	output.innerHTML = releaseNotes;
});

// after all other event listeners
flatpickr(date, {
	dateFormat: "m-d-Y",
});

// after all other event listeners
flatpickr(deploy, {
	enableTime: true,
	noCalendar: true,
	dateFormat: "H:i",
});
