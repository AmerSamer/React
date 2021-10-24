import React from 'react';
import Names from './Names';
import Card from './Card';

const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Johnny",
        birthday: "1-10-1992",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];


class Data extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', birthday: '', favoriteFoodsMeats: '', favoriteFoodsFish: '' }

        this.handleClickName = this.handleClickName.bind(this)
        this.handleClickCard = this.handleClickCard.bind(this)

    }
    handleClickName(val) {
        this.setState({ name: val })
    }
    handleClickCard(names, birthday, meat, fish) {
        this.setState({ name: { names }, birthday: { birthday }, favoriteFoodsMeats: { meat }, favoriteFoodsFish: { fish } })
    }
    render() {

        return (
            <div>
                {
                    data.map((i, key) => {
                        return (
                            <Names method={this.handleClickName} names={i.name} key={key} />
                        )
                    })

                }
                {
                    data.map((i, key) => {
                        const splitBirthday = i.birthday.split('-')
                        const yearBirthday = splitBirthday[2]
                        const meatsSplit = i.favoriteFoods.meats.join(' , ')
                        const fishSplit = i.favoriteFoods.fish.join(' , ')
                        return yearBirthday < 1990 ? (<Card method={this.handleClickCard} names={i.name} birthday={i.birthday} meat={meatsSplit} fish={fishSplit} yearBirthday={yearBirthday} key={key} />) : ''
                    })
                }

            </div>
        )
    }
}


export default Data;