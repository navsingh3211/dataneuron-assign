1.) http://localhost:3000/api/todo==> POST
{
    "name":"fdef"
}

2.)http://localhost:3000/api/update-todo/663cf2c127967ead74154bb4==>PUT
{
    "name":"gita"
}

3.) http://localhost:3000/api/todo ==> GET

{
    "success": true,
    "messsage": "data",
    "data": 6
}

4.) http://localhost:3000/api/todo/get-todo

{
    "success": true,
    "messsage": "data!",
    "data": [
        {
            "_id": "663cf2c127967ead74154bb4",
            "status": true,
            "createdAt": "2024-05-09T15:58:57.933Z",
            "updatedAt": "2024-05-09T16:06:40.214Z",
            "__v": 0
        }
    ]
}