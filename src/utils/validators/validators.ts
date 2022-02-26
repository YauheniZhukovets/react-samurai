
export const required = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => {

    return (value: string) => {
        if (value && value.length > maxLength) return `Max length is ${maxLength} symbol`
        return undefined
    }
}

