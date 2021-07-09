import './assets/App.scss'
import { Table } from 'react-bootstrap'
export default function Post(props) {
    const { id, book_author, book_title, book_publication_year, book_publication_country, book_publication_city, book_pages } = props.data;
    return (
        <>
            <Table className="tableBody">
                <tbody>
                    <tr>
                        <td className="tableHeader">{id}</td>
                        <td className="tableHeader">{book_author}</td>
                        <td className="tableHeader">{book_title}</td>
                        <td className="tableHeader">{book_publication_year}</td>
                        <td className="tableHeader">{book_publication_country}</td>
                        <td className="tableHeader">{book_publication_city}</td>
                        <td className="tableHeader">{book_pages}</td>

                    </tr>
                </tbody>
            </Table>
        </>
    );
}