sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";


        function onInit() {
            var oComponet  = this.getOwnerComponent().getModel("i18n");
//       const resourceBunble = this.getView().getModel("i18n").getResourceBundle();
//       console.log(resourceBunble);
            //var oModel = new JSONModel();
            var oModel = new sap.ui.model.json.JSONModel();
            var oView =  this.getView();
//            var oMi18n = oView.getModel("i18n");
//            console.log(oMi18n);
//            //var i18nBundle = oMi18n.getResourceBundle();
//            //var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var i18nBundle = oComponet.getResourceBundle();
           
            // var oJSON = { 
            //     employeeId: "12345",
            //     countryKey: "UK",
            //     listCountry: [
            //         {
            //           key: "US",
            //           text: i18nBundle.getText("countryUS")
            //         },
            //         {
            //             key: "UK",
            //             text: i18nBundle.getText("countryUK")
            //           },
            //           {
            //             key: "ES",
            //             text: i18nBundle.getText("countryES")
            //           },
            //           {
            //             key: "CL",
            //             text: "Chile"
            //           }
            // ]};
            //oModel.setData(oJSON);
            oModel.loadData("../localService/mockdata/Employees.json");
            oView.setModel(oModel);
        }

        var Main = Controller.extend("logaligroup.employees.controller.View1", {});
    
        Main.prototype.onChangeEmployee = function () {
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
            };
       Main.prototype.onInit = onInit;
       return Main;
        
    });
