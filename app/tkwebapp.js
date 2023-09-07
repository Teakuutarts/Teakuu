if ('serviceWorker' in navigator) { 
    navigator.serviceWorker.register('/app/pwa/tkw.js'); 
};
console.log("Please install the app O-O (I hate chrome)")

/* example stuff
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    btnAdd.style.display = 'block';
  });

  btnAdd.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    btnAdd.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  }); 

  installPWA(installPromptEventPayload); {

    var installPromptEvent = installPromptEventPayload.getInstallPromptEvent();
    
    if (installPromptEvent) {
    
    // Call prompt() to display the official prompt
    
    installPromptEvent.prompt().catch(function () {
    
    // In case of DOMException, ask again
    
    return false;
    
    });
    
    // Wait for the user to respond to the prompt
    
    return installPromptEvent.userChoice.then(function (choiceResult) {
    
    if (choiceResult.outcome === 'accepted') {
    
    console.log('user accepted ');
    
    } else {
    
    console.log('user cancelled ');
    
    }
    
     
    
    // Don't ask the user again
    
    return true;
    
    });
    
    }
    
    return Promise.resolve(false);
    
    } */