import './index.css'

const HistoryList = props => {
  const {ListDetails, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = ListDetails

  const deleteTodo = () => {
    onDelete(id)
  }
  return (
    <li className="lis">
      <p>{timeAccessed}</p>
      <div className="lisd">
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button type="button" testid="delete" onClick={deleteTodo}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryList
