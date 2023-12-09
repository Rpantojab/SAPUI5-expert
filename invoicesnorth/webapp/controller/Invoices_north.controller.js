sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.invoicesnorth.controller.Invoices_north", {
            onInit: function () {

            },
            onOpenDialogheader :function () {
                this.getOwnerComponent().openHelloDialog();
             }
        });
    });
