/*sap.ui.define([
	"sap/ui/base/ManagedObject"
], function(
	ManagedObject
) {
	

	return ManagedObject.extend("logaligroup.project1.test.integration.opaTests.qunit", {
	});
});
*/
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	sap.ui.require(["logaligroup/project1/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});

});


