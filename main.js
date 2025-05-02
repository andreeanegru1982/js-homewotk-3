console.log('Homework');

class Option{
    constructor(id, name, avatar){
        this.id = id;
        this.name = name;
        this.avatar = avatar;
    }
}

const optionsList = [
    new Option('opt-1', 'Pizza', '🍕'),
    new Option('opt-2', 'Burger', '🍔'),
    new Option('opt-3', 'Salad', '🥗'),
    new Option('opt-4', 'Cake', '🍰'),
];

//const appNumber = optionsList.length;   // nu mai are sens dupa ce am creat clasa !?

const appContainer = document.querySelector('#container');

function appFactory(option, index){
    const appItem = document.createElement('div');
    appItem.classList.add(`app-item`);
    appItem.id = `app-item-${index}`;
    appItem.textContent = `${option.name} ${option.avatar}`  // vezi daca ar fi mai bine ca textul sa fie o entitate(h2 sau div)distincta legata de appItem!!!
    appContainer.append(appItem);

    const votesCounter = document.createElement('div');
    votesCounter.id = 'votes-counter';
    votesCounter.textContent = `Votes: `;
    appItem.append(votesCounter);

    const voteDisplay = document.createElement('span');
    voteDisplay.classList.add('vote-display');
    votesCounter.append(voteDisplay);

    const btnContainer = document.createElement('div');
    btnContainer.id = 'btn-container';
    appItem.append(btnContainer);

    const voteBtn = document.createElement('button');
    voteBtn.id = 'vote-btn';
    voteBtn.textContent = `Vote for ${option.name} ${option.avatar}`;
    btnContainer.append(voteBtn);

    voteBtn.addEventListener('click', async () => {
        const newVoteCounter = await voteUpdate(option);
        voteDisplay.textContent = newVoteCounter;
    });

}

optionsList.forEach((option, index) => appFactory(option, index));

async function voteUpdate(option){
    const apiUrl = 'https://api.api-ninjas.com/v1/counter';
    const apiKey = 'Cyrks1o/4EilPs2PAy/cCg==Zt893I3oMkEeY0hO';

    const response = await fetch(`${apiUrl}?id=${option.id}&hit=true`,{
        headers: { 
            'X-Api-Key': apiKey,
            'Accept': 'application/json'
        },
    });
    const vote = await response.json();
    return vote.value;
}



