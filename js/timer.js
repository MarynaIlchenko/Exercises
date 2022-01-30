class Timer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.finalDate = targetDate;
        this.creatingFaceClock();
        this.creatingTitleDate();
        this.timerStart();
    }

    getDataForTimer() {
        const time = this.finalDate - Date.now();
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        return { time, days, hours, minutes, seconds };
    }

    creatingFaceClock() {
        const faceClock = document.querySelector("#timer-1");
        const daysSpan = document.querySelector('[data-value ="days"]');
        const hoursSpan = document.querySelector('[data-value ="hours"]');
        const minsSpan = document.querySelector('[data-value ="mins"]');
        const secsSpan = document.querySelector('[data-value ="seconds"]');

        faceClock.firstElementChild.setAttribute("style", "background-color: rgb(255, 102, 102)");
        faceClock.firstElementChild.nextElementSibling.setAttribute("style", "background-color: rgb(255, 255, 102)");
        faceClock.lastElementChild.previousElementSibling.previousElementSibling.setAttribute(
            "style",
            "background-color: rgb(0,255,0)"
        );
        faceClock.lastElementChild.previousElementSibling.setAttribute(
            "style",
            "background-color: rgb(102,102,255)"
        );
        daysSpan.textContent = String(this.getDataForTimer().days).padStart(2, "0");
        hoursSpan.textContent = String(this.getDataForTimer().hours).padStart(2, "0");
        minsSpan.textContent = String(this.getDataForTimer().minutes).padStart(2, "0");
        secsSpan.textContent = String(this.getDataForTimer().seconds).padStart(2, "0");
    }
    creatingTitleDate() {
        const titleTargetDate = document.querySelector(".title");
        if (this.finalDate <= new Date()) {
            titleTargetDate.textContent = "This is the end";
        } else {
            titleTargetDate.textContent = `We are waiting for ${this.finalDate.toDateString()}`;
        }
    }
    timerStart() {
        const deadLine = Date.parse(this.finalDate) <= Date.parse(new Date());
        this.startForTimer = setInterval(() => {
            if (deadLine) {
                clearInterval(this.startForTimer);
                return;
            }
            this.creatingFaceClock();
        }, 1000);
    }
}
    const timer = new Timer({
        selector: '#timer-1',
        targetDate: new Date('31 Dec 2022'),
    });



