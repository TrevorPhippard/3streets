// AnswerInput.tsx
import React from 'react';
import { useMainStore } from '@/store';
import { AnswersListProps } from "@/app/_types"


// 
// 


function parseStringToArray(inputString: string, index: number) {
    // Split the input string by commas to get individual answer parts
    const parts = inputString.split(',');

    // Map through each part to extract the value
    const resultArray = parts.map(part => {
        // Split each part by the last dot to isolate the value
        const value = part.split('.').slice(-1)[0].split(':')[1];
        return value; // Return the value (A, B, C, D, etc.)
    });

    return resultArray[index];
}


const AnswerInput = function ({ field, index, register, errors, remove }: AnswersListProps) {
    const errorForField = errors?.answer?.[index]?.text;
    const s = useMainStore((state) => state.slideSelect)
    const qd = useMainStore((state) => state.quizData)
    return (
        <div className="flex">
            <div className="p-2 h-full flex">
                <p className="text-center">{index + 1})</p>
            </div>
            <div className="w-full">
                {qd?.Question ? parseStringToArray(qd.Question[s]?.answer ?? "", index) : null}
                <input
                    {...register(`answer.${index}.text`)}
                    placeholder="Enter a text.."
                    defaultValue={field?.text ?? ""}
                    className="border p-2 w-full border-gray-300"
                />
                <p className="text-red-500">{errorForField?.message ?? <>&nbsp;</>}</p>
            </div>
            <div className="h-full flex mx-2">
                <button
                    type="button"
                    className="custom-button"
                    onClick={() => remove(index)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default AnswerInput;