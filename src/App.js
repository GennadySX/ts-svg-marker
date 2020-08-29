import React from 'react';
import {SVG} from '@svgdotjs/svg.js'
import './App.css';

const cd = [
    {
        title: 'Казань'
    },
    {
        title: 'Кулаево'
    },
    {
        title: 'Большой \n маляш'
    },
    {
        title: 'Мамыловка'
    },
    {
        title: 'Елабуга'
    },
    {
        title: 'Набережные \n челны'
    },
    {
        title: 'Кулаево 1'
    },
    {
        title: 'Большой \n маляш 1'
    },
    {
        title: 'Мамыловка 1'
    },
    {
        title: 'Елабуга 1'
    },
    {
        title: 'Набережные \n челны 1'
    },

]


class App extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.drawIn()
    }


    circleMaker(title) {
        const draw = SVG().addTo('.intercity').size(550, 500)
        draw.circle(40).fill('#c21235').move(40, 10)
        draw.circle(50).fill('none').move(35, 5)
            .stroke({color: '#c21235', width: 5, linecap: 'round'})
        draw.text(title).move(40, 60).font({weight: 'bold'})

        draw.line(20, 100, 420, 100).move(60, 30)
            .stroke({color: 'rgba(194,18,53,0.68)', width: 10})
    }

    drawIn() {

        const W_Element = 120
        const V_Block = 120
        const V_Text = 50


        const draw = SVG().addTo('.intercity').size(1750, 1000)
        const leftBorder = '-20 -20 0 0 -20, 20 v100 a20, 20 -20 0 0 20, '
        const rightBorder = ' 20 0 0 1 20, 20 v100 a20,  20 0 0 1 -20,'
        const line = (min = false, size = 450) => `20 h${min ? '-' : ''}${size} a20,`
        const end = ' 0 v0 a20, 20 0 0 1 20,-20 z'


        const path = draw.path('M0,' + line()
            + rightBorder + line(true)
            + leftBorder + line(false)
            + rightBorder + line(true)
            + leftBorder + line(false)
            + end)

        path.fill('none').move(50, 30)
        path.stroke({color: 'rgba(194,18,53,0.68)', width: 10})

        const btnCicrle = (title) => {
            draw.circle(40).fill('#c21235').move(40, 280)
            draw.circle(50).fill('none').move(35, 280 - 5)
                .stroke({color: '#c21235', width: 5, linecap: 'round'})
            draw.text(title).move(40, 340).font({weight: 'bold'})
        }

        let f = 1
        let borderLeft = true;
        let lin = 0;
        cd.map((map, i) => {
            if (i === 0) {
                draw.circle(40).fill('#c21235').move(40, 10)
                draw.circle(50).fill('none').move(35, 5)
                    .stroke({color: '#c21235', width: 5, linecap: 'round'})
                draw.text(map.title).move(40, 60).font({weight: 'bold'})
            }

            if (i !== 0 && borderLeft) {
                draw.circle(30).fill('#c21235').move(200 + ((i - 1) * 210), !lin ? 15 : (lin * 90))
                draw.text(map.title).move(210 + ((i - 1) * 220), 60).font({weight: 'bold', anchor: 'middle'})
                if (f === 3) {
                    f = 0;
                    borderLeft = false;
                    lin++
                }
            }

            if (!borderLeft) {
                draw.circle(30).fill('#c21235').move(80 + ((i % 3) * 190), 155)
                draw.text(map.title).move(70 + ((i % 3) * 180), 190).font({weight: 'bold'})
                if (f === 3) {
                    f = 0;
                    borderLeft = true
                    lin++
                }
            }
            f++;
        })


    }

    render() {
        return (
            <div className="App">
                <div className="intercity">

                </div>

            </div>
        );
    }
}


export default App;
