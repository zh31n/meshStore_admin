const useQuery = (query: string) => {
    const queryS = new URLSearchParams(window.location.search);
    const data = queryS.get(query);
    return data;
};

export default useQuery;