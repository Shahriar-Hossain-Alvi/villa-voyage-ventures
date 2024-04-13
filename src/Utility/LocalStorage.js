//get stored favorite list
const getStoredFavoriteList = () => {
    const storedFavoriteList = localStorage.getItem('favorite');
    if (storedFavoriteList) {
        return JSON.parse(storedFavoriteList)
    }
    return [];
}

//set new favorite list
const saveFavoriteList = id => {
    const storedFavoriteList = getStoredFavoriteList();

    //find the item in the list
    const isExist = storedFavoriteList.find(listId => listId === id);

    if(!isExist){
        storedFavoriteList.push(id);
        localStorage.setItem('favorite', JSON.stringify(storedFavoriteList));
    }
}

export {getStoredFavoriteList, saveFavoriteList}