import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODhkNDUzZTI4NDUyZmViMGYwMjJkMjhkODAxZjAxNiIsIm5iZiI6MTcyMTQ1MDc0MS4zODkzNjQsInN1YiI6IjY2OTU0MWE2ZWQxNzMxMjMxNmUwNTgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_TWjIx0FqBkIk-SUaypORqpw-ir8FGmyexQHx_81jM'
    }
});

export default instance;
