import React from 'react';

function Location():JSX.Element {
    return (
        <div className='h-80 xl:h-96'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.97833095939!2d-76.85514402483125!3d40.276231564179824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c1399564d3df%3A0x4e841d4cd8de396f!2sYum%20Pizza!5e0!3m2!1suk!2sua!4v1696267349512!5m2!1suk!2sua" className='border-0 w-full h-full' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Location;