sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	return new JSONModel({
		selectedKey: 'overview',
		navigation: [
			{
				title: 'Overview',
				icon: 'sap-icon://home',
				target: 'designtime',
				key: 'overview'
			},
			{
				title: 'Create a Design-time',
				icon: 'sap-icon://create-form',
				target: 'designtime',
				key: 'create'
			},
			{
				title: 'Configurations and API',
				icon: 'sap-icon://header',
				target: 'designtime',
				key: 'api'
			},
			{
				title: 'Host Design-time Capabilities',
				icon: 'sap-icon://bbyd-dashboard',
				target: 'designtime',
				key: 'hostCapabilities'
			}
		]
	});
});