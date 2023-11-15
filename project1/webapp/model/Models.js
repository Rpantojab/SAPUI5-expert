sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (
    JSONModel
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


        }

    }

}
);