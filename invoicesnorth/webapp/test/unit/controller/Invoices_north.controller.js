/*global QUnit*/

sap.ui.define([
	"logaligroup/invoicesnorth/controller/Invoices_north.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Invoices_north Controller");

	QUnit.test("I should test the Invoices_north controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
