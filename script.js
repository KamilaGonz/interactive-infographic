let pagesCopied = 0;
let bookProgress = 0;

function copyPage() {
    pagesCopied++;

    const result = document.getElementById("copyResult");

    if (pagesCopied < 5) {
        result.innerHTML = `
            <strong>Page ${pagesCopied} copied.</strong>
            <p>Keep copying... this takes time!</p>
        `;
    } else {
        result.innerHTML = `
            <strong>5 pages copied.</strong>
            <p>Imagine doing this for an entire book.</p>
        `;
    }
}

function finishBook() {
    const result = document.getElementById("bookResult");

    if (bookProgress < 4) {
        bookProgress++;

        const messages = [
            "You finished another section...",
            "Still copying...",
            "Almost there...",
            "You finished the book!"
        ];

        result.innerHTML = `
            <strong>${messages[bookProgress - 1]}</strong>
        `;
    } else {
        result.innerHTML = `
            <strong>Book completed.</strong>
            <p>One handwritten book could take months to reproduce.</p>
        `;
    }
}

let printedCopies = 0;

function printCopy() {
    printedCopies++;

    const result = document.getElementById("printResult");

    result.innerHTML = `
        <strong>Copy ${printedCopies} printed.</strong>
        <p>
            The same text can now be reproduced much faster
            than copying it by hand.
        </p>
    `;
}

function printMany() {
    const result = document.getElementById("printResult");

    printedCopies += 10;

    result.innerHTML = `
        <strong>${printedCopies} copies printed.</strong>
        <p>
            Printing allowed the same information to be
            reproduced on a much larger scale.
        </p>
    `;
}

let networkCount = 0;

function spreadIdea() {
    networkCount++;

    const result = document.getElementById("networkResult");

    if (networkCount === 1) {
        result.innerHTML = `
            <strong>The idea begins to spread.</strong>
            <p>
                One printed copy can now reach another person.
            </p>
        `;
    } else if (networkCount === 2) {
        result.innerHTML = `
            <strong>The network grows.</strong>
            <p>
                More people can encounter the same idea.
            </p>
        `;
    } else if (networkCount === 3) {
        result.innerHTML = `
            <strong>The idea travels farther.</strong>
            <p>
                Printed information can move beyond the
                person who originally created it.
            </p>
        `;
    } else {
        result.innerHTML = `
            <strong>The idea keeps spreading.</strong>
            <p>
                This is one of the major changes created by
                the printing press.
            </p>
        `;
    }
}

function resetNetwork() {
    networkCount = 0;

    const result = document.getElementById("networkResult");

    result.innerHTML = `
        <p>Start spreading an idea to see what happens.</p>
    `;
}

function changeAccess(value) {
    const result = document.getElementById("accessResult");

    if (value == 1) {
        result.innerHTML = `
            <strong>Limited access</strong>
            <p>
                Books were expensive and difficult to reproduce,
                so access to written knowledge was limited.
            </p>
        `;
    } else if (value == 2) {
        result.innerHTML = `
            <strong>Growing access</strong>
            <p>
                Printed materials could reach more people than
                handwritten copies could.
            </p>
        `;
    } else if (value == 3) {
        result.innerHTML = `
            <strong>Wider access</strong>
            <p>
                More copies meant more opportunities for people
                to encounter written ideas.
            </p>
        `;
    } else {
        result.innerHTML = `
            <strong>Information becomes easier to access.</strong>
            <p>
                The printing press helped move knowledge beyond
                the small groups who could previously control
                access to written materials.
            </p>
        `;
    }
}

function showInformation() {
    const result = document.getElementById("informationResult");

    result.innerHTML = `
        <div class="then-now-container">

            <div class="then-side">
                <h3>THEN</h3>
                <ul>
                    <li>Information was difficult to reproduce.</li>
                    <li>Books were expensive and time-consuming to make.</li>
                    <li>Knowledge spread more slowly.</li>
                </ul>
            </div>

            <div class="now-side">
                <h3>NOW</h3>
                <ul>
                    <li>Information can be reproduced instantly.</li>
                    <li>Millions of people can access the same information.</li>
                    <li>Ideas can spread around the world almost immediately.</li>
                </ul>
            </div>

        </div>
    `;

    revealInformationQuestion();
}

function revealInformationQuestion() {
    const question = document.getElementById("informationQuestion");

    if (question) {
        question.classList.remove("hidden");
    }
}

function showResponsibility() {
    const result = document.getElementById("informationResult");

    result.innerHTML = `
        <div class="responsibility-message">
            <strong>More access also means more responsibility.</strong>
            <p>
                When information becomes easier to spread,
                people also have to think about what information
                is accurate, trustworthy, and worth sharing.
            </p>
        </div>
    `;
}

const technologyData = {

    book: {
        title: "The Book",
        icon: "📖",
        text: `
            Printed books made it possible to reproduce and
            distribute the same information to many people.
        `
    },

    newspaper: {
        title: "The Newspaper",
        icon: "📰",
        text: `
            Newspapers allowed information and ideas to reach
            large audiences on a regular basis.
        `
    },

    internet: {
        title: "The Internet",
        icon: "🌐",
        text: `
            The internet dramatically increased the speed and
            scale at which information could be shared.
        `
    },

    ai: {
        title: "Artificial Intelligence",
        icon: "🤖",
        text: `
            AI can now generate, organize, and communicate
            information, creating new questions about how
            humans decide what to trust.
        `
    }

};

function selectTechnology(technology) {

    const data = technologyData[technology];

    if (!data) {
        return;
    }

    const result = document.getElementById("technologyResult");

    result.innerHTML = `
        <div class="technology-result">

            <div class="technology-icon">
                ${data.icon}
            </div>

            <h3>${data.title}</h3>

            <p>
                ${data.text}
            </p>

        </div>
    `;
}

function revealFinalQuestion() {

    const question =
        document.getElementById("finalQuestion");

    if (!question) {
        return;
    }

    question.classList.remove("hidden");
}

function chooseAnswer(answer) {

    const response =
        document.getElementById("finalResponse");

    if (!response) {
        return;
    }

    if (answer === "more") {

        response.innerHTML = `
            <strong>Better?</strong>

            <p>
                More information gives humans more possibilities,
                but it does not guarantee that the information is
                accurate, useful, or trustworthy.
            </p>
        `;

    } else if (answer === "responsibility") {

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

window.addEventListener("scroll", function () {

    const progressBar =
        document.getElementById("scrollProgress");

    if (!progressBar) {
        return;
    }

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";
});

document.addEventListener("DOMContentLoaded", function () {

    const finalResponse =
        document.getElementById("finalResponse");

    if (finalResponse) {
        finalResponse.classList.add("hidden");
    }

});
