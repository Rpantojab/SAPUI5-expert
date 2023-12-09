sap.ui.define([
    "sap/ui/core/mvc/Controller"

], function (
    Controller
) {
    "use strict";

    return Controller.extend("logaligroup.project1.controller.App",
        {
         /**
          * @override
          */

         onInit: function() {
          this.getView().addStyleClass(this.getOwnerComponent().getComponentDensityClass());
         }
       ,
         onOpenDialogheader :function () {
            this.getOwnerComponent().openHelloDialog();
         }
        });
});