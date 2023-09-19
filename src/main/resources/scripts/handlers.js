
function sendWelcomeMessage() {
    EquoCommService.send("welcomeHandler", "This is a message from JavaScript!");
}

function getExamplePayload() {
    EquoCommService.send("getExamplePayload").then((payload) => {
        document.getElementById("payload-holder").innerText = `Message: ${payload.message}. Id: ${payload.id}.`;
    });
}

function openDocumentation(urlDoc) {
	equo.createWindow({
	    url: urlDoc,
	    name: "Second browser",
	    position: "right"
	});
}
