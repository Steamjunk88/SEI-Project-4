
const constants = require('../constants');
const Deck = require('../models').deck;
const Card = require('../models').card;
const DeckCards = require('../models').deck_cards;


const newDeck = (req, res) => {
    console.log(req.body)
    Deck.upsert({
        name: req.body.deckName,
        description: req.body.deckDescription,
        user_id: req.body.user_id
    })
    .then(deck => {
        console.log(deck);
        res.send(deck)
    })
    .catch(err => console.error(err))
}

const getUserDecks = (req, res) => {
    Deck.findAll({
        where: {
            user_id: req.user.id
        },
        include: [
            {
                model: Card
            }
        ]
    })
    .then(decks => {
        res.status(constants.SUCCESS).json(decks);
    })
    .catch(err => console.error(err))
}

const getDeck = (req, res) => {
    console.log(req.params.deck_id)
    Deck.findOne({
        where: {
            id: req.params.deck_id
        },
        include: [
            {
                model: Card
            }
        ]
    })
    .then(deck => {
        res.status(constants.SUCCESS).json(deck);
    })
    .catch(err => console.error(err))
}

const addCardToDeck = (req, res) => {
    console.log('add Card')
    console.log(req.body)
    DeckCards.create({
        deck_id: req.body.deck_id,
        card_id: req.body.card_id
    })
    .then(deckCard => {
        res.status(constants.SUCCESS).json(deckCard);

    })
    .catch(err => console.error(err))
}


module.exports = {
    newDeck,
    addCardToDeck,
    getUserDecks,
    getDeck
}