import { Card, Table } from "react-bootstrap"
import { TableItemMovies } from "./TableItemMovies"

const movies = [
    {
        title : "Tarzan",
        length : 120,
        awards : 10,
        rating : 10,
        genres : ["aventuras", "drama"]
    },
    {
        title : "Dracula",
        length : 80,
        awards : 1,
        rating : 2,
        genres : ["terror", "drama"]
    },
    {
        title : "Carafantasmas",
        length : 130,
        awards : 5,
        rating : 10,
        genres : ["aventuras", "ciencia ficción"]
    },
    {
        title : "Degenerada",
        length : 100,
        awards : 1,
        rating : 2,
        genres : []
    }
]

export const TableMovies = () => {
  return (
    <Card>
        <Card.Body>
    <Table striped>
        <thead>
        <tr>
          <th>Titulo</th>
          <th>Duracion</th>
          <th>Rating</th>
          <th>Generos</th>
          <th>Premios</th>
        </tr>
      </thead>
      <tbody>
        {
            movies.map(({title, length, rating, genres, awards}, index) => <TableItemMovies key={index + title} title={title} length={length} rating={rating} genres={genres} awards={awards} />)
        }        
      </tbody>
    </Table>
    </Card.Body>
    </Card>
  )
}
