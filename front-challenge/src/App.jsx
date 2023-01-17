import { useEffect, useState } from 'react'
import './App.css'
import resultsJSON from '../results.json';

function App() {
  const {grid, path, coords, pathNumbers} = resultsJSON;
  const [newGrid, setnewGrid] = useState([...grid]);
  const [resultsSelected, setResultsSelected] = useState([]);
  const [resultsSelectedCoords, setResultsSelectedCoords] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const timer = setTimeout(() => {
        setResultsSelectedCoords([...path[i]])
        setResultsSelected([...pathNumbers[i]])
        i++
        i > path.length && clearInterval(interval)
      }, 800);
    }, 500)
  }, [])

  const Row = ({ data, x }) => {
    const getCustomClass = (y) => {
      let customClass = ''
      if (resultsSelectedCoords?.indexOf(`${x}, ${y}`) >= 0) {
        customClass = 'selected'
      } else if (coords?.indexOf(`${x}, ${y}`) >= 0) {
        customClass = 'answer'
      }
      return customClass;
    }

    return (
      data.map((d,y) => {
        return <td key={y} className={getCustomClass(y)}><p>{d}</p></td>
      })
    )
  }

  return (
    <div className="App">
      {resultsSelected}
      <table>
        <tbody>
        {
          newGrid.map((r,idx) => <tr key={idx}>{<Row data={r} x={idx}/>}</tr>)
        }
        </tbody>
      </table>
    </div>
  )
}

export default App
