class TodoApi {
    _baseUrl ='http://localhost:8000/api'

    login = (username, password) => {

        fetch(
            `${this._baseUrl}/token/`,
            {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            }
        ).then(response =>{
            if(response.ok){
                return response.json()
            } else {
                throw new Error('something went wrong with login')
            }
        }).then(tokens =>{
            localStorage.setItem('credentials', JSON.stringify(tokens))
            window.location.reload()
        }).catch(error =>{
            localStorage.removeItem('credentials')
            window.location.reload()
        })
    }
    getTodos =()=>{
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        return fetch(
            `${this._baseUrl}/v1/`,
            {
                headers:{
                    'Content-type': 'application/json',
                    'Authorization':`Bearer ${credentials.access}`
                }
            }
        ).then(response =>{
            return  response.json()
            }
        )
    }
    deleteTodos =(id)=>{
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        return fetch(
            `${this._baseUrl}/v1/${id}`,
            {
                method: 'DELETE',
                headers:{
                    'Content-type': 'application/json',
                    'Authorization':`Bearer ${credentials.access}`
                }
            }
        ).then(response =>{
            return  response.text()
            }
        )
    }
    createTodos =(label)=>{
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        return fetch(
            `${this._baseUrl}/v1/`,
            {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json',
                    'Authorization':`Bearer ${credentials.access}`
                },
                body: JSON.stringify({
                    label: label,
                    important: false,
                    done: false
                })
            }
        ).then(response =>{
            return  response.json()
            }
        )
    }
}
export default TodoApi