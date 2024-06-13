  //???? NEW CODE I DOWNLOADED
  const APP = {
  deferredInstall: null,
  init() {

    
    if ('serviceWorker' in navigator) {
    
      //listen for `beforeinstallprompt` event
      window.addEventListener('beforeinstallprompt', (ev) => {
        // Prevent the mini-infobar from appearing on mobile
        ev.preventDefault();
        // Stash the event so it can be triggered later.
        APP.deferredInstall = ev;
        console.log('saved the install event');

        //Apple Styles HIDE BUTTON IF INSTALLED
        document.getElementById("appleMessage").classList.remove('appleInstallHide');
        document.getElementById('btn_install1').classList.remove('hide');
    
        //IOS SUB BTN INFO
        const iOSCanInstall = 'standalone' in window.navigator;
        const iOSIsInstalled = window.navigator.standalone === true;
        if(iOSIsInstalled){
          document.getElementById('btn_SubInfo').classList.add('hide');
        }else{
          document.getElementById('btn_SubInfo').classList.remove('hide');
        }
        // Update UI notify the user they can install the PWA
        // if you want here...
      });
      //NOTIFICATION SYSTEM - INSTALL
      //EVENT LISTENER FOR INSTALL BTN

      document.getElementById('btn_install1').addEventListener('click', APP.startChromeInstall);
      //document.getElementById('btn_install2').addEventListener('click', APP.startChromeInstall);
      // document.getElementById('btn_install3').addEventListener('click', APP.startChromeInstall);
      // //END NOTIFICATION SYSTEM INSTALL

      
      
    }//END SERVICE WORKER CHECK
  },//END INIT

  startChromeInstall() {
    if (APP.deferredInstall) {
      console.log(APP.deferredInstall);
      APP.deferredInstall.prompt();
      APP.deferredInstall.userChoice.then((choice) => {
        if (choice.outcome == 'accepted') {
          //they installed
          console.log('installed');
          document.getElementById("btn_install1").classList.add('hide');
          //document.getElementById("btn_install2").classList.add('hide');
          //document.getElementById("btn_install3").classList.add('hide');
        } else {
          console.log('cancel');
        }
      });
    }
  },

  // startNotificationCheck() {
  //   if(window.Notification.permission==='denied'){
  //         //window.Notification.permission='default';alert
  //     console.log('NOTICATIONS PERMISSION DENIED');
  //   }
  //   window.Notification.requestPermission().then((result) => {
  //     if (result === "granted") {
  //         console.log('NOTICATIONS PERMISSION GRANTED');
  //         document.getElementById("btn_subscribe1").classList.add('hide');
  //         document.getElementById("btn_subscribe2").classList.add('hide');
  //         document.getElementById("btn_subscribe3").classList.add('hide');
  //     }
  //   });
  // },
};//END CONST APP
document.addEventListener('DOMContentLoaded', APP.init)
//END OF NEW CODE I DOWLOADED