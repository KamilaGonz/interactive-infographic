function startJourney() {
    document.getElementById("journey").scrollIntoView({
        behavior: "smooth"
    });
}

let copiedPages = 0;

function copyPage() {
    if (copiedPages >= 30) {
        document.getElementById("copyMessage").textContent =
            "You've copied enough pages to see the problem. Imagine doing this for an entire book.";
        return;
    }

    copiedPages++;

    const page = document.createElement("div");

    page.className = "book-page";
    page.textContent = "✎";

    document.getElementById("bookPages").appendChild(page);

    document.getElementById("pageCount").textContent =
        `${copiedPages} ${copiedPages === 1 ? "page" : "pages"} copied`;

    if (copiedPages < 5) {
        document.getElementById("copyMessage").textContent =
            "Another page copied... and you still have a lot left.";
    } else if (copiedPages < 15) {
        document.getElementById("copyMessage").textContent =
            "This is taking a while. Every additional copy requires more time.";
    } else {
        document.getElementById("copyMessage").textContent =
            "Imagine doing this hundreds of times.";
    }
}

function finishBook() {
    const finished = document.getElementById("bookFinished");

    finished.classList.remove("hidden");

    finished.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

let printedCopies = 0;

function printCopy() {
    printedCopies++;

    const page = document.createElement("div");

    page.className = "printed-page";

    document.getElementById("printedPages").appendChild(page);

    document.getElementById("printCount").textContent =
        printedCopies;

    updatePrintMessage();
}

function printMany() {
    for (let i = 0; i < 25; i++) {
        printedCopies++;

        const page = document.createElement("div");

        page.className = "printed-page";

        document.getElementById("printedPages").appendChild(page);
    }

    document.getElementById("printCount").textContent =
        printedCopies;

    updatePrintMessage();
}

function updatePrintMessage() {
    const message = document.getElementById("printMessage");

    if (printedCopies === 1) {
        message.textContent =
            "One copy. But now you can make another without starting from scratch.";
    } else if (printedCopies < 10) {
        message.textContent =
            "The same text is being reproduced again and again.";
    } else if (printedCopies < 50) {
        message.textContent =
            "One idea is becoming many physical copies.";
    } else {
        message.textContent =
            "This is the power of reproduction at scale.";
    }
}

let peopleReached = 1;

function spreadIdea() {
    const network = document.getElementById("ideaNetwork");

    let amountToAdd = 0;

    if (peopleReached < 5) {
        amountToAdd = 2;
    } else if (peopleReached < 15) {
        amountToAdd = 5;
    } else {
        amountToAdd = 10;
    }

    for (let i = 0; i < amountToAdd; i++) {
        const person = document.createElement("div");

        person.className = "person";
        person.textContent = "👤";

        network.appendChild(person);
    }

    peopleReached += amountToAdd;

    document.getElementById("peopleReached").textContent =
        peopleReached;

    updateSpreadMessage();

    if (peopleReached >= 20) {
        document
            .getElementById("spreadConclusion")
            .classList.remove("hidden");
    }
}

function updateSpreadMessage() {
    const message = document.getElementById("spreadMessage");

    if (peopleReached === 1) {
        message.textContent =
            "One person has an idea.";
    } else if (peopleReached < 10) {
        message.textContent =
            "The idea is beginning to spread.";
    } else if (peopleReached < 20) {
        message.textContent =
            "More people are receiving the same information.";
    } else {
        message.textContent =
            "The idea has become much harder to contain.";
    }
}

function resetNetwork() {
    const network = document.getElementById("ideaNetwork");

    network.innerHTML =
        '<div class="person main-person">💡</div>';

    peopleReached = 1;

    document.getElementById("peopleReached").textContent = "1";

    document.getElementById("spreadMessage").textContent =
        "One person has an idea.";

    document
        .getElementById("spreadConclusion")
        .classList.add("hidden");
}

function changeAccess(value) {
    const peopleContainer =
        document.getElementById("accessPeople");

    const title =
        document.getElementById("accessTitle");

    const description =
        document.getElementById("accessDescription");

    peopleContainer.innerHTML = "";

    let numberOfPeople;

    if (value == 1) {
        numberOfPeople = 3;

        title.textContent =
            "One community";

        description.textContent =
            "Information may stay within a small group of people.";

    } else if (value == 2) {
        numberOfPeople = 12;

        title.textContent =
            "A region";

        description.textContent =
            "The same information can begin reaching people beyond its original community.";

    } else if (value == 3) {
        numberOfPeople = 30;

        title.textContent =
            "A much larger audience";

        description.textContent =
            "Information can travel across cities, countries, and social groups.";

    } else {
        numberOfPeople = 50;

        title.textContent =
            "Global";

        description.textContent =
            "Information can potentially reach people across the world.";
    }

    for (let i = 0; i < numberOfPeople; i++) {
        const person = document.createElement("span");

        person.className = "access-person";
        person.textContent = "👤";

        peopleContainer.appendChild(person);
    }
}

function showInformation(type) {
    const display =
        document.getElementById("informationDisplay");

    const thenButton =
        document.getElementById("thenButton");

    const nowButton =
        document.getElementById("nowButton");

    if (type === "then") {
        thenButton.classList.add("active");
        nowButton.classList.remove("active");

        display.innerHTML = `
            <div class="info-icon">📜</div>

            <h3>Information was difficult to reproduce.</h3>

            <div class="info-points">
                <span>Expensive</span>
                <span>Slow</span>
                <span>Limited copies</span>
            </div>

            <p>
                Access to written knowledge was limited by the time,
                money, and labor required to reproduce it.
            </p>
        `;

    } else {
        thenButton.classList.remove("active");
        nowButton.classList.add("active");

        display.innerHTML = `
            <div class="info-icon">📱</div>

            <h3>Information is easier to access.</h3>

            <div class="info-points">
                <span>Fast</span>
                <span>Global</span>
                <span>Massive audiences</span>
            </div>

            <p>
                Today, information can move around the world almost
                instantly through digital technology.
            </p>
        `;
    }
}

function revealInformationQuestion() {
    document
        .getElementById("informationQuestion")
        .classList.remove("hidden");
}

function showResponsibility() {
    document
        .getElementById("responsibilityMessage")
        .classList.remove("hidden");
}

const technologyData = {
    book: {
        icon: "📖",
        title: "Books",
        text:
            "Information could be stored, preserved, and reproduced in physical form."
    },

    newspaper: {
        icon: "📰",
        title: "Newspapers",
        text:
            "Information could reach large audiences on a regular basis, helping create shared public conversations."
    },

    internet: {
        icon: "💻",
        title: "The Internet",
        text:
            "Information could travel globally almost instantly, making access faster and more widespread than ever."
    },

    ai: {
        icon: "🤖",
        title: "Artificial Intelligence",
        text:
            "Information can now be generated, organized, and personalized at a speed that creates a new relationship between humans and knowledge."
    }
};

function selectTechnology(type, button) {
    const display =
        document.getElementById("technologyDisplay");

    const data =
        technologyData[type];

    document
        .querySelectorAll(".technology-button")
        .forEach(function(btn) {
            btn.classList.remove("active");
        });

    button.classList.add("active");

    display.innerHTML = `
        <div class="technology-icon">${data.icon}</div>

        <h3>${data.title}</h3>

        <p>${data.text}</p>
    `;
}

function revealFinalQuestion() {
    const question =
        document.getElementById("finalQuestion");

    question.classList.remove("hidden");
}

function chooseAnswer(answer) {
    const response =
        document.getElementById("finalResponse");

    if (answer === "more") {
        response.innerHTML = `
            <strong>Better?</strong>

            <p>
                More information gives humans more possibilities,
                but it does not guarantee that the information is
                accurate, useful, or trustworthy.
            </p>
        `;
    } else {
        response.innerHTML = `
            <strong>More Responsibility</strong>

            <p>
                When information becomes easier to create and spread,
                humans have to decide what deserves to be believed,
                shared, and remembered.
            </p>
        `;
    }

    response.classList.remove("hidden");
}

window.addEventListener("scroll", function() {
    const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage =
        scrollHeight > 0
            ? (scrollTop / scrollHeight) * 100
            : 0;

    document.getElementById("progressBar").style.width =
        scrollPercentage + "%";
});

document.addEventListener("DOMContentLoaded", function() {
    changeAccess(1);

    const finalResponse =
        document.getElementById("finalResponse");

    if (finalResponse) {
        finalResponse.classList.add("hidden");
    }
});
