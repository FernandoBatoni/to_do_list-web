interface IToDo {
  id: number
  title: string
  description: string
  done: boolean
}

const list:IToDo[] = []
const formItem: HTMLFormElement = document.querySelector("#ToDoForm")

const mainList: HTMLDivElement = document.querySelector("#main-list")

function addListItem(title: string, description: string) {
  if (title && description ){  
      list.push({
        id: list.length++,
        title,
        description,
        done: true
      })
      
      renderItem()
    }
    else {
      alert("Escreva algo para adicionar a lista")
      return 
    }
}

function removeListItem(id: number) {
  const itemRemove = list.find(item => {
    return item.id == id
  })

  const index = list.indexOf(itemRemove)

  list.splice(index, 1)
}

function renderItem() {
  mainList.innerHTML = ''
  list.forEach(item => {
    mainList.innerHTML += 
    `<div> 
      <h1>${item.title}</h1>

      <p>${item.description}</p>

      <button onclick=removeListItem(${item.id})>Marcar como concluido</button>

    </div>`
  })
}


formItem.addEventListener("submit", (e) => {
  e.preventDefault();

  const formTitleData: HTMLInputElement = document.querySelector("#formTitle")
  const formContentData: HTMLTextAreaElement = document.querySelector("#formContent")

  addListItem(formTitleData.value, formContentData.value);
})

