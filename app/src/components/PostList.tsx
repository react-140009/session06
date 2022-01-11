// import { useFetchData } from "../hooks/useFetchData";
//yarn add axios

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { fetchPageAsync } from "../features/post/postSlice";

export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/*
  Refactoring
  بهینه کردن ساختار بدون تغییر در رفتار کد
*/
export default function PostList() {
  const dispatch = useDispatch();
  const { loading, page, postList, total } = useSelector(
    (state: RootState) => state.post
  );

  // const { page, setPage, data, total, loading } =
  //   useFetchData<PostModel>("posts");

  useEffect(() => {
    dispatch(fetchPageAsync(1));
  }, []);

  const prev = () => {
    if (page > 1) {
      dispatch(fetchPageAsync(page - 1));
    }
  };

  const next = () => {
    if (page < total / 10) {
      dispatch(fetchPageAsync(page + 1));
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

          {new Array(total / 10).fill(0).map((_: any, idx: number) => (
            <li key={idx} className="page-item">
              <button
                className="page-link"
                onClick={() => dispatch(fetchPageAsync(idx + 1))}
              >
                {idx + 1}
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
          {postList &&
            postList.map((post) => (
              <tr key={"post-" + post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
