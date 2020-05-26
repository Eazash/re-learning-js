var budgetController = (function () {
    //some code
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
        //get field input data
        var input = UICtrl.getInput();
        console.log(input);

        //add item to the budget controller
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