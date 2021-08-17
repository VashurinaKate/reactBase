import { useCallback, useEffect } from "react"
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import { selectArticles, selectArticlesError, selectArticlesLoading } from "../../store/articles/selectors";
import { getArticles } from "../../store/articles/actions";

export const News = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectArticlesLoading)
    const error = useSelector(selectArticlesError)
    const articles = useSelector(selectArticles)

    const requestArticles = useCallback(() => {
        dispatch(getArticles())
    }, [])

    useEffect(() => {
        requestArticles()
    }, [])

    if (error) {
        return (
            <>
            <h3>Request error</h3>
            <button onClick={requestArticles}>Try again</button>
            </>
        )
    }

    if (loading) {
        return (
            <CircularProgress />
        )
    }

    if (!articles.length) {
        return <h3>No article</h3>
    }

    return (
        <ul>
            {articles.map((a) => (
                <>
                <li key={a.id}>{a.title}</li>
                <i>{a.publishedAt}</i>
                </>
            ))}
        </ul>
    )
}
