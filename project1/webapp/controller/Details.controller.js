sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (
	Controller,
	History,
	UIComponent
) {
	"use strict";

	return Controller.extend("logaligroup.project1.controller.Details", {

		_onObjectMatch: function (oEvent) {
			//reset del Rating en view Details
			this.byId("rating").reset();
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicesPath),
				model: "invoices"
			});

		},

		onInit: function () {
			const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Details").attachPatternMatched(this._onObjectMatch, this);
		},
		onNavBack: function () {
			const oHistory = History.getInstance();
			const oPreviousHash = oHistory.getPreviousHash();
			if (oPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				const oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("RouteApp", {}, true);
			}

		},
		onRatingChange: function (oEvent) {
			const fvalue = oEvent.getParameter("value");
			const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			sap.m.MessageToast.show(oResourceBundle.getText("RatingConfirmation",[fvalue]));
		}

	});
});