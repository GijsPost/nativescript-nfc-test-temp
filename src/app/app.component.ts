import { Component, NgZone } from "@angular/core";
import { Nfc } from "nativescript-nfc";
import { NfcNdefData } from "nativescript-nfc";
import { NfcTagData } from "nativescript-nfc";
import { android, AndroidApplication, AndroidActivityBundleEventData, AndroidActivityEventData } from "tns-core-modules/application";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})

export class AppComponent {

    nfc: Nfc;

    constructor() {
        android.on(AndroidApplication.activityResumedEvent, (args: AndroidActivityEventData) => {
            // Does log
            console.log("Event: " + args.eventName + ", Activity: " + args.activity);

            if (!this.nfc) {
                // Gets executed once
                this.nfc = new Nfc();

                // Does log
                this.nfc.available().then((avail) => console.log("NFC is " + (avail ? '' : 'not ') + 'available'));
                // Does log
                this.nfc.enabled().then((isOn) => console.log("NFC is " + (isOn ? '' : 'not ') + 'on'));

                this.nfc.setOnTagDiscoveredListener((data: NfcTagData) => {
                    // Does NOT log
                    console.log("Discovered a tag with ID " + data.id);
                }).then(() => {
                    // Does Log
                    console.log("OnTagDiscovered listener added");
                });

                this.nfc.setOnNdefDiscoveredListener((data: NfcNdefData) => {
                    // Does NOT log
                    console.log("Discovered a tag with ID " + data.id);
                }).then(() => {
                    // Does log
                    console.log("OnNdef listener added");
                });
            }
        });
    }
}
