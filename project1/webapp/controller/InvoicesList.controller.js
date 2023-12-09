sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "logaligroup/project1/model/InvoicesFormatters",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(
	Controller,
	JSONModel,
	InvoicesFormatters,
	Filter,
	FilterOperator
) {
	"use strict";

	return Controller.extend("logaligroup.project1.controller.InvoicesList", {
     
        /**
         * @override
         */

        formatter1:InvoicesFormatters,
        onInit: function() {
            
            var oModel = new JSONModel({
                usd : "USD",
                eur : "EUR"
            }

            );

            this.getView().setModel(oModel,"currency");

            
         
        },

        invoicesSearch : function (oEvent) {
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if (sQuery){
              aFilter.push( new Filter("ProductName",FilterOperator.Contains,sQuery));
            };
            const oList = this.getView().byId("idInvoicesList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },
        navigationToDetails: function (oEvent){
            const oItems = oEvent.getSource();
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Details",
            {
                invoicesPath: window.encodeURIComponent(oItems.getBindingContext("invoices").getPath().substr(1))
            }
            );
        }

	});
});