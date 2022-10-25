// form is a handle of the form document node in the html file. 
let form = document.querySelector('.js-form');
// select is a handle of the dropdown list inside the form element.
let select = document.querySelector('.js-dog-breed-chooser');
// a container, where the results are rendered
let resultsContainer = document.querySelector('.js-dogs-container');

// Submit event handler function. 
function formSubmitted(event) {
    // We have to prevent form submission so that unwanted side-effects 
    // such as query string changes or page reload don't happen on the page.
    event.preventDefault();

    // Read the value of the select.
    let breed = select.value;

    // Construct the API URL
    let apiUrl = `https://dog.ceo/api/breed/${breed}/images`;

    // Fetch and console log data
    fetch(apiUrl)
        .then(data => data.json())
        .then(renderDogs); 
}

function toLi(value) {
    return `
    <li class="dog-item">
        <img class="dog-image" src="${value}" alt="Image of a dog (query result)." />
    </li>   
    `;
}

function renderDogs(response) {
    resultsContainer.innerHTML = `
    <ul class="dog-list">
        ${ response.message.map(toLi).join('') }
    </ul>
    `;
}

// The below line attaches an event handler function to the submit event
// triggered on the form node.
form.addEventListener('submit', formSubmitted);