
export const Api = function  (query){
    return `https://api.nasa.gov/${query}/apod?api_key=iT6Yq1QPqgLXhA3PySqO7ZkGvQzSezLsnfJ0zUkt`
}

export const Search_space_Api = function (Search_query) {
    return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=space&api-key=JAAGcwfiHc1AvjyKJkgSIy6qAP9hS9Ew&sort=newest&fq=${Search_query}`
}