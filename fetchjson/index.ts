import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1"

// use axios to make a network request to this url

// typescript
interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((response) => {
  const todo = response.data as Todo

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  console.log(`
        The todo with id: ${id}
        Has a title of: ${title}
        Is it completed: ${completed}
    `)
})
