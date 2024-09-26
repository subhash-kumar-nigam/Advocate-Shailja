import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Head = ({pageheading}) => {
    return (
        <div>
            <div className="common-head">
                <div className="py-5 text-center">
                    <div className="py-5">
                        <h3 className='fs-1 text-light'>{pageheading}</h3>                 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Head;
