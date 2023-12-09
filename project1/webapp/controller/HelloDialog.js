sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (
    ManagedObject,
    Fragment
) {
    "use strict";

    return ManagedObject.extend("logaligroup.project1.controller.HelloDialog", {

        /**
         * @override
         * @param {string} [sId] 
         * @param {object} [mSettings] 
         * @param {object} [oScope] 
         * @returns {sap.ui.base.ManagedObject}
         */
        constructor: function (oView) {
            this._oView = oView;
        },
        exit: function () {
            delete this._oView;
        },
        open: function () {
            const oView = this._oView;
            if (!oView.byId("helloDialog")) {
                let oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }

                };
                Fragment.load({
                    id: oView.getId(),
                    name: "logaligroup.project1.view.HelloDialog",
                    controller: oFragmentController

                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            }
            else {
                oView.byId("helloDialog").open();
            }
        }
    });
});