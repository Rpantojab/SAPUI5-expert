sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "logaligroup/project1/model/Models",
    "sap/ui/model/resource/ResourceModel"
], function (
    Controller,
	MessageToast,
	Models,
	ResourceModel
) {
    "use strict";

    return Controller.extend("logaligroup.project1.controller.App",
        {
         /**
          * @override
          */
         onInit: function() {
           

         
         },
            onPresiono: function (){
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);

                MessageToast.show(sMsg);
                    
                                  }
        });
});