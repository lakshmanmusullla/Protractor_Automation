describe('First Spec file in Angular JS Application',function(){
    it('should  perform the following action', function () {
        browser.get('https://angularjs.org');
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));

        //verifying the result
        expect(completedAmount.count()).toEqual(2);

    });
});