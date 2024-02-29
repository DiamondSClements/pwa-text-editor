const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) return;
  promptEvent.prompt();

  const choiceResult = await promptEvent.userChoice;
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the prompt');
  } else {
    console.log('User dismissed the prompt');
  }

  window.deferredPrompt = null;

  butInstall.style.display = 'none';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed:', event);
});
