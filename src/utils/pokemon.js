export const getAllPokemon = (url) => {
    //Promiseは処理が終わるまで待つメゾット
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((res) => res.json())      //fetchでデータを取得したものをjson形式にする
        .then((data) => resolve(data)); //上記をthenのdataとして受け取り、成功した時はresolveでdataをjson形式でretunに返す
    });
};

export const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
            resolve(data)
        });
    });
};


