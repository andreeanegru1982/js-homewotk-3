console.log('Homework');

const appContainer = document.querySelector('#container');

class Option{
    constructor(name, avatar){
        this.name = name;
        this.avatar = avatar;
    }
}

const optionsList = [
    new Option('Pizza', '🍕'),
    new Option('Burger', '🍔'),
    new Option('Salad', '🥗'),
    new Option('Cake', '🍰'),
];

const appNumber = optionsList.length;

function appFactory(option, index){
    const appItem = document.createElement('div');
    appItem.classList.add(`app-item`);
    appItem.id = `app-item-${index}`;
    appItem.textContent = `${option.name} ${option.avatar}`
    appContainer.append(appItem);

    const votesCounter = document.createElement('div');
    votesCounter.id = 'votes-counter';
    votesCounter.textContent = `Votes: `;
    appItem.append(votesCounter);

    const btnContainer = document.createElement('div');
    btnContainer.id = 'btn-container';
    appItem.append(btnContainer)

    const voteBtn = document.createElement('button');
    voteBtn.id = 'vote-btn';
    voteBtn.textContent = `Vote for ${option.name} ${option.avatar}`;
    btnContainer.append(voteBtn);

}

optionsList.forEach((option, index) => appFactory(option, index));


