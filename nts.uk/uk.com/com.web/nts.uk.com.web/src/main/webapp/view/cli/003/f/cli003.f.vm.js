var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../../../../lib/nittsu/viewcontext.d.ts" />
var nts;
(function (nts) {
    var uk;
    (function (uk) {
        var com;
        (function (com) {
            var view;
            (function (view) {
                var cli003;
                (function (cli003) {
                    var f;
                    (function (f) {
                        var service = nts.uk.com.view.cli003.f.service;
                        var EMPLOYEE_SPECIFIC;
                        (function (EMPLOYEE_SPECIFIC) {
                            EMPLOYEE_SPECIFIC[EMPLOYEE_SPECIFIC["SPECIFY"] = 1] = "SPECIFY";
                            EMPLOYEE_SPECIFIC[EMPLOYEE_SPECIFIC["ALL"] = 2] = "ALL";
                        })(EMPLOYEE_SPECIFIC = f.EMPLOYEE_SPECIFIC || (f.EMPLOYEE_SPECIFIC = {}));
                        var ITEM_PROPERTY;
                        (function (ITEM_PROPERTY) {
                            ITEM_PROPERTY["ITEM_SRT"] = "string";
                            ITEM_PROPERTY["ITEM_USER_NAME_LOGIN"] = "userNameLogin";
                            ITEM_PROPERTY["ITEM_EMP_CODE_LOGIN"] = "employeeCodeLogin";
                            ITEM_PROPERTY["ITEM_MODIFY_DATE"] = "modifyDateTime";
                            ITEM_PROPERTY["ITEM_LOGIN_STATUS"] = "loginStatus";
                            ITEM_PROPERTY["ITEM_METHOD_NAME"] = "methodName";
                            ITEM_PROPERTY["ITEM_NOTE"] = "note";
                            ITEM_PROPERTY["ITEM_MENU_NAME"] = "menuName";
                            ITEM_PROPERTY["ITEM_USER_NAME_TAGET"] = "userNameTaget";
                            ITEM_PROPERTY["ITEM_EMP_CODE_TAGET"] = "employeeCodeTaget";
                            ITEM_PROPERTY["ITEM_PROCESS_ATTR"] = "processAttr";
                            ITEM_PROPERTY["ITEM_CATEGORY_NAME"] = "categoryName";
                            ITEM_PROPERTY["ITEM_TAGET_DATE"] = "targetDate";
                            ITEM_PROPERTY["ITEM_INFO_OPERATE_ATTR"] = "infoOperateAttr";
                            ITEM_PROPERTY["ITEM_NAME"] = "itemName";
                            ITEM_PROPERTY["ITEM_VALUE_BEFOR"] = "valueBefore";
                            ITEM_PROPERTY["ITEM_VALUE_AFTER"] = "valueAfter";
                            ITEM_PROPERTY["ITEM_CORRECT_ATTR"] = "correctionAttr";
                            ITEM_PROPERTY["ITEM_OPERATION_ID"] = "operationId";
                            ITEM_PROPERTY["ITEM_PARRENT_KEY"] = "parentKey";
                        })(ITEM_PROPERTY = f.ITEM_PROPERTY || (f.ITEM_PROPERTY = {}));
                        var DATA_TYPE;
                        (function (DATA_TYPE) {
                            DATA_TYPE[DATA_TYPE["SCHEDULE"] = 0] = "SCHEDULE";
                            DATA_TYPE[DATA_TYPE["DAILY_RESULTS"] = 1] = "DAILY_RESULTS";
                            DATA_TYPE[DATA_TYPE["MONTHLY_RESULTS"] = 2] = "MONTHLY_RESULTS";
                            DATA_TYPE[DATA_TYPE["ANY_PERIOD_SUMMARY"] = 3] = "ANY_PERIOD_SUMMARY";
                            DATA_TYPE[DATA_TYPE["APPLICATION_APPROVAL"] = 4] = "APPLICATION_APPROVAL";
                            DATA_TYPE[DATA_TYPE["NOTIFICATION"] = 5] = "NOTIFICATION";
                            DATA_TYPE[DATA_TYPE["SALARY_DETAIL"] = 6] = "SALARY_DETAIL";
                            DATA_TYPE[DATA_TYPE["BONUS_DETAIL"] = 7] = "BONUS_DETAIL";
                            DATA_TYPE[DATA_TYPE["YEAR_END_ADJUSTMENT"] = 8] = "YEAR_END_ADJUSTMENT";
                            DATA_TYPE[DATA_TYPE["MONTHLY_CALCULATION"] = 9] = "MONTHLY_CALCULATION";
                            DATA_TYPE[DATA_TYPE["RISING_SALARY_BACK"] = 10] = "RISING_SALARY_BACK";
                        })(DATA_TYPE = f.DATA_TYPE || (f.DATA_TYPE = {}));
                        var RECORD_TYPE;
                        (function (RECORD_TYPE) {
                            RECORD_TYPE[RECORD_TYPE["LOGIN"] = 0] = "LOGIN";
                            RECORD_TYPE[RECORD_TYPE["START_UP"] = 1] = "START_UP";
                            RECORD_TYPE[RECORD_TYPE["UPDATE_MASTER"] = 2] = "UPDATE_MASTER";
                            RECORD_TYPE[RECORD_TYPE["UPDATE_PERSION_INFO"] = 3] = "UPDATE_PERSION_INFO";
                            RECORD_TYPE[RECORD_TYPE["DATA_REFERENCE"] = 4] = "DATA_REFERENCE";
                            RECORD_TYPE[RECORD_TYPE["DATA_MANIPULATION"] = 5] = "DATA_MANIPULATION";
                            RECORD_TYPE[RECORD_TYPE["DATA_CORRECT"] = 6] = "DATA_CORRECT";
                            RECORD_TYPE[RECORD_TYPE["MY_NUMBER"] = 7] = "MY_NUMBER";
                            RECORD_TYPE[RECORD_TYPE["TERMINAL_COMMUNICATION_INFO"] = 8] = "TERMINAL_COMMUNICATION_INFO";
                            RECORD_TYPE[RECORD_TYPE["DATA_STORAGE"] = 9] = "DATA_STORAGE";
                            RECORD_TYPE[RECORD_TYPE["DATA_RECOVERY"] = 10] = "DATA_RECOVERY";
                            RECORD_TYPE[RECORD_TYPE["DATA_DELETION"] = 11] = "DATA_DELETION";
                        })(RECORD_TYPE = f.RECORD_TYPE || (f.RECORD_TYPE = {}));
                        var USE_STAGE;
                        (function (USE_STAGE) {
                            USE_STAGE[USE_STAGE["NOT_USE"] = 0] = "NOT_USE";
                            USE_STAGE[USE_STAGE["USE"] = 1] = "USE";
                        })(USE_STAGE = f.USE_STAGE || (f.USE_STAGE = {}));
                        var condSymbol;
                        (function (condSymbol) {
                            condSymbol[condSymbol["INCLUDE"] = 0] = "INCLUDE";
                            condSymbol[condSymbol["EQUAL"] = 1] = "EQUAL";
                            condSymbol[condSymbol["DIFFERENT"] = 2] = "DIFFERENT";
                        })(condSymbol = f.condSymbol || (f.condSymbol = {}));
                        var ITEM_NO;
                        (function (ITEM_NO) {
                            ITEM_NO[ITEM_NO["ITEM_NO1"] = 1] = "ITEM_NO1";
                            ITEM_NO[ITEM_NO["ITEM_NO2"] = 2] = "ITEM_NO2";
                            ITEM_NO[ITEM_NO["ITEM_NO3"] = 3] = "ITEM_NO3";
                            ITEM_NO[ITEM_NO["ITEM_NO4"] = 4] = "ITEM_NO4";
                            ITEM_NO[ITEM_NO["ITEM_NO5"] = 5] = "ITEM_NO5";
                            ITEM_NO[ITEM_NO["ITEM_NO6"] = 6] = "ITEM_NO6";
                            ITEM_NO[ITEM_NO["ITEM_NO7"] = 7] = "ITEM_NO7";
                            ITEM_NO[ITEM_NO["ITEM_NO8"] = 8] = "ITEM_NO8";
                            ITEM_NO[ITEM_NO["ITEM_NO9"] = 9] = "ITEM_NO9";
                            ITEM_NO[ITEM_NO["ITEM_NO10"] = 10] = "ITEM_NO10";
                            ITEM_NO[ITEM_NO["ITEM_NO11"] = 11] = "ITEM_NO11";
                            ITEM_NO[ITEM_NO["ITEM_NO12"] = 12] = "ITEM_NO12";
                            ITEM_NO[ITEM_NO["ITEM_NO13"] = 13] = "ITEM_NO13";
                            ITEM_NO[ITEM_NO["ITEM_NO14"] = 14] = "ITEM_NO14";
                            ITEM_NO[ITEM_NO["ITEM_NO15"] = 15] = "ITEM_NO15";
                            ITEM_NO[ITEM_NO["ITEM_NO16"] = 16] = "ITEM_NO16";
                            ITEM_NO[ITEM_NO["ITEM_NO17"] = 17] = "ITEM_NO17";
                            ITEM_NO[ITEM_NO["ITEM_NO18"] = 18] = "ITEM_NO18";
                            ITEM_NO[ITEM_NO["ITEM_NO19"] = 19] = "ITEM_NO19";
                            ITEM_NO[ITEM_NO["ITEM_NO20"] = 20] = "ITEM_NO20";
                            ITEM_NO[ITEM_NO["ITEM_NO21"] = 21] = "ITEM_NO21";
                            ITEM_NO[ITEM_NO["ITEM_NO22"] = 22] = "ITEM_NO22";
                            ITEM_NO[ITEM_NO["ITEM_NO23"] = 23] = "ITEM_NO23";
                            ITEM_NO[ITEM_NO["ITEM_NO24"] = 24] = "ITEM_NO24";
                            ITEM_NO[ITEM_NO["ITEM_NO25"] = 25] = "ITEM_NO25";
                            ITEM_NO[ITEM_NO["ITEM_NO26"] = 26] = "ITEM_NO26";
                            ITEM_NO[ITEM_NO["ITEM_NO27"] = 27] = "ITEM_NO27";
                            ITEM_NO[ITEM_NO["ITEM_NO28"] = 28] = "ITEM_NO28";
                            ITEM_NO[ITEM_NO["ITEM_NO29"] = 29] = "ITEM_NO29";
                            ITEM_NO[ITEM_NO["ITEM_NO30"] = 30] = "ITEM_NO30";
                            ITEM_NO[ITEM_NO["ITEM_NO31"] = 31] = "ITEM_NO31";
                            ITEM_NO[ITEM_NO["ITEM_NO32"] = 32] = "ITEM_NO32";
                            ITEM_NO[ITEM_NO["ITEM_NO33"] = 33] = "ITEM_NO33";
                            ITEM_NO[ITEM_NO["ITEM_NO34"] = 34] = "ITEM_NO34";
                            ITEM_NO[ITEM_NO["ITEM_NO35"] = 35] = "ITEM_NO35";
                            ITEM_NO[ITEM_NO["ITEM_NO36"] = 36] = "ITEM_NO36";
                            ITEM_NO[ITEM_NO["ITEM_NO99"] = 99] = "ITEM_NO99";
                        })(ITEM_NO = f.ITEM_NO || (f.ITEM_NO = {}));
                        var ConditionByItemNo = /** @class */ (function () {
                            function ConditionByItemNo(itemNo, symbol, condition) {
                                this.itemNo = itemNo;
                                this.symbol = symbol;
                                this.condition = condition;
                            }
                            return ConditionByItemNo;
                        }());
                        f.ConditionByItemNo = ConditionByItemNo;
                        var IgGridColumnSwitchModel = /** @class */ (function () {
                            function IgGridColumnSwitchModel(headerText, itemNo, recordType) {
                                this.headerText = headerText;
                                this.hidden = false;
                                this.dataType = ITEM_PROPERTY.ITEM_SRT;
                                this.itemName = headerText;
                                switch (itemNo) {
                                    case -1: {
                                        this.key = ITEM_PROPERTY.ITEM_OPERATION_ID;
                                        this.hidden = true;
                                        break;
                                    }
                                    case -2: {
                                        this.key = ITEM_PROPERTY.ITEM_PARRENT_KEY;
                                        this.hidden = true;
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO2: {
                                        this.key = ITEM_PROPERTY.ITEM_USER_NAME_LOGIN;
                                        if (recordType === RECORD_TYPE.UPDATE_PERSION_INFO) {
                                            this.width = "120px";
                                        }
                                        else {
                                            this.width = "170px";
                                        }
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO3: {
                                        this.key = ITEM_PROPERTY.ITEM_EMP_CODE_LOGIN;
                                        if (recordType === RECORD_TYPE.UPDATE_PERSION_INFO) {
                                            this.width = "120px";
                                        }
                                        else {
                                            this.width = "170px";
                                        }
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO7: {
                                        this.key = ITEM_PROPERTY.ITEM_MODIFY_DATE;
                                        this.width = "170px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO36:
                                    case ITEM_NO.ITEM_NO18: {
                                        this.key = ITEM_PROPERTY.ITEM_NOTE;
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO19: {
                                        if (recordType === RECORD_TYPE.LOGIN) {
                                            this.key = ITEM_PROPERTY.ITEM_LOGIN_STATUS;
                                            this.width = "120px";
                                        }
                                        if (recordType === RECORD_TYPE.START_UP) {
                                            this.key = ITEM_PROPERTY.ITEM_MENU_NAME;
                                            this.width = "170px";
                                        }
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO20: {
                                        if (recordType === RECORD_TYPE.LOGIN) {
                                            this.key = ITEM_PROPERTY.ITEM_METHOD_NAME;
                                        }
                                        if (recordType === RECORD_TYPE.DATA_CORRECT
                                            || recordType === RECORD_TYPE.UPDATE_PERSION_INFO) {
                                            this.key = ITEM_PROPERTY.ITEM_USER_NAME_TAGET;
                                        }
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO21: {
                                        if (recordType === RECORD_TYPE.DATA_CORRECT
                                            || recordType === RECORD_TYPE.UPDATE_PERSION_INFO) {
                                            this.key = ITEM_PROPERTY.ITEM_EMP_CODE_TAGET;
                                        }
                                        if (recordType === RECORD_TYPE.DATA_CORRECT) {
                                            this.width = "170px";
                                        }
                                        else {
                                            this.width = "120px";
                                        }
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO22: {
                                        if (recordType === RECORD_TYPE.LOGIN) {
                                            this.key = ITEM_PROPERTY.ITEM_NOTE;
                                        }
                                        if (recordType === RECORD_TYPE.DATA_CORRECT) {
                                            this.key = ITEM_PROPERTY.ITEM_TAGET_DATE;
                                        }
                                        if (recordType === RECORD_TYPE.UPDATE_PERSION_INFO) {
                                            this.key = ITEM_PROPERTY.ITEM_PROCESS_ATTR;
                                        }
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO23: {
                                        if (recordType === RECORD_TYPE.DATA_CORRECT) {
                                            this.key = ITEM_PROPERTY.ITEM_TAGET_DATE;
                                        }
                                        if (recordType === RECORD_TYPE.UPDATE_PERSION_INFO) {
                                            this.key = ITEM_PROPERTY.ITEM_CATEGORY_NAME;
                                        }
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO24: {
                                        if (recordType === RECORD_TYPE.DATA_CORRECT) {
                                            this.key = ITEM_PROPERTY.ITEM_TAGET_DATE;
                                        }
                                        if (recordType === RECORD_TYPE.UPDATE_PERSION_INFO) {
                                            this.key = ITEM_PROPERTY.ITEM_INFO_OPERATE_ATTR;
                                        }
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO26: {
                                        this.key = ITEM_PROPERTY.ITEM_CORRECT_ATTR;
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO27: {
                                        if (recordType === RECORD_TYPE.DATA_CORRECT) {
                                            this.key = ITEM_PROPERTY.ITEM_NAME;
                                        }
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO29: {
                                        this.key = ITEM_PROPERTY.ITEM_NAME;
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO30: {
                                        this.key = ITEM_PROPERTY.ITEM_VALUE_BEFOR;
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO31: {
                                        if (recordType === RECORD_TYPE.DATA_CORRECT) {
                                            this.key = ITEM_PROPERTY.ITEM_VALUE_AFTER;
                                        }
                                        if (recordType === RECORD_TYPE.UPDATE_PERSION_INFO) {
                                            this.key = ITEM_PROPERTY.ITEM_VALUE_BEFOR;
                                        }
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO33: {
                                        this.key = ITEM_PROPERTY.ITEM_VALUE_AFTER;
                                        this.width = "120px";
                                        break;
                                    }
                                    case ITEM_NO.ITEM_NO99: {
                                        this.key = ITEM_PROPERTY.ITEM_TAGET_DATE;
                                        this.width = "120px";
                                        break;
                                    }
                                    default: {
                                        break;
                                    }
                                }
                            }
                            return IgGridColumnSwitchModel;
                        }());
                        var LogOutputItemDto = /** @class */ (function () {
                            function LogOutputItemDto(itemNo, itemName, recordType, sortOrder, parentKey) {
                                this.itemNo = itemNo;
                                this.itemName = itemName;
                                this.recordType = recordType;
                                this.sortOrder = sortOrder;
                                this.parentKey = parentKey;
                            }
                            return LogOutputItemDto;
                        }());
                        var LogOutputItem = /** @class */ (function () {
                            function LogOutputItem(itemNo, itemName, recordType, sortOrder) {
                                this.itemNo = itemNo;
                                this.itemName = itemName;
                                this.recordType = recordType;
                                this.sortOrder = sortOrder;
                            }
                            return LogOutputItem;
                        }());
                        var IgGridColumnModel = /** @class */ (function () {
                            function IgGridColumnModel(headerText, key, dataType, hidden, width, template) {
                                this.headerText = headerText;
                                this.key = key;
                                this.dataType = dataType;
                                this.hidden = hidden;
                                this.itemName = headerText;
                                this.width = width;
                                this.template = template;
                            }
                            return IgGridColumnModel;
                        }());
                        var PerCateCorrectRecordModel = /** @class */ (function () {
                            function PerCateCorrectRecordModel(param) {
                                this.operationId = param.operationId;
                                this.targetDate = param.targetDate;
                                this.itemName = param.itemName;
                                this.valueBefore = param.valueBefore;
                                this.valueAfter = param.valueAfter;
                                this.infoOperateAttr = param.infoOperateAttr;
                                this.categoryName = param.categoryName;
                            }
                            return PerCateCorrectRecordModel;
                        }());
                        var DataCorrectLogModel = /** @class */ (function () {
                            function DataCorrectLogModel(param) {
                                this.operationId = param.operationId;
                                this.targetDate = param.targetDate;
                                this.targetDataType = param.targetDataType;
                                this.itemName = param.itemName;
                                this.valueBefore = param.valueBefore;
                                this.valueAfter = param.valueAfter;
                                this.remarks = param.remarks;
                                this.correctionAttr = param.correctionAttr;
                            }
                            return DataCorrectLogModel;
                        }());
                        var ScreenModel = /** @class */ (function (_super) {
                            __extends(ScreenModel, _super);
                            function ScreenModel(data) {
                                var _this = _super.call(this) || this;
                                _this.listLogBasicInforModel = [];
                                _this.listLogDataResult = [];
                                _this.logDataResultHeader = [];
                                _this.logDataResultSubHeader = [];
                                _this.isDisplayText = ko.observable(false);
                                _this.maxlength = ko.observable(1000);
                                _this.selectedEmployeeCodeTarget = ko.observableArray([]);
                                //Data from B
                                _this.logTypeSelectedCode = ko.observable('');
                                _this.dataTypeSelectedCode = ko.observable('');
                                _this.systemTypeSelectedCode = ko.observable('');
                                _this.checkFormatDate = ko.observable('');
                                _this.operatorEmployeeIdList = ko.observableArray([]);
                                _this.dateValue = ko.observable();
                                _this.startDateOperator = ko.observable('');
                                _this.endDateOperator = ko.observable('');
                                _this.targetEmployeeIdList = ko.observableArray([]);
                                _this.logSetOutputs = ko.observableArray([]);
                                _this.logSettingDto = ko.observableArray([]);
                                _this.displayItemNo = ko.observableArray([]);
                                _this.LogItemAllName = [];
                                var vm = _this;
                                vm.initComponentScreenF(data);
                                return _this;
                            }
                            ScreenModel.prototype.initComponentScreenF = function (data) {
                                var vm = this;
                                //?????????????????????????????????
                                if (data) {
                                    vm.logSetOutputs(data.logSetOutputs);
                                    vm.logTypeSelectedCode(data.logTypeSelectedCode);
                                    vm.dataTypeSelectedCode(data.dataTypeSelectedCode);
                                    vm.systemTypeSelectedCode(data.systemTypeSelectedCode);
                                    vm.checkFormatDate(data.checkFormatDate);
                                    vm.dateValue(data.dateValue);
                                    vm.startDateOperator(data.startDateOperator);
                                    vm.endDateOperator(data.endDateOperator);
                                    vm.displayItemNo(data.displayItemNo);
                                    data.selectedRuleCodeOperator === 2 ? vm.operatorEmployeeIdList([]) : vm.operatorEmployeeIdList(data.operatorEmployeeIdList);
                                    data.selectedRuleCodeTarget === 2 ? vm.targetEmployeeIdList([]) : vm.targetEmployeeIdList(data.targetEmployeeIdList);
                                }
                                // set param log
                                var recordType = Number(vm.logTypeSelectedCode());
                                vm.handleLog();
                                //???????????????????????????????????????????????????
                                //?????????????????????????????????????????????????????????
                            };
                            ScreenModel.prototype.handleLog = function () {
                                var vm = this;
                                var format = 'YYYY/MM/DD HH:mm:ss';
                                //???????????????????????????????????????????????????????????????????????????????????????
                                var recordType = Number(vm.logTypeSelectedCode());
                                //F????????????????????????????????????????????????????????????
                                var logDataParams = {
                                    systemType: Number(vm.systemTypeSelectedCode()),
                                    recordType: Number(vm.logTypeSelectedCode()),
                                    startDateOperator: moment.utc(vm.startDateOperator(), format).toISOString(),
                                    endDateOperator: moment.utc(vm.endDateOperator(), format).toISOString(),
                                    listOperatorEmployeeId: vm.operatorEmployeeIdList(),
                                    listCondition: vm.filterLogSetting(),
                                };
                                vm.$blockui('grayout');
                                //generate header
                                service.getLogOutputItemsByRecordType(String(vm.logTypeSelectedCode())).done(function (logOutputItems) {
                                    //set all header
                                    vm.getHeaderByRecordType(recordType, logOutputItems);
                                    vm.LogItemAllName = _.map(logOutputItems, function (item) { return item.itemName; });
                                    if (recordType === 9 || recordType === 10 || recordType === 11) {
                                        //get data
                                        service.getLogDataResults(logDataParams).done(function (data) {
                                            if (data.length > 0) {
                                                var listData = _.map(data, function (logDataResultDto) {
                                                    //?????????????????????
                                                    logDataResultDto.startDateTime = logDataResultDto.startDateTime ? moment.utc(logDataResultDto.startDateTime).format(format) : "";
                                                    logDataResultDto.endDateTime = logDataResultDto.endDateTime ? moment.utc(logDataResultDto.endDateTime).format(format) : "";
                                                    var formType = logDataResultDto.form;
                                                    var statusType = logDataResultDto.status;
                                                    var delFlg = logDataResultDto.isDeletedFilesFlg === 1 ? vm.$i18n("CLI003_93") : vm.$i18n("CLI003_94");
                                                    logDataResultDto.form = vm.getFormName(formType);
                                                    logDataResultDto.status = vm.getStatusName(statusType);
                                                    logDataResultDto.isDeletedFilesFlg = delFlg;
                                                    return logDataResultDto;
                                                });
                                                vm.listLogDataResult = _.filter(listData, function (item) { return item !== undefined; });
                                                if (vm.listLogDataResult.length === vm.maxlength()) {
                                                    vm.isDisplayText(true);
                                                }
                                                //Check after filter
                                                if (vm.listLogDataResult.length <= 0) {
                                                    vm.$dialog.error({ messageId: "Msg_1220" });
                                                    vm.$blockui('clear');
                                                }
                                            }
                                            else {
                                                vm.$dialog.error({ messageId: "Msg_1220" });
                                                vm.$blockui('clear');
                                            }
                                            // Generate table
                                            if (vm.logDataResultHeader.length === 1) {
                                                vm.generateChildOnlyGrid(vm.listLogDataResult, recordType);
                                            }
                                            else if (vm.logDataResultSubHeader.length === 1) {
                                                vm.generateParentOnlyGrid(vm.listLogDataResult, recordType);
                                            }
                                            else {
                                                vm.generateBothGrid(vm.listLogDataResult, recordType);
                                            }
                                            vm.$blockui('clear');
                                            vm.$errors('clear');
                                        }).fail(function (error) {
                                            vm.$dialog.error(error);
                                            vm.$blockui('clear');
                                        });
                                    }
                                    else {
                                        vm.getLogFromAnother();
                                    }
                                }).fail(function (error) {
                                    vm.$blockui('clear');
                                    vm.$dialog.error(error);
                                });
                            };
                            ScreenModel.prototype.getLogFromAnother = function () {
                                var vm = this;
                                var format = 'YYYY/MM/DD HH:mm:ss';
                                var recordType = Number(vm.logTypeSelectedCode());
                                var systemType = Number(vm.systemTypeSelectedCode());
                                vm.$blockui('grayout');
                                // ?????????????????????
                                service.getLogSettingsBySystem(systemType).then(function (logSettings) {
                                    vm.logSettingDto(logSettings);
                                    var paramLog = {
                                        listOperatorEmployeeId: vm.operatorEmployeeIdList(),
                                        listTagetEmployeeId: vm.targetEmployeeIdList(),
                                        startDateTaget: moment(vm.dateValue().startDate, "YYYY/MM/DD").toISOString(),
                                        endDateTaget: moment(vm.dateValue().endDate, "YYYY/MM/DD").toISOString(),
                                        startDateOperator: moment.utc(vm.startDateOperator(), format).toISOString(),
                                        endDateOperator: moment.utc(vm.endDateOperator(), format).toISOString(),
                                        recordType: vm.logTypeSelectedCode(),
                                        targetDataType: vm.dataTypeSelectedCode(),
                                        listLogSettingDto: logSettings,
                                        listCondition: vm.filterLogSetting(),
                                    };
                                    if (vm.checkFormatDate() === '2') {
                                        paramLog.endDateTaget = moment.utc(vm.dateValue().endDate, "YYYY/MM/DD").endOf('month').toISOString();
                                    }
                                    else {
                                        paramLog.endDateTaget = moment.utc(vm.dateValue().endDate, "YYYY/MM/DD").toISOString();
                                    }
                                    // Get Log basic info
                                    service.getLogBasicInfoAllByModifyDate(paramLog).then(function (data) {
                                        // Validate
                                        if (data.length === vm.maxlength()) {
                                            vm.isDisplayText(true);
                                        }
                                        if (data.length <= 0) {
                                            vm.$dialog.error({ messageId: "Msg_1220" });
                                        }
                                        // Generate table
                                        if (vm.logDataResultHeader.length === 1) {
                                            vm.generateChildOnlyGrid(data, recordType);
                                        }
                                        else if (vm.logDataResultSubHeader.length === 1) {
                                            vm.generateParentOnlyGrid(data, recordType);
                                        }
                                        else {
                                            vm.generateBothGrid(data, recordType);
                                        }
                                        vm.$blockui('clear');
                                        vm.$errors('clear');
                                    }).fail(function (error) {
                                        vm.$blockui('clear');
                                        vm.$dialog.error(error);
                                    });
                                }).fail(function (error) {
                                    vm.$blockui('clear');
                                    vm.$dialog.alert(error);
                                });
                            };
                            ScreenModel.prototype.filterLogSetting = function () {
                                var vm = this;
                                var conditions = [];
                                var _loop_1 = function (logSetOutput) {
                                    var logSetOutputConditions = _.chain(logSetOutput.logSetItemDetails)
                                        .filter(function (item) { return item.condition; })
                                        .map(function (detail) { return new ConditionByItemNo(logSetOutput.itemNo, detail.sybol, detail.condition); })
                                        .value();
                                    conditions = _.concat(conditions, logSetOutputConditions);
                                };
                                for (var _i = 0, _a = vm.logSetOutputs(); _i < _a.length; _i++) {
                                    var logSetOutput = _a[_i];
                                    _loop_1(logSetOutput);
                                }
                                return conditions;
                            };
                            ScreenModel.prototype.getHeaderByRecordType = function (recordType, logOutputItems) {
                                var vm = this;
                                switch (recordType) {
                                    //All is order by SRCMT_LOG_OUTPUT_ITEM
                                    case RECORD_TYPE.LOGIN:
                                        vm.logDataResultHeader = [
                                            new IgGridColumnModel(logOutputItems[0].itemName, "userId", "string", false, "150px", "<p class='limited-label'> ${userId} </p>"),
                                            new IgGridColumnModel(logOutputItems[1].itemName, "userName", "string", false, "150px", "<p class='limited-label'> ${userName} </p>"),
                                            new IgGridColumnModel(logOutputItems[2].itemName, "employeeCode", "string", false, "150px", "<p class='limited-label'> ${employeeCode} </p>"),
                                            new IgGridColumnModel(logOutputItems[3].itemName, "ipAddress", "string", false, "150px", "<p class='limited-label'> ${ipAddress} </p>"),
                                            new IgGridColumnModel(logOutputItems[4].itemName, "pcName", "string", false, "150px", "<p class='limited-label'> ${pcName} </p>"),
                                            new IgGridColumnModel(logOutputItems[5].itemName, "account", "string", false, "150px", "<p class='limited-label'> ${account} </p>"),
                                            new IgGridColumnModel(logOutputItems[6].itemName, "modifyDateTime", "string", false, "150px", "<p class='limited-label'> ${modifyDateTime} </p>"),
                                            new IgGridColumnModel(logOutputItems[7].itemName, "employmentAuthorityName", "string", false, "150px", "<p class='limited-label'> ${employmentAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[8].itemName, "salarytAuthorityName", "string", false, "150px", "<p class='limited-label'> ${salarytAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[9].itemName, "personalAuthorityName", "string", false, "150px", "<p class='limited-label'> ${personalAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[10].itemName, "targetNumberPeople", "string", false, "150px", "<p class='limited-label'> ${targetNumberPeople} </p>"),
                                            new IgGridColumnModel(logOutputItems[11].itemName, "officeHelperAuthorityName", "string", false, "150px", "<p class='limited-label'> ${officeHelperAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[12].itemName, "accountAuthorityName", "string", false, "150px", "<p class='limited-label'> ${accountAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[13].itemName, "myNumberAuthorityName", "string", false, "150px", "<p class='limited-label'> ${myNumberAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[14].itemName, "groupCompanyAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${groupCompanyAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[15].itemName, "companyAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${companyAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[16].itemName, "systemAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${systemAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[17].itemName, "menuName", "string", false, "150px", "<p class='limited-label'> ${menuName} </p>"),
                                            new IgGridColumnModel(logOutputItems[18].itemName, "loginStatus", "string", false, "150px", "<p class='limited-label'> ${loginStatus} </p>"),
                                            new IgGridColumnModel(logOutputItems[19].itemName, "loginMethod", "string", false, "150px", "<p class='limited-label'> ${loginMethod} </p>"),
                                            new IgGridColumnModel(logOutputItems[20].itemName, "accessResourceUrl", "string", false, "150px", "<p class='limited-label'> ${accessResourceUrl} </p>"),
                                            new IgGridColumnModel(logOutputItems[21].itemName, "note", "string", false, "150px", "<p class='limited-label'> ${note} </p>"),
                                        ];
                                        break;
                                    case RECORD_TYPE.START_UP:
                                        vm.logDataResultHeader = [
                                            new IgGridColumnModel(logOutputItems[0].itemName, "userId", "string", false, "150px", "<p class='limited-label'> ${userId} </p>"),
                                            new IgGridColumnModel(logOutputItems[1].itemName, "userName", "string", false, "150px", "<p class='limited-label'> ${userName} </p>"),
                                            new IgGridColumnModel(logOutputItems[2].itemName, "employeeCode", "string", false, "150px", "<p class='limited-label'> ${employeeCode} </p>"),
                                            new IgGridColumnModel(logOutputItems[3].itemName, "ipAddress", "string", false, "150px", "<p class='limited-label'> ${ipAddress} </p>"),
                                            new IgGridColumnModel(logOutputItems[4].itemName, "pcName", "string", false, "150px", "<p class='limited-label'> ${pcName} </p>"),
                                            new IgGridColumnModel(logOutputItems[5].itemName, "account", "string", false, "150px", "<p class='limited-label'> ${account} </p>"),
                                            new IgGridColumnModel(logOutputItems[6].itemName, "modifyDateTime", "string", false, "150px", "<p class='limited-label'> ${modifyDateTime} </p>"),
                                            new IgGridColumnModel(logOutputItems[7].itemName, "employmentAuthorityName", "string", false, "150px", "<p class='limited-label'> ${employmentAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[8].itemName, "salarytAuthorityName", "string", false, "150px", "<p class='limited-label'> ${salarytAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[9].itemName, "personalAuthorityName", "string", false, "150px", "<p class='limited-label'> ${personalAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[10].itemName, "targetNumberPeople", "string", false, "150px", "<p class='limited-label'> ${targetNumberPeople} </p>"),
                                            new IgGridColumnModel(logOutputItems[11].itemName, "officeHelperAuthorityName", "string", false, "150px", "<p class='limited-label'> ${officeHelperAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[12].itemName, "accountAuthorityName", "string", false, "150px", "<p class='limited-label'> ${accountAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[13].itemName, "myNumberAuthorityName", "string", false, "150px", "<p class='limited-label'> ${myNumberAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[14].itemName, "groupCompanyAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${groupCompanyAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[15].itemName, "companyAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${companyAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[16].itemName, "systemAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${systemAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[17].itemName, "note", "string", false, "150px", "<p class='limited-label'> ${note} </p>"),
                                            new IgGridColumnModel(logOutputItems[18].itemName, "menuName", "string", false, "150px", "<p class='limited-label'> ${menuName} </p>"),
                                            new IgGridColumnModel(logOutputItems[19].itemName, "startUpMenuName", "string", false, "150px", "<p class='limited-label'> ${startUpMenuName} </p>"),
                                        ];
                                        break;
                                    case RECORD_TYPE.UPDATE_PERSION_INFO:
                                        //parent
                                        vm.logDataResultHeader = [
                                            new IgGridColumnModel(logOutputItems[0].itemName, "userId", "string", false, "150px", "<p class='limited-label'> ${userId} </p>"),
                                            new IgGridColumnModel(logOutputItems[1].itemName, "userName", "string", false, "150px", "<p class='limited-label'> ${userName} </p>"),
                                            new IgGridColumnModel(logOutputItems[2].itemName, "employeeCode", "string", false, "150px", "<p class='limited-label'> ${employeeCode} </p>"),
                                            new IgGridColumnModel(logOutputItems[3].itemName, "ipAddress", "string", false, "150px", "<p class='limited-label'> ${ipAddress} </p>"),
                                            new IgGridColumnModel(logOutputItems[4].itemName, "pcName", "string", false, "150px", "<p class='limited-label'> ${pcName} </p>"),
                                            new IgGridColumnModel(logOutputItems[5].itemName, "account", "string", false, "150px", "<p class='limited-label'> ${account} </p>"),
                                            new IgGridColumnModel(logOutputItems[6].itemName, "modifyDateTime", "string", false, "150px", "<p class='limited-label'> ${modifyDateTime} </p>"),
                                            new IgGridColumnModel(logOutputItems[7].itemName, "employmentAuthorityName", "string", false, "150px", "<p class='limited-label'> ${employmentAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[8].itemName, "salarytAuthorityName", "string", false, "150px", "<p class='limited-label'> ${salarytAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[9].itemName, "personalAuthorityName", "string", false, "150px", "<p class='limited-label'> ${personalAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[10].itemName, "targetNumberPeople", "string", false, "150px", "<p class='limited-label'> ${targetNumberPeople} </p>"),
                                            new IgGridColumnModel(logOutputItems[11].itemName, "officeHelperAuthorityName", "string", false, "150px", "<p class='limited-label'> ${officeHelperAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[12].itemName, "accountAuthorityName", "string", false, "150px", "<p class='limited-label'> ${accountAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[13].itemName, "myNumberAuthorityName", "string", false, "150px", "<p class='limited-label'> ${myNumberAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[14].itemName, "groupCompanyAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${groupCompanyAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[15].itemName, "companyAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${companyAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[16].itemName, "systemAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${systemAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[17].itemName, "menuName", "string", false, "150px", "<p class='limited-label'> ${menuName} </p>"),
                                            new IgGridColumnModel(logOutputItems[35].itemName, "note", "string", false, "150px", "<p class='limited-label'> ${note} </p>"),
                                        ];
                                        //sub
                                        vm.logDataResultSubHeader = [
                                            new IgGridColumnModel(logOutputItems[18].itemName, "targetUserId", "string", false, "150px", "<p class='limited-label'> ${targetUserId} </p>"),
                                            new IgGridColumnModel(logOutputItems[19].itemName, "targetUserName", "string", false, "150px", "<p class='limited-label'> ${targetUserName} </p>"),
                                            new IgGridColumnModel(logOutputItems[20].itemName, "targetEmployeeCode", "string", false, "150px", "<p class='limited-label'> ${targetEmployeeCode} </p>"),
                                            new IgGridColumnModel(logOutputItems[21].itemName, "categoryProcess", "string", false, "150px", "<p class='limited-label'> ${categoryProcess} </p>"),
                                            new IgGridColumnModel(logOutputItems[22].itemName, "categoryName", "string", false, "150px", "<p class='limited-label'> ${categoryName} </p>"),
                                            new IgGridColumnModel(logOutputItems[23].itemName, "methodCorrection", "string", false, "150px", "<p class='limited-label'> ${methodCorrection} </p>"),
                                            new IgGridColumnModel(logOutputItems[24].itemName, "targetYmd", "string", false, "150px", "<p class='limited-label'> ${targetYmd} </p>"),
                                            new IgGridColumnModel(logOutputItems[25].itemName, "targetYm", "string", false, "150px", "<p class='limited-label'> ${targetYm} </p>"),
                                            new IgGridColumnModel(logOutputItems[26].itemName, "targetY", "string", false, "150px", "<p class='limited-label'> ${targetY} </p>"),
                                            new IgGridColumnModel(logOutputItems[27].itemName, "target", "string", false, "150px", "<p class='limited-label'> ${target} </p>"),
                                            new IgGridColumnModel(logOutputItems[28].itemName, "itemName", "string", false, "150px", "<p class='limited-label'> ${itemName} </p>"),
                                            new IgGridColumnModel(logOutputItems[29].itemName, "itemValueBefore", "string", false, "150px", "<p class='limited-label'> ${itemValueBefore} </p>"),
                                            new IgGridColumnModel(logOutputItems[30].itemName, "itemContentBefore", "string", false, "150px", "<p class='limited-label'> ${itemContentBefore} </p>"),
                                            new IgGridColumnModel(logOutputItems[31].itemName, "itemValueAfter", "string", false, "150px", "<p class='limited-label'> ${itemValueAfter} </p>"),
                                            new IgGridColumnModel(logOutputItems[32].itemName, "itemContentAfter", "string", false, "150px", "<p class='limited-label'> ${itemContentAfter} </p>"),
                                            new IgGridColumnModel(logOutputItems[33].itemName, "correctionItem", "string", false, "150px", "<p class='limited-label'> ${correctionItem} </p>"),
                                            new IgGridColumnModel(logOutputItems[34].itemName, "correctionYmd", "string", false, "150px", "<p class='limited-label'> ${correctionYmd} </p>"),
                                        ];
                                        break;
                                    case RECORD_TYPE.DATA_CORRECT:
                                        //parent
                                        vm.logDataResultHeader = [
                                            new IgGridColumnModel(logOutputItems[0].itemName, "userId", "string", false, "150px", "<p class='limited-label'> ${userId} </p>"),
                                            new IgGridColumnModel(logOutputItems[1].itemName, "userName", "string", false, "150px", "<p class='limited-label'> ${userName} </p>"),
                                            new IgGridColumnModel(logOutputItems[2].itemName, "employeeCode", "string", false, "150px", "<p class='limited-label'> ${employeeCode} </p>"),
                                            new IgGridColumnModel(logOutputItems[3].itemName, "ipAddress", "string", false, "150px", "<p class='limited-label'> ${ipAddress} </p>"),
                                            new IgGridColumnModel(logOutputItems[4].itemName, "pcName", "string", false, "150px", "<p class='limited-label'> ${pcName} </p>"),
                                            new IgGridColumnModel(logOutputItems[5].itemName, "account", "string", false, "150px", "<p class='limited-label'> ${account} </p>"),
                                            new IgGridColumnModel(logOutputItems[6].itemName, "modifyDateTime", "string", false, "150px", "<p class='limited-label'> ${modifyDateTime} </p>"),
                                            new IgGridColumnModel(logOutputItems[7].itemName, "employmentAuthorityName", "string", false, "150px", "<p class='limited-label'> ${employmentAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[8].itemName, "salarytAuthorityName", "string", false, "150px", "<p class='limited-label'> ${salarytAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[9].itemName, "personalAuthorityName", "string", false, "150px", "<p class='limited-label'> ${personalAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[10].itemName, "targetNumberPeople", "string", false, "150px", "<p class='limited-label'> ${targetNumberPeople} </p>"),
                                            new IgGridColumnModel(logOutputItems[11].itemName, "officeHelperAuthorityName", "string", false, "150px", "<p class='limited-label'> ${officeHelperAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[12].itemName, "accountAuthorityName", "string", false, "150px", "<p class='limited-label'> ${accountAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[13].itemName, "myNumberAuthorityName", "string", false, "150px", "<p class='limited-label'> ${myNumberAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[14].itemName, "groupCompanyAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${groupCompanyAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[15].itemName, "companyAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${companyAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[16].itemName, "systemAdminAuthorityName", "string", false, "150px", "<p class='limited-label'> ${systemAdminAuthorityName} </p>"),
                                            new IgGridColumnModel(logOutputItems[17].itemName, "menuName", "string", false, "150px", "<p class='limited-label'> ${menuName} </p>"),
                                        ];
                                        //sub
                                        vm.logDataResultSubHeader = [
                                            new IgGridColumnModel(logOutputItems[18].itemName, "targetUserId", "string", false, "150px", "<p class='limited-label'> ${targetUserId} </p>"),
                                            new IgGridColumnModel(logOutputItems[19].itemName, "targetUserName", "string", false, "150px", "<p class='limited-label'> ${targetUserName} </p>"),
                                            new IgGridColumnModel(logOutputItems[20].itemName, "targetEmployeeCode", "string", false, "150px", "<p class='limited-label'> ${targetEmployeeCode} </p>"),
                                            new IgGridColumnModel(logOutputItems[21].itemName, "targetYmd", "string", false, "150px", "<p class='limited-label'> ${targetYmd} </p>"),
                                            new IgGridColumnModel(logOutputItems[22].itemName, "targetYm", "string", false, "150px", "<p class='limited-label'> ${targetYm} </p>"),
                                            new IgGridColumnModel(logOutputItems[23].itemName, "targetY", "string", false, "150px", "<p class='limited-label'> ${targetY} </p>"),
                                            new IgGridColumnModel(logOutputItems[24].itemName, "target", "string", false, "150px", "<p class='limited-label'> ${target} </p>"),
                                            new IgGridColumnModel(logOutputItems[25].itemName, "categoryCorrection", "string", false, "150px", "<p class='limited-label'> ${categoryCorrection} </p>"),
                                            new IgGridColumnModel(logOutputItems[26].itemName, "targetItem", "string", false, "150px", "<p class='limited-label'> ${targetItem} </p>"),
                                            new IgGridColumnModel(logOutputItems[27].itemName, "itemValueBefore", "string", false, "150px", "<p class='limited-label'> ${itemValueBefore} </p>"),
                                            new IgGridColumnModel(logOutputItems[28].itemName, "itemValueAfter", "string", false, "150px", "<p class='limited-label'> ${itemValueAfter} </p>"),
                                            new IgGridColumnModel(logOutputItems[29].itemName, "itemContentBefore", "string", false, "150px", "<p class='limited-label'> ${itemContentBefore} </p>"),
                                            new IgGridColumnModel(logOutputItems[30].itemName, "itemContentAfter", "string", false, "150px", "<p class='limited-label'> ${itemContentAfter} </p>"),
                                            new IgGridColumnModel(logOutputItems[31].itemName, "remark", "string", false, "150px", "<p class='limited-label'> ${remark} </p>"),
                                        ];
                                        break;
                                    case RECORD_TYPE.DATA_STORAGE:
                                        //parent
                                        vm.logDataResultHeader = [
                                            new IgGridColumnModel(logOutputItems[0].itemName, "ipAddress", "string", false, "150px", "<p class='limited-label'> ${ipAddress} </p>"),
                                            new IgGridColumnModel(logOutputItems[1].itemName, "pcName", "string", false, "150px", "<p class='limited-label'> ${pcName} </p>"),
                                            new IgGridColumnModel(logOutputItems[2].itemName, "account", "string", false, "150px", "<p class='limited-label'> ${account} </p>"),
                                            new IgGridColumnModel(logOutputItems[3].itemName, "employeeCode", "string", false, "150px", "<p class='limited-label'> ${employeeCode} </p>"),
                                            new IgGridColumnModel(logOutputItems[4].itemName, "employeeName", "string", false, "150px", "<p class='limited-label'> ${employeeName} </p>"),
                                            new IgGridColumnModel(logOutputItems[5].itemName, "startDateTime", "string", false, "150px", "<p class='limited-label'> ${startDateTime} </p>"),
                                            new IgGridColumnModel(logOutputItems[6].itemName, "form", "string", false, "150px", "<p class='limited-label'> ${form} </p>"),
                                            new IgGridColumnModel(logOutputItems[7].itemName, "name", "string", false, "150px", "<p class='limited-label'> ${name} </p>"),
                                            new IgGridColumnModel(logOutputItems[8].itemName, "fileId", "string", false, "150px", "<p class='limited-label'> ${fileId} </p>"),
                                            new IgGridColumnModel(logOutputItems[9].itemName, "fileSize", "string", false, "150px", "<p class='limited-label'> ${fileSize} </p>"),
                                            new IgGridColumnModel(logOutputItems[10].itemName, "status", "string", false, "150px", "<p class='limited-label'> ${status} </p>"),
                                            new IgGridColumnModel(logOutputItems[11].itemName, "targetNumberPeople", "string", false, "150px", "<p class='limited-label'> ${targetNumberPeople} </p>"),
                                            new IgGridColumnModel(logOutputItems[12].itemName, "setCode", "string", false, "150px", "<p class='limited-label'> ${setCode} </p>"),
                                            new IgGridColumnModel(logOutputItems[13].itemName, "fileName", "string", false, "150px", "<p class='limited-label'> ${fileName} </p>"),
                                            new IgGridColumnModel(logOutputItems[14].itemName, "endDateTime", "string", false, "150px", "<p class='limited-label'> ${endDateTime} </p>"),
                                        ];
                                        //sub
                                        vm.logDataResultSubHeader = [
                                            new IgGridColumnModel(logOutputItems[15].itemName, "processingContent", "string", false, "150px", "<p class='limited-label'> ${processingContent} </p>"),
                                            new IgGridColumnModel(logOutputItems[16].itemName, "errorContent", "string", false, "150px", "<p class='limited-label'> ${errorContent} </p>"),
                                            new IgGridColumnModel(logOutputItems[17].itemName, "errorDate", "string", false, "150px", "<p class='limited-label'> ${errorDate} </p>"),
                                            new IgGridColumnModel(logOutputItems[18].itemName, "errorEmployeeId", "string", false, "130px", "<p class='limited-label'> ${errorEmployeeId} </p>")
                                        ];
                                        break;
                                    case RECORD_TYPE.DATA_RECOVERY:
                                        //parent
                                        vm.logDataResultHeader = [
                                            new IgGridColumnModel(logOutputItems[0].itemName, "ipAddress", "string", false, "150px", "<p class='limited-label'> ${ipAddress} </p>"),
                                            new IgGridColumnModel(logOutputItems[1].itemName, "pcName", "string", false, "150px", "<p class='limited-label'> ${pcName} </p>"),
                                            new IgGridColumnModel(logOutputItems[2].itemName, "account", "string", false, "150px", "<p class='limited-label'> ${account} </p>"),
                                            new IgGridColumnModel(logOutputItems[3].itemName, "employeeCode", "string", false, "150px", "<p class='limited-label'> ${employeeCode} </p>"),
                                            new IgGridColumnModel(logOutputItems[4].itemName, "employeeName", "string", false, "150px", "<p class='limited-label'> ${employeeName} </p>"),
                                            new IgGridColumnModel(logOutputItems[5].itemName, "startDateTime", "string", false, "150px", "<p class='limited-label'> ${startDateTime} </p>"),
                                            new IgGridColumnModel(logOutputItems[6].itemName, "form", "string", false, "150px", "<p class='limited-label'> ${form} </p>"),
                                            new IgGridColumnModel(logOutputItems[7].itemName, "name", "string", false, "150px", "<p class='limited-label'> ${name} </p>"),
                                            new IgGridColumnModel(logOutputItems[8].itemName, "endDateTime", "string", false, "150px", "<p class='limited-label'> ${endDateTime} </p>"),
                                            new IgGridColumnModel(logOutputItems[9].itemName, "setCode", "string", false, "150px", "<p class='limited-label'> ${setCode} </p>"),
                                        ];
                                        //sub
                                        vm.logDataResultSubHeader = [
                                            new IgGridColumnModel(logOutputItems[10].itemName, "processingContent", "string", false, "130px", "<p class='limited-label'> ${processingContent} </p>"),
                                            new IgGridColumnModel(logOutputItems[11].itemName, "errorContent", "string", false, "130px", "<p class='limited-label'> ${errorContent} </p>"),
                                            new IgGridColumnModel(logOutputItems[12].itemName, "contentSql", "string", false, "130px", "<p class='limited-label'> ${contentSql} </p>"),
                                            new IgGridColumnModel(logOutputItems[13].itemName, "errorDate", "string", false, "130px", "<p class='limited-label'> ${errorDate} </p>"),
                                            new IgGridColumnModel(logOutputItems[14].itemName, "errorEmployeeId", "string", false, "130px", "<p class='limited-label'> ${errorEmployeeId} </p>")
                                        ];
                                        break;
                                    case RECORD_TYPE.DATA_DELETION:
                                        //parent
                                        vm.logDataResultHeader = [
                                            new IgGridColumnModel(logOutputItems[0].itemName, "ipAddress", "string", false, "150px", "<p class='limited-label'> ${ipAddress} </p>"),
                                            new IgGridColumnModel(logOutputItems[1].itemName, "pcName", "string", false, "150px", "<p class='limited-label'> ${pcName} </p>"),
                                            new IgGridColumnModel(logOutputItems[2].itemName, "account", "string", false, "150px", "<p class='limited-label'> ${account} </p>"),
                                            new IgGridColumnModel(logOutputItems[3].itemName, "employeeCode", "string", false, "150px", "<p class='limited-label'> ${employeeCode} </p>"),
                                            new IgGridColumnModel(logOutputItems[4].itemName, "employeeName", "string", false, "150px", "<p class='limited-label'> ${employeeName} </p>"),
                                            new IgGridColumnModel(logOutputItems[5].itemName, "startDateTime", "string", false, "150px", "<p class='limited-label'> ${startDateTime} </p>"),
                                            new IgGridColumnModel(logOutputItems[6].itemName, "form", "string", false, "150px", "<p class='limited-label'> ${form} </p>"),
                                            new IgGridColumnModel(logOutputItems[7].itemName, "status", "string", false, "150px", "<p class='limited-label'> ${status} </p>"),
                                            new IgGridColumnModel(logOutputItems[8].itemName, "targetNumberPeople", "string", false, "150px", "<p class='limited-label'> ${targetNumberPeople} </p>"),
                                            new IgGridColumnModel(logOutputItems[9].itemName, "isDeletedFilesFlg", "string", false, "150px", "<p class='limited-label'> ${isDeletedFilesFlg} </p>"),
                                            new IgGridColumnModel(logOutputItems[10].itemName, "fileSize", "string", false, "150px", "<p class='limited-label'> ${fileSize} </p>"),
                                            new IgGridColumnModel(logOutputItems[11].itemName, "fileName", "string", false, "150px", "<p class='limited-label'> ${fileName} </p>"),
                                            new IgGridColumnModel(logOutputItems[12].itemName, "endDateTime", "string", false, "150px", "<p class='limited-label'> ${endDateTime} </p>"),
                                            new IgGridColumnModel(logOutputItems[13].itemName, "setCode", "string", false, "150px", "<p class='limited-label'> ${setCode} </p>"),
                                        ];
                                        //sub
                                        vm.logDataResultSubHeader = [
                                            new IgGridColumnModel(logOutputItems[14].itemName, "processingContent", "string", false, "130px", "<p class='limited-label'> ${processingContent} </p>"),
                                            new IgGridColumnModel(logOutputItems[15].itemName, "errorContent", "string", false, "130px", "<p class='limited-label'> ${errorContent} </p>"),
                                            new IgGridColumnModel(logOutputItems[16].itemName, "errorDate", "string", false, "130px", "<p class='limited-label'> ${errorDate} </p>"),
                                            new IgGridColumnModel(logOutputItems[17].itemName, "errorEmployeeId", "string", false, "130px", "<p class='limited-label'> ${errorEmployeeId} </p>")
                                        ];
                                        break;
                                    default:
                                        break;
                                }
                                var items = _.filter(logOutputItems, function (item) { return vm.displayItemNo().some(function (i) { return i === String(item.itemNo); }); });
                                vm.logDataResultHeader = _.filter(vm.logDataResultHeader, function (item) { return items.some(function (i) { return i.itemName === String(item.headerText); }); });
                                vm.logDataResultSubHeader = _.filter(vm.logDataResultSubHeader, function (item) { return items.some(function (i) { return i.itemName === String(item.headerText); }); });
                                if (recordType === RECORD_TYPE.DATA_STORAGE || recordType === RECORD_TYPE.DATA_RECOVERY || recordType === RECORD_TYPE.DATA_DELETION) {
                                    vm.logDataResultHeader.push(new IgGridColumnModel("id", "id", "string", true));
                                    vm.logDataResultSubHeader.push(new IgGridColumnModel("logNumber", "logNumber", "string", true));
                                }
                                else {
                                    vm.logDataResultHeader.push(new IgGridColumnModel("parentKey", "parentKey", "string", true));
                                    vm.logDataResultSubHeader.push(new IgGridColumnModel("childrenKey", "childrenKey", "string", true));
                                }
                            };
                            ScreenModel.prototype.getFormName = function (form) {
                                var vm = this;
                                switch (form) {
                                    case 0:
                                        return vm.$i18n("Enum_StorageForm_MANUAL");
                                    case 1:
                                        return vm.$i18n("Enum_StorageForm_AUTOMATIC");
                                    default:
                                        return "";
                                }
                            };
                            ScreenModel.prototype.getStatusName = function (status) {
                                var vm = this;
                                switch (status) {
                                    case 0:
                                        return vm.$i18n("Enum_SaveStatus_SUCCESS");
                                    case 1:
                                        return vm.$i18n("Enum_SaveStatus_INTERRUPTION");
                                    case 2:
                                        return vm.$i18n("Enum_SaveStatus_FAILURE");
                                    default:
                                        return "";
                                }
                            };
                            ScreenModel.prototype.generateBothGrid = function (dataSource, recordType) {
                                var vm = this;
                                var $grid = $("#igGridLog");
                                var primaryKeyParentName = "id";
                                var primaryKeyChildrenName = "logNumber";
                                var childrenDataProperty = "logResult";
                                if (!(recordType === RECORD_TYPE.DATA_STORAGE || recordType === RECORD_TYPE.DATA_RECOVERY || recordType === RECORD_TYPE.DATA_DELETION)) {
                                    primaryKeyParentName = "parentKey";
                                    primaryKeyChildrenName = "childrenKey";
                                    if (recordType === RECORD_TYPE.DATA_CORRECT) {
                                        childrenDataProperty = "logDataCorrectChildrenDtos";
                                    }
                                    if (recordType === RECORD_TYPE.UPDATE_PERSION_INFO) {
                                        childrenDataProperty = "logPersonalUpdateChildrenDtos";
                                    }
                                }
                                var updateHeight = function () {
                                    var uh = function (h) { return $grid.igHierarchicalGrid('option', 'height', window.innerHeight - h + "px"); };
                                    $.Deferred()
                                        .resolve(true)
                                        .then(function () { return uh(280); })
                                        .then(function () { return uh(281); });
                                };
                                //generate generateHierarchialGrid
                                $grid.igHierarchicalGrid({
                                    width: "125%",
                                    height: "calc(100% - 15px)",
                                    initialDataBindDepth: 1,
                                    dataSource: dataSource,
                                    dataSourceType: "json",
                                    primaryKey: primaryKeyParentName,
                                    autoGenerateColumns: false,
                                    autoGenerateLayouts: false,
                                    hidePrimaryKey: true,
                                    virtualizationMode: 'continuous',
                                    columns: vm.logDataResultHeader,
                                    features: [
                                        {
                                            name: "Responsive",
                                            enableVerticalRendering: false
                                        },
                                        {
                                            name: "Resizing",
                                            deferredResizing: false,
                                            allowDoubleClickToResize: true,
                                            inherit: true
                                        },
                                        {
                                            name: "Sorting",
                                            inherit: false
                                        },
                                        {
                                            name: "Paging",
                                            pageSize: 100,
                                            type: "local",
                                            inherit: true
                                        },
                                        {
                                            name: "Filtering",
                                            type: "local",
                                            filterDropDownItemIcons: false,
                                            filterDropDownWidth: 200,
                                            filterDialogHeight: "390px",
                                            filterDialogWidth: "515px",
                                            columnSettings: [
                                                { columnKey: primaryKeyParentName, allowFiltering: false },
                                            ]
                                        }
                                    ],
                                    columnLayouts: [{
                                            width: "100%",
                                            key: childrenDataProperty,
                                            hidePrimaryKey: true,
                                            childrenDataProperty: childrenDataProperty,
                                            autoGenerateColumns: false,
                                            primaryKey: primaryKeyChildrenName,
                                            columns: vm.logDataResultSubHeader,
                                            features: [
                                                {
                                                    name: 'Selection',
                                                    mode: "row",
                                                    multipleSelection: false
                                                },
                                                {
                                                    name: "Responsive",
                                                    enableVerticalRendering: false,
                                                    columnSettings: []
                                                }
                                            ]
                                        }],
                                    dataRendered: function () {
                                        updateHeight();
                                    },
                                    rowCollapsed: function () {
                                        updateHeight();
                                    },
                                    rowExpanded: function () {
                                        updateHeight();
                                    },
                                });
                            };
                            ScreenModel.prototype.generateParentOnlyGrid = function (dataSource, recordType) {
                                var vm = this;
                                var $grid = $("#igGridLog");
                                var primaryKeyName = "id";
                                if (!(recordType === RECORD_TYPE.DATA_STORAGE || recordType === RECORD_TYPE.DATA_RECOVERY || recordType === RECORD_TYPE.DATA_DELETION)) {
                                    primaryKeyName = "parentKey";
                                }
                                //generate generateHierarchialGrid
                                $grid.igGrid({
                                    width: "125%",
                                    height: "calc(100% - 5px)",
                                    features: [
                                        {
                                            name: "Paging",
                                            type: "local",
                                            pageSize: 100
                                        },
                                        {
                                            name: "Sorting",
                                            type: "local"
                                        },
                                        {
                                            name: "Resizing",
                                            deferredResizing: false,
                                            allowDoubleClickToResize: true
                                        },
                                        {
                                            name: "Filtering",
                                            type: "local",
                                            filterDropDownItemIcons: false,
                                            filterDropDownWidth: 200,
                                            filterDialogHeight: "390px",
                                            filterDialogWidth: "515px",
                                            columnSettings: [
                                                { columnKey: primaryKeyName, allowFiltering: false }
                                            ]
                                        }
                                    ],
                                    enableTooltip: true,
                                    rowVirtualization: true,
                                    virtualization: true,
                                    virtualizationMode: 'continuous',
                                    primaryKey: primaryKeyName,
                                    dataSource: dataSource,
                                    columns: vm.logDataResultHeader
                                });
                            };
                            ScreenModel.prototype.generateChildOnlyGrid = function (dataSource, recordType) {
                                var vm = this;
                                var primaryKeyName = "logNumber";
                                var $grid = $("#igGridLog");
                                var ds = [];
                                if (recordType === RECORD_TYPE.DATA_STORAGE || recordType === RECORD_TYPE.DATA_RECOVERY || recordType === RECORD_TYPE.DATA_DELETION) {
                                    ds = _
                                        .chain(dataSource)
                                        .map(function (item) { return item.logResult; })
                                        .flatMap()
                                        .map(function (data, index) {
                                        if (index < 1000) {
                                            data.logNumber = index;
                                            return data;
                                        }
                                        else {
                                            return undefined;
                                        }
                                    })
                                        .filter(function (data) { return data !== undefined; })
                                        .value();
                                }
                                else if (recordType === RECORD_TYPE.UPDATE_PERSION_INFO) {
                                    ds = _
                                        .chain(dataSource)
                                        .map(function (item) { return item.logPersonalUpdateChildrenDtos; })
                                        .flatMap()
                                        .map(function (data, index) {
                                        if (index < 1000) {
                                            data.childrenKey = index;
                                            return data;
                                        }
                                        else {
                                            return undefined;
                                        }
                                    })
                                        .filter(function (data) { return data !== undefined; })
                                        .value();
                                    primaryKeyName = "childrenKey";
                                }
                                else if (recordType === RECORD_TYPE.DATA_CORRECT) {
                                    ds = _
                                        .chain(dataSource)
                                        .map(function (item) { return item.logDataCorrectChildrenDtos; })
                                        .flatMap()
                                        .map(function (data, index) {
                                        if (index < 1000) {
                                            data.childrenKey = index;
                                            return data;
                                        }
                                        else {
                                            return undefined;
                                        }
                                    })
                                        .filter(function (data) { return data !== undefined; })
                                        .value();
                                    primaryKeyName = "childrenKey";
                                }
                                //validate datasource
                                if (ds.length >= vm.maxlength()) {
                                    vm.isDisplayText(true);
                                }
                                if (ds.length <= 0) {
                                    vm.$dialog.error({ messageId: "Msg_1220" });
                                }
                                //generate generateHierarchialGrid
                                $grid.igGrid({
                                    width: "125%",
                                    height: "calc(100% - 5px)",
                                    features: [
                                        {
                                            name: "Paging",
                                            type: "local",
                                            pageSize: 100
                                        },
                                        {
                                            name: "Sorting",
                                            type: "local"
                                        },
                                        {
                                            name: "Resizing",
                                            deferredResizing: false,
                                            allowDoubleClickToResize: true
                                        },
                                        {
                                            name: "Filtering",
                                            type: "local",
                                            filterDropDownItemIcons: false,
                                            filterDropDownWidth: 200,
                                            filterDialogHeight: "390px",
                                            filterDialogWidth: "515px",
                                            columnSettings: [
                                                { columnKey: primaryKeyName, allowFiltering: false }
                                            ]
                                        }
                                    ],
                                    enableTooltip: true,
                                    rowVirtualization: true,
                                    virtualization: true,
                                    virtualizationMode: 'continuous',
                                    primaryKey: primaryKeyName,
                                    dataSource: ds,
                                    columns: vm.logDataResultSubHeader
                                });
                            };
                            ScreenModel.prototype.exportCsvF = function () {
                                //CLI003: fix bug #108873, #108865
                                var vm = this;
                                var recordType = Number(vm.logTypeSelectedCode());
                                var format = 'YYYY/MM/DD HH:mm:ss';
                                if (recordType === RECORD_TYPE.DATA_STORAGE ||
                                    recordType === RECORD_TYPE.DATA_DELETION ||
                                    recordType === RECORD_TYPE.DATA_RECOVERY) {
                                    var LogDataParamsExport = {
                                        systemType: Number(vm.systemTypeSelectedCode()),
                                        recordType: Number(vm.logTypeSelectedCode()),
                                        startDateOperator: moment.utc(vm.startDateOperator(), format).toISOString(),
                                        endDateOperator: moment.utc(vm.endDateOperator(), format).toISOString(),
                                        listOperatorEmployeeId: vm.operatorEmployeeIdList(),
                                        listCondition: vm.filterLogSetting(),
                                        lstHeaderDto: vm.logDataResultHeader.map(function (item) { return item.itemName; }).filter(function (item) { return item !== 'id' && item !== 'logNumber'; }),
                                        lstSubHeaderDto: vm.logDataResultSubHeader.map(function (item) { return item.itemName; }).filter(function (item) { return item !== 'id' && item !== 'logNumber'; }),
                                        lstSelectedItemHeader: vm.LogItemAllName
                                    };
                                    vm.$blockui('grayout');
                                    //CLI003: fix bug #108971, #108970
                                    service.exportCsvForDataResult(LogDataParamsExport).done(function () {
                                    }).always(function () {
                                        vm.$blockui('clear');
                                        vm.$errors('clear');
                                    });
                                }
                                else {
                                    var format_1 = 'YYYY/MM/DD HH:mm:ss';
                                    var paramLog = {
                                        listOperatorEmployeeId: vm.operatorEmployeeIdList(),
                                        listTagetEmployeeId: vm.targetEmployeeIdList(),
                                        startDateTaget: moment(vm.dateValue().startDate, "YYYY/MM/DD").toISOString(),
                                        endDateTaget: moment(vm.dateValue().endDate, "YYYY/MM/DD").toISOString(),
                                        startDateOperator: moment.utc(vm.startDateOperator(), format_1).toISOString(),
                                        endDateOperator: moment.utc(vm.endDateOperator(), format_1).toISOString(),
                                        recordType: vm.logTypeSelectedCode(),
                                        targetDataType: vm.dataTypeSelectedCode(),
                                        listLogSettingDto: vm.logSettingDto(),
                                        listCondition: vm.filterLogSetting(),
                                    };
                                    if (vm.checkFormatDate() === '2') {
                                        paramLog.endDateTaget = moment.utc(vm.dateValue().endDate, "YYYY/MM/DD").endOf('month').toISOString();
                                    }
                                    else {
                                        paramLog.endDateTaget = moment.utc(vm.dateValue().endDate, "YYYY/MM/DD").toISOString();
                                    }
                                    var params = {
                                        logParams: paramLog,
                                        lstHeaderDto: vm.logDataResultHeader.map(function (item) { return item.itemName; }).filter(function (item) { return item !== 'parentKey' && item !== 'childrenKey'; }),
                                        lstSubHeaderDto: vm.logDataResultSubHeader.map(function (item) { return item.itemName; }).filter(function (item) { return item !== 'parentKey' && item !== 'childrenKey'; }),
                                        lstSelectedItemHeader: vm.LogItemAllName
                                    };
                                    vm.$blockui('grayout');
                                    service.logSettingExportCsv(params)
                                        .always(function () {
                                        vm.$blockui('clear');
                                        vm.$errors('clear');
                                    });
                                }
                            };
                            //Back to screen B
                            ScreenModel.prototype.previousScreenB = function () {
                                var vm = this;
                                vm.$jump("/view/cli/003/b/index.xhtml");
                            };
                            ScreenModel = __decorate([
                                bean()
                            ], ScreenModel);
                            return ScreenModel;
                        }(ko.ViewModel));
                        f.ScreenModel = ScreenModel;
                    })(f = cli003.f || (cli003.f = {}));
                })(cli003 = view.cli003 || (view.cli003 = {}));
            })(view = com.view || (com.view = {}));
        })(com = uk.com || (uk.com = {}));
    })(uk = nts.uk || (nts.uk = {}));
})(nts || (nts = {}));
//# sourceMappingURL=cli003.f.vm.js.map