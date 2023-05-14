export default function Pagination({ page, setPage }: { page: number, setPage: Function }) {
    return (<>
        <div className="pagination">
            <button type="button" onClick={() => setPage(page - 1)} disabled={page === 0 ? true : false} className={page === 0 ? `pageBtnDisabled` : `pageBtn`}>Previous</button>
            <div className="numBtnActive" >{page + 1}</div>
            <div className="numBtn" onClick={() => setPage(page + 1)}>{page + 2}</div>
            <div className="numBtn" onClick={() => setPage(page + 2)}>{page + 3}</div>
            <button type="button" onClick={() => setPage(page + 1)} className="pageBtn">Next</button>
        </div>
    </>)
}