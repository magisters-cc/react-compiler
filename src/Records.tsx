import { useState } from 'react'

type TRecord = {
  id: number;
  title: string;
}

type FilterType = 'even' | 'odd'

const defaultRecords: TRecord[] = Array(1000).fill(null).map((_, i) => ({
  id: i + 1,
  title: `title-${i + 1}`
}))

const filterRecordsByEvenOdd = (records: TRecord[], type: FilterType) =>
  records.filter((record) => type === 'even' ? record.id % 2 : !(record.id % 2))

function RecordItem({ record }: { record: TRecord }) {
  return <div>{record.title}</div>
}

export function Records() {
  const [count, setCount] = useState(0);
  const [records] = useState(defaultRecords)
  const [filterType, setFilterType] = useState<FilterType>('even')

  const filteredRecords = filterRecordsByEvenOdd(records, filterType)
  
  const toggleType = () => setFilterType(prev => prev === 'even' ? 'odd' : 'even')

  return (
    <div>
      <div className='card'>
        <button onClick={() => setCount(prev => prev + 1)}>Count: {count}</button>
        &nbsp;
        <button onClick={toggleType}>{filterType}</button>
      </div>
      <br /><br />
      {filteredRecords.map(record => (<RecordItem key={record.id} record={record} />))}
    </div>
  )
}
