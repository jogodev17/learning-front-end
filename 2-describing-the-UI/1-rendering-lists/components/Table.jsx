

const Table = ({articles}) => {
  return (
    <table className="table-auto">
        <thead>
            <tr>
            <th >ID:</th>
            <th>Title:</th>
            <th>Description:</th>
            <th>Date:</th>
            <th>Image:</th>
            </tr>
        </thead>

        <tbody>
            {articles.map((article) => (
                <tr key={article.id}>
                    <td>{article.id}</td>
                    <td>{article.title}</td>
                    <td>{article.date}</td>
                    <td>{article.image}</td>
                    <td><img src={article.image} width={40} alt={`${article.title}-image`} /></td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table