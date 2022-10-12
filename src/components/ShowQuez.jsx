import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Option from './Option';
import { DataContext } from './Root';

const ShowQuez = ({ data, Answer }) => {
    const { question, options, id, correctAnswer } = data;
    console.log(data);
    const datas = useContext(DataContext)

    const [answer, setanswer] = useState([]);

    const checkhandler = (answer) => {
        // console.log(answer, correctAnswer);
        let newans = []
        console.log(answer, correctAnswer);
        const answers = datas.find(opt => opt.correctAnswer === datas.correctAnswer);
        if (answers) {
            datas.correctAnswer = answers.correctAnswer;
            newans = [...datas, answer]
            toast.success('The Answer is Correct', { autoClose: 500 })
        }
        else {
            const rest = datas.filter(opt => opt.correctAnswer !== datas.correctAnswer)
            rest.correctAnswer = !correctAnswer;
            newans = [...rest, answers]
            console.log('The answer is wrong');
            toast.error('The Answer is Wrong', { autoClose: 500 })
        }
        setanswer(newans);
    }
    return (
        <div className='bg-slate-300 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md'>
            <div className='bg-gray-500 md:3/4 sm:w-full rounded-md lg:p-5 md:p-3 sm:p-2 my-4 mx-auto relative'>
                <p className='bg-gray-200 md:w-3/4 sm:w-full rounded-md md:p-3 sm:p-2 p-2 my-4 mx-auto relative'>{question}</p>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-3'>
                {
                    options.map(option => <Option key={option.correctAnswer} option={option} checkhandler={() => checkhandler(Answer)}></Option>)
                }
            </div>
        </div>
    );
};

export default ShowQuez;