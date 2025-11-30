'use client'

import { X, Clock } from 'lucide-react'
import { Task, BackendTask } from '@/types'

interface TaskDetailModalProps {
    task: Task | BackendTask | null
    onClose: () => void
}

const tagColors: Record<string, string> = {
    'Frontend': 'bg-zinc-100 text-zinc-700',
    'Backend': 'bg-zinc-200 text-zinc-800',
    'UI': 'bg-zinc-100 text-zinc-600',
}

const complexityColors: Record<string, string> = {
    'Low': 'bg-green-100 text-green-700',
    'Medium': 'bg-yellow-100 text-yellow-700',
    'High': 'bg-red-100 text-red-700',
}

export default function TaskDetailModal({ task, onClose }: TaskDetailModalProps) {
    if (!task) return null

    // Helper to get task properties regardless of type
    const getAssignee = () => {
        if ('assignee' in task) return task.assignee
        if ('assignments' in task && task.assignments.length > 0) {
            return task.assignments.map(a => a.user?.username).join(', ')
        }
        return 'Unassigned'
    }

    const getComplexity = () => {
        if ('complexity' in task) return task.complexity
        // Map priority to complexity for BackendTask if needed, or just use priority
        return task.priority ? task.priority.charAt(0).toUpperCase() + task.priority.slice(1) : 'Medium'
    }

    const getTag = () => {
        if ('tag' in task) return task.tag
        return 'Task' // Default tag for BackendTask
    }

    const getDescription = () => {
        if ('description' in task && task.description) return task.description
        return task.title // Fallback
    }

    const assignee = getAssignee()
    const complexity = getComplexity()
    const tag = getTag()
    const description = getDescription()

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-200 sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-semibold text-black">Task Details</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-zinc-100 rounded transition-colors"
                    >
                        <X className="w-5 h-5 text-zinc-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Title & Status */}
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`px-2.5 py-1 rounded text-xs font-medium ${tagColors[tag] || 'bg-zinc-100 text-zinc-600'}`}>
                                {tag}
                            </span>
                            <span className="text-xs font-medium px-2.5 py-1 rounded bg-zinc-100 text-zinc-600">
                                {task.status}
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold text-black">{task.title}</h1>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                        <div>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Assignee</span>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium">
                                    {assignee[0]?.toUpperCase()}
                                </div>
                                <span className="text-sm font-medium text-black">{assignee}</span>
                            </div>
                        </div>

                        <div>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Priority</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className={`text-sm font-medium px-2 py-0.5 rounded capitalize ${('priority' in task && task.priority === 'urgent') ? 'bg-red-100 text-red-700' :
                                        ('priority' in task && task.priority === 'high') ? 'bg-orange-100 text-orange-700' :
                                            ('priority' in task && task.priority === 'medium') ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-green-100 text-green-700'
                                    }`}>
                                    {('priority' in task && task.priority) ? task.priority : 'Medium'}
                                </span>
                            </div>
                        </div>

                        <div>
                            <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Complexity</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className={`text-sm font-medium px-2 py-0.5 rounded ${complexityColors[complexity] || 'bg-zinc-100 text-zinc-600'}`}>
                                    {task.complexity_score ? `${task.complexity_score}/10` : complexity}
                                </span>
                            </div>
                        </div>

                        {task.estimated_hours && (
                            <div>
                                <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Estimated Time</span>
                                <div className="flex items-center gap-2 mt-1 text-sm font-medium text-black">
                                    <Clock className="w-4 h-4 text-zinc-400" />
                                    {task.estimated_hours} hours
                                </div>
                            </div>
                        )}

                        {('due_date' in task && task.due_date) && (
                            <div>
                                <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Due Date</span>
                                <div className="flex items-center gap-2 mt-1 text-sm font-medium text-black">
                                    <Clock className="w-4 h-4 text-zinc-400" />
                                    {new Date(task.due_date!).toLocaleDateString()}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="text-sm font-semibold text-black mb-2">Description</h3>
                        <div className="text-zinc-600 text-sm leading-relaxed whitespace-pre-wrap">
                            {description}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-zinc-200 bg-zinc-50 rounded-b-lg">
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
