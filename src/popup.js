
document.getElementById("buildBtn").addEventListener("click", async () => {
    const input = document.getElementById("workoutInput").value;
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: buildWorkout,
        args: [input]
    });
});

function buildWorkout(input) {
    alert("Parsed input: " + input);  // Placeholder: DOM automation will go here
}
