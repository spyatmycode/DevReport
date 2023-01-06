
export const formatDate = (timestamp) => {

    const savedDate = new Date(timestamp * 1000).toDateString()

    const options = { year: "numeric", month: "long", day: "numeric" }

    return new Date(savedDate).toLocaleString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }
    );
}

