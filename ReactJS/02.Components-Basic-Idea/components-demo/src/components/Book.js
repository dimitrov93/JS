export const Book = (proops) => {
    return (
    <li>
        <article>
            <h2>Title: {proops.title}</h2>
            <main>Price: ${proops.price}</main>
            <footer>
                <span>Author: {proops.author}</span>
            </footer>
        </article>
    </li>
    )
}