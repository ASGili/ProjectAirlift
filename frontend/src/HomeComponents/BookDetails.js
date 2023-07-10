const BookDetails = ({fetchedBook})=> {

    return(
        <>
        {fetchedBook.totalItems === 1 ? fetchedBook.items[0].volumeInfo.title :  ""}
        </>
    )
}

export default BookDetails;