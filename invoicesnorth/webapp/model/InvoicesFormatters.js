sap.ui.define([],
    function () {
        return {
            invoiceStatus : function (sStatus) {
                const resourceBunble = this.getView().getModel("i18n").getResourceBundle();
                switch (sStatus) {
                    case 'A': return resourceBunble.getText("invoicesStatusA");
                    case 'B': return resourceBunble.getText("invoicesStatusB");
                    case 'C': return resourceBunble.getText("invoicesStatusC");
                    default: return (sStatus);
                }
            }
        }


    });