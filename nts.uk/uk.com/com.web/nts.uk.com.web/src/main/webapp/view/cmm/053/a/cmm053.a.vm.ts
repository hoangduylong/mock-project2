module nts.uk.com.view.cmm053.a.viewmodel {
    import close = nts.uk.ui.windows.close;
    import getText = nts.uk.resource.getText;
    import setShared = nts.uk.ui.windows.setShared;
    import block = nts.uk.ui.block;
    import dialog = nts.uk.ui.dialog;
    import modal = nts.uk.ui.windows.sub.modal;
    export class ScreenModel {
        settingManager: KnockoutObservable<SettingManager> = ko.observable(new SettingManager({
            startDate            : '',
            endDate              : '',
            isNewMode            : false,
            departmentCode       : '',
            departmentApproverId : '',
            departmentName       : '',
            dailyApprovalCode    : '',
            dailyApproverId      : '',
            dailyApprovalName    : '',
            hasAuthority         : false,
            closingStartDate     : ''
        }));
        ccgcomponent: GroupOption;
        screenMode: KnockoutObservable<number> = ko.observable(EXECUTE_MODE.NEW_MODE);
        //_____CCG001________
        selectedEmployee: KnockoutObservableArray<EmployeeSearchDto>;
        showinfoSelectedEmployee: KnockoutObservable<boolean>;
        baseDate: KnockoutObservable<Date> = ko.observable(new Date());
        //___________KCP009______________
        employeeInputList: KnockoutObservableArray<EmployeeKcp009> = ko.observableArray([]);
        systemReference: KnockoutObservable<number> = ko.observable(SystemType.EMPLOYMENT);
        isDisplayOrganizationName: KnockoutObservable<boolean> = ko.observable(true);
        targetBtnText: string = getText("KCP009_3");
        listComponentOption: ComponentOption;
        selectedItem: KnockoutObservable<string> = ko.observable(null);
        tabindex: number = -1;
        isInitDepartment: boolean = true;
        isInitdailyApproval: boolean = true;
        displayDailyApprover: KnockoutObservable<boolean> = ko.observable(false);
        checkClearErrAll: KnockoutObservable<boolean> = ko.observable(false);
        errA27: KnockoutObservable<string> = ko.observable("");
        errA210: KnockoutObservable<string> = ko.observable("");
        checkChangeA27A210: KnockoutObservable<boolean> = ko.observable(false);
        constructor() {
            let self = this;

            //_____CCG001________
            self.selectedEmployee = ko.observableArray([]);
            self.showinfoSelectedEmployee = ko.observable(false);
            self.ccgcomponent = {
                
                /** Common properties */
                systemType: 2,
                showEmployeeSelection: true,
                showQuickSearchTab: true,
                showAdvancedSearchTab: true,
                showBaseDate: true,
                showClosure: false,
                showAllClosure: false,
                showPeriod: false,
                periodFormatYM: false,

                /** Required parameter */
                baseDate: moment().toISOString(),
                periodStartDate: moment().toISOString(),
                periodEndDate: moment().toISOString(),
                inService: true,
                //????????????
                leaveOfAbsence: false,
                //????????????
                closed: false,
                //????????????
                retirement: false,

                /** Quick search tab options */
                showAllReferableEmployee: true,
                showOnlyMe: false,
                showSameWorkplace: true,
                showSameWorkplaceAndChild: true,

                /** Advanced search properties */
                showEmployment: false,
                showWorkplace: true,
                showClassification: false,
                showJobTitle: false,
                showWorktype: false,
                isMutipleCheck: true,

                /**
                * Self-defined function: Return data from CCG001
                * @param: data: the data return from CCG001
                */
                returnDataFromCcg001: function(data: Ccg001ReturnedData) {
                    self.showinfoSelectedEmployee(true);
                    self.selectedEmployee(data.listEmployee);
                    self.convertEmployeeCcg01ToKcp009(data.listEmployee);
                    self.initScreen();
                }
            }
            $('#ccgcomponent').ntsGroupComponent(self.ccgcomponent);

            //??????????????????????????????
            self.selectedItem.subscribe(newValue => {
                if (newValue) {
                    block.invisible();
                    self.initScreen();
                }
            });
            //?????????????????????????????? A2_7
            self.settingManager().departmentCode.subscribe(value => {
                if ($('#A2_7').ntsError('hasError')) {
                    self.settingManager().departmentApproverId('');
                    self.settingManager().departmentName('');
                    return;
                }
                if (value != '' && value != null && value !== undefined &&
                    (value.length == __viewContext.primitiveValueConstraints.EmployeeCode.maxLength || __viewContext.primitiveValueConstraints.EmployeeCode.maxLength == 0)) {
                    self.getEmployeeByCode(value, APPROVER_TYPE.DEPARTMENT_APPROVER);
                }
                self.isInitDepartment = false;
            });
            
            //?????????????????????????????? A2_10
            self.settingManager().dailyApprovalCode.subscribe(value => {
                if ($('#A2_10').ntsError('hasError')) {
                    self.settingManager().dailyApproverId("");
                    self.settingManager().dailyApprovalName("");
                    return;
                }
                if (value != '' && value != null && value !== undefined &&
                    (value.length == __viewContext.primitiveValueConstraints.EmployeeCode.maxLength || __viewContext.primitiveValueConstraints.EmployeeCode.maxLength == 0)) {
                    self.getEmployeeByCode(value, APPROVER_TYPE.DAILY_APPROVER);
                } else {
                    self.settingManager().dailyApproverId("");
                    self.settingManager().dailyApprovalName("");
                }
                self.isInitdailyApproval = false;
            });
            //keyup :TH nhap gia tri cu + truoc do co err -> set lai err
            $(document).on('keyup', '#A2_7, #A2_10', (evt: Event) => {
                if ($(evt.target).attr('id') == 'A2_7') {
                    _.defer(() => {
                        self.checkChangeA27A210(evt.target.value != '' && (evt.target.value != self.settingManager().departmentCode()));
                        if (evt.target.value == self.settingManager().departmentCode() && self.errA27() != '') {
                            $('#A2_7').ntsError('set', { messageId: self.errA27() });
                        }
                    });
                } else {
                    _.defer(() => {
                        self.checkChangeA27A210(evt.target.value != '' && evt.target.value != self.settingManager().dailyApprovalCode());
                        if (evt.target.value == self.settingManager().dailyApprovalCode() && self.errA210() != '') {
                            $('#A2_10').ntsError('set', { messageId: self.errA210() });
                        }
                    });
                }
            });
        }

        start(): JQueryPromise<any> {
            let self = this;
            var dfd = $.Deferred();
            service.getInfoEmLogin().done(function(employeeInfo) {
                service.getWpName().done(function(wpName) {
                    self.employeeInputList.push(new EmployeeKcp009(employeeInfo.sid,
                        employeeInfo.employeeCode, employeeInfo.employeeName, wpName.name, wpName.name));
                    self.initKCP009();
                });
            });

            dfd.resolve();
            return dfd.promise();
        }

        //????????????
        initScreen() {
            let self = this;
            if (!self.selectedItem()) {
                return;
            }
            nts.uk.ui.errors.clearAll();
            self.checkClearErrAll(true);
            self.errA27('');
            self.errA210('');
            self.settingManager().employeeId(self.selectedItem());
            service.getSettingManager(self.selectedItem()).done(result => {
                if (result) {
                    self.isInitDepartment = true;
                    self.isInitdailyApproval = true;
                    self.settingManager().startDate(result.startDate);
                    self.settingManager().endDate(result.endDate);
                    self.settingManager().departmentCode(result.departmentCode);
                    self.settingManager().departmentApproverId(result.departmentApproverId);
                    self.settingManager().dailyApprovalCode(result.dailyApprovalCode);
                    self.settingManager().dailyApproverId(result.dailyApproverId);
                    self.settingManager().departmentName(result.departmentName);
                    self.settingManager().dailyApprovalName(result.dailyApprovalName);
                    self.settingManager().closingStartDate(result.closingStartDate);
                    self.settingManager().hasAuthority(result.hasAuthority);
                    self.settingManager().hasHistory(!result.newMode);
                    self.displayDailyApprover(result.displayDailyApprover);
                    if (result.newMode) {
                        self.settingNewMode();
                    } else {
                        self.screenMode(EXECUTE_MODE.UPDATE_MODE);
                        //?????????????????????
                        $('#A2_7').focus();
                    }
                }
                self.checkClearErrAll(false);
                block.clear();
            });
        }

        //????????????
        //??????????????????????????????
        addSettingManager_click(data) {
            let self = this; 
            if(self.checkChangeA27A210()){
                self.checkClearErrAll(true);
            }else{
                self.checkClearErrAll(false);    
            }
            nts.uk.ui.errors.clearAll();
            self.errA27('');
            self.errA210('');
            self.settingNewMode();
        }

        //????????????
        //??????????????????????????????????????????
        regSettingManager_click(data) {
            let self = this;
            $('.nts-input').trigger("validate");
            if (!nts.uk.ui.errors.hasError()) {
                let startDate = new Date(self.settingManager().startDate());
                let closingStartDate = new Date(self.settingManager().closingStartDate());
                let $vm = ko.dataFor(document.querySelector('#function-panel'))
                let paramcheckReg = {
                    codeA16: $vm.empDisplayCode(),
                    codeA27: self.settingManager().departmentCode(),
                    codeA210: self.displayDailyApprover() ? self.settingManager().dailyApprovalCode() : "",
                    baseDate: moment(new Date(self.settingManager().startDate())).format('YYYY/MM/DD')
                }
                block.invisible();
                service.checkBfReg(paramcheckReg).done((result) => {
                    if (result.errFlg) {//????????????????????????
                        if (result.errA27) {
                            $('#A2_7').ntsError('clear');
                            $('#A2_7').ntsError('set', { messageId: result.msgId });
                        }
                        if (result.errA210) {
                            $('#A2_10').ntsError('clear');
                            $('#A2_10').ntsError('set', { messageId: result.msgId });
                        }
                        block.clear();
                        return;
                    }
                    if (!nts.uk.ui.errors.hasError()) {
                        let command = ko.toJS(self.settingManager());
                        command.startDate = moment.utc(self.settingManager().startDate(), "YYYY/MM/DD").toISOString();
                        command.endDate = moment.utc(self.settingManager().endDate(), "YYYY/MM/DD").toISOString();
                        if (command.dailyApprovalCode == null || command.dailyApprovalCode === undefined
                            || nts.uk.text.isNullOrEmpty(command.dailyApprovalCode.trim()) || !self.displayDailyApprover()) {
                            command.dailyApproverId = '';
                        }
                        if (self.screenMode() == EXECUTE_MODE.UPDATE_MODE && self.settingManager().hasHistory()) {
                            self.callUpdateHistoryService(command);
                        } else if (self.screenMode() == EXECUTE_MODE.NEW_MODE) {
                            //?????????????????????????????? 
                            if (startDate < closingStartDate && !(self.screenMode() == EXECUTE_MODE.UPDATE_MODE && self.settingManager().hasHistory())) {
                                closingStartDate = nts.uk.time.formatDate(closingStartDate, 'yyyy/MM/dd');
                                //???????????????????????????Msg_1072???
                                dialog.alertError({ messageId: "Msg_1072", messageParams: [closingStartDate] }).then(() => {
                                    block.clear();
                                });
                            } else {
                                self.callInsertHistoryService(command);
                            }
                        }
                    }
                }).fail(() => {
                    block.clear();
                });
            } else {
                self.callInsertHistoryService(command);
            }
        }

        //????????????
        //??????????????????????????????????????????
        delSettingManager_click(data) {
            let self = this;
            block.invisible();
            //????????????????????????Msg_18??????????????????
            dialog.confirm({ messageId: "Msg_18" }).ifYes(() => {
                self.settingManager().employeeId(self.selectedItem());
                let settingManager = ko.toJS(self.settingManager());
                settingManager.startDate = moment.utc(self.settingManager().startDate(), "YYYY/MM/DD").toISOString();
                settingManager.endDate   = moment.utc(self.settingManager().endDate(), "YYYY/MM/DD").toISOString();
                service.deleteHistoryByManagerSetting(settingManager).done(result => {
                    //????????????????????????Msg-16???????????????
                    dialog.info({ messageId: "Msg_16" }).then(() => {
                        self.initScreen();
                    });
                }).always(function() {
                    block.clear();
                });
            }).then(() => {
                block.clear();
            });
        }

        callInsertHistoryService(command) {
            let self = this;
            block.invisible();
            service.insertHistoryByManagerSetting(command).done(result => {
                //?????????????????????Msg_15
                dialog.info({ messageId: "Msg_15" }).then(() => {
                    self.initScreen();
                    self.isInitDepartment = false;
                    self.isInitdailyApproval = false;    
                });
                block.clear();
            }).fail(error => {
                block.clear();
                dialog.alertError({ messageId: error.messageId });
            });
        }

        callUpdateHistoryService(command) {
            let self = this;
            block.invisible();
            service.updateHistoryByManagerSetting(command).done(result => {
                //?????????????????????Msg_15
                dialog.info({ messageId: "Msg_15" }).then(() => {
                    self.initScreen();
                    self.isInitDepartment = false;
                    self.isInitdailyApproval = false;
                });
                block.clear();
            }).fail(error => {
                block.clear();
                dialog.alertError({ messageId: error.messageId });
            });
        }

        //????????????????????????????????????????????????
        openCMM053b() {
            let self = this;
            setShared('CMM053A_employeeId', self.selectedItem())
            modal("/view/cmm/053/b/index.xhtml").onClosed(function() {
            });
        }

        //??????????????????????????????
        getEmployeeByCode(employeeCode: any, approverType:number): JQueryPromise<any> {
            let self = this;
            let paramFind = {
                employeeCode: employeeCode,
                hasAuthority: self.settingManager().hasAuthority(),
                baseDate    : moment.utc(self.settingManager().startDate(), "YYYY/MM/DD").toISOString()
            }
            service.getEmployeeByCode(paramFind).done(result => {
                self.checkChangeA27A210(false);
                if(self.checkClearErrAll()){
                    self.settingManager().departmentName('');
                    self.settingManager().dailyApprovalName('');
                    self.checkClearErrAll(false);
                }else
                if (result) {
                    if (approverType == APPROVER_TYPE.DEPARTMENT_APPROVER) {
                        self.settingManager().departmentName(result.businessName);
                        self.settingManager().departmentApproverId(result.employeeID);
                        self.errA27('');
                    } else if(approverType == APPROVER_TYPE.DAILY_APPROVER){
                        self.settingManager().dailyApprovalName(result.businessName);
                        self.settingManager().dailyApproverId(result.employeeID);
                        self.errA210('');
                    }
                }
            }).fail(error => {
                self.checkChangeA27A210(false);
                if(self.checkClearErrAll()){
                    nts.uk.ui.errors.clearAll();
                    self.checkClearErrAll(false);
                }else{
                    if (approverType == APPROVER_TYPE.DEPARTMENT_APPROVER) {
                        $('#A2_7').ntsError('clear');
                        self.settingManager().departmentName('');
                        $('#A2_7').ntsError('set', { messageId: error.messageId});
                        self.errA27(error.messageId)
                    } else {
                        $('#A2_10').ntsError('clear');
                        self.settingManager().dailyApprovalName('');
                        $('#A2_10').ntsError('set', { messageId: error.messageId});
                        self.errA210(error.messageId)
                    }
                }
            });
        }

        settingNewMode() {
            let self = this;
            //???????????????????????????
            if (!self.settingManager().hasHistory()) {
                self.settingManager().startDate(self.settingManager().closingStartDate());
            } else {
                self.settingManager().startDate('');
            }
            //????????????????????????
            self.settingManager().endDate('');
            self.settingManager().departmentApproverId('');
            self.settingManager().departmentCode('');
            self.settingManager().departmentName('');
            self.settingManager().dailyApproverId('');
            self.settingManager().dailyApprovalCode('');
            self.settingManager().dailyApprovalName('');

            //?????????????????????????????????
            self.screenMode(EXECUTE_MODE.NEW_MODE);
            //?????????????????????
            $('#A2_3').focus();
        }

        initKCP009() {
            let self = this;
            //_______KCP009_______
            // Initial listComponentOption
            self.listComponentOption = {
                systemReference: self.systemReference(),
                isDisplayOrganizationName: self.isDisplayOrganizationName(),
                employeeInputList: self.employeeInputList,
                targetBtnText: self.targetBtnText,
                selectedItem: self.selectedItem,
                tabIndex: self.tabindex
            };
            $('#emp-component').ntsLoadListComponent(self.listComponentOption);
        }

        convertEmployeeCcg01ToKcp009(dataList: EmployeeSearchDto[]): void {
            let self = this;
            self.employeeInputList([]);
            _.each(dataList, function(item) {
                self.employeeInputList.push(new EmployeeKcp009(item.employeeId, item.employeeCode, item.employeeName, item.affiliationName, ""));
            });
            $('#emp-component').ntsLoadListComponent(self.listComponentOption);
            if (dataList.length == 0) {
                self.selectedItem('');
            } else {
                let item = self.findIdSelected(dataList, self.selectedItem());
                let sortByEmployeeCode = _.orderBy(dataList, ["employeeCode"], ["asc"]);
                if (item == undefined) self.selectedItem(sortByEmployeeCode[0].employeeId);
            }
        }

        findIdSelected(dataList: Array<any>, selectedItem: string): any {
            return _.find(dataList, function(obj) {
                return obj.employeeId == selectedItem;
            })
        }
    }

    export enum EXECUTE_MODE {
        NEW_MODE    = 0,
        UPDATE_MODE = 1,
        DELETE_MODE = 2
    }

    export enum APPROVER_TYPE {
        DEPARTMENT_APPROVER = 0,
        DAILY_APPROVER      = 1
    }

    export interface ISettingManager {
        startDate           :string;/** ????????? */
        endDate             :string;/** ????????? */
        isNewMode           :boolean;/** Screen Mode */
        departmentCode      :string;/** ????????????????????? */
        departmentApproverId:string;/** ????????????ID*/
        departmentName      :string;/** ?????????????????? */
        dailyApprovalCode   :string;/** ???????????????????????????????????? */
        dailyApproverId     :string;/** ???????????????????????????ID */
        dailyApprovalName   :string;/** ????????????????????????????????? */
        hasAuthority        :boolean;/** hasAuthority */
        closingStartDate    :string;/** ?????????????????? */
    }

    export class SettingManager {
        startDate            :KnockoutObservable<string>  = ko.observable('');
        endDate              :KnockoutObservable<string>  = ko.observable('');
        isNewMode            :KnockoutObservable<boolean> = ko.observable(false);
        departmentCode       :KnockoutObservable<string>  = ko.observable('');
        departmentApproverId :KnockoutObservable<string>  = ko.observable('');
        departmentName       :KnockoutObservable<string>  = ko.observable('');
        dailyApprovalCode    :KnockoutObservable<string>  = ko.observable('');
        dailyApproverId      :KnockoutObservable<string>  = ko.observable('');
        dailyApprovalName    :KnockoutObservable<string>  = ko.observable('');
        hasAuthority         :KnockoutObservable<boolean> = ko.observable(false);
        closingStartDate     :KnockoutObservable<string>  = ko.observable('');
        employeeId           :KnockoutObservable<string>  = ko.observable('');
        hasHistory           :KnockoutObservable<boolean> = ko.observable(false);
        constructor(param: ISettingManager) {
            let self = this;
            self.startDate           (param.startDate           );
            self.endDate             (param.endDate             );
            self.isNewMode           (param.isNewMode           );
            self.departmentCode      (param.departmentCode      );
            self.departmentApproverId(param.departmentApproverId);
            self.departmentName      (param.departmentName      );
            self.dailyApprovalCode   (param.dailyApprovalCode   );
            self.dailyApproverId     (param.dailyApproverId     );
            self.dailyApprovalName   (param.dailyApprovalName   );
            self.hasAuthority        (param.hasAuthority        );
            self.closingStartDate    (param.closingStartDate    );
        }
    }

    export interface IPersonApproval {
        anyItemApplicationId: string;
        applicationType: string;
        approvalId: string;
        branchId: string;
        companyId: string;
        confirmationRootType: string;
        employeeId: string;
        employmentRootAtr: string;
        endDate: string;
        historyId: string;
        startDate: string;
    }
    
    export class PersonApproval {
        anyItemApplicationId : KnockoutObservable<string> = ko.observable('');
        applicationType      : KnockoutObservable<string> = ko.observable('');
        approvalId           : KnockoutObservable<string> = ko.observable('');
        branchId             : KnockoutObservable<string> = ko.observable('');
        companyId            : KnockoutObservable<string> = ko.observable('');
        confirmationRootType : KnockoutObservable<string> = ko.observable('');
        employeeId           : KnockoutObservable<string> = ko.observable('');
        employmentRootAtr    : KnockoutObservable<string> = ko.observable('');
        endDate              : KnockoutObservable<string> = ko.observable('');
        historyId            : KnockoutObservable<string> = ko.observable('');
        startDate            : KnockoutObservable<string> = ko.observable('');
        constructor(param: IPersonApproval) {
            let self = this;
            self.anyItemApplicationId (param.anyItemApplicationId);
            self.applicationType      (param.applicationType     );
            self.approvalId           (param.approvalId          );
            self.branchId             (param.branchId            );
            self.companyId            (param.companyId           );
            self.confirmationRootType (param.confirmationRootType);
            self.employeeId           (param.employeeId          );
            self.employmentRootAtr    (param.employmentRootAtr   );
            self.endDate              (param.endDate             );
            self.historyId            (param.historyId           );
            self.startDate            (param.startDate           );
        }
    }

    //__________KCP009_________
    export interface ComponentOption {
        systemReference: SystemType;
        isDisplayOrganizationName: boolean;
        employeeInputList: KnockoutObservableArray<EmployeeKcp009>;
        targetBtnText: string;
        selectedItem: KnockoutObservable<string>;
        tabIndex: number;
    }

    export class EmployeeKcp009 {
        id: string;
        code: string;
        businessName: string;
        workplaceName: string;
        depName: string;
        constructor(id: string, code: string, businessName: string, workplaceName: string, depName: string) {
            this.id = id;
            this.code = code;
            this.businessName = businessName;
            this.workplaceName = workplaceName;
            this.depName = depName;
        }
    }

    export class SystemType {
        static EMPLOYMENT = 1;
        static SALARY = 2;
        static PERSONNEL = 3;
        static ACCOUNTING = 4;
        static OH = 6;
    }

    //Interfaces
    export interface GroupOption {
        /** Common properties */
        showEmployeeSelection: boolean; // ???????????????
        systemType: number; // ??????????????????
        showQuickSearchTab: boolean; // ??????????????????
        showAdvancedSearchTab: boolean; // ????????????
        showBaseDate: boolean; // ???????????????
        showClosure: boolean; // ?????????????????????
        showAllClosure: boolean; // ???????????????
        showPeriod: boolean; // ??????????????????
        periodFormatYM: boolean; // ??????????????????
        isInDialog?: boolean;

        /** Required parameter */
        baseDate?: string; // ?????????
        periodStartDate?: string; // ?????????????????????
        periodEndDate?: string; // ?????????????????????
        inService: boolean; // ????????????
        leaveOfAbsence: boolean; // ????????????
        closed: boolean; // ????????????
        retirement: boolean; // ????????????

        /** Quick search tab options */
        showAllReferableEmployee: boolean; // ??????????????????????????????
        showOnlyMe: boolean; // ????????????
        showSameWorkplace: boolean; // ?????????????????????
        showSameWorkplaceAndChild: boolean; // ????????????????????????????????????

        /** Advanced search properties */
        showEmployment: boolean; // ????????????
        showWorkplace: boolean; // ????????????
        showClassification: boolean; // ????????????
        showJobTitle: boolean; // ????????????
        showWorktype: boolean; // ????????????
        isMutipleCheck: boolean; // ???????????????

        /** Data returned */
        returnDataFromCcg001: (data: Ccg001ReturnedData) => void;
    }

    export interface EmployeeSearchDto {
        employeeId: string;
        employeeCode: string;
        employeeName: string;
        workplaceId: string;
        workplaceName: string;
    }

    export interface Ccg001ReturnedData {
        baseDate: string; // ?????????
        closureId?: number; // ??????ID
        periodStart: string; // ?????????????????????)
        periodEnd: string; // ????????????????????????
        listEmployee: Array<EmployeeSearchDto>; // ????????????
    }
    export enum STATUS_SUBSCRIBE{
        PENDING = 0,
        DONE = 1,
        FAIL = 2
    }
}