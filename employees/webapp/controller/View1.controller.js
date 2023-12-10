sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.employees.controller.View1", {
            onInit: function () {

            },
            onChangeEmployee: function () {
                var inputLabel = this.getView().byId("idInputEmployee");
                var sEmployes = inputLabel.getValue();
                if (sEmployes.length === 6) {
                    //inputLabel.setDescription("Este tiene un largo de 10");
                    this.getView().byId("idLabelCountry").setVisible(true);
                    this.getView().byId("idSelCountry").setVisible(true);
                } else {
                    //inputLabel.setDescription("largo:" + sEmployes.length.toString());
                    this.getView().byId("idLabelCountry").setVisible(false);
                    this.getView().byId("idSelCountry").setVisible(false);
                }
            }
        });
    });
