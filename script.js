// ======================================================
// AXIOM
// HIGH-LEVEL PERSONAL TEST LAB
// ======================================================


// ======================================================
// CURRICULUM
// ======================================================

const curriculum = {

    Physics: {

        "Units & Measurements": [
            "Units and dimensions",
            "Dimensional analysis",
            "Significant figures",
            "Errors and uncertainty",
            "Measurements"
        ],

        "Motion in a Straight Line": [
            "Position and displacement",
            "Velocity",
            "Acceleration",
            "Graphs",
            "Relative motion"
        ],

        "Motion in a Plane": [
            "Vectors",
            "Projectile motion",
            "Relative velocity",
            "Uniform circular motion"
        ],

        "Laws of Motion": [
            "Newton's laws",
            "Free body diagrams",
            "Friction",
            "Tension",
            "Circular motion"
        ],

        "Work, Energy & Power": [
            "Work",
            "Kinetic energy",
            "Potential energy",
            "Work-energy theorem",
            "Power",
            "Conservation of energy"
        ],

        "System of Particles & Rotational Motion": [
            "Centre of mass",
            "Momentum",
            "Torque",
            "Angular momentum",
            "Moment of inertia",
            "Rolling motion"
        ],

        "Gravitation": [
            "Newton's law of gravitation",
            "Gravitational field",
            "Potential",
            "Escape velocity",
            "Satellites",
            "Orbital motion"
        ],

        "Properties of Bulk Matter": [
            "Elasticity",
            "Stress and strain",
            "Fluid pressure",
            "Viscosity",
            "Surface tension"
        ],

        "Thermodynamics": [
            "Zeroth law",
            "First law",
            "Thermodynamic processes",
            "Heat engines",
            "Entropy concepts"
        ],

        "Kinetic Theory": [
            "Ideal gas",
            "Molecular motion",
            "Pressure",
            "Temperature",
            "Degrees of freedom"
        ],

        "Oscillations": [
            "SHM",
            "Energy in SHM",
            "Spring systems",
            "Pendulum",
            "Time period"
        ],

        "Waves": [
            "Wave motion",
            "Superposition",
            "Standing waves",
            "Sound",
            "Doppler effect"
        ],

        "Mechanical Properties of Fluids": [
            "Pressure",
            "Continuity equation",
            "Bernoulli equation",
            "Viscosity",
            "Surface tension"
        ],

        "Mechanical Properties of Solids": [
            "Stress",
            "Strain",
            "Elastic moduli",
            "Elastic energy",
            "Material behaviour"
        ]

    },


    Chemistry: {

        "Some Basic Concepts of Chemistry": [
            "Mole concept",
            "Stoichiometry",
            "Limiting reagent",
            "Concentration",
            "Percentage composition"
        ],

        "Structure of Atom": [
            "Atomic models",
            "Bohr model",
            "Quantum numbers",
            "Electronic configuration",
            "Atomic spectra"
        ],

        "Classification of Elements & Periodicity": [
            "Periodic trends",
            "Atomic radius",
            "Ionisation energy",
            "Electron affinity",
            "Electronegativity"
        ],

        "Chemical Bonding & Molecular Structure": [
            "Lewis structures",
            "VSEPR",
            "Hybridisation",
            "Molecular orbital theory",
            "Bond order",
            "Hydrogen bonding"
        ],

        "Thermodynamics": [
            "System and surroundings",
            "Enthalpy",
            "Hess's law",
            "Entropy",
            "Gibbs energy"
        ],

        "Equilibrium": [
            "Chemical equilibrium",
            "Equilibrium constant",
            "Le Chatelier principle",
            "Ionic equilibrium",
            "pH",
            "Buffer systems"
        ],

        "Redox Reactions": [
            "Oxidation number",
            "Balancing redox equations",
            "Disproportionation",
            "Redox stoichiometry"
        ],

        "Organic Chemistry — Basic Principles & Techniques": [
            "IUPAC nomenclature",
            "Isomerism",
            "Electronic effects",
            "Reaction intermediates",
            "Mechanisms"
        ],

        "Hydrocarbons": [
            "Alkanes",
            "Alkenes",
            "Alkynes",
            "Aromatic hydrocarbons",
            "Reaction mechanisms"
        ]

    },


    Mathematics: {

        "Sets": [
            "Set operations",
            "Venn diagrams",
            "Intervals",
            "Power sets",
            "Cardinality"
        ],

        "Relations & Functions": [
            "Relations",
            "Functions",
            "Domain and range",
            "Composition",
            "Inverse functions"
        ],

        "Trigonometric Functions": [
            "Identities",
            "Equations",
            "Graphs",
            "Inverse trigonometry",
            "General solutions"
        ],

        "Principle of Mathematical Induction": [
            "Induction",
            "Divisibility",
            "Inequalities",
            "Series"
        ],

        "Complex Numbers & Quadratic Equations": [
            "Complex numbers",
            "Argand plane",
            "Modulus and argument",
            "Quadratic equations",
            "Roots"
        ],

        "Linear Inequalities": [
            "Linear inequalities",
            "Intervals",
            "Graphical solutions",
            "Systems of inequalities"
        ],

        "Permutations & Combinations": [
            "Fundamental principle",
            "Permutations",
            "Combinations",
            "Restrictions",
            "Circular arrangements"
        ],

        "Binomial Theorem": [
            "Expansion",
            "General term",
            "Middle terms",
            "Binomial coefficients",
            "Applications"
        ],

        "Sequences & Series": [
            "AP",
            "GP",
            "Special series",
            "Means",
            "Summation"
        ],

        "Straight Lines": [
            "Slope",
            "Equation of line",
            "Distance",
            "Angle between lines",
            "Family of lines"
        ],

        "Conic Sections": [
            "Circle",
            "Parabola",
            "Ellipse",
            "Hyperbola",
            "Tangents and normals"
        ],

        "Introduction to 3D Geometry": [
            "Coordinates",
            "Distance",
            "Section formula",
            "Direction ratios",
            "Direction cosines"
        ],

        "Limits & Derivatives": [
            "Limits",
            "Continuity",
            "Derivative",
            "Derivative rules",
            "Geometrical interpretation"
        ],

        "Statistics": [
            "Mean",
            "Variance",
            "Standard deviation",
            "Probability distributions",
            "Data interpretation"
        ]

    }

};


// ======================================================
// QUESTION BANK
// ======================================================
//
// Each question has:
// subject
// chapter
// topic
// bloom
// difficulty
// question
// options
// answer
// explanation
//
// Later this can be replaced/expanded by:
// JSON import
// database
// AI-generated questions
// ======================================================

const questionBank = [

    // =========================
    // PHYSICS
    // =========================

    {
        id: "PHY001",

        subject: "Physics",

        chapter: "Units & Measurements",

        topic: "Dimensional analysis",

        bloom: "Analyze",

        difficulty: "JEE Advanced",

        question:
            "A quantity X is defined by X = k m^a l^b F^c, where k is dimensionless, m is mass, l is length and F is force. If X has dimensions of time, which condition must hold?",

        options: [
            "a + c = 0, b + c = 0, -2c = 1",

            "a - c = 0, b - c = 1, 2c = 0",

            "a + c = 1, b + c = 1, -2c = 0",

            "a = b = c = 1"
        ],

        answer: 0,

        explanation:
            "Since F has dimensions ML T^-2, X has dimensions M^(a+c)L^(b+c)T^(-2c). For X to have dimensions T, the powers must be 0, 0 and 1 respectively."
    },


    {
        id: "PHY002",

        subject: "Physics",

        chapter: "Units & Measurements",

        topic: "Errors and uncertainty",

        bloom: "Apply",

        difficulty: "JEE Main",

        question:
            "A quantity X is calculated as X = A²B/C. The percentage uncertainties in A, B and C are 2%, 3% and 1%. What is the maximum percentage uncertainty in X?",

        options: [
            "4%",
            "6%",
            "8%",
            "10%"
        ],

        answer: 2,

        explanation:
            "For maximum percentage uncertainty, multiply each uncertainty by the absolute value of its power. Therefore 2(2%) + 3% + 1% = 8%."
    },


    {
        id: "PHY003",

        subject: "Physics",

        chapter: "Motion in a Straight Line",

        topic: "Graphs",

        bloom: "Analyze",

        difficulty: "JEE Advanced",

        question:
            "The velocity-time graph of a particle is a straight line with positive slope and crosses the velocity axis above the origin. Which statement must be true?",

        options: [
            "The acceleration is constant and positive",

            "The displacement is always positive",

            "The particle must move in a circle",

            "The acceleration continuously decreases"
        ],

        answer: 0,

        explanation:
            "The slope of a velocity-time graph represents acceleration. A straight line with positive slope therefore represents constant positive acceleration."
    },


    {
        id: "PHY004",

        subject: "Physics",

        chapter: "Laws of Motion",

        topic: "Friction",

        bloom: "Analyze",

        difficulty: "JEE Advanced",

        question:
            "A block rests on a rough horizontal surface. A horizontal external force is gradually increased from zero. Before motion begins, how does static friction behave?",

        options: [
            "It remains equal to μsN at all times",

            "It remains zero",

            "It adjusts itself to oppose the applied force until its limiting value",

            "It always acts in the direction of the applied force"
        ],

        answer: 2,

        explanation:
            "Static friction is self-adjusting. Its magnitude equals the required opposing force until it reaches the limiting value μsN."
    },


    {
        id: "PHY005",

        subject: "Physics",

        chapter: "Work, Energy & Power",

        topic: "Work-energy theorem",

        bloom: "Evaluate",

        difficulty: "Olympiad",

        question:
            "A particle moves between two points under several forces. Some forces are conservative and some are not. Which statement is always valid?",

        options: [
            "Only conservative forces can change kinetic energy",

            "Net work done by all forces equals change in kinetic energy",

            "Potential energy always increases",

            "Non-conservative forces always do negative work"
        ],

        answer: 1,

        explanation:
            "The work-energy theorem states that the net work done by all forces equals the change in kinetic energy, regardless of whether individual forces are conservative."
    },


    // =========================
    // CHEMISTRY
    // =========================

    {
        id: "CHEM001",

        subject: "Chemistry",

        chapter: "Some Basic Concepts of Chemistry",

        topic: "Limiting reagent",

        bloom: "Analyze",

        difficulty: "JEE Advanced",

        question:
            "For a reaction A + 2B → C, equal numbers of moles of A and B are initially present. Which reactant limits the formation of C?",

        options: [
            "A",

            "B",

            "Both are consumed completely",

            "It cannot be determined"
        ],

        answer: 1,

        explanation:
            "One mole of A requires two moles of B. With equal initial amounts, B is insufficient and therefore becomes the limiting reagent."
    },


    {
        id: "CHEM002",

        subject: "Chemistry",

        chapter: "Structure of Atom",

        topic: "Quantum numbers",

        bloom: "Analyze",

        difficulty: "JEE Advanced",

        question:
            "Which set of quantum numbers is physically impossible for an electron?",

        options: [
            "n = 3, l = 2, m = 1",

            "n = 2, l = 1, m = 0",

            "n = 3, l = 3, m = 0",

            "n = 4, l = 0, m = 0"
        ],

        answer: 2,

        explanation:
            "For a given principal quantum number n, l can range from 0 to n−1. For n = 3, l can only be 0, 1 or 2."
    },


    {
        id: "CHEM003",

        subject: "Chemistry",

        chapter: "Chemical Bonding & Molecular Structure",

        topic: "Molecular orbital theory",

        bloom: "Evaluate",

        difficulty: "JEE Advanced",

        question:
            "A molecule has a bond order of zero according to molecular orbital theory. What does this imply about its stability under the simple MO model?",

        options: [
            "It is highly stable",

            "It is unstable relative to separated atoms",

            "It must be paramagnetic",

            "It must contain a triple bond"
        ],

        answer: 1,

        explanation:
            "Bond order zero means the bonding and antibonding contributions cancel, so the simple MO model predicts no net stabilization."
    },


    {
        id: "CHEM004",

        subject: "Chemistry",

        chapter: "Thermodynamics",

        topic: "Hess's law",

        bloom: "Apply",

        difficulty: "JEE Main",

        question:
            "Why can enthalpy changes from several hypothetical reaction steps be added to obtain the enthalpy change of an overall reaction?",

        options: [
            "Because enthalpy is a state function",

            "Because every reaction releases heat",

            "Because temperature never matters",

            "Because entropy is always zero"
        ],

        answer: 0,

        explanation:
            "Enthalpy is a state function, so its change depends only on the initial and final states and is independent of the path."
    },


    {
        id: "CHEM005",

        subject: "Chemistry",

        chapter: "Equilibrium",

        topic: "Le Chatelier principle",

        bloom: "Analyze",

        difficulty: "JEE Advanced",

        question:
            "For a gaseous equilibrium, increasing pressure by decreasing volume shifts equilibrium toward the side having fewer moles of gas, provided temperature remains constant. Why?",

        options: [
            "The equilibrium constant changes immediately",

            "The system responds to reduce the imposed concentration/pressure disturbance",

            "All gases become liquids",

            "The forward reaction necessarily becomes faster forever"
        ],

        answer: 1,

        explanation:
            "The equilibrium system responds to an imposed disturbance. Decreasing volume increases pressure, so the equilibrium shifts toward the side with fewer gaseous moles."
    },


    // =========================
    // MATHEMATICS
    // =========================

    {
        id: "MAT001",

        subject: "Mathematics",

        chapter: "Sets",

        topic: "Cardinality",

        bloom: "Analyze",

        difficulty: "JEE Advanced",

        question:
            "If |A| = 20, |B| = 15 and |A ∩ B| = 7, what is |A ∪ B|?",

        options: [
            "28",

            "35",

            "42",

            "8"
        ],

        answer: 0,

        explanation:
            "Using |A ∪ B| = |A| + |B| − |A ∩ B|, we obtain 20 + 15 − 7 = 28."
    },


    {
        id: "MAT002",

        subject: "Mathematics",

        chapter: "Relations & Functions",

        topic: "Functions",

        bloom: "Evaluate",

        difficulty: "JEE Advanced",

        question:
            "A function f is such that f(f(x)) = x for every x in its domain. What property must f have?",

        options: [
            "It must be constant",

            "It must be its own inverse",

            "It cannot be one-to-one",

            "Its range must contain only zero"
        ],

        answer: 1,

        explanation:
            "The equation f(f(x)) = x means applying f twice returns the original input. Therefore f⁻¹ = f, wherever the inverse is defined."
    },


    {
        id: "MAT003",

        subject: "Mathematics",

        chapter: "Trigonometric Functions",

        topic: "Trigonometric equations",

        bloom: "Analyze",

        difficulty: "JEE Advanced",

        question:
            "When solving a trigonometric equation, why must domain restrictions be checked after algebraic manipulation?",

        options: [
            "Because algebraic transformations can introduce values that do not satisfy the original equation",

            "Because trigonometric functions have no domains",

            "Because every equation has infinitely many solutions",

            "Because sine and cosine are identical"
        ],

        answer: 0,

        explanation:
            "Transformations such as squaring or division can introduce extraneous solutions or remove valid cases. Solutions must therefore be checked in the original equation."
    },


    {
        id: "MAT004",

        subject: "Mathematics",

        chapter: "Complex Numbers & Quadratic Equations",

        topic: "Complex numbers",

        bloom: "Apply",

        difficulty: "JEE Main",

        question:
            "If z = a + ib, what is |z|²?",

        options: [
            "a + b",

            "a² + b²",

            "a² − b²",

            "2ab"
        ],

        answer: 1,

        explanation:
            "|z| = √(a² + b²), therefore |z|² = a² + b²."
    },


    {
        id: "MAT005",

        subject: "Mathematics",

        chapter: "Permutations & Combinations",

        topic: "Restrictions",

        bloom: "Analyze",

        difficulty: "Olympiad",

        question:
            "When counting arrangements subject to restrictions, why is direct multiplication of the number of choices at each position sometimes invalid?",

        options: [
            "Because choices may depend on previous positions",

            "Because permutations never use multiplication",

            "Because restrictions always disappear",

            "Because all arrangements are identical"
        ],

        answer: 0,

        explanation:
            "The multiplication principle requires correctly accounting for how earlier choices affect later possibilities. Restrictions can make the number of choices position-dependent."
    }

];


// ======================================================
// APPLICATION STATE
// ======================================================

const STORAGE_KEY = "axiomAttempts";

let attempts =
    JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];


let currentQuestions = [];

let timerInterval = null;

let elapsedSeconds = 0;


// ======================================================
// DATE
// ======================================================

document.getElementById("today").innerText =
    new Date().toLocaleDateString(
        "en-IN",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );


// ======================================================
// SUBJECT → CHAPTER
// ======================================================

const subjectSelect =
    document.getElementById("subject");

const chapterSelect =
    document.getElementById("chapter");

const topicSelect =
    document.getElementById("topic");


function updateChapters() {

    const subject =
        subjectSelect.value;

    chapterSelect.innerHTML = "";

    Object.keys(
        curriculum[subject]
    ).forEach(
        chapter => {

            const option =
                document.createElement("option");

            option.value =
                chapter;

            option.textContent =
                chapter;

            chapterSelect.appendChild(option);

        }
    );

    updateTopics();

}


function updateTopics() {

    const subject =
        subjectSelect.value;

    const chapter =
        chapterSelect.value;

    topicSelect.innerHTML = "";

    const topics =
        curriculum[subject][chapter];


    const allOption =
        document.createElement("option");

    allOption.value = "All";

    allOption.textContent =
        "All topics";

    topicSelect.appendChild(
        allOption
    );


    topics.forEach(
        topic => {

            const option =
                document.createElement("option");

            option.value =
                topic;

            option.textContent =
                topic;

            topicSelect.appendChild(
                option
            );

        }
    );

}


subjectSelect.addEventListener(
    "change",
    updateChapters
);


chapterSelect.addEventListener(
    "change",
    updateTopics
);


updateChapters();


// ======================================================
// START TEST
// ======================================================

function startTest() {

    const subject =
        subjectSelect.value;

    const chapter =
        chapterSelect.value;

    const topic =
        topicSelect.value;

    const difficulty =
        document.getElementById(
            "difficulty"
        ).value;

    const bloom =
        document.getElementById(
            "bloom"
        ).value;

    const count =
        Number(
            document.getElementById(
                "questionCount"
            ).value
        );


    let available =
        questionBank.filter(
            question => {

                if (
                    question.subject !== subject
                ) {
                    return false;
                }


                if (
                    question.chapter !== chapter
                ) {
                    return false;
                }


                if (
                    topic !== "All" &&
                    question.topic !== topic
                ) {
                    return false;
                }


                if (
                    difficulty !== "Mixed" &&
                    question.difficulty !== difficulty
                ) {
                    return false;
                }


                if (
                    bloom !== "Mixed" &&
                    question.bloom !== bloom
                ) {
                    return false;
                }


                return true;

            }
        );


    /*
        If there are not enough exact matches,
        don't silently fill the test with
        unrelated questions.

        Instead, broaden only the Bloom/difficulty
        filter while keeping subject + chapter/topic.
    */

    if (
        available.length < count
    ) {

        available =
            questionBank.filter(
                question => {

                    if (
                        question.subject !== subject
                    ) {
                        return false;
                    }


                    if (
                        question.chapter !== chapter
                    ) {
                        return false;
                    }


                    if (
                        topic !== "All" &&
                        question.topic !== topic
                    ) {
                        return false;
                    }


                    return true;

                }
            );

    }


    if (
        available.length === 0
    ) {

        alert(
            "Axiom doesn't have enough questions in this part of the bank yet. This is intentional — it will not fake a high-level test."
        );

        return;

    }


    currentQuestions =
        shuffle(
            [...available]
        ).slice(
            0,
            Math.min(
                count,
                available.length
            )
        );


    document.getElementById(
        "testSection"
    ).classList.remove(
        "hidden"
    );


    document.getElementById(
        "resultSection"
    ).classList.add(
        "hidden"
    );


    document.getElementById(
        "testTitle"
    ).innerText =
        `${subject} • ${chapter}`;


    renderQuestions();

    startTimer();


    document.getElementById(
        "testSection"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// ======================================================
// SHUFFLE
// ======================================================

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }

    return array;

}


// ======================================================
// RENDER QUESTIONS
// ======================================================

function renderQuestions() {

    const container =
        document.getElementById(
            "questions"
        );

    container.innerHTML = "";


    currentQuestions.forEach(
        (question, index) => {

            const box =
                document.createElement(
                    "div"
                );

            box.className =
                "question";


            box.innerHTML = `

                <div class="question-number">
                    QUESTION ${index + 1}
                </div>

                <div class="tags">

                    <span class="tag">
                        ${question.bloom}
                    </span>

                    <span class="tag">
                        ${question.difficulty}
                    </span>

                    <span class="tag">
                        ${question.topic}
                    </span>

                </div>

                <div class="question-text">
                    ${question.question}
                </div>

            `;


            question.options.forEach(
                (
                    option,
                    optionIndex
                ) => {

                    const label =
                        document.createElement(
                            "label"
                        );


                    label.className =
                        "option";


                    label.innerHTML = `

                        <input
                            type="radio"
                            name="question-${index}"
                            value="${optionIndex}"
                        >

                        ${option}

                    `;


                    box.appendChild(
                        label
                    );

                }
            );


            container.appendChild(
                box
            );

        }
    );

}


// ======================================================
// TIMER
// ======================================================

function startTimer() {

    clearInterval(
        timerInterval
    );


    elapsedSeconds = 0;


    timerInterval =
        setInterval(
            () => {

                elapsedSeconds++;


                const minutes =
                    Math.floor(
                        elapsedSeconds / 60
                    );


                const seconds =
                    elapsedSeconds % 60;


                document.getElementById(
                    "timer"
                ).innerText =
                    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

            },
            1000
        );

}


// ======================================================
// SUBMIT TEST
// ======================================================

function submitTest() {

    if (
        currentQuestions.length === 0
    ) {
        return;
    }


    clearInterval(
        timerInterval
    );


    let correct = 0;

    let wrong = 0;

    let skipped = 0;


    const bloomStats = {};

    const difficultyStats = {};

    const topicStats = {};

    const review = [];


    currentQuestions.forEach(
        (
            question,
            index
        ) => {

            const selected =
                document.querySelector(
                    `input[name="question-${index}"]:checked`
                );


            let status;


            if (!selected) {

                skipped++;

                status = "skipped";

            }

            else if (
                Number(
                    selected.value
                ) === question.answer
            ) {

                correct++;

                status = "correct";

            }

            else {

                wrong++;

                status = "wrong";

            }


            addAnalysis(
                bloomStats,
                question.bloom,
                status
            );


            addAnalysis(
                difficultyStats,
                question.difficulty,
                status
            );


            addAnalysis(
                topicStats,
                question.topic,
                status
            );


            review.push({

                question: question,

                selected:
                    selected
                        ? Number(
                            selected.value
                        )
                        : null,

                status: status

            });

        }
    );


    const total =
        currentQuestions.length;


    const percentage =
        Math.round(
            (correct / total) * 100
        );


    const attempt = {

        date:
            new Date().toISOString(),

        subject:
            currentQuestions[0].subject,

        chapter:
            currentQuestions[0].chapter,

        total:
            total,

        correct:
            correct,

        wrong:
            wrong,

        skipped:
            skipped,

        percentage:
            percentage,

        seconds:
            elapsedSeconds

    };


    attempts.unshift(
        attempt
    );


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
            attempts
        )
    );


    showResults(
        correct,
        wrong,
        skipped,
        total,
        percentage,
        bloomStats,
        difficultyStats,
        topicStats,
        review
    );


    renderHistory();

}


// ======================================================
// ANALYSIS HELPER
// ======================================================

function addAnalysis(
    object,
    key,
    status
) {

    if (!object[key]) {

        object[key] = {

            total: 0,

            correct: 0

        };

    }


    object[key].total++;


    if (
        status === "correct"
    ) {

        object[key].correct++;

    }

}


// ======================================================
// SHOW RESULTS
// ======================================================

function showResults(
    correct,
    wrong,
    skipped,
    total,
    percentage,
    bloomStats,
    difficultyStats,
    topicStats,
    review
) {

    document.getElementById(
        "resultSection"
    ).classList.remove(
        "hidden"
    );


    document.getElementById(
        "score"
    ).innerText =
        `${correct}/${total}`;


    document.getElementById(
        "percentage"
    ).innerText =
        `${percentage}%`;


    document.getElementById(
        "correct"
    ).innerText =
        correct;


    document.getElementById(
        "wrong"
    ).innerText =
        wrong;


    document.getElementById(
        "skipped"
    ).innerText =
        skipped;


    document.getElementById(
        "timeTaken"
    ).innerText =
        formatTime(
            elapsedSeconds
        );


    renderAnalysis(
        "bloomAnalysis",
        bloomStats
    );


    renderAnalysis(
        "difficultyAnalysis",
        difficultyStats
    );


    renderAnalysis(
        "topicAnalysis",
        topicStats
    );


    renderReview(
        review
    );


    document.getElementById(
        "resultSection"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// ======================================================
// ANALYSIS DISPLAY
// ======================================================

function renderAnalysis(
    elementId,
    stats
) {

    const container =
        document.getElementById(
            elementId
        );


    container.innerHTML = "";


    Object.entries(
        stats
    ).forEach(
        (
            [
                name,
                data
            ]
        ) => {

            const percentage =
                Math.round(
                    (
                        data.correct /
                        data.total
                    ) * 100
                );


            let className =
                "good";


            if (
                percentage < 60
            ) {

                className =
                    "weak";

            }

            else if (
                percentage < 80
            ) {

                className =
                    "warning";

            }


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "analysis-item";


            row.innerHTML = `

                <strong>
                    ${name}
                </strong>

                <span class="${className}">
                    ${data.correct}/${data.total}
                    —
                    ${percentage}%
                </span>

            `;


            container.appendChild(
                row
            );

        }
    );

}


// ======================================================
// REVIEW
// ======================================================

function renderReview(
    review
) {

    const container =
        document.getElementById(
            "review"
        );


    container.innerHTML = "";


    review.forEach(
        (
            item,
            index
        ) => {

            const question =
                item.question;


            const yourAnswer =
                item.selected === null
                    ? "Skipped"
                    : question.options[
                        item.selected
                    ];


            const correctAnswer =
                question.options[
                    question.answer
                ];


            const box =
                document.createElement(
                    "div"
                );


            box.className =
                `review-item ${
                    item.status === "correct"
                        ? "correct"
                        : "wrong"
                }`;


            box.innerHTML = `

                <strong>
                    Question ${index + 1}
                </strong>

                <p class="review-question">
                    ${question.question}
                </p>

                <p class="answer-line">
                    <strong>Your answer:</strong>
                    ${yourAnswer}
                </p>

                <p class="answer-line">
                    <strong>Correct answer:</strong>
                    ${correctAnswer}
                </p>

                <p class="explanation">
                    ${question.explanation}
                </p>

            `;


            container.appendChild(
                box
            );

        }
    );

}


// ======================================================
// FORMAT TIME
// ======================================================

function formatTime(
    seconds
) {

    const minutes =
        Math.floor(
            seconds / 60
        );


    const remaining =
        seconds % 60;


    if (
        minutes === 0
    ) {

        return `${remaining}s`;

    }


    return `${minutes}m ${remaining}s`;

}


// ======================================================
// HISTORY
// ======================================================

function renderHistory() {

    const container =
        document.getElementById(
            "history"
        );


    if (
        attempts.length === 0
    ) {

        container.innerHTML =
            `
                <p class="description">
                    No attempts yet.
                    Your first test will appear here.
                </p>
            `;

        return;

    }


    container.innerHTML = "";


    attempts
        .slice(0, 15)
        .forEach(
            attempt => {

                const date =
                    new Date(
                        attempt.date
                    );


                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "history-item";


                item.innerHTML = `

                    <div class="history-title">

                        ${attempt.subject}
                        •
                        ${attempt.chapter}

                    </div>


                    <div class="history-meta">

                        📅
                        ${date.toLocaleString(
                            "en-IN"
                        )}

                        <br>

                        🎯
                        ${attempt.correct}/${attempt.total}

                        •
                        ${attempt.percentage}%

                        •
                        ⏱️
                        ${formatTime(
                            attempt.seconds
                        )}

                    </div>

                `;


                container.appendChild(
                    item
                );

            }
        );

}


renderHistory();


// ======================================================
// NEW TEST
// ======================================================

function newTest() {

    document.getElementById(
        "resultSection"
    ).classList.add(
        "hidden"
    );


    document.getElementById(
        "testSection"
    ).classList.add(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}