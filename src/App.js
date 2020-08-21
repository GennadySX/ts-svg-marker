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
      const  draw = SVG().addTo('.intercity').size(550, 500)

      draw.circle(40).fill('#c21235').move(40, 10)
      draw.circle(50).fill('none').move(35, 5)
          .stroke({ color: '#c21235', width: 5, linecap: 'round' })
      draw.text(title).move(40, 60).font({weight: 'bold'})

      draw.line(20, 100, 420, 100).move(60, 30)
          .stroke({ color: 'rgba(194,18,53,0.68)', width: 10 })
    }

    drawIn() {
     const  draw = SVG().addTo('.intercity').size(750, 500)

      cd.map((map, i) => {
        if (i === 0) {
          draw.circle(40).fill('#c21235').move(40, 10)
          draw.circle(50).fill('none').move(35, 5)
              .stroke({ color: '#c21235', width: 5, linecap: 'round' })
          draw.text(map.title).move(40, 60).font({weight: 'bold'})
          draw.line(20, 100, 100, 100).move(60, 30)
              .stroke({ color: 'rgba(194,18,53,0.68)', width: 10 })
        }

        if (i !== 0 && i <=3) {
          draw.circle(30).fill('#c21235').move(140 + ((i-1) * 120), 15)
          draw.text(map.title).move(170 + ((i-1) * 120), 60).font({weight: 'bold', anchor: 'middle'})
          i !== 3  ?
          draw.line(0, 100, 120, 100).move(((i) * 120)+20 , 30)
              .stroke({ color: 'rgba(194,18,53,0.68)', width: 10 })
              : draw.line(0, 100, 80, 100).move(((i) * 120)+20 , 30)
                  .stroke({ color: 'rgba(194,18,53,0.68)', width: 10 })
        }

        if (((i-1) % 3) % 2 === 1 )  {
          const path = draw.path('M0,0 h20 a20, 20 0 0 1 20, 20 v100 a20, 20 0 0 1 -20, 20 h-20 a20, -20 v-200 a20, 20 0 0 1 20,-20 z')
          path.fill('none').move(460, 30)
          path.stroke({ color: 'rgba(194,18,53,0.68)', width: 10})

          draw.line(20, 100, 420, 100).move(60, 170)
              .stroke({ color: 'rgba(194,18,53,0.68)', width: 10 })
        }
        if (i > 3 && i <=6) {
          draw.circle(30).fill('#c21235').move(40+((i%3)*180), 155)
          draw.text(map.title).move(30+((i%3)*170),190).font({weight: 'bold'})
        }

        if (((i-1) % 3) % 2 === 0 )  {
          draw.path('M0,0 h40 a20,20 0 0 1 20,20 v100 a20,20 0 0 1 -20,20 h-40 a20,20 0 0 1 20, z')
              .fill('none').move(10, 170).rotate(180)
              .stroke({ color: 'rgba(194,18,53,0.68)', width: 10 })
        }



        if (cd.length === i) {
          draw.circle(40).fill('#c21235').move(40, (i % 3 * 120))
          draw.circle(50).fill('none').move(35, 5)
              .stroke({ color: '#c21235', width: 5, linecap: 'round' })
          draw.text(map.title).move(40, 60).font({weight: 'bold'})
          draw.line(20, 100, 100, 100).move(60, 30)
              .stroke({ color: 'rgba(194,18,53,0.68)', width: 10 })
        }

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
