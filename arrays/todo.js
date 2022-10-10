const todos = [{
    text: 'walk with dog',
    completed: false
}, {
    text: 'read a book',
    completed: true 
}, {
    text: 'relax with meditation',
    completed: true
}, {
    text: 'cook new recepie',
    completed: false
}, {
    text: 'go to sleep',
    completed: true
}]

const sortTodos = function(todos){
    todos.sort(function(a, b){
        if (!a.completed  && b.completed){
            return -1
        }else if(!b.completed && a.completed){
            return 1
        }else{
            return 0
        }
    })
}


 const deleteTodo = function(todos, todoText) {
     const index = todos.findIndex(function(todo) {
         return todo.text.toLowerCase() === todoText.toLowerCase()
     })
     if (index > -1){
        todos.splice(index, 1)
    }
}


const getThingsToDo = function(todos){
    return todos.filter(function(todo){
        return todo.completed === false 
    })
}




sortTodos(todos)
console.log(todos)

//console.log(getThingsToDo(todos))
