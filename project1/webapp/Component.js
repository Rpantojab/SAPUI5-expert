sap.ui.define([
	"sap/ui/core/UIComponent",
	"logaligroup/project1/model/Models",
	"sap/ui/model/resource/ResourceModel",
	"logaligroup/project1/controller/HelloDialog",
	"sap/ui/Device"
], function (
	UIComponent,
	Models,
	ResourceModel,
	HelloDialog,
	Device
) {
	"use strict";

	return UIComponent.extend("logaligroup.project1.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			this.setModel(Models.createrecipient());
			//var i18nModel = new ResourceModel({ bundleName: "logaligroup.project1.i18n.i18n" });
			//this.setModel(i18nModel, "i18n");
			this.getRouter().initialize();

			this._helloDialog = new HelloDialog(this.getRootControl());

			this.setModel(Models.createDeviceModel());

		},
		exit: function () {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		openHelloDialog: function () {
			this._helloDialog.open();
		},
		/**
		 * @override
		 * @returns {object}
		 */
		getComponentDensityClass: function () {
			if (!Device.support.touch) {
				this._sComponentDensityClass = "sapUiSizeCompact";
			} else {
				this._sComponentDensityClass = "sapUiSizeCozy";
			}

			return this._sComponentDensityClass;
		}

	});
});