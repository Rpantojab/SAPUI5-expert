/*global QUnit*/

sap.ui.define([
	"logaligroup/project1/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/HelloPanel"
], function (mockserver, opaQunit) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaQunit("Should see the initial page of the app", function (Given, When, Then) {
		// Arrangements
		//Given.iStartMyApp();

		mockserver.init();

		Given.iStartMyUIComponent({
			componentConfig: {
				name: "logaligroup.project1"
			}
		});

		When.onTheAppPage.iSayHelloDialogButton();

		// Assertions
		Then.onTheAppPage.iSeeTheHelloDialog();
		//Then.onTheViewPage.iShouldSeeThePageView();

		//Cleanup
		Then.iTeardownMyApp();
	});
});