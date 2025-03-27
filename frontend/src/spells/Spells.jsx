import Container from 'react-bootstrap/Container';
import Plot from 'react-plotly.js';
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

export default function Spells({solutions}) {

    let xValues = math.range(0, 20, 0.5).toArray();
    let yValues = [];

    for (let i = 0; i < solutions.length; i++) {
        const expr = math.compile(solutions[i].timeComp);
        const y = xValues.map(function (x) {
            return expr.evaluate({x: x})
        })
        yValues.push(y); 
    }
    
    



    return(
        <>
        {Array.from(solutions, (sol, i) => (
            <Container className='shadow'>
                <h1 className='text-center'>#{i + 1}: {sol.title}</h1>
                <p className='text-center'>{sol.description}</p>
                <pre className='text-left'>{sol.code}</pre>
                <Container className='w-75 text-center' >
                <p><b>Time Complexity:</b> {sol.time}</p>
                <p><b>Space Complexity:</b> {sol.space}</p>
            <div className='d-flex justify-content-center'>
                <Plot
        data={[
          {
            x: xValues,
            y: yValues[i],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={ {width: 640, height: 480, title: {text: 'Time Complexity Graph'}} }
      />
      </div>
                </Container>
                
            </Container>
        ))}
        </>
    )
}
