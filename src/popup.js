document.getElementById("buildBtn").addEventListener("click", async () => {
	const input = document.getElementById("workoutInput").value;
	let workoutData;
	try {
        console.log("Input received: " + input);
		workoutData = JSON.parse(input);
	} catch (e) {
		alert("Invalid JSON: " + e.message);
		return;
	}

	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: buildWorkoutFromJson,
		args: [workoutData]
	});
});

function buildWorkoutFromJson(data) {
	console.log("Received structured workout: " + JSON.stringify(data, null, 2));
	alert("Building workout from JSON...\n(Actual implementation coming soon)");
}