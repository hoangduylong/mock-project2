var template;
(function (template) {
    template.sample["ntsGridList"] = new template.Control("グリッドリスト", 32, "<button data-bind=\"click: selectSomeItems\">Select some items</button>\n<button data-bind=\"click: deselectAll\">Deselect all</button>\n<button data-bind=\"click: addItem\">Add</button>\n<button data-bind=\"click: updateItem\">Update Item</button>\n<button data-bind=\"click: removeItem\">Remove</button>\n<span data-bind=\"ntsCheckBox: {checked: enable}\">Enable</span>\n<hr />\n<h3>Single selecting mode</h3>\n<table id=\"single-list\" data-bind=\"ntsGridList: {\n        height: 350,\n        dataSource: items,\n        primaryKey: 'code',\n        columns: columns,\n        enable: enable,\n        multiple: false,\n        value: currentCode,\n        rows: 10\n    }\"></table>\ncurrentCode: <span data-bind=\"text: currentCode\"></span><br/>\n<button data-bind=\"click: prev\">Prev</button>\n<button data-bind=\"click: next\">Next</button>\n<button data-bind=\"click: jump\">Jump</button>\n<hr/>\n<h3>Multiple selecting mode</h3>\n<table id=\"multi-list\" data-bind=\"ntsGridList: {\n        height: 350,\n        dataSource: items,\n        optionsValue: 'code',\n        columns: columns,\n        enable: enable,\n        multiple: true,\n        value: currentCodeList,\n        selectionDisables: disables, \n        rows: 10\n    }\"></table>\ncurrentCodeList: <span data-bind=\"text: currentCodeList\"></span><br/>\n<button data-bind=\"click: addDeleteButton\">Add Delete Button</button>\n<hr/>\n<h3>Draggable</h3>\n<table id=\"draggable-list\" data-bind=\"ntsGridList: {\n    height: 300,\n    dataSource: dragItems,\n    optionsValue: 'code',\n    columns: columns,\n    enable: true,\n    multiple: true,\n    value: codeList,\n    itemDraggable: true\n}\"></table>\ncurrentCodeList: <span data-bind=\"text: codeList\"></span>", "var ItemModel = (function () {\n    function ItemModel(code, name, description, deletable, other1, other2) {\n        this.code = code;\n        this.name = name;\n        this.description = description;\n        this.other1 = other1;\n        this.other2 = other2 || other1;\n        this.deletable = deletable;\n    }\n    return ItemModel;\n}());\n\nself.index = ko.observable(0);\nself.enable = ko.observable(true);\nself.items = ko.observableArray([]);\nself.disables = ko.observableArray([]);\nself.dragItems = ko.observableArray([]);\n\nfor (let i = 1; i < 100; i++) {\n    self.items.push(new ItemModel('00' + i, '\u57FA\u672C\u7D66 \u57FA\u672C\u7D66', \"description \" + i, i % 3 === 0, \"2010/1/1\"));\n    self.dragItems.push(new ItemModel('00' + i, '\u57FA\u672C\u7D66 ', \"description \" + i, i % 3 === 0, \"2010/1/1\"));\n    \n    if (i % 6 === 0) {\n        self.disables.push(\"00\" + i);\n    }\n}\n\nself.columns = ko.observableArray([\n    { headerText: '\u30B3\u30FC\u30C9', key: 'code', width: 100, hidden: true },\n    { headerText: '\u540D\u79F0', key: 'name', width: 150, columnCssClass: \"test\" },\n    { headerText: '\u8AAC\u660E', key: 'description', width: 150 },\n    { headerText: '\u8AAC\u660E1', key: 'other1', width: 150, formatter: function(v) {\n        if (v === \"2010/1/1\") {\n            return '<div style=\"text-align: center; max-height: 18px;\"><i class=\"ui-icon ui-icon-info\"></i>' + v + '</div>';\n        }\n        return '';\n    } },\n    { headerText: '\u8AAC\u660E2', key: 'other2', width: 150, isDateColumn: true, format: 'YYYY/MM/DD' }\n]);\nself.currentCode = ko.observable();\nself.currentCode.subscribe(function(newValue) {\n    self.index(_.findIndex(self.items(), [\"code\", newValue]));\n})\nself.currentCodeList = ko.observableArray([\"006\"]);\nself.codeList = ko.observableArray([]);\n// Fire event.\n$(\"#multi-list\").on('itemDeleted', (function(e) {\n    alert(\"Item is deleted in multi grid is \" + e[\"detail\"][\"target\"]);\n}));\n\n$(\"#single-list\").on('itemDeleted', (function(e) {\n    alert(\"Item is deleted in single grid is \" + e[\"detail\"][\"target\"]);\n}));\n\nScreenModel.prototype.selectSomeItems = function () {\n    this.currentCode('0010');\n    this.currentCodeList.removeAll();\n    this.currentCodeList.push('001');\n    this.currentCodeList.push('002');\n};\nScreenModel.prototype.deselectAll = function () {\n    this.currentCode(null);\n    this.currentCodeList.removeAll();\n};\nScreenModel.prototype.updateItem = function () {\n    this.items()[0].name = \"test\";\n    this.items.valueHasMutated();\n};\nScreenModel.prototype.addItem = function () {\n    this.items.push(new ItemModel(this.count.toString(), '\u57FA\u672C\u7D66', \"description \" + this.count, true, \"other \" + this.count));\n    this.count++;\n};\nScreenModel.prototype.removeItem = function () {\n    this.items.shift();\n};\nScreenModel.prototype.addDeleteButton = function () {\n    $(\"#multi-list\").ntsGridList(\"setupDeleteButton\", { deleteField: \"deletable\", sourceTarget: this.items });\n};\nScreenModel.prototype.prev = function () {\n    var self = this;\n    if (self.index() > 0) {\n        self.index(self.index() - 1);\n        self.currentCode(self.items()[self.index()].code);\n    }\n};\nScreenModel.prototype.next = function () {\n    var self = this;\n    if (self.index() < self.items().length - 1) {\n        self.index(self.index() + 1);\n        self.currentCode(self.items()[self.index()].code);\n    }\n};\nScreenModel.prototype.jump = function () {\n    var self = this;\n    self.index(50);\n    self.currentCode(self.items()[self.index()].code);\n};");
    template.sample["ntsListBox"] = new template.Control("シンプルリスト", 33, "<div>\n    <input data-bind=\"value: itemName\"></input>\n    <button data-bind=\"click: addOptions\">Add Item</button>\n</div>\n<button data-bind=\"click: remove\">Remove Item</button>\n<button data-bind=\"click: selectAll\">Select All</button>\n<button data-bind=\"click: deselectAll\">Deselect All</button>\n<span data-bind=\"ntsCheckBox: { checked: isEnable }\">Enable</span>\n<span data-bind=\"ntsCheckBox: { checked: isMulti }\">Multiple for list 1</span>\n<br />\n<!-- Multiple is false -->\n<b>Single Selected:</b><span data-bind=\"text: selectedCode()\"></span>\n<i><span data-bind=\"text: selectedCode().code\"></span></i><br/>\n<!-- Multiple is true -->\n<b>Multi Selected:</b><span data-bind=\"text: selectedCodes()\"></span><br />\n<b>Selected:</b><span data-bind=\"text: selectedCodes().length\"></span><br />\n<br />\n<div id=\"list-box\" data-bind=\"ntsListBox: {\n                    options: itemList,\n                    optionsValue: 'code',\n                    optionsText: 'name',\n                    multiple: isMulti(),\n                    value: selectedCodes,\n                    enable: isEnable(),\n                    rows: 10,\n                    columns: [\n                        { key: 'code', length: 4 },\n                        { key: 'name', length: 10 },\n                        { key: 'description', length: 10 }\n                    ]}\"></div>\n                    \n<div id=\"list-box2\" data-bind=\"ntsListBox: {\n                    options: itemList,\n                    optionsValue: 'code',\n                    optionsText: 'name',\n                    multiple: false,\n                    value: selectedCode,\n                    enable: isEnable(),\n                    rows: 5 }\"></div>\n<br/>\n<button data-bind=\"click: prev\">Prev</button>\n<button data-bind=\"click: next\">Next</button>\n<button data-bind=\"click: jump\">Jump</button>", "var ItemModel = (function () {\n    function ItemModel(code, name, description) {\n        this.code = code;\n        this.name = name;\n        this.description = description;\n    }\n    return ItemModel;\n}());\n\nself.index = ko.observable(0);\nvar temp = [];\nfor(var i = 0; i < 100; i++){\n    temp.push(new ItemModel((i + 1), '\u57FA\u672C\u7D66', \"description \" + (i + 1)));\n}\nself.itemList = ko.observableArray(temp);\nself.itemName = ko.observable('');\nself.currentCode = ko.observable(3);\nself.selectedCode = ko.observable(temp[2].code);\nself.selectedCodes = ko.observableArray([]);\nself.isEnable = ko.observable(true);\nself.isMulti = ko.observable(true);\nself.isMulti2 = ko.observable(true);\nself.isValidate = ko.observable(true);\n\nScreenModel.prototype.addOptions = function () {\n    var self = this;\n    var newCode = self.currentCode() + 1;\n    var itemCode = newCode;\n    self.itemList.push(new ItemModel(itemCode, self.itemName(), \"\"));\n    self.currentCode(newCode);\n};\nScreenModel.prototype.deselectAll = function () {\n    $('#list-box').ntsListBox('deselectAll');\n};\nScreenModel.prototype.selectAll = function () {\n    $('#list-box').ntsListBox('selectAll');\n};\n/**\n * Clear options.\n */\nScreenModel.prototype.clearOptions = function () {\n    var self = this;\n    self.itemList([]);\n};\n/**\n * Remove item by code;\n */\nScreenModel.prototype.remove = function () {\n    var self = this;\n    // Remove by code.\n    var selected = self.itemList().filter(function (item) { return item.code === self.selectedCode().code; })[0];\n    self.itemList.remove(selected);\n    // Remove by codes\n    var selecteds = self.itemList().filter(function (item) { return self.selectedCodes().indexOf(item) != -1; });\n    self.itemList.removeAll(selecteds);\n};\nScreenModel.prototype.prev = function () {\n    var self = this;\n    if (self.index() > 0) {\n        self.index(self.index() - 1);\n        self.selectedCode(self.itemList()[self.index()]);\n    }\n};\nScreenModel.prototype.next = function () {\n    var self = this;\n    if (self.index() < self.itemList().length - 1) {\n        self.index(self.index() + 1);\n        self.selectedCode(self.itemList()[self.index()]);\n    }\n};\nScreenModel.prototype.jump = function () {\n    var self = this;\n    self.index(50);\n    self.selectedCode(self.itemList()[self.index()]);\n};");
    template.sample["ntsTreeGridView"] = new template.Control("ツリーリスト", 34, "<button data-bind=\"click: resetSelection\">Reset</button>\n<button data-bind=\"click: changeDataSource\">Next\n    Datasource</button>\n<div class=\"cf\">\n    <div style=\"float: left\">\n        <h3>Single Selection</h3>\n        <table id=\"treegrid2\"\n            data-bind=\"ntsTreeGridView:{\n                    width: 700,\n                    height: 250,\n                    dataSource: items2,\n                    value: singleSelectedCode,\n                    columns: columns,\n                    initialExpandDepth: 0,\n                    primaryKey: 'code',\n                    childDataKey: 'childs',\n                    primaryText: 'nodeText',\n                    multiple: false,\n                    enable: true,\n                    showCheckBox: false}\">\n        </table>\n        \n        <table id=\"treegrid2-limited\"\n            data-bind=\"ntsTreeGridView:{\n                    width: 700,\n                    height: 250,\n                    dataSource: items2,\n                    value: singleSelectedCode,\n                    columns: columns,\n                    primaryKey: 'code',\n                    childDataKey: 'childs',\n                    primaryText: 'nodeText',\n                    multiple: false,\n                    enable: true,\n                    showCheckBox: false,\n                    rows: 5}\">\n        </table>\n    </div>\n    <div style=\"float: left\">\n        <h4>Your single selected code:</h4>\n        <span data-bind=\"text: singleSelectedCode\"></span>\n        <br />\n        <br />\n    </div>\n</div>\n<div class=\"cf\">\n    <div style=\"float: left;\">\n        <h3>Multi Selection</h3>\n        <div>\n            <div style=\"width: 390px\" data-bind=\"ntsSearchBox: {label: '\u691C\u7D22', targetKey: 'code', mode:'igTree', comId:'treegrid', items: items1, selected: selectedCodes2, selectedKey: 'code', childField: 'childs', fields: ['name', 'code']}\"></div>\n            <div style=\"display: inline-block;\">\n                <table id=\"treegrid\"\n                    data-bind=\"ntsTreeGridView:{\n                    width: 690, \n                    height: 250,\n                    options: items1,\n                    virtualization: true, \n                    virtualizationMode: 'continuous',\n                    selectedValues: selectedCode,\n                    optionsValue: 'code',\n                    optionsChild: 'childs',\n                    optionsText: 'nodeText',\n                    multiple: true,\n                    enable: true,\n                    columns: columns2,\n                    showCheckBox: true}\">\n                </table>\n            </div>\n            <div id=\"up-down\"\n                data-bind=\"ntsUpDown: {\n                targetSource: items1,\n                primaryKey: 'code',\n                comId: '#treegrid',\n                type: 'tree', \n                childDataKey: 'childs'\n            }\"></div>\n        </div>\n    </div>\n    <div style=\"float: left\">\n        <h4>Your multiple selected code:</h4>\n        <!-- ko foreach: selectedCode -->\n            <div data-bind=\"text: $data\"></div>\n        <!-- /ko -->\n        <br />\n        <br />\n    </div>\n</div>", "var Node = (function () {\n    function Node(code, name, childs) {\n        var self = this;\n        self.code = code;\n        self.name = name;\n        self.nodeText = self.code + ' ' + self.name;\n        self.childs = childs;\n        self.custom = 'Random' + new Date().getTime();\n    }\n    return Node;\n}());\n\nself.items1 = ko.observableArray([]);\nfor(let i = 1; i <= 50; i++) {\n    let level1 = new Node('0000' + i, '\u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8  v\u30B5\u30FC\u30D3\u30B9\u90E8  \u30B5\u30FC\u30D3\u30B9\u90E8\u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8\u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8\u30B5\u30FC\u30D3\u30B9\u90E8' + i, []);\n    for(let j = 1; j <= 2; j++) {\n        let ij = i + \"\" + j;\n        let level2 = new Node('0000' + ij, '\u30B5\u30FC\u30D3\u30B9\u90E8' + ij, []);\n        level1.childs.push(level2);\n        for(let k = 1; k <= 2; k++) {\n            let  ijk = ij + \"\" + k;\n            let level3 = new Node('0000' + ijk, '\u30B5\u30FC\u30D3\u30B9\u90E8' + ijk, []);\n            level2.childs.push(level3);\n            for(let l = 1; l <= 2; l++) {\n                let  ijkl = ijk + \"\" + l;\n                let level4 = new Node('0000' + ijkl, '\u30B5\u30FC\u30D3\u30B9\u90E8' + ijkl, []);\n                level3.childs.push(level4);\n                for(let n = 1; n <= 2; n++) {\n                    let  ijkln = ijkl + \"\" + n;\n                    let level5 = new Node('0000' + ijkln, '\u30B5\u30FC\u30D3\u30B9\u90E8' + ijkln, []);\n                    level4.childs.push(level5);\n                }\n            }\n        }   \n    }\n    self.items1.push(level1);\n}\nself.items2 = ko.observableArray(self.items1());\nself.selectedCode = ko.observableArray([]);\nself.singleSelectedCode = ko.observable(null);\nself.selectedCodes2 = ko.observable([]);\nself.index = 0;\nself.columns = ko.observableArray([{ headerText: \"Item Code\", width: \"250px\", key: 'code', dataType: \"string\", hidden: false },\n{ headerText: \"Item Text\", key: 'nodeText', width: \"200px\", dataType: \"string\" }]);\nself.columns2 = ko.observableArray([{ headerText: \"Item Code\", width: \"250px\", key: 'code', dataType: \"string\", hidden: false },\n{ headerText: \"Item Text\", key: 'nodeText', width: \"250px\", dataType: \"string\" },\n{ headerText: \"Item Auto Generated Field\", key: 'custom', width: \"200px\", dataType: \"string\" }]);\nScreenModel.prototype.resetSelection = function () {\n    var self = this;\n    var x = self.items2().slice();\n    var y = x[0];\n    x[0] = x[1];\n    x[1] = y;\n    self.items2(x);\n};\nScreenModel.prototype.changeDataSource = function () {\n    var self = this;\n    var i = 0;\n    var newArrays = new Array();\n    while (i < 50) {\n        self.index++;\n        i++;\n        newArrays.push(new Node(self.index.toString(), 'Name ' + self.index.toString(), []));\n    }\n    self.items1(newArrays);\n    self.items2(newArrays);\n};");
    template.sample["ntsTreeDragAndDrop"] = new template.Control("ツリー", 35, "<button data-bind=\"click: resetSelection\">Reset</button>\n<button data-bind=\"click: changeDataSource\">Next\n    Datasource</button>\n<div class=\"cf\">\n    <div style=\"float: left\">\n        <h3>Single Selection</h3>\n        <div id=\"treegrid2\"\n            data-bind=\"ntsTreeDragAndDrop:{\n                    width: 1000,\n                    height: 250,\n                    rows: 10,\n                    dataSource: items2,\n                    value: singleSelectedCode,\n                    primaryKey: 'code',\n                    childDataKey: 'childs',\n                    primaryText: 'nodeText',\n                    maxDeepLeaf: 2,\n                    maxChildInNode: 3,\n                    multiple: false,\n                    enable: true}\">\n        </div>\n    </div>\n    <div style=\"float: left\">\n        <br />\n        <br />\n        <h4>Your single selected code:</h4>\n        <span data-bind=\"text: singleSelectedCode\"></span>\n    </div>\n</div>\n<div class=\"cf\">\n    <div style=\"float: left;\">\n        <h3>Multi Selection</h3>\n        <div>\n             <div style=\"display: inline-block;\">\n                <div id=\"treegrid\"\n                    data-bind=\"ntsTreeDragAndDrop:{\n                    width: 1000, \n                    height: 250,\n                    options: items1,\n                    selectedValues: selectedCode,\n                    optionsValue: 'code',\n                    optionsChild: 'childs',\n                    optionsText: 'nodeText',\n                    multiple: true}\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div style=\"float: left\">\n        <br />\n        <br />\n        <h4>Your multiple selected code:</h4>\n        <!-- ko foreach: selectedCode -->\n            <div data-bind=\"text: $data\"></div>\n        <!-- /ko -->\n    </div>\n</div>\n<div class=\"cf\">\n    <div style=\"float: left;\">\n        <h3>With searchbox</h3>\n        <div>\n            <div data-bind=\"ntsSearchBox: {targetKey: 'code', mode:'igTreeDrag', comId:'treegrid3', items: items1,           \n                searchText: 'test',  selected: selectedCode, selectedKey: 'code', childField: 'childs', fields: ['code', 'nodeText'], enable: true} \"></div>\n             <div style=\"display: inline-block;\">\n                <div id=\"treegrid3\"\n                    data-bind=\"ntsTreeDragAndDrop:{\n                    width: 1000, \n                    height: 250,\n                    options: items1,\n                    selectedValues: selectedCode,\n                    optionsValue: 'code',\n                    optionsChild: 'childs',\n                    optionsText: 'nodeText',\n                    multiple: true}\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", "var Node = (function () {\n    function Node(code, name, childs) {\n        var self = this;\n        self.code = code;\n        self.name = name;\n        self.nodeText = self.code + ' ' + self.name;\n        self.childs = childs;\n        self.custom = 'Random' + new Date().getTime();\n    }\n    return Node;\n}());\n\nself.items1 = ko.observableArray([]);\nfor(let i = 0; i <= 2; i++) {\n    let level1 = new Node('0000' + i, '\u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8  v\u30B5\u30FC\u30D3\u30B9\u90E8  \u30B5\u30FC\u30D3\u30B9\u90E8\u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8\u30B5\u30FC\u30D3\u30B9\u90E8 \u30B5\u30FC\u30D3\u30B9\u90E8\u30B5\u30FC\u30D3\u30B9\u90E8' + i, []);\n    for(let j = 1; j <= 2; j++) {\n        let ij = i + \"\" + j;\n        let level2 = new Node('0000' + ij, '\u30B5\u30FC\u30D3\u30B9\u90E8' + ij, []);\n        level1.childs.push(level2);\n        for(let k = 1; k <= 2; k++) {\n            let  ijk = ij + \"\" + k;\n            let level3 = new Node('0000' + ijk, '\u30B5\u30FC\u30D3\u30B9\u90E8' + ijk, []);\n            level2.childs.push(level3);\n            for(let l = 1; l <= 2; l++) {\n                let  ijkl = ijk + \"\" + l;\n                let level4 = new Node('0000' + ijkl, '\u30B5\u30FC\u30D3\u30B9\u90E8' + ijkl, []);\n                level3.childs.push(level4);\n                for(let n = 1; n <= 2; n++) {\n                    let  ijkln = ijkl + \"\" + n;\n                    let level5 = new Node('0000' + ijkln, '\u30B5\u30FC\u30D3\u30B9\u90E8' + ijkln, []);\n                    level4.childs.push(level5);\n                }\n            }\n        }   \n    }\n    self.items1.push(level1);\n}\nself.items2 = ko.observableArray(self.items1());\nself.selectedCode = ko.observableArray([]);\nself.singleSelectedCode = ko.observable(null);\nself.index = 0;\nself.columns = ko.observableArray([{ headerText: \"Item Code\", width: \"250px\", key: 'code', dataType: \"string\", hidden: false },\n{ headerText: \"Item Text\", key: 'nodeText', width: \"200px\", dataType: \"string\" }]);\nself.columns2 = ko.observableArray([{ headerText: \"Item Code\", width: \"250px\", key: 'code', dataType: \"string\", hidden: false },\n{ headerText: \"Item Text\", key: 'nodeText', width: \"250px\", dataType: \"string\" },\n{ headerText: \"Item Auto Generated Field\", key: 'custom', width: \"200px\", dataType: \"string\" }]);\nScreenModel.prototype.resetSelection = function () {\n    var self = this;\n    self.items1([new Node('0001', '\u30B5\u30FC\u30D3\u30B9\u90E8', [\n            new Node('0001-1', '\u30B5\u30FC\u30D3\u30B9\u90E81', []),\n            new Node('0001-2', '\u30B5\u30FC\u30D3\u30B9\u90E82', []),\n            new Node('0001-3', '\u30B5\u30FC\u30D3\u30B9\u90E83', [])\n        ]), new Node('0002', '\u958B\u767A\u90E8', [])]);\n    self.items2(self.items1());\n    self.singleSelectedCode('0002');\n    self.selectedCode(['0001-1', '0002']);\n};\nScreenModel.prototype.changeDataSource = function () {\n    var self = this;\n    var i = 0;\n    var newArrays = new Array();\n    while (i < 50) {\n        self.index++;\n        i++;\n        newArrays.push(new Node(self.index.toString(), 'Name ' + self.index.toString(), []));\n    }\n    ;\n    self.items1(newArrays);\n    self.items2(newArrays);\n};");
    template.sample["ntsSwapList"] = new template.Control("スワップリスト", 36, "<div data-bind=\"ntsCheckBox: { checked: disableMoveButton, text: 'Disable Move Button' }\"></div>\n<div>\n    <div style=\"display: inline-block;\">\n        <div id=\"swap-list\"\n            data-bind=\"ntsSwapList: {\n            showSearchBox: { showLeft : true, showRight: true},\n            height: 300,\n            dataSource: itemsSwap,\n            disableMoveButton: disableMoveButton,\n            primaryKey: 'code',\n            enableRowNumbering: false,\n            columns: columns,\n            value: currentCodeListSwap,\n            searchMode: 'filter',\n            searchCriterion: ['code'],\n            draggable: true,\n            leftSearchBoxText: '\u30B3\u30FC\u30C9\u3067\u691C\u7D22\u30FB\u30FB\u30FB',\n            rightSearchBoxText: '\u30B3\u30FC\u30C9\u3067\u691C\u7D22\u30FB\u30FB\u30FB',\n            multipleDrag: { left: true, right: false },\n            innerDrag: { left: false, right: true },\n            outerDrag: { left: true, right: true },\n            itemsLimit: { left: 10000, right: 10 },\n            beforeMoveLeft: beforeLeft,\n            beforeMoveRight: beforeRight,\n            beforeAllLeft: beforeAllL,\n            beforeAllRight: beforeAllR,\n            afterMoveLeft: afterLeft,\n            afterMoveRight: afterRight,\n            afterAllLeft: afterAllL,\n            afterAllRight: afterAllR\n        }\"></div>\n    </div>\n    <div id=\"up-down\"\n        data-bind=\"ntsUpDown: {\n                targetSource: currentCodeListSwap,\n                primaryKey: 'code',\n                comId: '#swap-list',\n                type: 'swap',\n                swapTarget: 'right'\n            }, visible: disableMoveButton\"></div>\n</div>\n<button id=\"bindSource\" type=\"button\" data-bind=\"click: bindSource\">Bind</button>\n<button id=\"check\" type=\"button\">Check</button>\n<button data-bind=\"click: remove\">Remove</button>", "var ItemModel = (function () {\n    function ItemModel(code, name, description) {\n        this.code = code;\n        this.name = name;\n        this.description = description;\n        this.deletable = code % 3 === 0;\n    }\n    return ItemModel;\n}());\n\nself.itemsSwap = ko.observableArray([]);\nself.disableMoveButton = ko.observable(false);\nvar array = [];\nself.itemsSwap(array);\n\nself.columns = ko.observableArray([\n    { headerText: '\u30B3\u30FC\u30C9', key: 'code', width: 100 },\n    { headerText: '\u540D\u79F0', key: 'name', width: 150 }\n]);\nself.leftColumns = ko.observableArray([\n    { headerText: '\u30B3\u30FC\u30C9', key: 'code', width: 200 }\n]);\n\nlet template = '${name} {{if ${code} == 3 || ${code} == 9}} <button class=\"setting\" onclick=\"openDlg(${code})\" data-code=\"${code}\" style=\"margin-left: 20px;\">\u8A2D\u5B9A</button> {{/if}}';\nself.rightColumns = ko.observableArray([\n    { headerText: '\u30B3\u30FC\u30C9', key: 'code', width: 100 },\n    { headerText: '\u540D\u79F0', key: 'name', width: 150, template: template }\n]);\nvar x = [];\nself.currentCodeListSwap = ko.observableArray(x);\nself.test = ko.observableArray([]);\nScreenModel.prototype.remove = function () {\n    this.itemsSwap.shift();\n};\nScreenModel.prototype.bindSource = function () {\n    var self = this;\n    var array = [];\n    for (var i = 0; i < 10000; i++) {\n        array.push(new ItemModel(i, '\u57FA\u672C\u7D66', \"description\"));\n    }\n    self.itemsSwap(array);\n};\nScreenModel.prototype.beforeLeft = function (toRight, oldSource, newI) {\n    \n};\nScreenModel.prototype.beforeRight = function (toRight, oldSource, newI) {\n    \n};\nScreenModel.prototype.beforeAllL = function (toRight, oldSource, newI) {\n    \n};\nScreenModel.prototype.beforeAllR = function (toRight, oldSource, newI) {\n    \n};\nScreenModel.prototype.afterLeft = function (toRight, oldSource, newI) {\n    \n};\nScreenModel.prototype.afterRight = function (toRight, oldSource, newI) {\n    \n};\nScreenModel.prototype.afterAllL = function (toRight, oldSource, newI) {\n    \n};\nScreenModel.prototype.afterAllR = function (toRight, oldSource, newI) {\n    \n};\n\nvar openDlg = function (code) {\n    alert(code);\n};");
})(template || (template = {}));
//# sourceMappingURL=template_grid.js.map