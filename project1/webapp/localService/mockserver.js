sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/ui/model/json/JSONModel",
    "sap/base/util/UriParameters",
    "sap/base/Log"
], function (MockServer, JSONModel, UriParameters, Log) {
    "use strict";
    var aMockServers,
        _sAppPath = "logaligruop/project1/",
        _sJsonFilePath = _sAppPath + "localService/mockdata";

    var aMockServerInterface = {

        init: function (oOptionsParameter) {
            var oOptions = oOptionsParameter || {};
            return new Promise(function (fnResolve, fnReject) {

                var sManifestUrl = sap.ui.require.toUrl(_sAppPath + "manifest.json"),
                    oManifestModel = new JSONModel(sManifestUrl);

                oManifestModel.attachRequestCompleted(function () {
                    var oUriParameters = new UriParameters(window.location.href);

                    var sJsonFileUri = sap.ui.require.toUrl(_sJsonFilePath);
                    var oMainDataSource = oManifestModel.getProperty("sap.app/dataSource/mainService");
                    var sMetadataUri = sap.ui.require.toUrl(_sAppPath + oMainDataSource.settings.localUri);

                    var sMockServerUrl = oMainDataSource.uri && new URI(oMainDataSource.uri).absoluteTo(sap.ui.require.toUrl(_sAppPath)).toString();

                    if (!aMockServers) {
                        aMockServers = new MockServer({
                            rootUri: sMockServerUrl
                        });
                    } else {
                        aMockServers.stop();
                    }

                    MockServer.config({
                        autoRespond: true,
                        autoRespondAfter: (oOptions.delay || oUriParameters.get("severDelay") || 500)
                    });

                    aMockServers.simulate(sMetadataUri, {
                        sMockdataBaseUrl: sJsonFileUri,
                        bGenerateMissingMockData: true
                    });

                    var aRequest = aMockServers.getRequests();

                    var fnResponse = function (iErrorCode, sMessage, aRequest) {
                        aRequest.respose = function (oXhr) {
                            oXhr.respond(iErrorCode, { "Content-type": "text-plain;charset=utf-8" }, sMessage);
                        };
                    };

                    if (oOptions.metadataError || oUriParameters.get("metadataError")) {
                        aRequest.forEach(function (aEntry) {
                            if (aEntry.path.toString().indexof("$metadata") > -1) {
                                fnResponse(500, "No logrado", aEntry);
                            }

                        });

                    };

                    var sErrorParam = oOptions.errorType || UriParameters.get("errorType");
                    var iErrorCode = sErrorParam === "badRequest" ? 400 : 500;

                    if (sErrorParam) {
                        aRequest.forEach(function (aEntry) {
                            fnResponse(iErrorCode, sErrorParam, aEntry);
                        });
                    };

                    aMockServer.setRequests(aRequest);
                    aMockServer.star();

                    Log.info("Running the app mockdata");
                    fnResolve();
                });

                oManifestModel.attachRequestFailed(function () {
                    var sError = "failed to load the aplication manifest";
                    Log.error(sError);
                    fnReject(new Error(sError));
                });
            });
        }
    };

    return aMockServerInterface;

});