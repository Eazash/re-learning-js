var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }
    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            ID = new Date().toISOString().split('.')[0];
            console.log(ID)

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },
        testing: function () {
            console.log(data)
        }
    }
})();

var UIController = (function () {
    var DOMStrings = {
        type: '.add_type',
        dscrpt: '.add_description',
        value: '.add_value',
        btn: '.add_btn'
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.type).value,
                description: document.querySelector(DOMStrings.dscrpt).value,
                value: document.querySelector(DOMStrings.value).value
            };
        },
        getDOMStrings: function () { return DOMStrings; }
    }
})();

var controller = (function (budgetCtrl, UICtrl) {
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.btn).addEventListener('click', ctrlAddItem);
        document.querySelector(DOM.value).addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    }
    var ctrlAddItem = function () {
        var input, newItem;
        //get field input data
        input = UICtrl.getInput();

        //add item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testing();
        //add new item t9o the ui
        //calculate budget
        //display budget
        // console.log('done');
    }
    return {
        init: function () {
            console.log("App running")
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();