import React from 'react';

const Option = ({ option }) => {
    return (
        <div>
            <input type="radio" name="radio-4" className="radio radio-accent bg-slate-300 px-4 py-1  rounded radio-lg radio-md radio-sm hover:text-white cursor-pointer box-border" checked />{option};
        </div>
    );
};

export default Option;