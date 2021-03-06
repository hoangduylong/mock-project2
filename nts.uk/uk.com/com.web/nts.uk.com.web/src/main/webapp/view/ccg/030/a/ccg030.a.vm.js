var ccg030;
(function (ccg030) {
    var a;
    (function (a) {
        var viewmodel;
        (function (viewmodel) {
            var errors = nts.uk.ui.errors;
            var util = nts.uk.util;
            var text = nts.uk.text;
            var resource = nts.uk.resource;
            var model = nts.uk.com.view.ccg.model;
            var ScreenModel = /** @class */ (function () {
                function ScreenModel() {
                    var self = this;
                    // list
                    self.listFlowMenu = ko.observableArray([]);
                    self.selectedFlowMenuCD = ko.observable(null);
                    self.selectedFlowMenuCD.subscribe(function (value) {
                        self.findFlowMenu(value);
                    });
                    self.columns = ko.observableArray([
                        // { headerText: nts.uk.resource.getText("CCG030_19"), key: 'defClassAtr', width: 40 , columnCssClass: 'halign-center', template: '{{if ${defClassAtr} == 1 }}<i class="icon icon-dot "></i>{{/if}}' , hidden: true },
                        { headerText: nts.uk.resource.getText("CCG030_9"), key: 'topPageCode', width: 50 },
                        { headerText: nts.uk.resource.getText("CCG030_10"), key: 'topPageName', width: 260 }
                    ]);
                    // Details
                    self.selectedFlowMenu = ko.observable(new model.FlowMenu());
                    self.isCreate = ko.observable(null);
                    // Enable
                    self.enablePreview = ko.pureComputed(function () {
                        return !text.isNullOrEmpty(self.selectedFlowMenu().fileID());
                    });
                }
                /** Start page */
                ScreenModel.prototype.startPage = function () {
                    var self = this;
                    nts.uk.ui.block.invisible();
                    var dfd = self.reloadData();
                    dfd.done(function () {
                        nts.uk.ui.block.clear();
                        self.selectFlowMenuByIndex(0);
                    });
                    return dfd;
                };
                /** Creat new FlowMenu */
                ScreenModel.prototype.createNewFlowMenu = function () {
                    var self = this;
                    self.isCreate(true);
                    var topPageCode = ko.mapping.toJS('');
                    self.selectedFlowMenuCD(null);
                    self.selectedFlowMenu().topPageCode("");
                    self.selectedFlowMenu().topPageName("");
                    self.selectedFlowMenu().fileName("");
                    self.selectedFlowMenu().fileID("");
                    self.focusToInput();
                    errors.clearAll();
                };
                /** Click Registry button */
                ScreenModel.prototype.registryFlowMenu = function () {
                    var self = this;
                    $(".nts-input").trigger("validate");
                    if (util.isNullOrEmpty(self.selectedFlowMenu().fileID())) {
                        var CCG030_26 = resource.getText("CCG030_26");
                        $('#file_upload').ntsError('set', resource.getMessage("MsgB_2", [CCG030_26]), "MsgB_2");
                    }
                    if (!errors.hasError()) {
                        self.selectedFlowMenu().topPageCode(text.padLeft($("#inpCode").val(), '0', 4));
                        var flowMenu = ko.mapping.toJS(self.selectedFlowMenu);
                        var topPageCode = flowMenu.topPageCode;
                        nts.uk.ui.block.invisible();
                        if (self.isCreate() === true) {
                            a.service.createFlowMenu(flowMenu).done(function (data) {
                                self.reloadData().done(function () {
                                    self.selectedFlowMenuCD(topPageCode);
                                    nts.uk.ui.dialog.info({ messageId: "Msg_15" }).then(function () {
                                        self.focusToInput();
                                    });
                                });
                            }).fail(function (res) {
                                nts.uk.ui.dialog.alertError(res);
                            }).always(function () {
                                nts.uk.ui.block.clear();
                            });
                        }
                        else {
                            a.service.updateFlowMenu(flowMenu).done(function (data) {
                                self.reloadData();
                                nts.uk.ui.dialog.info({ messageId: "Msg_15" }).then(function () {
                                    self.focusToInput();
                                });
                            }).fail(function (res) {
                                nts.uk.ui.dialog.alertError(res);
                            }).always(function () {
                                nts.uk.ui.block.clear();
                            });
                        }
                    }
                };
                /** Delete FlowMenu */
                ScreenModel.prototype.deleteFlowMenu = function () {
                    var self = this;
                    if (self.selectedFlowMenuCD() !== null) {
                        nts.uk.ui.dialog.confirm({ messageId: "Msg_18" }).ifYes(function () {
                            nts.uk.ui.block.invisible();
                            a.service.deleteFlowMenu(self.selectedFlowMenu().topPageCode()).done(function () {
                                var index = _.findIndex(self.listFlowMenu(), ['topPageCode', self.selectedFlowMenu().topPageCode()]);
                                index = _.min([self.listFlowMenu().length - 2, index]);
                                self.reloadData().done(function () {
                                    self.selectFlowMenuByIndex(index);
                                    nts.uk.ui.dialog.info({ messageId: "Msg_16" }).then(function () {
                                        self.focusToInput();
                                        errors.clearAll();
                                    });
                                });
                            }).fail(function (res) {
                                nts.uk.ui.dialog.alertError({ messageId: "Msg_76" });
                            }).always(function () {
                                nts.uk.ui.block.clear();
                            });
                        });
                    }
                };
                /** When upload file is finished */
                ScreenModel.prototype.uploadFinish = function (fileInfo) {
                    var self = this;
                    self.selectedFlowMenu().fileID(fileInfo.id);
                    self.selectedFlowMenu().fileName(fileInfo.originalName.length === 0 ? resource.getText("CCG030_26") : fileInfo.originalName);
                    $('#file_upload').ntsError("clear");
                };
                /** Download zip file */
                ScreenModel.prototype.download = function () {
                    nts.uk.request.specials.donwloadFile(this.selectedFlowMenu().fileID());
                };
                /** Close Dialog */
                ScreenModel.prototype.closeDialog = function () {
                    nts.uk.ui.windows.close();
                };
                /** Open ccg030 B Dialog */
                ScreenModel.prototype.open030B_Dialog = function () {
                    var self = this;
                    nts.uk.ui.windows.setShared("flowmenu", ko.mapping.toJS(self.selectedFlowMenu()), false);
                    nts.uk.ui.windows.setShared("fileID", self.selectedFlowMenu().fileID(), false);
                    nts.uk.ui.windows.sub.modal("/view/ccg/030/b/index.xhtml");
                };
                /** Find Current FlowMenu by ID */
                ScreenModel.prototype.findFlowMenu = function (flowmenuCD) {
                    var self = this;
                    var selectedFlowmenu = _.find(self.listFlowMenu(), ['topPageCode', flowmenuCD]);
                    if (selectedFlowmenu !== undefined) {
                        self.selectedFlowMenu(new model.FlowMenu(selectedFlowmenu));
                        self.isCreate(false);
                    }
                    else {
                        self.selectedFlowMenu(new model.FlowMenu());
                        self.createNewFlowMenu();
                    }
                    self.focusToInput();
                    _.defer(function () { errors.clearAll(); });
                };
                /** Select FlowMenu by Index: Start & Delete case */
                ScreenModel.prototype.selectFlowMenuByIndex = function (index) {
                    var self = this;
                    var selectFlowMenuByIndex = _.nth(self.listFlowMenu(), index);
                    if (selectFlowMenuByIndex !== undefined)
                        self.selectedFlowMenuCD(selectFlowMenuByIndex.topPageCode);
                    else
                        self.selectedFlowMenuCD(null);
                };
                /** Reload Data */
                ScreenModel.prototype.reloadData = function () {
                    var self = this;
                    var dfd = $.Deferred();
                    // Get list FlowMenu
                    a.service.fillAllFlowMenu().done(function (listFlowMenu) {
                        listFlowMenu = _.orderBy(listFlowMenu, ["topPageCode"], ["asc"]);
                        self.listFlowMenu(listFlowMenu);
                        if (listFlowMenu.length > 0) {
                            self.isCreate(false);
                        }
                        else {
                            self.findFlowMenu(null);
                            self.createNewFlowMenu();
                        }
                        dfd.resolve();
                    }).fail(function (error) {
                        dfd.fail();
                        alert(error);
                    });
                    return dfd.promise();
                };
                /** Focus to input */
                ScreenModel.prototype.focusToInput = function () {
                    if (this.isCreate() == true) {
                        $("#inpCode").focus();
                    }
                    else {
                        $("#inpName").focus();
                    }
                };
                return ScreenModel;
            }());
            viewmodel.ScreenModel = ScreenModel;
        })(viewmodel = a.viewmodel || (a.viewmodel = {}));
    })(a = ccg030.a || (ccg030.a = {}));
})(ccg030 || (ccg030 = {}));
//# sourceMappingURL=ccg030.a.vm.js.map