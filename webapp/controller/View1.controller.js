sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-9_ResourceModel.controller.View1", {
		
			onInit: function(){
				var oModel = new sap.ui.model.json.JSONModel({
				"lang" : "FR"
			});
			this.getView().setModel(oModel);
			
			},
			
			onClickEng : function(){
				var strLang = "EN";
				this.getView().getModel().setProperty("/lang", strLang);
			},
			onClickFr : function(oEvent){
			var strLang = "FR";
				this.getView().getModel().setProperty("/lang", strLang);
				
			/*	var french = this.getOwnerComponent().getModel("i18n_fr");
				this.getView().getModel(french);*/
				//this.getView().byId("idName").setText(this.getOwnerComponent().getModel("i18n_fr").getResourceBundle().getText("LBL_fName"));
				
				
			}

	});
});