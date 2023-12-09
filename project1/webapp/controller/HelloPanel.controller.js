sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/base/Log"

], function (
	Controller,
	MessageToast,
	Log
) {
	"use strict";

	return Controller.extend("logaligroup.project1.controller.HelloPanel",
		{
			/**
			 * @override
			 */
			onInit: function () {

			},
			/**
			 * @override
			 */
			onBeforeRendering: function() {
				window.message = "Log de Before Rendering"
                Log.info(window.message);
				Log.error(window.message);			
			},
			/**
			 * @override
			 */
		//	onAfterRendering: function() {
		//		debugger;		
		//	},
			onPresiono: function () {
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);

				MessageToast.show(sMsg);

			},
			onOpenDialog: function () {
				this.getOwnerComponent().openHelloDialog();
			}
		});
});