sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (
    JSONModel,
    Device
) {
    "use strict";

    return {

        createrecipient: function () {

            var oData = {
                recipient: {
                    name: "Word"
                }
            };
            return new JSONModel(oData);


        },

        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
    }

    }

}
);