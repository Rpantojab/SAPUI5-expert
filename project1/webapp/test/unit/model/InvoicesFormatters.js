sap.ui.define([
  "logaligroup/project1/model/InvoicesFormatters",
	"sap/ui/model/resource/ResourceModel"
], function(
	InvoicesFormatters,
	ResourceModel
) {
	"use strict";
    QUnit.module("Qnvoices status",{
       
      beforeEash : function(){
        this._oResourceModel = new ResourceModel({
            bunbleUrl : sap.ui.require.toUrl("logaligroup/project1/i18n/i18n.properties")
        });

      },
      afterEash : function() {
        this._oResourceModel.destroy();
      }

    });

    QUnit.test("Should Return Invoices Status",function(){
      let oModel = this.stub();
      oModel.withArgs("i18n").returns(this._oResourceModel);
      let oViewStub = {
        getModel : oModel
      };
      oControllerStub = {
        getView : this.stub().returns(oViewStub)
      };

      let fnIsolateFormatters = InvoicesFormatters.invoiceStatus(oControllerStub);
      assert.strictEqual(fnIsolateFormatters("A"),"New","This A status is Correct");
      assert.strictEqual(fnIsolateFormatters("B"),"In Progress","This B status is Correct");
      assert.strictEqual(fnIsolateFormatters("C"),"Done","This C status is Correct");
    });
	
});