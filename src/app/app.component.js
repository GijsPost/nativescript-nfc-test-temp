"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_nfc_1 = require("nativescript-nfc");
var application_1 = require("tns-core-modules/application");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        application_1.android.on(application_1.AndroidApplication.activityResumedEvent, function (args) {
            // Does log
            console.log("Event: " + args.eventName + ", Activity: " + args.activity);
            if (!_this.nfc) {
                // Gets executed once
                _this.nfc = new nativescript_nfc_1.Nfc();
                // Does log
                _this.nfc.available().then(function (avail) { return console.log("NFC is " + (avail ? '' : 'not ') + 'available'); });
                // Does log
                _this.nfc.enabled().then(function (isOn) { return console.log("NFC is " + (isOn ? '' : 'not ') + 'on'); });
                _this.nfc.setOnTagDiscoveredListener(function (data) {
                    // Does NOT log
                    console.log("Discovered a tag with ID " + data.id);
                }).then(function () {
                    // Does Log
                    console.log("OnTagDiscovered listener added");
                });
                _this.nfc.setOnNdefDiscoveredListener(function (data) {
                    // Does NOT log
                    console.log("Discovered a tag with ID " + data.id);
                }).then(function () {
                    // Does log
                    console.log("OnNdef listener added");
                });
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscURBQXVDO0FBR3ZDLDREQUFxSTtBQVFySTtJQUlJO1FBQUEsaUJBK0JDO1FBOUJHLHFCQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLG9CQUFvQixFQUFFLFVBQUMsSUFBOEI7WUFDL0UsV0FBVztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV6RSxJQUFJLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBRTtnQkFDWCxxQkFBcUI7Z0JBQ3JCLEtBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxzQkFBRyxFQUFFLENBQUM7Z0JBRXJCLFdBQVc7Z0JBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBNUQsQ0FBNEQsQ0FBQyxDQUFDO2dCQUNuRyxXQUFXO2dCQUNYLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQXBELENBQW9ELENBQUMsQ0FBQztnQkFFeEYsS0FBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxVQUFDLElBQWdCO29CQUNqRCxlQUFlO29CQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ0osV0FBVztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxDQUFDO2dCQUVILEtBQUksQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsVUFBQyxJQUFpQjtvQkFDbkQsZUFBZTtvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNKLFdBQVc7b0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbkNRLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7O09BRVcsWUFBWSxDQW9DeEI7SUFBRCxtQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZmMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5mY1wiO1xyXG5pbXBvcnQgeyBOZmNOZGVmRGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmZjXCI7XHJcbmltcG9ydCB7IE5mY1RhZ0RhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5mY1wiO1xyXG5pbXBvcnQgeyBhbmRyb2lkLCBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJ1bmRsZUV2ZW50RGF0YSwgQW5kcm9pZEFjdGl2aXR5RXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICAgIG5mYzogTmZjO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5UmVzdW1lZEV2ZW50LCAoYXJnczogQW5kcm9pZEFjdGl2aXR5RXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIERvZXMgbG9nXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQ6IFwiICsgYXJncy5ldmVudE5hbWUgKyBcIiwgQWN0aXZpdHk6IFwiICsgYXJncy5hY3Rpdml0eSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubmZjKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXRzIGV4ZWN1dGVkIG9uY2VcclxuICAgICAgICAgICAgICAgIHRoaXMubmZjID0gbmV3IE5mYygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERvZXMgbG9nXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5mYy5hdmFpbGFibGUoKS50aGVuKChhdmFpbCkgPT4gY29uc29sZS5sb2coXCJORkMgaXMgXCIgKyAoYXZhaWwgPyAnJyA6ICdub3QgJykgKyAnYXZhaWxhYmxlJykpO1xyXG4gICAgICAgICAgICAgICAgLy8gRG9lcyBsb2dcclxuICAgICAgICAgICAgICAgIHRoaXMubmZjLmVuYWJsZWQoKS50aGVuKChpc09uKSA9PiBjb25zb2xlLmxvZyhcIk5GQyBpcyBcIiArIChpc09uID8gJycgOiAnbm90ICcpICsgJ29uJykpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubmZjLnNldE9uVGFnRGlzY292ZXJlZExpc3RlbmVyKChkYXRhOiBOZmNUYWdEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyBOT1QgbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXNjb3ZlcmVkIGEgdGFnIHdpdGggSUQgXCIgKyBkYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERvZXMgTG9nXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPblRhZ0Rpc2NvdmVyZWQgbGlzdGVuZXIgYWRkZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5mYy5zZXRPbk5kZWZEaXNjb3ZlcmVkTGlzdGVuZXIoKGRhdGE6IE5mY05kZWZEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyBOT1QgbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXNjb3ZlcmVkIGEgdGFnIHdpdGggSUQgXCIgKyBkYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERvZXMgbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbk5kZWYgbGlzdGVuZXIgYWRkZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==