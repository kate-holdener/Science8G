const termsAndDefinitions = {
    "Phloem": "The vascular tissue through which food moves.",
    "Xylem": "Vascular tissue through which water and minerals move.",
    "Pollen": "Tiny structures that contain the cells that will later become sperm cells.",
    "Seed": "A structure that contains a young plant inside a protective covering.",
    "Embryo": "The young plant that develops from the zygote, or fertilized egg.",
    "Cotyledons": "The part of the seed where food is stored.",
    "Germination": "The process when the embryo grows and pushes out of the seed.",
    "Root Cap": "Protects the root from injury as the root grows through the soil.",
    "Cambium": "A layer of cells which divide to produce new phloem and xylem.",
    "Stomata": "The small openings or pores on the surface of a leaf.",
    "Transpiration": "The process in which water evaporates from a plant’s leaves.",
    "Gymnosperm": "A seed plant that produces naked seeds.",
    "Cone": "The reproductive structure of gymnosperms.",
    "Ovule": "A structure that contains an egg cell.",
    "Pollination": "The transfer of pollen from the male reproductive structure to the female reproductive structure.",
    "Angiosperm": "A flowering plant that produces seeds enclosed in a structure.",
    "Flower": "The reproductive structure of an angiosperm.",
    "Sepals": "Protect the developing flower.",
    "Petal": "The part of a flower that attracts pollinators.",
    "Stamen": "The male reproductive part of a flower.",
    "Pistil": "The female reproductive part of a flower.",
    "Ovary": "A hollow structure that protects the seeds as they develop.",
    "Fruit": "A ripened ovary and other structures that enclose one or more seeds.",
    "Monocots": "Angiosperms with only one seed leaf.",
    "Dicots": "Angiosperms with two seed leaves.",
    "Tropism": "A plant's growth response toward or away from a stimulus.",
    "Hormone": "A chemical that affects how a plant grows and develops.",
    "Auxin": "A plant hormone that speeds up the rate at which a plant’s cells grow.",
    "Photoperiodism": "A plant's response to seasonal changes in the length of night and day.",
    "Short-Day Plants": "Plants that flower when nights are longer than a critical length.",
    "Long-Day Plants": "Plants that flower when nights are shorter than a critical length.",
    "Critical Night Length": "The number of hours of darkness that determines whether or not a plant will flower.",
    "Day-Neutral Plants": "Plants whose flowering cycle is not sensitive to periods of light or dark.",
    "Dormancy": "A period when an organism's growth or activity stops.",
    "Annuals": "Flowering plants that complete a life cycle within one growing season.",
    "Biennials": "Angiosperms that complete their life cycle in two years.",
    "Perennials": "Flowering plants that live for more than two years.",
    "Precision Farming": "A farming method in which farmers fine-tune the amount of water and fertilizer to match a specific field's requirements.",
    "Hydroponics": "A method of growing plants in solutions of nutrients instead of soil.",
    "Genetic Engineering": "A method where scientists alter an organism’s genetic material to produce desired traits."
};

// Shuffling the terms and definitions
let shuffledTerms = Object.keys(termsAndDefinitions).sort(() => 0.5 - Math.random());
let shuffledDefinitions = Object.values(termsAndDefinitions).sort(() => 0.5 - Math.random());

// Generate the quiz layout
function generateQuiz() {
    const termsContainer = document.getElementById('terms');
    const definitionsContainer = document.getElementById('definitions');

    shuffledTerms.forEach(term => {
        const termElement = document.createElement('div');
        termElement.classList.add('term');
        termElement.setAttribute('draggable', true);
        termElement.setAttribute('data-term', term);
        termElement.textContent = term;

        termElement.addEventListener('dragstart', dragStart);
        termElement.addEventListener('dragend', dragEnd);

        termsContainer.appendChild(termElement);
    });

    shuffledDefinitions.forEach(definition => {
        const definitionElement = document.createElement('div');
        definitionElement.classList.add('definition');
        definitionElement.setAttribute('draggable', true);
        definitionElement.setAttribute('data-definition', definition);
        definitionElement.textContent = definition;

        definitionElement.addEventListener('dragstart', dragStart);
        definitionElement.addEventListener('dragend', dragEnd);

        definitionsContainer.appendChild(definitionElement);
    });
}

// Drag events
let draggedItem = null;

function dragStart(e) {
    draggedItem = e.target;
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0);
}

function dragEnd(e) {
    e.target.style.display = 'block';
    draggedItem = null;
}

// Dropping terms and definitions
const definitions = document.querySelectorAll('.definition');

definitions.forEach(definition => {
    definition.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    definition.addEventListener('drop', (e) => {
        e.preventDefault();
        const droppedTerm = draggedItem.textContent;
        const droppedDefinition = definition.textContent;

        if (termsAndDefinitions[droppedTerm] === droppedDefinition) {
            draggedItem.classList.add('dropped');
            definition.classList.add('dropped');
        }
    });
});

// Check the answers
document.getElementById('checkAnswers').addEventListener('click', function () {
    const resultContainer = document.getElementById('result');
   
