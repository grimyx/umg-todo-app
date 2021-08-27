// Props :
// data - lista sa podacima
// funkcija koja ce da vrati element

const TaskList = ({data, listItemFn, removeFn}) => {
    return (
        <div>
            {data.map(item => listItemFn(item, removeFn))}
        </div>
    )
}

export default TaskList;