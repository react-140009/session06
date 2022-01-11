import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

export interface PhotoModel {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function PhotoList() {
  const { page, setPage, data, total, loading } =
    useFetchData<PhotoModel>("photos");

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (page < total / 10) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={prev}>
              Previous
            </button>
          </li>

          {new Array(5).fill(0).map((_: any, idx: number) => (
            <li
              key={idx}
              className={
                page - 1 + idx === page ? "page-item active" : "page-item"
              }
            >
              <button
                className="page-link"
                onClick={() => setPage(page - 1 + idx)}
              >
                {page - 1 + idx}
              </button>
            </li>
          ))}

          <li className="page-item">
            <button className="page-link" onClick={next}>
              Next
            </button>
          </li>
        </ul>
      </nav>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={100}>
                <h2>Loading...</h2>
              </td>
            </tr>
          )}
          {data &&
            data.map((post) => (
              <tr key={"post-" + post.id}>
                <td>{post.id}</td>
                <td>{post.albumId}</td>
                <td>
                  <Link to={`/photos/${post.id}`}>{post.title}</Link>
                </td>
                <td>
                  <img src={post.thumbnailUrl} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
