/**
* This class is only used to create a reducer of users (pre-defined). These
* are the list of objects that we want saved in our store.
* We never really want to change these pieces of data (ie. always 3 users)
**/

export default function () {
    //its important to keep an ID along with each object. Typically, a randomly-generated string as the ID is good
    return [
        {
            id: 1,
            first: 'Brandon',
            last: 'Gordon',
            age: 22,
            description: 'He real'
        },

        {
            id: 2,
            first: 'Justice',
            last: 'League',
            age: 20,
            description: 'She real too'
        },

        {
            id: 3,
            first: 'Tricksick',
            last: 'Two',
            age: 12,
            description: 'The best'
        }
    ];
}