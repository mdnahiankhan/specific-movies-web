import React from 'react';
import { toast } from 'react-toastify';

const Option = ({ option, data }) => {
    const usehandler = (data) => {
        const { correctAnswer } = data;
        if (option === correctAnswer) {
            toast.success('The Answer is Correct', { autoClose: 500 })
        }
        else {
            toast.error('The Answer is Wrong', { autoClose: 500 })
        }
    }
    return (
        <div>
            <input type="radio" name="radio-4" className="radio radio-accent bg-slate-300 px-4 py-1  rounded hover:bg-green-300 hover:text-white ease-in duration-300 cursor-pointer " onClick={() => usehandler(data)} checked />{option}
        </div>
    );
};

export default Option;