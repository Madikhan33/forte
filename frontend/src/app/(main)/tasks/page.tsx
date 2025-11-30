'use client'

import { useState } from 'react'
import KanbanBoard from '@/components/KanbanBoard'
import CreateTaskModal from '@/components/CreateTaskModal'
import TaskDetailModal from '@/components/TaskDetailModal'
import PageHeader from '@/components/PageHeader'
import { Plus } from 'lucide-react'
import { BackendTask } from '@/types'

export default function TasksPage() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [selectedTask, setSelectedTask] = useState<BackendTask | null>(null)
    const [refreshKey, setRefreshKey] = useState(0)
    const [defaultStatus, setDefaultStatus] = useState<'todo' | 'in_progress' | 'done'>('todo')

    const handleTaskCreated = () => {
        setRefreshKey(prev => prev + 1) // Trigger refresh
    }

    const handleCreateFromColumn = (status: string) => {
        setDefaultStatus(status as any)
        setIsCreateModalOpen(true)
    }

    return (
        <div className="h-full flex flex-col">
            <div className="p-8 pb-0">
                <PageHeader
                    title="Tasks Board"
                    description="Manage and track your tasks using drag-and-drop Kanban board"
                    action={
                        <button
                            onClick={() => {
                                setDefaultStatus('todo')
                                setIsCreateModalOpen(true)
                            }}
                            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors text-sm font-medium"
                        >
                            <Plus className="w-4 h-4" />
                            New Task
                        </button>
                    }
                />
            </div>
            <div className="flex-1 overflow-hidden">
                <KanbanBoard
                    key={refreshKey}
                    onCreateTask={handleCreateFromColumn}
                    onTaskClick={setSelectedTask}
                    onlyMyTasks={true}
                />
            </div>

            <CreateTaskModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onTaskCreated={handleTaskCreated}
                defaultStatus={defaultStatus}
            />

            <TaskDetailModal
                task={selectedTask}
                onClose={() => setSelectedTask(null)}
            />
        </div>
    )
}
