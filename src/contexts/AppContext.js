import { data, forumData } from "../api/data";

const { createContext, useContext, useState, useReducer } = require("react");

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [posts, setPosts] = useState(forumData.posts);

    function upvoteHandler(id){
        const updatedPosts = posts.map((item) => item.postId === id ? {...item, upvotes : item.upvotes + 1} : item)

        setPosts(updatedPosts)
    }

    function downvoteHandler(id){
        const updatedPosts = posts.map((item) => item.postId === id ? {...item, upvotes : item.upvotes - 1} : item)

        setPosts(updatedPosts)

    }

    function bookmarkHandler(id){
        const updatedPosts = posts.map((item) => item.postId === id ? {...item, isBookmarked : !item.isBookmarked } : item)

        setPosts(updatedPosts)
    }

    const initial ={
        sort:""
    }

    const {state, dispatch} = useReducer(reducer, initial)


   

    function reducer(state, action){
        switch(action.type){
            case"SORT_BY_LATEST":
            return {...state, sort: action.payload}
            case"SORT_BY_UPVOTES":
            return {...state, sort: action.payload}
            default:
            return state;
        }

    }



    // const sortDataByUpvotes = (state.sort ===  "SORT_BY_UPVOTES") ? posts.sort((a,b) => a.upvotes - b.upvotes) : posts;

    // const sortDataByLatest = (state.sort === "SORT_BY_LATEST") ? post



    const getFilteredData = (posts, state) => {

        let filteredData = posts;
    
        if (state.sort ===  "SORT_BY_UPVOTES") { posts.sort((a,b) => a.upvotes - b.upvotes) }

        if (state.sort ===  "SORT_BY_LATEST") { posts.sort(((a, b) => {
            const dateOne = new Date(a.createdAt);
            const dateTwo = new Date(b.createdAt);
            return dateTwo - dateOne;
          }))  }

        return filteredData;
    
    
    }

    const newData = getFilteredData(posts, state);





    return(
       <AppContext.Provider value={{
        posts,
        upvoteHandler,
        downvoteHandler,
        bookmarkHandler,
        newData,
        state, 
        dispatch
        }}>
        {children}
       </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);