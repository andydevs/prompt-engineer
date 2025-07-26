export enum ElementType {
    Text = 'text',
    Computed = 'computed',
    Formatted = 'formatted'
}

export interface PromptElement {
    type: ElementType
}

export interface Text extends PromptElement {
    type: ElementType.Text,
    text: string
}

export enum ComputedValue {
    User = 'user',
    Host = 'host',
    WorkingDirectory = 'workingdirectory',
    Date = 'date',
    Time = 'time',
    PromptSymbol = 'promptsymbol'
}

function computeExample(value:ComputedValue): string {
    switch(value) {
        case ComputedValue.User:
            return 'andy'
        case ComputedValue.Host:
            return 'supercomputer'
        case ComputedValue.WorkingDirectory:
            return '~/Documents/my-project'
        case ComputedValue.Date:
            return '12-Jun'
        case ComputedValue.Time:
            return '4:23 AM'
        case ComputedValue.PromptSymbol:
            return '$'
    }
}


function computePS1(value:ComputedValue): string {
    switch(value) {
        case ComputedValue.User:
            return '\\u'
        case ComputedValue.Host:
            return '\\h'
        case ComputedValue.WorkingDirectory:
            return '\\w'
        case ComputedValue.Date:
            return "$(date +\'%d-%mmm\')"
        case ComputedValue.Time:
            return "$(date +\'%I:%M %A\')"
        case ComputedValue.PromptSymbol:
            return '\\$'
    }
}

export interface Computed extends PromptElement {
    type: ElementType.Computed,
    value: ComputedValue
}

export interface Formatted extends PromptElement {
    type: ElementType.Formatted,
    subtree: PromptElement[]
}


export function isTextElement(element: PromptElement): element is Text {
    return element.type == ElementType.Text
}

export function isComputedElement(element: PromptElement): element is Computed {
    return element.type == ElementType.Computed
}

export function isFormattedElement(element: PromptElement): element is Formatted {
    return element.type == ElementType.Formatted
}

export function promptExample(p: PromptElement): string {
    if (isTextElement(p)) {
        return p.text
    }
    else if (isComputedElement(p)) {
        return computeExample(p.value)
    }
    else if (isFormattedElement(p)) {
        return p.subtree.map(promptExample).join('')
    }
    else {
        return p.type
    }
}


export function promptPS1(p: PromptElement): string {
    if (isTextElement(p)) {
        return p.text
    }
    else if (isComputedElement(p)) {
        return computePS1(p.value)
    }
    else if (isFormattedElement(p)) {
        return p.subtree.map(promptPS1).join('')
    }
    else {
        return "\\?"
    }
}