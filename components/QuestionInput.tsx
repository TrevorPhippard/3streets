// QuestionInput.tsx
import React from 'react';
import { useMainStore } from '@/store';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
function QuestionInput({ register, errors }) {
    const s = useMainStore((state) => state.slideSelect)
    const qd = useMainStore((state) => state.quizData)

    return (<div>
        <label htmlFor="question">Question: {qd.Question?.[s]?.question || 'No question available'}</label>
        <textarea
            className="border-2 w-full p-1"
            placeholder="enter text here"
            value=''
            {...register('question', {
                required: {
                    value: true,
                    message: 'Question required'
                }
            })}
        />
        <p className="text-red-500">{errors.question?.message}</p>
    </div>)
};

export default QuestionInput;