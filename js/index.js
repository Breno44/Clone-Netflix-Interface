class Accordian {
    constructor (accordianListQuestions) {
        this.accordianListQuestions = document.querySelectorAll
        (accordianListQuestions); 
        this.activeItemClass = "active"
    }

    toggleAccordian(item) {
        item.classList.toggle(this.activeItemClass);
        item.nextElementSibling.classList.toggle(this.activeItemClass);
    }

    addAccordionEvent() {
        this.accordianListQuestions.forEach((question) => {
            question.addEventListener("click", () => this.toggleAccordian(question))
        });
    }

    init() {
        if (this.accordianListQuestions.length) {
            this.addAccordionEvent();
        }

        return this;
    }
}

const accordian = new Accordian(".faq-question");
accordian.init();