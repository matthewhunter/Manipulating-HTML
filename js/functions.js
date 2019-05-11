const randomColor = () => colors[Math.floor(Math.random() * colors.length)]
const randomGreeting = () => greetings[Math.floor(Math.random() * greetings.length)]

const createDocument = () => {
    container = document.createElement('div')
    container.classList.add('container')
    row = document.createElement('div')
    row.classList.add('row', 'center-align')
    title = document.createElement('h2')
    title.append(document.title)
    link = document.createElement('a')
    link.append(document.createTextNode('Switch to jQuery'))
    link.href = '../jquery/'
    link.title = 'Switch to jQuery'
    link.classList.add('waves-effect', 'waves-light', 'btn-large', 'hoverable', randomColor())
    link.style.marginBottom = '1rem'
    icon = document.createElement('i')
    icon.append(document.createTextNode('swap_horizontal_circle'))
    icon.classList.add('material-icons', 'left')
    link.append(icon)
    row.append(title)
    row.append(link)
    container.append(row)
    document.body.append(container)
    return container
}

const createRow = () => {
    row = document.createElement('div')
    row.classList.add('row')
    col = document.createElement('div')
    col.classList.add('col', 's12')
    row.append(col)
    return row
}

const createButton = (i, text) => {
    button = document.createElement('a')
    button.classList.add('btn-floating', 'pulse', 'btn-large', 'hoverable', randomColor())
    icon = document.createElement('i')
    icon.classList.add('material-icons')
    icon.append(document.createTextNode(i))
    button.append(icon)
    switch (text) {
        case 'text':
            button.addEventListener('click', () =>  {
                M.toast({html: textInput.value, classes: `rounded ${randomColor()}`})
                customButton.classList.remove('pulse')
                customButtonPressed = true
            })
            break
        case 'greeting':
            button.addEventListener('click', () =>  {
                M.toast({html: `${randomGreeting()}!`, classes: `rounded ${randomColor()}`})
                basicButton.classList.remove('pulse')
            })
            break
        case 'name':
            button.addEventListener('click', () => {
                span = document.createElement('span')
                span.append(document.createTextNode(`Matt${'\xa0'}Hunter `))
                nameDiv.append(span)
                myNameButton.classList.remove('pulse')
            })
            break
        case 'friends':
            button.addEventListener('click', () => {
                if (!friendsButtonToggle) {
                    div = document.createElement('div')
                    div.classList.add('hoverable')
                    div.style.marginLeft = '68px'
                    div.style.minHeight = '56px'
                    div.id = 'friends-list'
                    list = document.createElement('ul')
                    list.classList.add('collection', 'with-header')
                    header = document.createElement('li')
                    header.classList.add('collection-header')
                    title = document.createElement('h5')
                    title.append(document.createTextNode('Friends'))
                    header.append(title)
                    list.append(header)
                    div.append(list)
                    for (friend in friends) {
                        const listItem = document.createElement('a')
                        listItem.href = '#!'
                        listItem.classList.add('collection-item')
                        listItem.append(document.createTextNode(friends[friend]))
                        list.append(listItem)
                    }
                    row.append(div)
                    
                } else {
                    list = document.getElementById('friends-list').remove()
                }
                myFriendsButton.classList.remove('pulse')
                friendsButtonToggle = !friendsButtonToggle
            })
            break
    }
    
    row = document.createElement('div')
    row.classList.add('row')
    row.append(button)
    contentContainer.append(row)
    return button
}

const createSection = (name) => {
    divider = document.createElement('div')
    divider.classList.add('divider')
    
    section = document.createElement('div')
    section.classList.add('section')
    header = document.createElement('h5')
    header.append(document.createTextNode(name))
    description = document.createElement('p')
    descriptionText = descriptions.find(description => description.name === name).text
    description.append(descriptionText)
    section.append(header)
    section.append(description)

    contentContainer.append(divider)
    contentContainer.append(section)
}

const createTextInput = () => {
    row = createRow()
    inputArea = document.createElement('div')
    inputArea.classList.add('input-field')
    icon = document.createElement('i')
    icon.classList.add('material-icons', 'prefix')
    icon.append(document.createTextNode('mode_edit'))
    
    input = document.createElement('textarea')
    input.classList.add('materialize-textarea')
    input.id = 'textbox'
    input.addEventListener('input', (e) => {
        if (e.target.value.trim().length === 0) {
            customButton.classList.add('disabled')
            if (!customButtonPressed) customButton.classList.remove('pulse')
        } else {
            if (!customButtonPressed) customButton.classList.add('pulse')
            customButton.classList.remove('disabled')
        }
    })
    
    label = document.createElement('label')
    label.htmlFor = 'textbox'
    label.append(document.createTextNode('Text for Alert'))

    inputArea.append(icon)
    inputArea.append(input)
    inputArea.append(label)
    col.append(inputArea)
    contentContainer.append(row)
    return input
}

const checkInput = (textInput) => {
    if (textInput.value.trim().length === 0) {
        customButton.classList.add('disabled')
        if (!customButtonPressed) customButton.classList.remove('pulse')
    } else {
        if (!customButtonPressed) customButton.classList.add('pulse')
        customButton.classList.remove('disabled')
    }
}

const createDiv = () => {
    row = createRow()
    row.classList.add('center-align')
    div = document.createElement('div')
    div.classList.add('card-panel', 'waves-effect', elementColor, 'hoverable')
    div.append(document.createTextNode(`If you hover over me, do I not change?`))
    div.addEventListener('mouseover', (e) => changeBackgroundColor(e))
    div.addEventListener('mouseout', (e) => restoreBackgroundColor(e))
    div.addEventListener('click', (e) => clickBackgroundColor(e))
    col.append(div)
    contentContainer.append(row)
}

const createParagraph = (text) => {
    row = createRow()
    materialSwitch = document.createElement('div')
    materialSwitch.classList.add('switch')
    label = document.createElement('label')
    label.classList.add('left')
    checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = materialSwitch
    checkbox.addEventListener('change', (e) => materialSwitch = !materialSwitch)
    lever = document.createElement('span')
    lever.classList.add('lever')
    label.append(document.createTextNode('All Colors'))
    label.append(checkbox)
    label.append(lever)
    label.append(document.createTextNode('Material Colors'))
    materialSwitch.append(label)
    col.append(materialSwitch)
    paragraph = document.createElement('p')
    paragraph.classList.add(`${textColor}-text`, 'col', 'hoverable')
    paragraph.style.background = '#fafafa'
    paragraph.style.borderRadius = '5px'
    paragraph.style.padding = '1.5rem'
    paragraph.append(document.createTextNode(text))
    paragraph.addEventListener('click', (e) => changeTextColor(e))
    col.append(paragraph)
    
    contentContainer.append(row)
}

const changeBackgroundColor = (e) => {
    e.target.classList.remove(elementColor)
    divTempColor = randomColor()
    e.target.classList.add(divTempColor)
}

const restoreBackgroundColor = (e) => {
    e.target.classList.remove(divTempColor)
    e.target.classList.add(elementColor)
}

const clickBackgroundColor = (e) => {
    e.target.classList.remove(elementColor)
    e.target.classList.remove(divTempColor)
    divTempColor = randomColor()
    e.target.classList.add(divTempColor)
}

const changeTextColor = (e) => {
    if (materialSwitch) {
        e.target.classList.remove(`${textColor}-text`)
        textColor = randomColor()
        e.target.classList.add(`${textColor}-text`)
    } else {
        e.target.classList.remove(`${textColor}-text`)
        e.target.style.color = randomAlphaColor()
    }
}

const randomAlphaColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const a = Math.random()
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

const createNameDiv = () => {
    row = createRow()
    nameButton = createButton('chat', 'name')
    nameButton.classList.add('col')
    nameDiv = document.createElement('div')
    nameDiv.classList.add('hoverable')
    nameDiv.style.background = '#fafafa'
    nameDiv.style.borderRadius = '5px'
    nameDiv.style.padding = '1.5rem'
    nameDiv.style.marginLeft = '68px'
    nameDiv.style.minHeight = '56px'
    row.append(nameDiv)
    return nameButton
}

createFriendsList = () => {
    row = createRow()
    friendsButton = createButton('people', 'friends')
    friendsButton.classList.add('col')
    return friendsButton
}