import { z } from 'zod'

export const zTaskData = z.object({
    id: z.union([z.number(), z.string().uuid()]),
    text: z.string()
})

export type TaskData = z.infer<typeof zTaskData>

export class Task implements TaskData {
    id: TaskData['id']
    text: TaskData['text']

    constructor(text?: TaskData['text'], id?: TaskData['id']) {
        if (id == null || typeof id === 'number') id = crypto.randomUUID()

        this.id = id
        this.text = text ?? ''
    }

    serialize(): TaskData {
        return {
            id: this.id,
            text: this.text
        }
    }

    static unserialize(data: TaskData): Task {
        const task = new Task(data.text)

        return task
    }
}
