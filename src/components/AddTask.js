import { useState } from 'react'
import DatePicker from 'react-datepicker'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text || !day || !time) {
            alert('No field can be empty')
            return
        }
        var e = new Date()
        var c = new Date(day)
        if (!c.getTime()) {
            alert('Invalid date')
            return
        }
        if (c.getTime() < e.getTime()) {
            alert('Scheduled date cannot be before present date')
            return
        }
        onAdd({ text, day, time, reminder })

        setText('')
        setDay('')
        setTime('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day (MM/DD/YYYY)</label>
                <input
                    type='text'
                    placeholder='Add Day'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input
                    type='text'
                    placeholder='Add Time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
