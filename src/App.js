import React, {useState, useMemo} from 'react'
import axios from 'axios'
import ModeSelector from "./components/ModeSelector";
import Loader from "./components/Loader/Loader";
import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './components/EnhancedTable'

const App = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'E-mail',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
    ],
    []
  )

  const [data, setData] = useState(useMemo(() => [], []))
  const [skipPageReset, setSkipPageReset] = useState(false)
  const [isModeSelected, setIsModeSelected] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const modeSelectHandler = (url) => {
    setIsModeSelected(true)
    fetchData(url)
  }

  const fetchData = async (url) => {
    const result = await axios(
      url
    )
    setData(result.data)
    setIsLoading(false)
  }

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  if(!isModeSelected){
    return (
      <div>
        <ModeSelector onSelect={modeSelectHandler} />
      </div>
    )
  } else {
    if (isLoading) {
      return (
        <Loader/>
      )
    } else {
      return (
        <div>
          <CssBaseline/>
          <EnhancedTable
            columns={columns}
            data={data}
            setData={setData}
            updateMyData={updateMyData}
            skipPageReset={skipPageReset}
          />
        </div>
      )
    }
  }
}

export default App
