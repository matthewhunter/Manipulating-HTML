const randomColor = () => colors[Math.floor(Math.random() * colors.length)]
const randomGreeting = () => greetings[Math.floor(Math.random() * greetings.length)]

const createDocument = () => {
    container = $('<div/>')
    container.addClass('container')
    row = $('<div/>')
    row.addClass('row center-align')
    title = $(`<h2>${document.title}</h2>`)
    link = $('<a/>')
    link.append(document.createTextNode('Switch to JavaScript'))
    link.attr('href', '../js/index.html')
    link.attr('title', 'Switch to JavaScript')
    link.addClass(`waves-effect waves-light btn-large hoverable ${randomColor()}`)
    link.css('margin-bottom', '1rem')
    icon = $('<i>swap_horizontal_circle</>')
    icon.addClass('material-icons left')
    link.append(icon)
    row.append(title)
    row.append(link)
    container.append(row)
    $('body').append(container)
    return container
}

const createRow = () => {
    row = $('<div></div>')
    row.addClass('row')
    col = $('<div></div>')
    col.addClass('col s12')
    row.append(col)
    return row
}

const createButton = (i, text) => {
    button = $('<a/>')
    button.addClass(`btn-floating pulse btn-large hoverable ${randomColor()}`)
    icon = $('<i></i>')
    icon.addClass('material-icons')
    icon.append(document.createTextNode(i))
    button.append(icon)
    switch (text) {
        case 'text':
            button.click( () =>  {
                M.toast({html: textInput.val(), classes: `rounded ${randomColor()}`})
                customButton.removeClass('pulse')
                customButtonPressed = true
            })
            break
        case 'greeting':
            button.click( () =>  {
                M.toast({html: `${randomGreeting()}!`, classes: `rounded ${randomColor()}`})
                basicButton.removeClass('pulse')
            })
            break
        case 'name':
            button.click( () => {
                span = $('<span/>')
                span.append(document.createTextNode(`Matt${'\xa0'}Hunter `))
                nameDiv.append(span)
                myNameButton.removeClass('pulse')
            })
            break
        case 'friends':
            button.click( () => {
                if (!friendsButtonToggle) {
                    div = $('<div/>')
                    div.addClass('hoverable')
                    div.css({'margin-left': '68px', 'min-height': '56px'})
                    div.id = 'friends-list'
                    list = $('<ul/>')
                    list.addClass('collection with-header')
                    header = $('<li/>')
                    header.addClass('collection-header')
                    title = $('<h5/>')
                    title.append(document.createTextNode('Friends'))
                    header.append(title)
                    list.append(header)
                    div.append(list)
                    for (friend in friends) {
                        const listItem = $('<a/>')
                        listItem.href = '#!'
                        listItem.addClass('collection-item')
                        listItem.append(document.createTextNode(friends[friend]))
                        list.append(listItem)
                    }
                    row.append(div)
                    
                } else {
                    list = document.getElementById('friends-list').remove()
                }
                myFriendsButton.removeClass('pulse')
                friendsButtonToggle = !friendsButtonToggle
            })
            break
    }
    
    row = $('<div/>')
    row.addClass('row')
    row.append(button)
    contentContainer.append(row)
    return button
}

const createSection = (name) => {
    divider = $('<div/>')
    divider.addClass('divider')
    
    section = $('<div/>')
    section.addClass('section')
    header = $('<h5/>')
    header.append(document.createTextNode(name))
    description = $('<p/>')
    descriptionText = descriptions.find(description => description.name === name).text
    description.append(descriptionText)
    section.append(header)
    section.append(description)

    contentContainer.append(divider)
    contentContainer.append(section)
}

const createTextInput = () => {
    row = createRow()
    inputArea = $('<div/>')
    inputArea.addClass('input-field')
    icon = $('<i>mode_edit<i/>')
    icon.addClass('material-icons prefix')
    
    input = $('<textarea/>')
    input.addClass('materialize-textarea')
    input.id = 'textbox'
    input.on('input', (e) => {
        console.log(textInput.val().length)
        if ($(e.target).val().length === 0) {
            customButton.addClass('disabled')
            if (!customButtonPressed) customButton.removeClass('pulse')
        } else {
            if (!customButtonPressed) customButton.addClass('pulse')
            customButton.removeClass('disabled')
        }
    })
    
    label = $('<label/>')
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
    console.log(textInput.val().length)
    if (textInput.val().length === 0) {
        customButton.addClass('disabled')
        if (!customButtonPressed) customButton.removeClass('pulse')
    } else {
        if (!customButtonPressed) customButton.addClass('pulse')
        customButton.removeClass('disabled')
    }
}

const createDiv = () => {
    row = createRow()
    row.addClass('center-align')
    div = $('<div/>')
    div.addClass(`card-panel waves-effect ${elementColor} hoverable`)
    div.append(document.createTextNode(`If you hover over me, do I not change?`))
    div.mouseover( (event) => changeBackgroundColor(event))
    div.mouseout( (event) => restoreBackgroundColor(event))
    col.append(div)
    contentContainer.append(row)
}

const createParagraph = (text) => {
    row = createRow()
    materialSwitch = $('<div/>')
    materialSwitch.addClass('switch')
    label = $('<label/>')
    label.addClass('left')
    checkbox = $('<input/>')
    checkbox.attr('type', 'checkbox')
    checkbox.attr('checked', true)
    checkbox.change( () => materialSwitch = !materialSwitch)
    lever = $('<span/>')
    lever.addClass('lever')
    label.append(document.createTextNode('All Colors'))
    label.append(checkbox)
    label.append(lever)
    label.append(document.createTextNode('Material Colors'))
    materialSwitch.append(label)
    col.append(materialSwitch)
    paragraph = $('<p/>')
    paragraph.addClass(`${textColor}-text col hoverable`)
    paragraph.css({'background':'#fafafa', 'borderRadius': '5px', 'padding': '1.5rem'})
    paragraph.append(document.createTextNode(text))
    paragraph.click( (event) => changeTextColor(event))
    col.append(paragraph)
    
    contentContainer.append(row)
}

const changeBackgroundColor = (e) => {
    $(e.target).removeClass(elementColor)
    divTempColor = randomColor()
    $(e.target).addClass(divTempColor)
}

const restoreBackgroundColor = (e) => {
    $(e.target).removeClass(divTempColor)
    $(e.target).addClass(elementColor)
}

const changeTextColor = (e) => {
    if (materialSwitch) {
        $(e.target).removeClass(`${textColor}-text`)
        textColor = randomColor()
        $(e.target).addClass(`${textColor}-text`)
    } else {
        $(e.target).removeClass(`${textColor}-text`)
        $(e.target).css('color',randomAlphaColor())
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
    nameButton.addClass('col')
    nameDiv = $('<div/>')
    nameDiv.addClass('hoverable')
    nameDiv.css({'background': '#fafafa', 'borderRadius': '5px', 'padding': '1.5rem', 'marginLeft': '68px', 'minHeight': '56px'})
    row.append(nameDiv)
    return nameButton
}

createFriendsList = () => {
    row = createRow()
    friendsButton = createButton('people', 'friends')
    friendsButton.addClass('col')
    return friendsButton
}