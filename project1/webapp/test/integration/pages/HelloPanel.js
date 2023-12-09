sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], function (
	Opa5,
	Press
) {
	"use strict";

	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iSayHelloDialogButton: function () {
					return this.waitFor({
						id: "idSayHelloDialogButton",
						viewName: "logaligroup.project1.view.HelloPanel",
						actions: new Press(),
						errorMessage: "Did No find the 'Say HelloButtons' on de HolloPanel View"

					});
				}
			},
			assertions: {
				iSeeTheHelloDialog: function () {
					return waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							Opa5.assert.ok(true, "The dialog was opend")
						},
						errorMessage: "Did not find the Control Dialog"
					});
				}
			}

		}

	});
});