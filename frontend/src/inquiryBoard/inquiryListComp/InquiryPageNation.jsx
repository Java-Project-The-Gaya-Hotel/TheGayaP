
// 문의 게시글 페이지네이션
function InquiryPagination({ total, limit, page, setPage }) {
    const numPages = Math.ceil(total / limit);

    return (
        <>
            <nav>
                <button className={"custom-btnLR "} onClick={() => setPage(page - 1)} disabled={page === 1}>&lt;</button>
                {Array(numPages)
                    .fill()
                    .map((_, i) => (
                        <button className={"custom-btnLR mx-1"} key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? "page" : null}>{i + 1}</button>
                    ))}
                <button className={"custom-btnLR"} onClick={() => setPage(page + 1)} disabled={page === numPages}>&gt;</button>
            </nav>
        </>
    );
}


export default InquiryPagination;