import React from 'react'
import Card from './Card'

export default function CardList() {

    const data = [
        {
            img: 'https://via.placeholder.com/600x250.png',
            header: 'Test Card 1',
            des: 'this is test1'
        },
        {
            img: 'https://via.placeholder.com/600x250.png',
            header: 'Test Card 1',
            des: 'this is test2'
        },
    ]
    //     {
    //         img: 'https://via.placeholder.com/600x250.png',
    //         header: 'Test Card 1',
    //         des: 'this is test3'
    //     },
    //     {
    //         img: 'https://via.placeholder.com/600x250.png',
    //         header: 'Test Card 1',
    //         des: 'this is test4'
    //     },
    //     {
    //         img: 'https://via.placeholder.com/600x250.png',
    //         header: 'Test Card 1',
    //         des: 'this is test'
    //     },
    //     {
    //         img: 'https://via.placeholder.com/600x250.png',
    //         header: 'Test Card 1',
    //         des: 'this is test',
    //         price: 100,
    //         quality: 10
    //     },
    // ]
    return (
        <div className="card-list">
            {data.map(item => <Card header={item.header} img={item.img} des={item.des} />)}
        </div>
    )
}
