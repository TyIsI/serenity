export const twPeerChecked = (...classes: Array<string | null | undefined>): string[] => {
    classes = classes.length === 1 && typeof classes[0] === 'string' && classes[0].includes(' ') ? [...classes[0].split(' '), ...classes.slice(1)] : classes

    return classes.map((className) =>
        typeof className === 'string' && className !== '' && className.startsWith('peer-checked:') ? className.substring(13) : `peer-checked:${className}`
    )
}

export const styles = {
    offStyle: 'bg-grey-600',
    onStyle: 'bg-green-400',
    noStyle: 'bg-brown',
    freedomOnStyle: 'bg-brown',
    freedomOffStyle: 'bg-maroon',
    federationOnStyle: 'bg-cornflowerblue',
    federationOffStyle: 'bg-navy'
}
