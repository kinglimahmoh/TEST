sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/core/ComponentSupport"
], function (UIComponent, JSONModel) {
   "use strict";

   return UIComponent.extend("sap.ui.demo.helloworld.Component", {
       metadata: {
           manifest: "json"
       }
   });
});
