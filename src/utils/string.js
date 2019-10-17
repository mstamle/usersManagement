const getFirstLetter = (string) => {
    return string.trim() !=='' ? string.trim()[0] : ''
}

export const getUserInitials = (firstName, lastName) => {
    return `${getFirstLetter(firstName)}${getFirstLetter(lastName)}`
}