sap.ui.define([
	"sap/ui/core/UIComponent",
	"logaligroup/project1/model/Models",
	"sap/ui/model/resource/ResourceModel"
], function (
	UIComponent,
	Models,
	ResourceModel
) {
	"use strict";

	return UIComponent.extend("logaligroup.project1.Component", {

		metadata: {
			manifest: "json"

			// "rootView": {
			// 	"viewName": "logaligroup.project1.view.App",
			// 	"type": "XML",
			// 	"async": true,
			// 	"id": "App"
			//   }
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			this.setModel(Models.createrecipient());
			var i18nModel = new ResourceModel({ bundleName: "logaligroup.project1.i18n.i18n" });
			this.setModel(i18nModel, "i18n");
		}

	});
});