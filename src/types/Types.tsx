export type SingleTaskProps = {
    id: string
    title: string
    state?: string
}

export type TaskListProps = {
    args: { task: { id: string, title: string, state?: string}},
    task: SingleTaskProps,
    onArchiveTask: boolean
    onPinTask: boolean
}