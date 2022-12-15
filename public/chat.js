
const socket = io('http://localhost:3000')


socket.on('update_messages',(messages)=>{

    updateMessagesOnScreen(messages)
})

function updateMessagesOnScreen(messages){
    const div_messages = document.querySelector('#messages');

    let list_messages = '<ul>'
    messages.forEach(message=>{
        list_messages += `<li>${message}</li>`

    })
    list_messages += '</ul>'

    div_messages.innerHTML = list_messages

}

ducument.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('#message_form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = document.form['message_form_name']['msg'].value;
        document.form['message_form_name']['msg'].value= ''
        socket.emit('new_message', { msg: message })
        console.log(message)
    })
})
